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

function Tablethree() {
  const { companyProfile } = useContext(CompanyContext);

  return (
    <table className={styles.contenttable}>
      <thead>
        <tr className={styles.tablenameTHREE}>
          <th className={styles.tablename}>Similar companies</th>
        </tr>
        <tr className={styles.tableheight}>
          <th>NAME</th>
          <th>INDUSTRY</th>
          <th>LOCATION</th>
          <th>WEBSITE</th>
          <th>EMAIL</th>
          <th>PHONE</th>
        </tr>
      </thead>

      <tbody>
        {companyProfile.similar_companies?.map((similar: any, k: number) => (
          <tr key={k}>
            {similar?.name === null ? <td> --</td> : <td>{similar?.name}</td>}
            {similar?.industry === null ? (
              <td> --</td>
            ) : (
              <td>{similar?.industry}</td>
            )}
            {similar?.location === null ? (
              <td> -- </td>
            ) : (
              <td>{similar?.location}</td>
            )}
            {similar?.site === null ? (
              <td>
                <div className={styles.mail}>
                  <div className={styles.mailimg}>
                    <Image
                      className={styles.mailimg}
                      src="/internet.svg"
                      width={18}
                      height={20}
                    />
                  </div>
                  <h4 className={styles.mailhover}> WEBSITE </h4>
                </div>
              </td>
            ) : (
              <td>
                <div className={styles.mail}>
                  <div className={styles.mailimg}>
                    <Image
                      className={styles.mailimg}
                      src="/internet.svg"
                      width={18}
                      height={20}
                    />
                  </div>
                  <h4 className={styles.mailhovertrue}> WEBSITE </h4>
                </div>
              </td>
            )}
            {similar?.email === null ? (
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
                  <h4 className={styles.mailhovertrue}> EMAIL </h4>
                </div>
              </td>
            )}
            {similar?.phone === null ? (
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
                  <h4 className={styles.mailhovertrue}> PHONE </h4>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Tablethree;
