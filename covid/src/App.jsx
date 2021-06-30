import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Visual from './Visual';
import Home from './Home';
import Footer from './Footer';
import Cov from './Cov';
import Contact from './Contact';
import { Switch, Route, Redirect } from "react-router-dom";




const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/data" component={Cov} />
                <Route exact path="/visual" component={Visual} />
                <Route exact path="/contact" component={Contact} />
                <Redirect exact path="/" />
            </Switch>
            <Footer />
        </>
    )
}

export default App;