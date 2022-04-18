import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
//import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
// import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:2010/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={this.props.items} />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   items: state.pizzas.items,
//   filters: state.filters,
// });

// const mapDispatchToProps = dispatch => ({
//   setPizzas: items => dispatch(setPizzasAction(items)),
// });

// // const mapDispatchToProps = {
// //   //actions называется также как в компоненте
// //   setPizzas,
// // };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(
//   state => ({
//     items: state.pizzas.items,
//     filters: state.filters,
//   }),
//   dispatch => ({
//     setPizzas: items => dispatch(setPizzas(items)),
//   }),
// )(App);
