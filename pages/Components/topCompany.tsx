import styles from "./topCompany.module.scss";
import React from "react";
import TopCompanySkeleton from "./topCompanySkeleton";
import Image from "next/image";

export default function topCompany() {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <h1> Top company</h1>
        <h1 className={styles.viewall}>View all</h1>
        <div className={styles.arrowblue}>
          <Image src="/arrow2.svg" width={35} height={40} />
        </div>
      </div>

      <div className={styles.skeletonblock}>
        <div className={styles.cardcompanyskeleton}>
          <TopCompanySkeleton />
        </div>

        <div className={styles.cardcompanyskeleton}>
          <TopCompanySkeleton />
        </div>

        <div className={styles.cardcompanyskeleton}>
          <TopCompanySkeleton />
        </div>
        <div className={styles.cardcompanyskeleton}>
          <TopCompanySkeleton />
        </div>
      </div>
    </div>
  );
}

{/* <div className={styles.main}>
    <div className={styles.firstblock}>
    <div className={styles.maintext}><h1>Search for potential customers by keywords</h1></div>
    </div>
    </div> */}