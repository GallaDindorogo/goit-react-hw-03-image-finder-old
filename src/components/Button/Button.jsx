import PropTypes from 'prop-types';
import styles from './button.module.scss';

export const Button = ({ onloadMore }) => {
  return (
    <div className={styles.ButtonContainer} onClick={onloadMore}>
      <button type="button" className={styles.Button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};
