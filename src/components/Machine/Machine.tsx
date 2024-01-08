import { staticPath } from '../../lib/$path';
import styles from './Machine.module.css';

export const Machine = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={staticPath.image.machine_png} />
      <div className={styles.content}>
        <div className={styles.item}>
          <img className={styles.graph} src={staticPath.image.graph_png} />
          <div className={styles.text}>
            高齢者満足度<span className={styles.percent}>79.7%</span>の大人気マシン！
          </div>
        </div>
      </div>
    </div>
  );
};
