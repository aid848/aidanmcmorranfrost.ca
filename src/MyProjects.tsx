import React from "react";
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
import {ProjectCarousel} from "./ProjectCarousel";

// Width comes from the surrounding Grid item. Full height keeps cards in a row
// the same height so the action buttons line up at the bottom.
const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "400px",
    height: "100%",
});

export const Projects = () => {
    const gotoSource = (value: string | null) => {
        if (!value) return;
        const win = window.open(value, "_blank", "noopener,noreferrer");
        if (win) win.opener = null;
    }

    return (
        <Grid container spacing={2} sx={{marginTop: "1rem", px: {xs: 0, md: 2}}}>
            {MYPROJECTS.map((ele) => {
                return (
                    <Grid key={ele.name} size={{xs: 12, md: 4}}>
                        <StyledCard>
                            <CardMedia component="div">
                                {ele.photosSrc && <ProjectCarousel photos={ele.photosSrc} />}
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {ele.name} | {ele.date} | {ele.type}
                                </Typography>
                                <Typography variant="h6">{ele.langs}</Typography>
                                <Typography variant="body2" color="text.secondary" component="p">
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
                    </Grid>
                );
            })}
        </Grid>)
}
