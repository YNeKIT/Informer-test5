import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Headersearch from "./Components/headersearch";
import CardCompany from "./Components/CardCompany";
import Footer from "./Components/Footer";
import styles from "../styles/Home.module.scss";
import React, { useState, useContext } from "react";
import { CompanyContext } from "./CompanyContext";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const ResultPage = () => {
  const { onChangeInput, companies } = useContext(CompanyContext);
  {new Date().getFullYear()}
  

  return (
    <div>
      <Headersearch />
      <h2 className={styles.ofresults}>
        <Image
          className="mr-"
          src="/lastbag.svg"
          width={30}
          height={22}
          alt="logoinformer"
        />

        {companies?.total_results > 0 ? (
          <div className="ml-5">{companies?.total_results} of results</div>
        ) : (
          <div className="ml-5"> 0 of results </div>
        )}
      </h2>

      <div>
        {companies?.total_results > 0 ? (
          <div>
            {companies.data?.map((i: any, k: number) => (
              <CardCompany key={k} company={i} />
            ))}
          </div>
        ) : (
          <div className={styles.noresults}>
            <Image
              className="mr-"
              src="/noresults.svg"
              width={100}
              height={100}
              alt="logoinformer"
            />{" "}
          </div>
        )}
      </div>

<div className={styles.pagination}>
     <Stack spacing={2}>
      <Pagination count={10} size="large" variant="outlined" shape="rounded" />
    </Stack>

</div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ResultPage;
