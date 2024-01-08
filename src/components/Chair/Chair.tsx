import { staticPath } from '../../lib/$path';
import styles from './Chair.module.css';

export const Chair = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={staticPath.image.chair_jpg} />
      <div className={styles.content}>
        <div>モチベーション</div>
        <div>タッチのみ</div>
        <div>モニター</div>
      </div>
    </div>
  );
};
