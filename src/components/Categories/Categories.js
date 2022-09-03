import CategoriesIcon from '../../assets/icon/menu-icon.svg';
const Categories = () => {
  return (
    <div className="csCategories container">
      <div className="csCategories__categoryTitleContainer">
        <img className="csCategories__categoryTitleContainer__icon" src={CategoriesIcon} />
        <span className="csCategories__categoryTitleContainer__title">Kategoriler</span>
      </div>
      <div className="csCategories__category">
        <div className="csCategories__category__item--active">Tüm Kategoriler</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
        <div className="csCategories__category__item">Elektronik</div>
      </div>
    </div>
  );
};

export default Categories;
