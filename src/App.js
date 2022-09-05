import './styles/style.scss';

//Components
import Header from './components/shared/Header';
import Title from './components/shared/Title';
import Breadcrumbs from './components/shared/Breadcrumbs';
import Categories from './components/Categories';
import List from './components/List';
import Campaign from './components/Campaign';
import Footer from './components/shared/Footer';

//Store
import BucketProvider from './contexts/BucketContext';
function App() {
  return (
    <BucketProvider>
      <Header />
      <Title title="Çiçeksepeti" />
      <Breadcrumbs />
      <Categories />
      <List />
      <section
        style={{
          borderTop: '1px solid #EDF1F2',
          paddingTop: 10,
          paddingBottom: 10,
          display: 'flex'
        }}
        className="container csCamp">
        <Campaign backgroundColor={'#FFEAE8'} />
        <Campaign backgroundColor={'#E8F1FF'} />
        <Campaign backgroundColor={'#E2F7E1'} />
      </section>
      <Footer />
    </BucketProvider>
  );
}

export default App;
