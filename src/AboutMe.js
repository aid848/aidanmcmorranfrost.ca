import React, {useEffect} from "react";
import {Paper, Typography} from "@material-ui/core";
import {bioTXT} from "./Content";


export const About = (props) => {
    useEffect(() => {
        props.setTab("/about")
    }, [props])

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
