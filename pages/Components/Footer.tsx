import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import SelectButton from "./selectButton";

export default function Footer() {
  return (
    <div className={styles.headeropus}>
   
      <div className={styles.contentopus}>
        <div className={styles.firstblock}>
          <Image
            src="/logoblack.jpg"
            width={230}
            height={100}
            alt="logoinformer"
          />
          <h2 className="mt-30">Language</h2>
          <div className={styles.selectbutton}>
            <SelectButton />
          </div>
        </div>

        <div className={styles.secondblock}>
          <h1>Products</h1>
          <h3 className={styles.textblueedit}>Solutions</h3>
          <h3 className={styles.textblueedit}>Subscriptions</h3>
        </div>

        <div className={styles.thirdblock}>
          <h1>What is Informer?</h1>
          <h3 className={styles.textblueedit}>Mission</h3>
          <h3 className={styles.textblueedit}>Frequent questions</h3>
          <h3 className={styles.textblueedit}>Contacts</h3>
        </div>

        <div className={styles.fourblock}>
          <h1 className={styles.textedit}>Contacts</h1>
          <h3 className={styles.textblueedit}>support@informer.md</h3>
          <h3 className={styles.textedite}>022 022 097</h3>
          <p>Monday to Friday, 9:00- 18:00</p>
        </div>
      </div>

      <div className={styles.fiveblock}>
        <p className={styles.credentials}>© 2022 localhost3000</p>
      </div>
      <div>.</div>
    </div>
  );
}
