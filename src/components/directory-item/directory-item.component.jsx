import { Link } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  return (
    <Link className='directory-item-container' to={`shop/${category.title}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className='directory-item-body-container'>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};
export default DirectoryItem;
