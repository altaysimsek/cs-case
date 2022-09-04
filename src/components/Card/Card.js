/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BucketContext } from '../../contexts/BucketContext';

const Card = ({ detail }) => {
  const { bucket, setBucket } = useContext(BucketContext);

  const addToBucket = () => {
    const newBucket = [...bucket];
    const index = newBucket.findIndex((item) => item.id === detail.id);
    if (index === -1) {
      newBucket.push({ ...detail, count: 1 });
    } else {
      newBucket[index].count++;
    }
    setBucket(newBucket);
  };

  return (
    <div className="csCard">
      <img src={detail.image} alt="example_Item"></img>
      <div className="csCard__status">
        <span className="csCard__status__title">{detail.name}</span>
        {detail.freePackage && <span className="csCard__status__tag">Ücretsiz Teslimat</span>}
        <span className="csCard__status__price">{parseFloat(detail.price)} TL</span>
      </div>
      <button type="button" onClick={addToBucket} className="csCard__button">
        {' '}
        Sepete Ekle
      </button>
    </div>
  );
};

Card.PropTypes = {
  detail: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Card;
