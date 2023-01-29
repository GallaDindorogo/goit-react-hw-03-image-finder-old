import { RotatingLines } from 'react-loader-spinner';
import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.ContainerLoader}>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </div>
  );
};
