import styles from "./hero.module.scss";
export default function HeroComponent() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.container_content}>
        <h1 className={styles.title}>Essential Vitamins</h1>
        <div className={`${styles.hero_container} flex flex-vertical-end flex-horizontal-space-even`}>
          <div className={styles.w18}>
            <p className={styles.sub_text2}> Online Medical Supplies</p>
            <h4 className={styles.subheading}>Get Your Vitamins & Minerals</h4>
            <button className={styles.button}>Explore</button>
          </div>
          <div className={styles.image_container}>
            <img src="/Assets/Images/image (1).png" alt="image" />
          </div>
          <div className={styles.w30}>
            <div className="flex g1 ">
              <div className={styles.image_container2}>
                <img src="/Assets/Images/download (1).png" alt="logo" />
              </div>
              <div>
                <h4>Vitamins</h4>
                <p className={styles.sub_text}>
                  Increased Vitamins and minerals in your diet
                </p>
              </div>
            </div>
            <div className="flex g1 ">
              <div className={styles.image_container2}>
                <img src="/Assets/Images/download (8).png" alt="logo" />
              </div>
              <div>
                <h4>Weight Loss</h4>
                <p className={styles.sub_text}>
                Weight Loss
                Find scientifically proven solutions
                </p>
              </div>
            </div>
            <div className="flex g1 ">
              <div className={styles.image_container2}>
                <img src="/Assets/Images/download (9).png" alt="logo" />
              </div>
              <div>
                <h4>Functional Foods</h4>
                <p className={styles.sub_text}>
                Functional Foods
                From protein powers to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.circle_container} flex g1`}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
      <div className={`${styles.card_container}`}>
        <div className={`${styles.row1} flex flex-horizontal-space-even flex-wrap g4`}>
          <div className={styles.card}>
            <div className={styles.image_container3}>
              <img src="/Assets/Images/download (2).png" alt="image"/>
            </div>
            <div>
              <h5 className={styles.card_title}>Clinically Studied</h5>
              <p>
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image_container3}>
              <img src="/Assets/Images/download (10).png" alt="image"/>
            </div>
            <div>
              <h5 className={styles.card_title}>Vegetarian Friendly</h5>
              <p>
              We have a wide selection of vegetarian
              products to meet your needs
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image_container3}>
              <img src="/Assets/Images/download (11).png" alt="image"/>
            </div>
            <div>
              <h5 className={styles.card_title}>Made in India</h5>
              <p>
              Shop local and explore health products
              made right here in India
              </p>
            </div>
          </div>
          </div>
          <div className={`flex flex-horizontal-space-even flex-wrap g4`}>

          <div className={styles.card}>
            <div className={styles.image_container3}>
              <img src="/Assets/Images/download (12).png"alt="image" />
            </div>
            <div>
              <h5 className={styles.card_title}>Free shipping</h5>
              <p>
              We deliver to your door with no
              shipping costs on your orders
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image_container3}>
              <img src="/Assets/Images/download (13).png" alt="image"/>
            </div>
            <div>
              <h5 className={styles.card_title}>No Risk</h5>
              <p>
              We ensure that all products are safe
              and within their use-by date
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image_container3}>
              <img src="/Assets/Images/download (14).png" alt="image"/>
            </div>
            <div>
              <h5 className={styles.card_title}>GMO free</h5>
              <p>
              Natural, no modified products and
              derivatives for those who need it
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}