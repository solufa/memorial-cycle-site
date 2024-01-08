import styles from './Movie.module.css';

export const Movie = () => {
  return (
    <div>
      <div className={styles.title}>FullHDで世界の美しい景色を配信</div>
      <div className={styles.content}>
        <iframe
          src="https://www.youtube.com/embed/wM0ZHwXHAjo?si=MtAFCHL0xb6wWYb6&amp;start=27"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className={styles.content}>
        <iframe
          src="https://www.youtube.com/embed/m4mPYV5oius?si=4rK8eY-iiW3vaRuT&amp;start=10"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};
