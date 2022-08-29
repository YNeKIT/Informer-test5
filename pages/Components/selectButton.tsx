import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./Footer.module.scss";
function SelectButton() {
  const [language, setLanguage] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Română</MenuItem>
          <MenuItem value={20}>English</MenuItem>
          <MenuItem value={30}>Русский</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectButton;
