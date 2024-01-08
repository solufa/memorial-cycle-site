import type { ReactNode } from 'react';
import styles from './Monitor.module.css';

export const Monitor = (props: { kmph: number; children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.filter} style={{ bottom: '100%', left: 0 }} />
      <div className={styles.filter} style={{ top: 0, left: '100%' }} />
      <div className={styles.filter} style={{ top: '100%', right: 0 }} />
      <div className={styles.filter} style={{ bottom: 0, right: '100%' }} />
      <div className={styles.frame}>{props.children}</div>
      <div className={styles.speed}>
        <span className={styles.value}>{props.kmph}</span>
        <span className={styles.unit}>km/h</span>
      </div>
    </div>
  );
};
