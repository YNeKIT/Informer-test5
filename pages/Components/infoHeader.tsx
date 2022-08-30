import React from "react";
import styles from "./infoHeader.module.scss";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { CompanyContext } from "../CompanyContext";
import { bodyStreamToNodeStream } from "next/dist/server/body-streams";
import { useScrollDirection } from "../hooks/useScrollPosition";

function InfoHeader() {
  const { companyProfile } = useContext(CompanyContext);
  const scrollPosition = useScrollDirection();
 
  return (
    <>
      {scrollPosition === "up" || 0 ? (
        <div className={styles.main}>
          <div className={styles.logocompany}>
            <Image
              className={styles.logo}
              src="/ebslogo.png"
              width={80}
              height={80}
            />
            <div className={styles.companyinfo}>
              <div className={styles.companyname}>
                <h1 className={styles.companynameh1}>{companyProfile?.name}</h1>
                <div>
                  {companyProfile.status?.keyword === "ACTIVE" ? (
                    <p className={styles.activeornot}>
                      {companyProfile.status?.keyword}
                    </p>
                  ) : (
                    <p className={styles.notactive}>
                      {companyProfile.status?.keyword}
                    </p>
                  )}
                </div>
              </div>
              <span className={styles.about}>
                {companyProfile.general_data?.special_description?.title}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.displaynone}> none </div>
      )}
    </>
  );
}

export default InfoHeader;
