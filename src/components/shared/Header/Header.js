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

  return (
    <header className="csHeader container">
      <img src={CiceksepetiLogo} className="csHeader__logo"></img>
      <Search />
      <button type="button" className="csHeader__bucket">
        <div className="csHeader__bucket__count">{calculateNumberOfProducts()}</div>
        <div className="csHeader__bucket__progresscontainer">
          <span className="csHeader__bucket__progresscontainer__text">
            <span className="csHeader__bucket__progresscontainer__text--active">x TL</span> daha
            ekleyin kargo bedava
          </span>
          <span className="csHeader__bucket__progresscontainer__progressbar">
            <span className="csHeader__bucket__progresscontainer__progressbar__progress"></span>
          </span>
        </div>
        <img src={BucketIcon} className="csHeader__bucket__icon" width="20px" height="20px"></img>
        Sepetim
      </button>
    </header>
  );
};

export default Header;
