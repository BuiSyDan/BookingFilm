import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import CarouselHome from "./Layout/CarouselHome/CarouselHome";
import Footer from "./Layout/Footer/Footer";




export const HomeTemplates = (props) => { //path, exact, Component
    const { Component, ...restsRoute } = props;

    return <Route {...restsRoute} render={(propsRoute) => { //props.location, props.history, props.match
        return <Fragment>
            <Header {...propsRoute} />
            <CarouselHome {...propsRoute} />




            <Component {...propsRoute} />




            <Footer />
        </Fragment>
    }} />
}