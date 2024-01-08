import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <div>
      <div className={styles.whiteText}>
        <div>
          <span>2週間無料お試し</span>
          <span>レンタル実施中!!</span>
        </div>
        <div>
          <span>効果を現場で</span>
          <span>実感してください</span>
        </div>
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
