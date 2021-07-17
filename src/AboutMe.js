import React, {useEffect} from "react";


export const About = (props) => {
    useEffect(() => {
        props.setTab("/about")
    }, [])

    return <h2>About</h2>;
}
