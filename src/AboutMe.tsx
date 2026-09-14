import React from "react";
import {Paper, Typography} from "@mui/material";
import {bioTXT} from "./Content";


export const About = () => {
    return (
        <div style={{textAlign: "center"}}>
                <Paper className="AboutMeCard" elevation={3}
                       style={{display: "inline-block", backgroundColor: "rgba(255,255,255,0.5)"}}>
                    <Typography variant={"body1"}>
                        {bioTXT}
                    </Typography>
                </Paper>
        </div>
    );
}
