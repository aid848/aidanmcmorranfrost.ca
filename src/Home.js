import React, {useEffect} from "react";
import {Button, ButtonGroup, Paper, Typography} from "@material-ui/core";
import {myPlatforms, namePretextTxt, nameSubTitleTxt, nameTxt} from "./Content";
import {useNavigate} from "react-router-dom";


export const Home = (props) => {
    useEffect(() => {
        props.setTab("/")
    }, [props])
    let history = useNavigate();
    return (
        <div>
            <div className="Home_Welcome">
                <Paper elevation={3} style={{display: "inline-block", backgroundColor: "rgba(255,255,255,0.5)"}}>
                    <Typography variant={"h5"}>{namePretextTxt}</Typography>
                    <Typography variant={"h2"}>{nameTxt}</Typography>
                    <Typography variant={"h6"}>{nameSubTitleTxt}</Typography>
                </Paper>
            </div>
            <div className="Home_Actions">
                <Button variant="contained" size="large" onClick={() => {
                    history("/projects")
                }}>Check out my work</Button>

            </div>
            <div className="Home_Contact">
                <ButtonGroup>
                    {myPlatforms.map((ele, i) => {
                        return (
                            <Button
                                key={i}
                                variant="contained"
                                onClick={() => {
                                    const win = window.open(ele.link, "_blank", "noopener,noreferrer");
                                    if (win) win.opener = null;
                                }}
                            >
                                {ele.name}
                            </Button>
                        )
                    })}
                </ButtonGroup>
            </div>


        </div>
    )
}
