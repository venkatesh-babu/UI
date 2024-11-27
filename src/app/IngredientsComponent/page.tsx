import styles from "./ingredients.module.scss";

export default function IngredientsComponent() {
    return (
      <div className={`${styles.container} flex flex-wrap reveal`}>
      <div className={`${styles.row1} flex g1 flex-wrap`}>
        <div className={styles.card1}>
          <b className={styles.small_heading}>INGREDIENTS</b>
          <h3 className={styles.heading}>Better Ingredients</h3>
          <p className={styles.sub_text}>Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!</p>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <h4 className={styles.subheading}>Vitamin C</h4>
          <p className={styles.sub_text}>Vitamin C as ascorbic acid</p>
          <div className={styles.more_button}>
            <p>SEE MORE</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <h4 className={styles.subheading}>Vitamin B3</h4>
          <p className={styles.sub_text}>Niacin for healthy gut and skin</p>
          <div className={styles.more_button}>
            <p>SEE MORE</p>
          </div>
        </div>
      </div>
      <div className={`${styles.row2} flex g1 flex-wrap`}>
        <div className={`${styles.card} ${styles.card4}`}>
          <h4 className={styles.subheading}>Magnesium</h4>
          <p className={styles.sub_text}>Boost energy and support muscle function</p>
          <div className={styles.more_button}>
            <p>SEE MORE</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card5}`}>
          <h4 className={styles.subheading}>Hyaluronic Acid</h4>
          <p className={styles.sub_text}>For smooth, supple and soft skin!</p>
          <div className={styles.more_button}>
            <p>SEE MORE</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card6}`}>
          <h4 className={styles.subheading}>Lactobacillus</h4>
          <p className={styles.sub_text}>Invigorate your gut microbiome</p>
          <div className={styles.more_button}>
            <p>SEE MORE</p>
          </div>
        </div>
        <div className={styles.image_container}>
          <img src="/Assets/Images/download (3).png" alt="image"/>
        </div>
      </div>
      </div>
    );
  }
  