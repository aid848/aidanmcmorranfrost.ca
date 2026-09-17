import {IconButton} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Replaces the react-bootstrap Carousel. Same behaviour: loops, advances every
// 5s, and only shows the prev/next controls when there is more than one photo.
export const ProjectCarousel = ({photos}: {photos: string[]}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({delay: 5000})]);
    const showControls = photos.length > 1;

    const arrowSx = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.3)",
        "&:hover": {backgroundColor: "rgba(0,0,0,0.5)"},
    } as const;

    return (
        <div style={{position: "relative"}}>
            <div className="Project-Carousel-Viewport" ref={emblaRef}>
                <div className="Project-Carousel-Track">
                    {photos.map((photo, i) => (
                        <div className="Project-Carousel-Slide" key={i}>
                            <img className="Project-Photo" src={photo} alt={`slide-${i}`} />
                        </div>
                    ))}
                </div>
            </div>
            {showControls && (
                <>
                    <IconButton aria-label="Previous photo" size="small" sx={{...arrowSx, left: 8}}
                                onClick={() => emblaApi?.scrollPrev()}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" />
                        </svg>
                    </IconButton>
                    <IconButton aria-label="Next photo" size="small" sx={{...arrowSx, right: 8}}
                                onClick={() => emblaApi?.scrollNext()}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8.6 7.4 10 6l6 6-6 6-1.4-1.4 4.6-4.6z" />
                        </svg>
                    </IconButton>
                </>
            )}
        </div>
    );
}
