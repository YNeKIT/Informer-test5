import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./Components/Companypage.module.scss";
import Headersearch from "./Components/headersearch";
import Footer from "./Components/Footer";
import CustomizedTables from "./Components/Table";
import CustomizedTablesdoi from "./Components/tabledoi";
import { useContext } from "react";
import { CompanyContext } from "./CompanyContext";
import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import Tablethree from "./Components/Tablethree";
import LineCharts from "./Components/Charts";
import Link from "next/link";

const CompanyPage = () => {
  const { companyProfile } = useContext(CompanyContext);

  const center = {
    lat: companyProfile.general_data?.contact_info?.address_de_facto?.additional
      ?.lat,
    lng: companyProfile.general_data?.contact_info?.address_de_facto?.additional
      ?.long,
  };
  const containerStyle = {
    width: "780px",
    height: "550px",
  };
  console.log(
    companyProfile.general_data?.contact_info?.address_de_facto?.additional?.lat
  );
  return (
    <div className={styles.backround}>
      <Headersearch />
      <div className={styles.backround}>
        <div className={styles.mainblock}>
          <div className={styles.firstblock}>
            <Image src="/ebslogo.png" width={123} height={123} />

            <div className={styles.companyname}>
              <h2> {companyProfile?.name}</h2>
              <span>
                {companyProfile.general_data?.special_description?.title}
              </span>

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
            <div className={styles.menublock}>
              <h4 className={styles.menublockOn}>General dates</h4>
              <h4 className={styles.menublockO}>Personal </h4>
              <h4 className={styles.menublockO}>Subdivisions</h4>
              <h4 className={styles.menublockO}>Economic Data</h4>
            </div>
          </div>
        </div>

        <div className={styles.secondblock}>
          <div className={styles.idno}>
            <div className={styles.idnotex}>
              <h3 className={styles.idnotexgri}>IDNO</h3>
              <h1>{companyProfile.general_data?.idno}</h1>
            </div>
          </div>
          <div className={styles.registration}>
            <div className={styles.idnotex}>
              <h3 className={styles.idnotexgri}>Registration-year</h3>
              <h1>{companyProfile?.general_data?.creation_date}</h1>
            </div>
          </div>
          <div className={styles.staff}>
            <div className={styles.idnotex}>
              <h3 className={styles.idnotexgri}>Staff</h3>
              <h1>{companyProfile.general_data?.size?.name}</h1>
            </div>
          </div>
        </div>
        <div className={styles.thirdmainblock}>
          <div className={styles.thirdblock}>
            <h2 className={styles.texta}>Company Profile</h2>
            <hr />
            <p className={styles.texta}>
              {companyProfile.general_data?.description}
            </p>
          </div>

          <div className={styles.thirdblockp}>
            <h2 className={styles.texta}>Workhours</h2>
            <div className={styles.blockforgrafic}>
              <div className={styles.zile}>
                <div className={styles.worktable}>
                  <h3 className={styles.textaligng}>Monday</h3>
                </div>
                <div className={styles.worktable}>
                  <h3 className={styles.textaligng}>Tuesday</h3>
                </div>
                <div className={styles.worktable}>
                  <h3 className={styles.textaligng}>Wednesday</h3>
                </div>
                <div className={styles.worktable}>
                  <h3 className={styles.textaligng}>Thursday</h3>
                </div>
                <div className={styles.worktable}>
                  <h3 className={styles.textaligng}>Friday</h3>
                </div>
                <div className={styles.worktable}>
                  <h3 className={styles.textaligng}>Saturday</h3>
                </div>
                <div className={styles.worktable}>
                  <h3 className={styles.textaligng}>Sunday</h3>
                </div>
              </div>

              <div className={styles.ore}>
                <div className={styles.worktablet}>
                  <h3 className={styles.textaligng}>From 09:00 - to 18:00</h3>
                </div>

                <div className={styles.worktablet}>
                  <h3 className={styles.textaligng}>From 09:00 - to 18:00</h3>
                </div>
                <div className={styles.worktablet}>
                  <h3 className={styles.textaligng}>From 09:00 - to 18:00</h3>
                </div>
                <div className={styles.worktablet}>
                  <h3 className={styles.textaligng}>From 09:00 - to 18:00</h3>
                </div>
                <div className={styles.worktablet}>
                  <h3 className={styles.textaligng}>From 09:00 - to 18:00</h3>
                </div>
                <div className={styles.worktablet}>
                  <h3 className={styles.textaligng}>Day off</h3>
                </div>
                <div className={styles.worktablet}>
                  <h3 className={styles.textaligng}>Day off</h3>
                </div>
              </div>
            </div>

            <div className={styles.googleMap}>
              <div className={styles.googleMapBox}>
                <div>
                  {companyProfile?.general_data?.contact_info?.address_de_facto
                    ?.additional?.lat === undefined ? (
                    <div className={styles.mapsundefined}>
                      <Image
                        src="/mapsundefined.png"
                        width={800}
                        height={550}
                      />
                    </div>
                  ) : (
                    <div>
                      <LoadScript googleMapsApiKey="AIzaSyC5eHdxqd9PTluY7yJdYCVpeW4Z6e548eY">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={18}
                        >
                          <Marker position={center} />
                        </GoogleMap>
                      </LoadScript>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactinfo}>
        <div className={styles.contactinfomargin}>
          <h3>Contact information</h3>
        </div>
        <hr />
        <div className={styles.contactinfodisplay}>
          <div className={styles.contactinfopartone}>
            {companyProfile.general_data?.contact_info?.emails[0] === true ? (
              <h4 className={styles.inlinemailtrue}>
                <Image src="/mail.svg" width={18} height={20} /> Email
              </h4>
            ) : (
              <h4 className={styles.inlinemail}>
                <Image src="/mail.svg" width={18} height={20} /> Email
              </h4>
            )}

            <h4>
              <Image src="/internet.svg" width={18} height={20} />
              WEBSITE: <br></br>
            </h4>
            <h4 className={styles.contactinfotext}>
              {/* {`/blog/${encodeURIComponent(post.slug)}` */}
              {companyProfile.general_data?.contact_info.sites[0]}
            </h4>
          </div>
          <div className={styles.contactinfopartdoi}>
            <h4>PHONE/CELL PHONE/FAX:</h4>
            {companyProfile.general_data?.contact_info?.phones[0] === true ? (
              <p className={styles.phonefax}>Phone</p>
            ) : (
              <p className={styles.phonefaxfalse}>Phone</p>
            )}

            {companyProfile.general_data?.contact_info?.mobile[0] === true ? (
              <p className={styles.phonefax}>Phone mobile</p>
            ) : (
              <p className={styles.phonefaxfalse}>Phone mobile</p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.partnersblock}>
        <div className={styles.idno}>
          <div className={styles.idnotex}>
            <h3 className={styles.idnotexgri}>Partners</h3>
            <h1>{companyProfile.personal?.PRT?.length}</h1>
          </div>
        </div>

        <div className={styles.idno}>
          <div className={styles.idnotex}>
            <h3 className={styles.idnotexgri}>Administrators</h3>
            <h1>{companyProfile.personal?.ADM?.length}</h1>
          </div>
        </div>
      </div>

      <div className={styles.table}>
        <CustomizedTables />
      </div>

      <div className={styles.table}>
        <CustomizedTablesdoi />
      </div>

      <div className={styles.lineschartpossition}>
        <div className={styles.lineschart}>
          <LineCharts />
        </div>
      </div>

      <div className={styles.capitalblock}>
        <div className={styles.capital}>
          <div className={styles.capitaltex}>
            <h3 className={styles.idnotexgri}>
              The size of the Social Capital
            </h3>
            <h1>{companyProfile.general_data?.social_capital.value}</h1>
          </div>
        </div>

        <div className={styles.capital}>
          <div className={styles.capitaltex}>
            <h3 className={styles.idnotexgri}>Type of Social Capital</h3>
            <h1>{companyProfile.general_data?.social_capital.type?.title}</h1>
          </div>
        </div>

        <div className={styles.capital}>
          <div className={styles.capitaltex}>
            <h3 className={styles.idnotexgri}>
              Country of Origin of Investments
            </h3>
            {companyProfile.general_data?.social_capital.countries.map(
              (countries: any, k: number) => (
                <h1 className={styles.capitaldatatext} key={k}>
                  {" "}
                  {countries.title}{" "}
                </h1>
              )
            )}
          </div>
        </div>
      </div>

      <div className={styles.tablethree}>
        <Tablethree />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default CompanyPage;
