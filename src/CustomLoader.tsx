import {CircularProgress} from "@mui/material";
import React from "react";
import {CenterWrapper} from "./CenterWrapper";

export const CustomLoader: React.FC = () => (
    <CenterWrapper>
        <CircularProgress/>
    </CenterWrapper>
)