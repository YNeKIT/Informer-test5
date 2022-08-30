import React from "react";
import styles from "./potentialCustomers.module.scss";

function PotentialCustomers() {
  return (
    <div className={styles.main}>
      <div className={styles.firstblock}>
        <div>
          <h1 className={styles.maintext}>
            Search for potential customers by keywords
          </h1>
        </div>
        <div className={styles.menu}>
          <div className={styles.category}>
            <h3>Top category</h3>
          </div>
          <div className={styles.search}>
            <h3>Top search</h3>
          </div>
        </div>
         <div className={styles.forcontent}> 
        <div className={styles.content}>
          <span className={styles.span}>Activitate editorială şi de poligrafie</span>
          <span className={styles.span} >Activităţi de agrement, turism şi sport</span>
          <span className={styles.span}>Agricultură şi silvicultură</span>
          <span className={styles.span}>Articole din tutun</span>
          <span className={styles.span}>Asigurări</span>
          <span className={styles.span}>Autoservice</span>
          <span className={styles.span}>Bijuterii Artă aplicată</span>
          <span className={styles.span}>Cercetări ştiinţifice şi elaborări</span>
        </div>
        </div>

      </div>
    </div>
  );
}
export default PotentialCustomers;
