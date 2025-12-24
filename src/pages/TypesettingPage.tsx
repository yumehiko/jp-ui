import { budoux } from '../lib/budoux';
import styles from './TypesettingPage.module.css';

type TypesettingPageProps = {
  displayText?: string;
  headlineText?: string;
  titleText?: string;
  paragraphs?: string[];
};

const defaultParagraphs = [
  '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。',
  '新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。',
];

export function TypesettingPage({
  displayText = 'Display: 日本語の視認性を強く押し出す',
  headlineText = 'Headline: セクションの要点を素早く伝える',
  titleText = 'Title: 章やブロックの導線を作る',
  paragraphs = defaultParagraphs,
}: TypesettingPageProps) {
  return (
    <div className={styles.Page}>
      <div className={styles.Content}>
        <div className={styles.HeadingGroup}>
          <div>
            <div className="typesetting-display typesetting-tsumegumi typesetting-budoux">
              {budoux(displayText)}
            </div>
          </div>
          <div>
            <div className="typesetting-headline typesetting-tsumegumi typesetting-budoux">
              {budoux(headlineText)}
            </div>
          </div>
          <div>
            <div className="typesetting-title typesetting-tsumegumi typesetting-budoux">
              {budoux(titleText)}
            </div>
          </div>
        </div>
        <div className={`${styles.Body} typesetting-body typesetting-betagumi`}>
          {paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 8)}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
