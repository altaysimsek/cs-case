import './styles/style.scss';
import Header from './components/shared/Header';
import Title from './components/shared/Title';
import Breadcrumbs from './components/shared/Breadcrumbs';
import Categories from './components/Categories';
import List from './components/List';
function App() {
  return (
    <>
      <Header />
      <Title title="Çiçeksepeti H1" />
      <Breadcrumbs />
      <Categories />
      <List />
      <div style={{ borderTop: '1px solid #EDF1F2' }}></div>
    </>
  );
}

export default App;
