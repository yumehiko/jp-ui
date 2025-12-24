import styles from './TypesettingPage.module.css';

export function TypesettingPage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Content}>
        <h1 className={styles.Title}>本文スタイル</h1>
        <div className={`${styles.Body} typesetting-fixed-jp`}>
          <p>
            親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。
          </p>
          <p>
            新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。
          </p>
        </div>
      </div>
    </div>
  );
}
