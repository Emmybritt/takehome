import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export default function CustomAppBar({ activeStep, handleBack, maxStep }) {

    return (
        <AppBar elevation={0} position="static">
            <Container maxWidth="xl" sx={{ padding: 5, display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                {activeStep >= 1 && (
                    <ArrowBackIosNewIcon onClick={handleBack} style={{ cursor: "pointer" }} />
                )}
                <Typography variant="h5" ml={3}>New assessment</Typography>
            </Container>
        </AppBar>
    );
}
