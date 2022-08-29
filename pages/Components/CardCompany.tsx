import styles from "./cardcompany.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useContext } from "react";
import { CompanyContext } from "../CompanyContext";

type CardCompanyProps = {
  company: any;
};

const CardCompany: React.FC<CardCompanyProps> = ({ company }) => {
  const { onChangeInput, companies, transmitslug } = useContext(CompanyContext);

  const [companyProfile, setCompanyProfile] = React.useState();

  function populateStorage() {
    localStorage.setItem("SLUG", `${company.slug}`);
  }

  return (
    <div className={styles.backround}>
      <div className={styles.content}>
        <div className={styles.profilename}>
          <Image src="/ebslogo.png" width={90} height={90} alt="logoinformer" />
          <Link href="Companypage">
            <h1
              className={styles.hone}
              onClick={() => {
                populateStorage();
                transmitslug();
              }}
            >
              {company.name}
            </h1>
          </Link>
        </div>

        <div className={styles.profileblock}>
          <div className={styles.profileinfod}>
            <h4>
              IDNO: <h4 className={styles.result}>{company.idno}</h4>
            </h4>
            <h4 className={styles.status}>
              Status:<h4 className={styles.result}> {company.status}</h4>
            </h4>
            <h4>
              Date of establishment:
              <h4 className={styles.result}>{company.creation_year}</h4>
            </h4>
            <h4>Vârstă:12 years</h4>
          </div>

          <div className={styles.profileblockdoi}>
            <h1 className={styles.profileblockdoialign}>
              Nr. by the employees:
              <h1 className={styles.resultnumber}> {company.employees} </h1>
            </h1>
            <h1 className={styles.profileblockdoialign}>
              Turnover:
              <h1 className={styles.resultnumber}> {company.turnover} </h1>
            </h1>
            <h1 className={styles.profileblockdoialign}>
              Industry:
              <h1 className={styles.resultnumber}> {company.industry} </h1>
            </h1>
          </div>

          <div className={styles.profileblocktrei}>
            {company?.mobile === true ? (
              <div className={styles.mobilephone}>
                <Image src="/phone-mobile.svg" width={18} height={20} />
                <h2 className={styles.phonetext}>Phone mobile</h2>
              </div>
            ) : (
              <div className={styles.mobilephone}>
                <Image src="/phone-mobile.svg" width={19} height={20} />
                <h2 className={styles.phonetextfalse}>Phone mobile</h2>
              </div>
            )}
            {company?.phone === true ? (
              <div className={styles.mobilephone}>
                <Image src="/phoneblack.svg" width={18} height={20} />
                <h2 className={styles.phonetext}>Phone</h2>
              </div>
            ) : (
              <div className={styles.mobilephone}>
                <Image src="/phoneblack.svg" width={18} height={20} />
                <h2 className={styles.phonetextfalse}>Phone</h2>
              </div>
            )}
            {company.email === true ? (
              <div className={styles.mobilephone}>
                <Image src="/mail.svg" width={18} height={20} />
                <h2 className={styles.phonetext}>Email</h2>
              </div>
            ) : (
              <div className={styles.mobilephone}>
                <Image src="/mail.svg" width={18} height={20} />
                <h2 className={styles.phonetextfalse}>Email</h2>
              </div>
            )}

            {company.website === true ? (
              <div className={styles.mobilephone}>
                <Image src="/internet.svg" width={18} height={20} />
                <h2 className={styles.phonetext}>Website</h2>
              </div>
            ) : (
              <div className={styles.mobilephone}>
                <Image src="/internet.svg" width={18} height={20} />
                <h2 className={styles.phonetextfalse}>Website</h2>
              </div>
            )}
          </div>
        </div>

        <hr className={styles.hrlinie} />
        <h4 className={styles.founders}>
          Founders of the company:
          <h4 className={styles.result}> {company.partners}</h4>{" "}
        </h4>
      </div>
    </div>
  );
};
export default CardCompany;
