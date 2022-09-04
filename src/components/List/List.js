import { useContext } from 'react';
import { BucketContext } from '../../contexts/BucketContext';
import HeaderIcon from '../../assets/icon/header-icon.svg';
import Card from '../Card';

import data from '../../constants/products.json';
const List = () => {
  const { activeSearch, activeCategory } = useContext(BucketContext);

  const renderCards = () => {
    //If the all category is selected, all products are listed.
    if (activeCategory.id === 9) {
      console.log(
        data.products
          .filter((item) => item.name.toLowerCase().includes(activeSearch))
          .map((item) => <Card key={item.id} detail={item} />)
      );
      return data.products
        .filter((item) => item.name.toLowerCase().includes(activeSearch))
        .map((item) => <Card key={item.id} detail={item} />);
    } else {
      //If a category is selected, only the products in that category are listed.
      console.log(
        data.products
          .filter((item) => item.name.toLowerCase().includes(activeSearch))
          .filter((item) =>
            item.category.map((category) => category.id).includes(activeCategory.id)
          )
          .map((item) => <Card key={item.id} detail={item} />)
      );
      return data.products
        .filter((item) => item.name.toLowerCase().includes(activeSearch))
        .filter((item) => item.category.map((category) => category.id).includes(activeCategory.id))
        .map((item) => <Card key={item.id} detail={item} />);
    }
  };

  return (
    <div className="csList container">
      <div className="csList__title">
        <img className="csList__title__icon" src={HeaderIcon}></img>
        <span>Tüm Kategoriler</span>
      </div>
      <div className="csList__list">{renderCards()}</div>
    </div>
  );
};

export default List;
