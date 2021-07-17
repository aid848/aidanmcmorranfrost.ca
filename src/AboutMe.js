import React, {useEffect} from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import {bioTXT} from "./Content";


export const About = (props) => {
    useEffect(() => {
        props.setTab("/about")
    }, [props])

    return (
        <Grid container>
            <Grid item xs>
                <Paper className="AboutMeCard" elevation={3}
                       style={{display: "inline-block", backgroundColor: "rgba(255,255,255,0.5)"}}>
                    <Typography variant={"body1"}>
                        {bioTXT}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
