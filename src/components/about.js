import React, { Component, Fragment } from 'react'
import CSUF from '../assets/images/me.png'
import Yellow from '../assets/images/yellow.png'
import Card from '../assets/images/edit.png'
import Count from '../assets/images/fish_count.png'
import Test from '../assets/images/sample.png'
import '../assets/css/about.scss'

class About extends Component {
    
    render() {
        return (
            <Fragment>
                <div className="main container">
                    <h1>Tiffany Kim</h1>
                    <h2><a href="https://www.Tiffanyykim.com/">Portfolio Website</a></h2>
                    <p>I love to build, design and problem solve. Please check out my portfolio website to see my projects and work.</p>
                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={CSUF} alt="CSUF" />
                                <h3>Hello there!</h3>
                                <p>My name is Tiffany Kim and I graduated with a Bachelors Degree 
                                    from California State Univeristy, Fullerton Fall,2017. 
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={Yellow}  alt="Fish" />
                                <h3>Hobbies</h3>
                                <p>When I am not coding I love to fish. I love sportfishing
                                    for yellow tail. 
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={Test}  alt="Nature" />
                                <h3>About me</h3>
                                <p>I like to combine my passion for coding, psychology, and design into all my projects.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={Count}  alt="Fish Notes" />
                                <h3>Latest Personal Project</h3>
                                <p><a href="https://github.com/Tkim43/fish-notes-react">Fish Notes</a></p>
                                <p><a href="https://github.com/Tkim43/fish-notes-react">GitHub</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <img src={Card}  alt="cards" />
                        <h3>Latest Group Work</h3>
                        <p><a href="https://www.mypocketcards.com/">My pocket cards</a></p>
                        <p><a href="https://github.com/Learning-Fuze/c918_uberquizlet">GitHub</a></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default About