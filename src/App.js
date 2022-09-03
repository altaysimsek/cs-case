import './styles/style.scss';
import Header from './components/shared/Header';
import Title from './components/shared/Title';
import Breadcrumbs from './components/shared/Breadcrumbs';
import Categories from './components/Categories';
import List from './components/List';
import Campaign from './components/Campaign';
import Footer from './components/shared/Footer';
function App() {
  return (
    <>
      <Header />
      <Title title="Çiçeksepeti H1" />
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
        className="container">
        <Campaign />
        <Campaign />
        <Campaign />
      </section>
      <Footer />
    </>
  );
}

export default App;
