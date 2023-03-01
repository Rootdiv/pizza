// импорт стандартных библиотек Node.js
const { readFileSync } = require('fs');
const protocol = process.env.HTTP || 'http';
const { createServer } = require(protocol);
const path = require('path');

const options = {};
if (protocol === 'https') {
  const certDir = '/etc/nginx/acme.sh';
  options['key'] = readFileSync(`${certDir}/rootdiv.ru/privkey.pem`);
  options['cert'] = readFileSync(`${certDir}/rootdiv.ru/fullchain.pem`);
}

// файл для базы данных
const DB_FILE = process.env.DB_FILE || path.resolve(__dirname, 'db.json');
// номер порта, на котором будет запущен сервер
const PORT = process.env.PORT || 2010;
// префикс URI для всех методов приложения
const URI_PREFIX = '/pizzas';

class ApiError extends Error {
  constructor(statusCode, data) {
    super();
    this.statusCode = statusCode;
    this.data = data;
  }
}

const sortByAndSearch = (goods, params) => {
  let data = goods;

  if (params.search) {
    const search = params.search.trim().toLowerCase();
    data = goods.filter(item => item.title.toLowerCase().includes(search));
  }

  if (params.category) {
    data = data.filter(item => item.category === +params.category);
  }

  if (params.sortby) {
    data = data.sort((a, b) => {
      if (params.order === 'desc') {
        if (params.sortby === 'price') {
          return a.price > b.price ? -1 : 1;
        }
        if (params.sortby === 'rating') {
          return a.rating > b.rating ? -1 : 1;
        }
        if (params.sortby === 'title') {
          return a.title > b.title ? -1 : 1;
        }
      }
      if (params.order === 'asc') {
        if (params.sortby === 'price') {
          return a.price < b.price ? -1 : 1;
        }
        if (params.sortby === 'rating') {
          return a.rating < b.rating ? -1 : 1;
        }
        if (params.sortby === 'title') {
          return a.title < b.title ? -1 : 1;
        }
      }
      return data;
    });
  }
  return data;
};

const pagination = (goods, page = 1, count = 4) => {
  const end = count * page;
  const start = page === 1 ? 0 : end - count;

  const pages = Math.ceil(goods.length / count);

  return {
    pizzas: goods.slice(start, end),
    page,
    pages,
  };
};

const getPizzas = params => {
  const data = JSON.parse(readFileSync(DB_FILE) || '[]');
  const sortedData = sortByAndSearch(data.pizzas, params);
  return pagination(sortedData, +params.page, params.limit);
};

// создаём HTTP сервер, переданная функция будет реагировать на все запросы к нему
createServer(options, async (req, res) => {
  // req - объект с информацией о запросе, res - объект для управления отправляемым ответом

  // этот заголовок ответа указывает, что тело ответа будет в JSON формате
  res.setHeader('Content-Type', 'application/json');

  // CORS заголовки ответа для поддержки кросс-доменных запросов из браузера
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // запрос с методом OPTIONS может отправлять браузер автоматически для проверки CORS заголовков
  // в этом случае достаточно ответить с пустым телом и этими заголовками
  if (req.method === 'OPTIONS') {
    // end = закончить формировать ответ и отправить его клиенту
    res.end();
    return;
  }

  // если URI не начинается с нужного префикса - можем сразу отдать 404
  if (!req.url || !req.url.startsWith(URI_PREFIX)) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
  }

  let data = null;

  if (req.url.startsWith(URI_PREFIX)) {
    data = req.url.substring(URI_PREFIX.length).split('?');
  }

  const [uri, query] = data;
  const queryParams = {};
  // параметры могут отсутствовать вообще или иметь вид a=b&b=c
  // во втором случае наполняем объект queryParams { a: 'b', b: 'c' }
  if (query) {
    for (const piece of query.split('&')) {
      const [key, value] = piece.split('=');
      queryParams[key] = value ? decodeURIComponent(value) : '';
    }
  }

  try {
    // обрабатываем запрос и формируем тело ответа
    const body = await (async () => {
      if (uri === '' || uri === '/') {
        // /pizzas
        if (req.method === 'GET') return getPizzas(queryParams);
      }
      return null;
    })();
    res.end(JSON.stringify(body));
  } catch (err) {
    // обрабатываем сгенерированную нами же ошибку
    if (err instanceof ApiError) {
      res.writeHead(err.statusCode);
      res.end(JSON.stringify(err.data));
    } else {
      // если что-то пошло не так - пишем об этом в консоль и возвращаем 500 ошибку сервера
      res.statusCode = 500;
      res.end(JSON.stringify({ message: 'Server Error' }));
      console.error(err);
    }
  }
})
  // выводим инструкцию, как только сервер запустился...
  .on('listening', () => {
    if (protocol !== 'https') {
      console.log(`Сервер запущен. Вы можете использовать его по адресу http://localhost:${PORT}`);
      console.log('Нажмите CTRL+C, чтобы остановить сервер');
    }
  })
  // ...и вызываем запуск сервера на указанном порту
  .listen(PORT);
