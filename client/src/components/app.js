import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NotFound from './general/404';
import Nav from './nav/nav';
import Sell from './sell';
import About from './about';
import Home from './home';
import Item from './item';
import Preview from './previewPost';
import Image from './image';
import '../assets/css/app.scss'

const App = () => (
    <div>
        <Nav/>
        <div className="">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sell" component={Sell}/>
                <Route path="/image/itemID/:itemID" component={Image}/>
                <Route path="/preview/itemID/:itemID" component={Preview}/>
                <Route path="/item" component={Item}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </div>
);

export default App;