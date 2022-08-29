import { useState, useContext, useRef, useEffect } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CompanyContext } from "../CompanyContext";

import router, { useRouter } from "next/router";

function Headersearch() {
  const { onChangeInput, companies } = useContext(CompanyContext);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      router.push({ pathname: `Resultpage` });
    }
  };

  return (
    <header className={styles.navi}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              className={styles.imglogo}
              src="/logo-extra-small.webp"
              width={30}
              height={35}
              alt="logoinformer"
            />
          </Link>
        </div>
        <div className={styles.links}>
          <input
            className={styles.searchnav}
            onChange={onChangeInput}
            id="outlined-basic"
            placeholder="Search from 243,989 companies"
            onKeyPress={handleKeyDown}
          />

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
      {/* <hr className={styles.hrforheader}/> */}
    </header>
  );
}

export default Headersearch;
