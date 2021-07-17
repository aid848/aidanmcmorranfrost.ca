import React, {useEffect} from "react";
import {
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import {MYPROJECTS} from "./Content";
import {Carousel, CarouselItem} from "react-bootstrap";


const useStyles = makeStyles({
    root: {
        // maxWidth: 500,
    },
    media: {
        minHeight: "20vh",
        maxHeight: "20vh",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minWidth: "25vw"
    },
});


export const Projects = (props) => {
    const classes = useStyles();
    useEffect(() => {
        props.setTab("/projects")
    }, [props])

    const gotoSource = (value) => {
        const win = window.open(value, "_blank", "noopener,noreferrer");
        if (win) win.opener = null;
    }

    return (
        <Grid container spacing={3}
              style={{textAlign: 'center', paddingBottom: "1rem", paddingTop: "1rem"}}>
            {MYPROJECTS.map((ele) => {
                return (
                    <Grid item xs style={{display: "flex"}}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.media}>
                                {ele.photosSrc && (
                                    <Carousel dynamicHeight={false} indicators={false} controls={() => {
                                        return ele.photosSrc.length > 1;

                                    }} interval={5000} nextLabel="" prevLabel="">
                                        {ele.photosSrc.map((photo, i) => {
                                            return (
                                                <CarouselItem className="Project-Photo">
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
                        </Card>
                    </Grid>
                );
            })}
        </Grid>)
}
