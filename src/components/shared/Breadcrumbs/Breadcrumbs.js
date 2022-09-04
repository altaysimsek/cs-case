import { useContext } from 'react';
import { BucketContext } from '../../../contexts/BucketContext';
const Breadcrumbs = () => {
  const { activeCategory } = useContext(BucketContext);
  return (
    <div className="csBreadCrumb container">
      {/* TODO: Make reachable with link  */}
      CicekSepeti Market {' > '} Istanbul {' > '}
      <span className="csBreadCrumb__link--active">{activeCategory.name}</span>
    </div>
  );
};

export default Breadcrumbs;
