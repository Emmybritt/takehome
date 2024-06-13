import { Box } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";

export const StepFooter = ({ activeStep, current, user, maxStep, handleSubmit, handleNext, isLoading }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="end">

      {activeStep >= 1 && (
        <CustomButton
          disabled={!user || !user[current?.name] || isLoading}
          onClick={() => {
            if (activeStep === maxStep - 1) {
              handleSubmit();
            } else {
              handleNext();
            }
          }}
          label={isLoading ? "Generating Summary..." : activeStep === maxStep - 1 ? "Submit" : "Next"}
        />
      )}
    </Box>
  );
};
