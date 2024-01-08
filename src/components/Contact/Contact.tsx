import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <div>
      <div className={styles.whiteText}>
        <div>2週間無料お試しレンタル実施中!!</div>
        <div>効果を現場で実感してください</div>
      </div>
      <div className={styles.card}>
        <div>
          継続設置 月額<span className={styles.price}>6.5</span>万円（税別）
        </div>
        <div>レンタルのお申し込みはフリーダイヤル</div>
        <div>☎0120-123-4567</div>
        <div>INIAD株式会社</div>
      </div>
    </div>
  );
};
