import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionList from './QuestionList';
import Carousel from 'react-bootstrap/Carousel';

// import Jumbotron from 'react-bootstrap/Jumbotron';
export default class Home extends Component {
    render() {
        return (
            <Container>
                {/* <Jumbotron fluid>
                    <Container>
                        <h1>The Ultimate Battle</h1>
                    </Container>
                </Jumbotron> */}
                <Row>
                    <Col sm={8}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 dark"
                                    src="/images/sandwich.jpg"
                                    alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>How to make a sandwich?</h3>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/toiletpaper.jpg"
                                    alt="Second slide"
                                />

                                {/* <Carousel.Caption>
                                    <h3>Kummin päin WC-paperi asetetaan telineeseen?</h3>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/toothpaste.jpg"
                                    alt="Third slide"
                                />

                                {/* <Carousel.Caption>
                                    <h3>What is your toothpaste personality?</h3>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                        <h3 className="header">Ridiculously Stupid Things People Fight About</h3>
                        <p className="paragraph">
                            Sometimes I read these posts floating around the internet that purport to tell you how to make your relationship better: “Tips and Tricks for a Stronger Relationship,” “Learn How to Avoid Arguments With Your Spouse,” “The Top 5 Things You Shouldn’t Be Fighting With Your Spouse Over,” “True Love Doesn’t Bicker and Nag,” “Learn How to Fight Fair,” etc. And I have to wonder, who writes this shit? Are they actually married to a real person, or one of those fictional characters out of a sappy romance novel?                        Reading the stories under the hashtag #StupidThingsCouplesFightAbout, it's evident that we often lose our cool and get angry over complete nonsense. From correctly placing a roll of toilet paper to deciding who is more tired, these situations perfectly describe every relationship ever. Scroll down to chuckle at the stupid disagreement that shouldn't exist in the first place and upvote your favorites.                            
                            <br/><br/>
                            In a perfect world, of course we wouldn’t fight about money. We would have discussed it earlier in our relationship, made out a 25-page family budget plan that would make Congress piss their collective pants, have a 10-year savings nest egg already started, and would respect each other enough not to bitch over somebody, I’m not calling any names here, but somebody paying $100 for some super-special screwdriver drill thingie. Or for Italian leather boots. But I digress…
                            <br/><br/>
                            It’s not a perfect world. And in our imperfect world, real couples bicker and fight over far less important things than what the “experts” would have us believe are healthy and normal.
    
                        </p>
                    </Col>
                    <Col sm={4}><QuestionList /></Col>
                </Row>
            </Container>
        )
    }
}
