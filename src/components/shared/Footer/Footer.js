import QrImage from '../../../assets/qr.png';
import AppleDL from '../../../assets/apple.png';
import GoogleDL from '../../../assets/googleplay.png';
import Phones from '../../../assets/phones.png';
import CicekSepetiLogo from '../../../assets/svg/ciceksepeti-logo.svg';
import socialOne from '../../../assets/icon/social-1.svg';
import socialTwo from '../../../assets/icon/social-2.svg';
import socialThree from '../../../assets/icon/social-3.svg';
import socialFour from '../../../assets/icon/social-4.svg';
import socialFive from '../../../assets/icon/social-5.svg';

const Footer = () => {
  return (
    <footer className="csFooter container">
      <div className="csFooter__campaign">
        <img
          src={Phones}
          style={{ position: 'absolute', bottom: '0', left: '20%' }}
          alt="CS on IPhone and Android"></img>
        <div className="csFooter__campaign__status">
          <div className="csFooter__campaign__status__text">
            <img src={QrImage} style={{ marginRight: '20px' }}></img>
            <div className="csFooter__campaign__status__text__detail">
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Çiçek Sepeti Mobil Uygulamayı İndirin
              </span>
              <span>Mobil Uygulamayı QR Kod ile İndirin.</span>
            </div>
          </div>
          <div className="csFooter__campaign__status__download">
            <img src={GoogleDL} style={{ marginRight: '10px' }}></img>
            <img src={AppleDL}></img>
          </div>
        </div>
      </div>
      <div className="csFooter__navigation">
        <div className="csFooter__navigation__brand">
          <img src={CicekSepetiLogo} style={{ marginBottom: '20px' }} />
          <div className="csFooter__navigation__brand__socials">
            <img src={socialOne}></img>
            <img src={socialTwo}></img>
            <img src={socialThree}></img>
            <img src={socialFour}></img>
            <img src={socialFive}></img>
          </div>
          <span>
            CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı
            Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan
            ulaşabilirsiniz.
          </span>
        </div>
        <div className="csFooter__navigation__links">
          <div className="csFooter__navigation__links__list">
            <span>Faydalı Bilgiler</span>
            <ul>
              <li>Çiçek Bakımı</li>
              <li>Çiçek Eşliğinde Notlar</li>
              <li>Çiçek Anlamları</li>
              <li>Özel Günler</li>
              <li>Mevsimlere Göre Çiçekler</li>
              <li>Bonnyfood Saklama Koşulları</li>
              <li>Site Haritası</li>
            </ul>
          </div>
          <div className="csFooter__navigation__links__list">
            <span>Kurumsal</span>
            <ul>
              <li>Hakkımızda</li>
              <li>Kariyer</li>
              <li>Çiçeksepetinde Satış Yap</li>
              <li>Kurumsal Müşterilerimiz</li>
              <li>Basında Biz</li>
              <li>Reklamlarımız</li>
              <li>Kampanyalarımız</li>
            </ul>
          </div>
          <div className="csFooter__navigation__links__list">
            <span>İletişim</span>
            <ul>
              <li>Bize Ulaşın</li>
              <li>Sıkça Sorulan Sorular</li>
            </ul>
          </div>
          <div className="csFooter__navigation__links__list">
            <span>Gizlilik Sözleşmesi</span>
            <ul>
              <li>Mesafeli Satış Sözleşmesi</li>
              <li>Bilgi Toplumu Hizmetleri</li>
              <li>Gizlilik Sözleşmesi</li>
              <li>Ödeme Seçenekleri</li>
              <li>Hesap Bilgileri</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
