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
    media: {
        minHeight: "20vh",
        maxHeight: "20vh",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        '@media (min-width:780px)': { // eslint-disable-line no-useless-computed-key
            minWidth: "30vw",
            maxWidth: "60vw"
        },
        '@media (max-width:779px)': { // eslint-disable-line no-useless-computed-key
            minWidth: '95vw'
        }
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
            {MYPROJECTS.map((ele, i) => {
                let ctrl = false
                if (ele.photosSrc) {
                    ctrl = ele.photosSrc.length > 1
                }
                return (
                    <Grid item key={i} xs style={{display: "flex"}}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.media} component="div">
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
                        </Card>
                    </Grid>
                );
            })}
        </Grid>)
}
