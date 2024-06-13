import React from "react";
import { Box, Button } from "@mui/material";

const CustomButton = ({ label, disabled = false, onClick, style }) => {
  return (
    <Box>
      <Button
        style={style}
        disabled={disabled}
        sx={{
          color: "secondary.main",
          textTransform: "capitalize",
          border: "1px solid",
          borderColor: "primary.border",
          width: "172px",
          height: "55px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "grayTones.light",
            borderColor: "grayTones.main",
          },
        }}
        variant="outlined"
        onClick={onClick}
      >
        {label}
      </Button>
    </Box>
  );
};

export default CustomButton;
