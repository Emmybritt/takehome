import { Box, Slide, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const Slider = ({ direction, current, handleChange, handleNext, user }) => {
  return (
    <Slide direction={direction} in={true} mountOnEnter key={current.name} unmountOnExit>
      <Box pb={10} >
        {current?.image && <img src={current.image} style={{ marginBottom: "30px" }} alt="logo" />}
        <Typography mb={2} textAlign="center" variant="h5">{current.question}</Typography>
        {current.type === "option" && (
          <Box display="flex" flexDirection="column" alignItems="end">
            {current.options.map((option, index) => (
              <CustomButton
                style={{ marginTop: "18px" }}
                onClick={() => {
                  handleChange(current.name, option);
                  handleNext();
                }}
                key={index}
                label={option}
              />
            ))}
          </Box>
        )}
        {current.type !== "option" && (
          <CustomInput
            type={current.type}
            placeholder={current.placeholder}
            value={user[current?.name]}
            onChange={(value) => handleChange(current.name, value)}
          />
        )}
      </Box>
    </Slide>
  );
};

export default Slider;
