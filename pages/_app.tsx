import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "macro-css";
import React, { useState } from "react";
import { CompanyContext } from "./CompanyContext";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  const [query, setQuery] = React.useState("");
  const [companies, setCompanies] = React.useState<{
    [x: string]: any;
    data?: any[];
    total_results?: number;
    pages?: number;
  }>({});
  const [companyProfile, setCompanyProfile] = React.useState<{
    [x: string]: any;
    data?: any[];
    total_results?: number;
    pages?: number;
  }>({});

  const onChangeInput = async (e: { target: { value: any } }) => {
    const { value } = e.target;
    setQuery(value);
    if (value.length > 1) {
      axios
        .get(
          `https://app.informer.md/api/public/search?page=1&per_page=5&company_name=${value}`
        )
        .then((res) => {
          setCompanies(res.data);
          console.log(res.data);
          console.log(res.data?.slug)
        });
    }
  };

  function transmitslug() {
    axios
      .get(
        `https://app.informer.md/api/public/company?slug=${localStorage.getItem(
          "SLUG"
        )}`
      )
      .then((res) => {
        setCompanyProfile(res.data);
        // console.log(res.data);
        // console.log(companyProfile?.name);
        // console.log(
        //   companyProfile?.general_data?.contact_info.adress_de_facto?.additional
        //     .long
        // );
      });
  }

  return (
    <CompanyContext.Provider
      value={{
        onChangeInput,
        setCompanies,
        companies,
        companyProfile,
        transmitslug,
      }}
    >
      <Component {...pageProps} />
    </CompanyContext.Provider>
  );
}

export default MyApp;
