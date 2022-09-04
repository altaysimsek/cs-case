/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BucketContext = createContext(null);

const BucketProvider = ({ children }) => {
  const [bucket, setBucket] = useState([]);
  const [activeCategory, setActiveCategory] = useState({ id: 9, name: 'Tüm Kategoriler' });

  return (
    <BucketContext.Provider value={{ bucket, setBucket, activeCategory, setActiveCategory }}>
      {children}
    </BucketContext.Provider>
  );
};

BucketProvider.PropTypes = {
  children: PropTypes.any
};

export default BucketProvider;
