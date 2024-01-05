import type { UIEvent } from 'react';
import { useRef, useState } from 'react';
import { Monitor } from '../components/Monitor/Monitor';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import styles from './index.module.css';

const Home = () => {
  const scrollElm = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<UIEvent<HTMLDivElement, globalThis.UIEvent> | null>(null);

  return (
    <div>
      <VideoPlayer scrollTop={(scroll?.target as HTMLDivElement)?.scrollTop ?? 0} />
      <Monitor>
        <div ref={scrollElm} className={styles.container} onScroll={setScroll}>
          <div className={styles.main}>
            <div className={`${styles.whiteText} ${styles.desc}`}>
              足と映像が連動して楽しい
              <br />
              毎日続けられるエアロバイク
            </div>
            <div className={`${styles.whiteText} ${styles.title}`}>想い出サイクル</div>
          </div>
        </div>
      </Monitor>
    </div>
  );
};

export default Home;
