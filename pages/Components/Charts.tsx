
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useContext } from "react";
import { CompanyContext } from "../CompanyContext";
import styles from "../Components/Companypage.module.scss";






function LineCharts() {
    const { companyProfile } = useContext(CompanyContext);


  const marketcap = companyProfile.general_data?.turnover?.graph.map((item:any)=>({year: item.year, turnover: item.turnover}))

    return (
        <>
       
        <div className={styles.turnoverstyle}>
            <div className={styles.turnovertext}>
            <h2 className='ml-20'>Turnover</h2>
            </div>
            <h2 className={styles.turnovernumber}> {companyProfile?.general_data?.turnover?.last} MDL</h2>
            </div>
      <ResponsiveContainer width="100%" height="100%" className={styles.borderforchar}>
        <LineChart
          width={1630}
          height={500}
          data={marketcap}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid  horizontal="true" vertical="" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
        
          <Line type="monotone" strokeWidth={4} dataKey="turnover" stroke="#8884d8" dot={{fill:"#9932CC", stroke:"", strokeWidth:20,r:6 }} activeDot={{ r: 4 }} />
        
        </LineChart>
      </ResponsiveContainer>
      
      </>
    );
  }
export default LineCharts;



