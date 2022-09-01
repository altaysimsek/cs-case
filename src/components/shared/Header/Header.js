import { ReactComponent as CiceksepetiLogo } from '../../../assets/svg/ciceksepeti-logo.svg';
import { ReactComponent as BucketIcon } from '../../../assets/icon/bucket-icon.svg';

const Header = () => {
  return (
    <header className="csHeader">
      <CiceksepetiLogo width="163px" height="100%" />
      Deneme
      <button type="button" className="csHeader__bucket">
        <BucketIcon className="csHeader__bucket__icon" width="20px" height="20px" />
        Sepetim
      </button>
    </header>
  );
};

export default Header;
