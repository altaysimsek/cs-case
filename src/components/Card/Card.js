import ItemImage from '../../assets/img/items/item.png';
const Card = () => {
  return (
    <div className="csCard">
      <img src={ItemImage} alt="example_Item"></img>
      <div className="csCard__status">
        <span className="csCard__status__title">Gold Çizgili Vazoda 2 Dal Orkide Çiçeği</span>
        <span className="csCard__status__tag">Ücretsiz Teslimat</span>
        <span className="csCard__status__price">249,90 TL</span>
      </div>
      <button type="button" className="csCard__button">
        {' '}
        Sepete Ekle
      </button>
    </div>
  );
};

export default Card;
