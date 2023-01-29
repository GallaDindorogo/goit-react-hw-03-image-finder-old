import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.scss';

export const ImageGalleryItem = ({
  src,
  alt,
  id,
  largeImageURL,
  openModal,
}) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => openModal(largeImageURL)}
    >
      <img
        src={src}
        alt={alt}
        key={id}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
