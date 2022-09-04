import { useContext } from 'react';
import { BucketContext } from '../../../contexts/BucketContext';
import CiceksepetiLogo from '../../../assets/svg/ciceksepeti-logo.svg';
import BucketIcon from '../../../assets/icon/bucket-icon.svg';

import Search from '../../Search';
const Header = () => {
  const { bucket } = useContext(BucketContext);

  const calculateNumberOfProducts = () => {
    let count = 0;
    bucket.forEach((item) => {
      count += item.count;
    });
    return count;
  };

  const calculatePriceOfBucket = () => {
    let price = 0;
    bucket.forEach((item) => {
      price += Math.ceil(item.count * item.price);
    });
    return price;
  };

  const calculatePercent = () => {
    const price = calculatePriceOfBucket();
    const percent = Math.floor((price * 100) / 500);
    return percent;
  };

  const calculeteLeftPrice = () => {
    const price = calculatePriceOfBucket();
    const leftPrice = 500 - price;
    return leftPrice;
  };

  return (
    <header className="csHeader container">
      <img src={CiceksepetiLogo} className="csHeader__logo"></img>
      <Search />
      <button type="button" className="csHeader__bucket">
        <div className="csHeader__bucket__count">{calculateNumberOfProducts()}</div>
        <div className="csHeader__bucket__progresscontainer">
          <span className="csHeader__bucket__progresscontainer__text">
            {calculatePercent() < 100 ? (
              <>
                <span className="csHeader__bucket__progresscontainer__text--active">
                  {calculeteLeftPrice()} TL
                </span>
                <span> ürün daha ekleyin kargo bedava!</span>
              </>
            ) : (
              'Kargo bedava'
            )}
          </span>
          {calculatePercent() < 100 && (
            <span className="csHeader__bucket__progresscontainer__progressbar">
              <span
                className="csHeader__bucket__progresscontainer__progressbar__progress"
                style={{ width: `${calculatePercent()}%` }}></span>
            </span>
          )}
        </div>
        <img src={BucketIcon} className="csHeader__bucket__icon" width="20px" height="20px"></img>
        Sepetim
      </button>
    </header>
  );
};

export default Header;
