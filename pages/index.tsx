import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Blackbar from "./Components/blackbar";
import React, { useState } from "react";
import TopCompany from "./Components/topCompany";
import PotentialCustomers from "./Components/potentialCustomers";
import axios from "axios";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Blackbar />
      <Card />
      <TopCompany />
      <PotentialCustomers/>
      <Footer />
    </div>
  );
};

export default Home;
