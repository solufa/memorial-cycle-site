import { staticPath } from '../../lib/$path';
import styles from './Chair.module.css';

export const Chair = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={staticPath.image.chair_jpg} />
      <div className={styles.content}>
        <div className={styles.text}>
          時速と距離メーターで
          <br />
          モチベーションが続く
        </div>
        <div className={styles.text}>
          操作はタッチ2か所のみ
          <br />
          迷わず一人で利用可能
        </div>
        <div className={styles.text}>
          施設職員の日常作業は
          <br />
          モニターのONOFFのみ
        </div>
        <div className={styles.text}>
          ネットが遅い施設でも
          <br />
          映像がスムーズに連動
        </div>
      </div>
    </div>
  );
};
