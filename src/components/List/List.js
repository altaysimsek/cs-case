import HeaderIcon from '../../assets/icon/header-icon.svg';
import Card from '../Card';
const List = () => {
  return (
    <div className="csList container">
      <div className="csList__title">
        <img className="csList__title__icon" src={HeaderIcon}></img>
        <span>Tüm Kategoriler</span>
      </div>
      <div className="csList__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default List;
