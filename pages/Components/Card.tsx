import styles from "./card.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { ClickAwayListener } from "@mui/base";
import { CompanyContext } from "../CompanyContext";
import Link from "next/link";
import router, { useRouter } from "next/router";

function Card() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<{
    name?: string;
    creation_date?: string;
  }>({});

  const { onChangeInput, companies, transmitslug } = useContext(CompanyContext);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      router.push({ pathname: `Resultpage` });
    }
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className={styles.h1}>
        We help Republic of Moldova's companies upscale their business and
        minimize potential risks.
      </h1>
      <div />

      <div className={styles.searchblock}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <input
              className={styles.search}
              id="outlined-basic"
              placeholder="Search from 243,989 companies"
              onChange={onChangeInput}
              onClick={handleClick}
              onKeyPress={handleKeyDown}
            />
            <Button className={styles.btn}>
              <Image
                className="mr-"
                src="/bagtop.svg"
                width={30}
                height={25}
                alt="logoinformer"
              />
              <h3 className={styles.btntext}> Search company</h3>
              <Image
                className="ml-20"
                src="/caret-black.svg"
                width={30}
                height={25}
                alt="logoinformer"
              />
            </Button>
            <Link href="Resultpage" passHref>
              <Button
                className={styles.btns}
                variant="contained"
                onKeyPress={handleKeyDown}
              >
                <h3> Search</h3>
              </Button>
            </Link>
            {open ? (
              <Paper
                className={styles.dropdown}
                sx={{ width: 675, maxWidth: "100%" }}
              >
                <div className={styles.zmenu}>
                  {companies.data
                    ?.filter((i: any, index: any) => index < 3)
                    .map((i: any, k: number) => (
                      <MenuList key={k}>
                        <MenuItem>
                          <ListItemIcon></ListItemIcon>
                          <ListItemText>
                            {" "}
                            <Link href="Companypage" passHref>
                              <h3
                                onClick={() => {
                                  transmitslug();
                                }}
                              >
                                {i.name}
                              </h3>
                            </Link>
                          </ListItemText>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                          ></Typography>
                        </MenuItem>
                      </MenuList>
                    ))}
                </div>
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
      <h1>{data.name}</h1>
    </div>
  );
}
export default Card;
