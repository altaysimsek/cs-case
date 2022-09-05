import CampaignImage from '../../assets/img/campaign-01.png';
import PropTypes from 'prop-types';

const Campaign = ({ backgroundColor }) => {
  return (
    <div className="csCampaign" style={{ backgroundColor }}>
      <img src={CampaignImage} className="csCampaign__image" alt="A man with motorcycle"></img>
      <div className="csCampaign__status">
        <span className="csCampaign__status__title">75 TL Üzerine Teslimat Ücreti Bizden</span>
        <a href="#" className="csCampaign__status__link">
          Detaylı Bilgi
        </a>
      </div>
    </div>
  );
};

Campaign.propTypes = {
  backgroundColor: PropTypes.string
};

export default Campaign;
