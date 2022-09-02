import SearchIcon from '../../assets/icon/search-icon.svg';

const Search = () => {
  return (
    <div className="csHeader__search">
      <img src={SearchIcon} width="20px" height="20px" />
      <input placeholder="Ürün ara" className="csHeader__search__input" type="text" />
      <button type="button" className="csHeader__search__button">
        Ara
      </button>
    </div>
  );
};

export default Search;
