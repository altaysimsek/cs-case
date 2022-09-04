/* eslint-disable no-unused-vars */
import { useContext } from 'react';

import { BucketContext } from '../../contexts/BucketContext';
import CategoriesIcon from '../../assets/icon/menu-icon.svg';
import data from '../../constants/products.json';

const Categories = () => {
  const { activeCategory, setActiveCategory, setActiveSearch } = useContext(BucketContext);

  const handleClick = (category) => {
    setActiveCategory(category);
    setActiveSearch('');
  };

  const renderCategories = (item) => {
    if (activeCategory.id === item.id) {
      return (
        <div
          className="csCategories__category__item--active"
          onClick={() => handleClick(item)}
          key={item.id}>
          {item.name}
        </div>
      );
    } else {
      return (
        <div
          className="csCategories__category__item"
          onClick={() => handleClick(item)}
          key={item.id}>
          {item.name}
        </div>
      );
    }
  };

  return (
    <div className="csCategories container">
      <div className="csCategories__categoryTitleContainer">
        <img className="csCategories__categoryTitleContainer__icon" src={CategoriesIcon} />
        <span className="csCategories__categoryTitleContainer__title">Kategoriler</span>
      </div>
      <div className="csCategories__category">
        {/* TODO: make improvement on render performance */}
        {data.categories.map((item) => renderCategories(item))}
      </div>
    </div>
  );
};

export default Categories;
