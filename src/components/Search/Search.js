import { useContext, useState } from 'react';
import { BucketContext } from '../../contexts/BucketContext';

import SearchIcon from '../../assets/icon/search-icon.svg';

const Search = () => {
  const { setActiveSearch } = useContext(BucketContext);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    //TODO: we can use debounce if we need to make an api call to the db
    if (search.length === 0) {
      setActiveSearch('');
      return;
    }
    if (search.length < 3) {
      alert('Arama için en az 3 karakter giriniz.');
      return;
    }
    setActiveSearch(search);
    setSearch('');
  };

  return (
    <div className="csHeader__search">
      <img src={SearchIcon} width="20px" height="20px" />
      <input
        onChange={handleSearch}
        value={search}
        onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
        placeholder="Ürün ara"
        className="csHeader__search__input"
        type="text"
      />
      <button onClick={handleSearchSubmit} type="button" className="csHeader__search__button">
        Ara
      </button>
    </div>
  );
};

export default Search;
