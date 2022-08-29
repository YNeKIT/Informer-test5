import { useState, useContext, useRef, useEffect } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Button from "@mui/material/Button";

function Header() {
  return (
    <header>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/logoinformer.webp"
            width={160}
            height={35}
            alt="logoinformer"
          />
        </div>
        <div className={styles.links}>
          <h2>
            All about informer
            <Image
              className="mt-3 ml-5"
              src="/caret.svg"
              width={40}
              height={40}
            />
          </h2>
          <h2>
            Solutions
            <Image
              className="mt-3 ml-5"
              src="/caret.svg"
              width={40}
              height={40}
            />
          </h2>
          <h2>Subscriptions</h2>
          <h2 className={styles.aparte}>
            <Image
              className={styles.aparteimg}
              src="/phoneblue.svg"
              width={30}
              height={25}
              alt="lcoknormal"
            />
            022 022 097
          </h2>
        </div>
        <Button className={styles.btn} variant="outlined">
          <Image
            className="mr-3 mb-4"
            src="/locknormal.svg"
            width={30}
            height={25}
            alt="phonelogo"
          />
          <h3 className={styles.h3login}>Login</h3>
        </Button>
        <Button className={styles.btn} variant="contained">
          <h3>Try</h3>
        </Button>
      </div>
    </header>
  );
}

export default Header;
