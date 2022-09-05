/* eslint-disable no-undef */
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

  const removeFromBucket = () => {
    const newBucket = [...bucket];
    const index = newBucket.findIndex((item) => item.id === detail.id);
    if (index !== -1) {
      newBucket[index].count--;
      if (newBucket[index].count === 0) {
        newBucket.splice(index, 1);
      }
    }
    setBucket(newBucket);
  };

  const calculateCount = () => {
    const index = bucket.findIndex((item) => item.id === detail.id);
    if (index === -1) {
      return 0;
    }
    return bucket[index].count;
  };

  return (
    <div className="csCard">
      <img src={`/items/${detail.image}`} alt="example_Item"></img>
      <div className="csCard__status">
        <span className="csCard__status__title">{detail.name}</span>
        {detail.freePackage && <span className="csCard__status__tag">Ücretsiz Teslimat</span>}
        <span className="csCard__status__price">{parseFloat(detail.price)} TL</span>
      </div>
      {calculateCount() > 0 ? (
        <div className="csCard__buttons">
          <button type="button" className="csCard__buttons__plus" onClick={addToBucket}>
            +
          </button>
          <span>{calculateCount()}</span>
          <button type="button" onClick={removeFromBucket} className="csCard__buttons__minus">
            -
          </button>
        </div>
      ) : (
        <button type="button" onClick={addToBucket} className="csCard__button">
          {' '}
          Sepete Ekle
        </button>
      )}
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
