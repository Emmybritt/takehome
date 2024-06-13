import React from "react";
import { TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import "../input.css"

const CustomInput = ({ type = "text", label, placeholder, onChange, value }) => {
  return (
    <>
      {type === "text" && (
        <TextField
          id="outlined-basic"
          label={label}
          value={value || ""}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          variant="outlined"
          sx={{
            width: "100%",
            "&:hover": {
              backgroundColor: "grayTones.light",
              borderColor: "grayTones.main",
            },
          }}
        />
      )}
      {type === "textarea" && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
      {type === "date" && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value && dayjs(value)}
            sx={{ width: "100%" }}
            label={label}
            onChange={(date) => onChange(date.format())}
          />
        </LocalizationProvider>
      )}
    </>
  );
};

export default CustomInput;
