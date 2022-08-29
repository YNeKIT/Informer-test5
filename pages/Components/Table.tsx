import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./Table.module.scss";
import { useContext } from "react";
import { CompanyContext } from "../CompanyContext";
import { types } from "sass";
import Image from "next/image";

function CustomizedTables() {
  const { companyProfile } = useContext(CompanyContext);

  return (
    <table className={styles.contenttable}>
      <thead>
        <tr>
          <th className={styles.tablename}>Administrators</th>
        </tr>
        <tr>
          <th>NAME AND SURNAME</th>
          <th>SENIORITY</th>
          <th>JOB FUNCTION</th>
          <th>PHONE</th>
          <th>EMAIL</th>
        </tr>
      </thead>

      <tbody>
        {companyProfile.personal?.ADM?.map((personalinfo: any, k: number) => (
          <tr key={k}>
            {personalinfo?.name === null ? (
              <td> --</td>
            ) : (
              <td>{personalinfo?.name}</td>
            )}
            {personalinfo?.seniority?.title === null ? (
              <td> --</td>
            ) : (
              <td>{personalinfo?.seniority?.title}</td>
            )}
            {personalinfo?.function === null ? (
              <td> --</td>
            ) : (
              <td>{personalinfo?.function}</td>
            )}
            {personalinfo?.phone === null ? (
               <td>
               <div className={styles.mail}>
               <div className={styles.mailimg}>
                 <Image 
                   className={styles.mailimg}
                   src="/phoneblack.svg"
                   width={18}
                   height={20}
                 />
                 </div>
                 <h4 className={styles.mailhover}> PHONE </h4>
               </div>
             </td>
            ) : (
              <td>{personalinfo?.phone}</td>
            )}
            {personalinfo?.email === null ? (
              <td>
                <div className={styles.mail}>
                <div className={styles.mailimg}>
                  <Image 
                    className={styles.mailimg}
                    src="/mail.svg"
                    width={18}
                    height={20}
                  />
                  </div>
                  <h4 className={styles.mailhover}> EMAIL </h4>
                </div>
              </td>
            ) : (
              <td>{personalinfo?.email}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default CustomizedTables;
