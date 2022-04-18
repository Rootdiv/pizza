import React from 'react';

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

const Categories = React.memo(({ items = [], onClickItem }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = index => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : null} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : null}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.displayName = 'Categories';

export default Categories;
