import React, {useEffect} from "react";
import {
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {MYPROJECTS} from "./Content";
import {Carousel, CarouselItem} from "react-bootstrap";

const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "400px",
    [theme.breakpoints.up('md')]: {
        width: "30%",
        margin: "0 auto"
    },
    [theme.breakpoints.down('md')]: {
        // For smaller screens, make them full width
        width: "100%",
        margin: "0 auto"
    }
}));

export const Projects = (props) => {
    useEffect(() => {
        props.setTab("/projects")
    }, [props])

    const gotoSource = (value) => {
        const win = window.open(value, "_blank", "noopener,noreferrer");
        if (win) win.opener = null;
    }

    return (
        <Grid container spacing={2} style={{marginTop: "1rem"}}>
            {MYPROJECTS.map((ele, i) => {
                let ctrl = false
                if (ele.photosSrc) {
                    ctrl = ele.photosSrc.length > 1
                }
                return (
                        <StyledCard size={6}>
                            <CardMedia component="div">
                                {ele.photosSrc && (
                                    <Carousel indicators={false} controls={ctrl} interval={5000} nextLabel=""
                                              prevLabel="">
                                        {ele.photosSrc.map((photo, i) => {
                                            return (
                                                <CarouselItem key={i} className="Project-Photo">
                                                    <img
                                                        className="Project-Photo"
                                                        src={photo}
                                                        alt={`slide-${i}`}
                                                    />
                                                </CarouselItem>)
                                        })
                                        }
                                    </Carousel>)}
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {ele.name} | {ele.date} | {ele.type}
                                </Typography>
                                <Typography variant="h6">{ele.langs}</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {ele.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup fullWidth>
                                    {ele.demoLink && <Button variant="contained" onClick={() => {
                                        gotoSource(ele.demoLink)
                                    }} size="small" color="primary">
                                        Demo (read description first)
                                    </Button>}
                                    {ele.sourceLink && <Button variant="contained" onClick={() => {
                                        gotoSource(ele.sourceLink)
                                    }} size="small" color="primary">
                                        Source Code
                                    </Button>}
                                    {ele.releaseLink && <Button variant="contained" onClick={() => {
                                        gotoSource(ele.releaseLink)
                                    }} size="small" color="primary">
                                        Release Link
                                    </Button>}
                                </ButtonGroup>
                            </CardActions>
                        </StyledCard>
                );
            })}
        </Grid>)
}
