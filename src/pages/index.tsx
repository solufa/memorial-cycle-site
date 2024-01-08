import type { UIEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Chair } from '../components/Chair/Chair';
import { Contact } from '../components/Contact/Contact';
import { Machine } from '../components/Machine/Machine';
import { Monitor } from '../components/Monitor/Monitor';
import { Movie } from '../components/Movie/Movie';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import styles from './index.module.css';

const Home = () => {
  const scrollElm = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState({
    current: { time: Date.now(), top: 0 },
    prev: { time: Date.now() - 1000, top: 0 },
  });
  const [pps, setPps] = useState(4000);
  const kmph = pps * 0.0025;

  const onScroll = (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    setScrolls((s) => ({
      prev: s.current,
      current: { time: Date.now(), top: (e.target as HTMLDivElement)?.scrollTop ?? 0 },
    }));
  };

  useEffect(() => {
    const newPps = Math.floor(
      (Math.abs(scrolls.current.top - scrolls.prev.top) /
        (scrolls.current.time - scrolls.prev.time)) *
        1000
    );
    const step = 400;
    setPps((p) => (p > newPps ? p : p + step));

    const cancelId = setInterval(() => {
      setPps((p) => Math.max(0, p - step));
    }, 500);

    return () => {
      clearTimeout(cancelId);
    };
  }, [scrolls]);

  return (
    <div>
      <VideoPlayer kmph={kmph} />
      <Monitor kmph={kmph}>
        <div ref={scrollElm} className={styles.container} onScroll={onScroll}>
          <div className={styles.main}>
            <div className={styles.firstView}>
              <div className={`${styles.whiteText} ${styles.desc}`}>
                足と映像が連動して楽しい
                <br />
                毎日続けられるエアロバイク
              </div>
              <div className={`${styles.whiteText} ${styles.title}`}>
                <span>想い出</span>
                <span>サイクル</span>
              </div>
            </div>
            <div className={styles.spacer} />
            <Machine />
            <div className={styles.spacer} />
            <Chair />
            <div className={styles.spacer} />
            <Movie />
            <div className={styles.spacer} />
            <Contact />
          </div>
        </div>
      </Monitor>
    </div>
  );
};

export default Home;
