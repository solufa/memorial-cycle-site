import { useEffect, useRef } from 'react';
import { staticPath } from '../../lib/$path';
import styles from './VideoPlayer.module.css';

export const VideoPlayer = (props: { kmph: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const FIXED = 2 ** 3;
  const videoSpeed =
    props.kmph === 0
      ? 0
      : Math.floor(FIXED * Math.max(1 / FIXED, Math.min(5, props.kmph * 0.1))) / FIXED;

  useEffect(() => {
    if (videoRef.current === null) return;

    switch (true) {
      case videoSpeed === 0:
        videoRef.current.pause();
        return;
      default:
        videoRef.current.play();
        videoRef.current.playbackRate = videoSpeed;
        return;
    }
  }, [videoSpeed]);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={staticPath.video.$30sec_mp4}
        preload="auto"
        muted
        loop
      />
    </div>
  );
};
