import styles from "./blog.module.scss";
export default function BlogComponent() {
  return (
    <div className={`${styles.holder} reveal`}>
      <div className={styles.header}>
        <p className={styles.subheading}>OUR BLOG</p>
        <h3 className={styles.heading}>Latest News</h3>
      </div>
      <div className={`${styles.parent} flex flex-horizontal-space-center flex-wrap g2`}>
        <section className={styles.container}>
          <article className={`${styles.card1}`}>
            <div className={styles.tag}>
              <span>20 APR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
          <article className={`${styles.card2}`}>
            <div className={styles.tag}>
              <span>20 APR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
        </section>
        <section className={styles.container}>
          <article className={`${styles.card21}`}>
            <div className={styles.tag}>
              <span>20 APR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
          <article className={`${styles.card11}`}>
            <div className={`${styles.none} ${styles.tag}`}>
              <span>20 APR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
        </section>
        <section className={styles.container}>
          <article className={`${styles.card1}`}>
            <div className={styles.tag}>
              <span>20 APR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
          <article className={`${styles.card2}`}>
            <div className={styles.tag}>
              <span>20 APR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
        </section>
        <section className={styles.container}>
          <article className={`${styles.card21}`}>
            <div className={styles.tag}>
              <span>20 APR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
          <article className={`${styles.card11}`}>
            <div className={styles.tag}>
              <span>17 MAR</span>
            </div>
            <p>The Covid-19 Epidemic in 2022 Is Back</p>
          </article>
        </section>
      </div>
    </div>
  );
}
