import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import styles from "./card.module.scss";

import { SxProps } from "@mui/system";
import { ClickAwayListener } from "@mui/base";

export default function DropMenu() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <input
          className={styles.search}
          id="outlined-basic"
          placeholder="Search from 243,989 companies"
          //   onChange={onChange}
          onClick={handleClick}
        />
        {open ? (
          <Paper sx={{ width: 636, maxWidth: "100%" }}>
            <MenuList>
              <MenuItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘V
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
