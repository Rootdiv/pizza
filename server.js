// импорт стандартных библиотек Node.js
const { readFileSync  } = require('fs');
const { createServer } = require('http');
const path = require('path');
// файл для базы данных
const DB_FILE = process.env.DB_FILE || path.resolve(__dirname, 'public/db.json');
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

function getPizzas(params = {}) {
  const pizzas = JSON.parse(readFileSync(DB_FILE) || '[]');
  let data = pizzas.pizzas;

  if (params.category) {
    data = data.filter(item => item.category === +params.category);
  }

  if (params._sort) {
    data = data.sort((a, b) => {
      if (params._sort === 'price') {
        return a.price > b.price ? -1 : 1;
      }
      if (params._sort === 'popular') {
        return a.popular > b.popular ? -1 : 1;
      }
      if (params._sort === 'name') {
        return a.name < b.name ? -1 : 1;
      }
      return data;
    });
  }
  return data;
}

// создаём HTTP сервер, переданная функция будет реагировать на все запросы к нему
module.exports = createServer(async (req, res) => {
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
    if (process.env.NODE_ENV !== 'test') {
      console.log(`Сервер запущен. Вы можете использовать его по адресу http://localhost:${PORT}`);
      console.log('Нажмите CTRL+C, чтобы остановить сервер');
    }
  })
  // ...и вызываем запуск сервера на указанном порту
  .listen(PORT);
