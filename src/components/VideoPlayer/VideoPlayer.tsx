import { useEffect, useRef } from 'react';
import styles from './VideoPlayer.module.css';

export const VideoPlayer = (props: { scrollTop: number }) => {
  const videoElm = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoElm.current === null) return;

    videoElm.current.play();
  }, [props.scrollTop]);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoElm}
        className={styles.video}
        src="/video/30sec.mp4"
        preload="auto"
        muted
        loop
      />
    </div>
  );
};
