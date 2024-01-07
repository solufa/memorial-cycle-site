import { staticPath } from '../../lib/$path';
import styles from './Machine.module.css';

export const Machine = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={staticPath.image.machine_png} />
      <div className={styles.content}>
        <div className={styles.item}>漕いでいることを忘れるくらい楽しい！</div>
        <div className={styles.item}>
          <div>横浜リハビリセンターで大人気！</div>
          <img className={styles.graph} src={staticPath.image.graph_png} />
        </div>
      </div>
    </div>
  );
};
