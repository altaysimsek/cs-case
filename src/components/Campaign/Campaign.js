import CampaignImage from '../../assets/img/campaign-01.png';

const Campaign = () => {
  return (
    <div className="csCampaign">
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

export default Campaign;
