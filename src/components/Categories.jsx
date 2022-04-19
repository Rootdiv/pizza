import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => (
  <div className="categories">
    <ul>
      <li className={activeCategory === null ? 'active' : null} onClick={() => onClickCategory(null)}>
        Все
      </li>
      {items.map((name, index) => (
        <li
          className={activeCategory === index ? 'active' : null}
          onClick={() => onClickCategory(index)}
          key={`${name}_${index}`}>
          {name}
        </li>
      ))}
    </ul>
  </div>
));

Categories.propTypes = {
  //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

Categories.displayName = 'Categories';

export default Categories;

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//     test: 123,
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index,
//     });
//     //this.state.activeItem = index;
//     //this.forceUpdate();
//   };

//   render() {
//     const { items } = this.props;
//     console.log(this.state);
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : null}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
