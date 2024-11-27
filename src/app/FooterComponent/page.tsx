import styles from "./footer.module.scss";

export default function FooterComponent() {
  return (
    <div className={`${styles.holder}`}>
      <div className={styles.container}>
        <div className="flex g2 flex-wrap">
          <div className={`${styles.card} flex g1`}>
            <div className={styles.image_container}>
              {/* <Image
                src="/Assets/Images/download (4).png"
                alt="image"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority={false}
              /> */}
              <img src="/Assets/Images/download (4).png" alt="image" />
            </div>
            <div>
              <p>Phone Number</p>
              <p>+974 3118 1843</p>
            </div>
          </div>
          <div className={`${styles.card} flex g1`}>
            <div className={styles.image_container}>
              <img src="/Assets/Images/download (6).png" alt="image"/>
            </div>
            <div>
              <p>Phone Number</p>
              <p>+974 3118 1843</p>
            </div>
          </div>
          <div className={`${styles.card} flex g1`}>
            <div className={styles.image_container}>
              <img src="/Assets/Images/download (7).png" alt="image"/>
            </div>
            <div>
              <p>Phone Number</p>
              <p>+974 3118 1843</p>
            </div>
          </div>
        </div>

        <div className={`${styles.row2} flex g4 flex-vertical-space-center`}>
          <div className={styles.image_container1}>
            <img src="/Assets/Images/download (5).png" alt="logo" />
          </div>
          <div className={styles.row2_descripton}>
            <p>
              Your health, physical, and emotional wellbeing is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>

        <div className={`${styles.copyright} `}>
          <p>
            <img src="Assets/Images/location.jpg" alt="image" /> Elbrit Life
            Sciences Private Limited, C20, EBC, G Block, Mumbai 400051
          </p>
        </div>
      </div>
    </div>
  );
}
