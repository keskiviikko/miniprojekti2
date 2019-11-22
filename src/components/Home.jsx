import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionList from './QuestionList';
import Carousel from 'react-bootstrap/Carousel';

import Jumbotron from 'react-bootstrap/Jumbotron';
export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron fluid>
                    <Container>
                        <h1>The Ultimate Battle</h1>
                    </Container>
                </Jumbotron>
                <Row>
                    <Col sm={8}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Kinkku vs. Juusto</h3>
                                    <p>Missä järjestyksessä voileipä kasataan? Tuleeko kinkku vai juusto päällimmäiseksi? Kerro mielipiteesi!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Second slide&bg=282c34"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Kummin päin WC-paperi asetetaan telineeseen?</h3>
                                    <p>Ikuinen ja ikoninen ketutuksen aihe. Vaikuta äänestämällä!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Third slide&bg=20232a"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Mitä syödään tänään?</h3>
                                    <p>"Mulle käy kaikki." Vaan eipä käykään. Ratkaise päivällisdilemma äänestämällä.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <h3>Arjen kiistanaiheet</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Iaculis urna id volutpat lacus laoreet non. Urna nunc id cursus metus. Interdum varius sit amet mattis vulputate enim nulla aliquet. Suscipit tellus mauris a diam maecenas. Tristique senectus et netus et malesuada fames ac turpis egestas. Volutpat ac tincidunt vitae semper. Elit pellentesque habitant morbi tristique senectus et netus.
                            <br/>
                            Lectus arcu bibendum at varius vel pharetra vel. Sed pulvinar proin gravida hendrerit lectus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Magna sit amet purus gravida quis blandit turpis cursus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Sed lectus vestibulum mattis ullamcorper velit sed. Sit amet aliquam id diam. Turpis tincidunt id aliquet risus feugiat. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Tristique senectus et netus et malesuada fames. Pellentesque dignissim enim sit amet. Maecenas pharetra convallis posuere morbi leo urna. Eu volutpat odio facilisis mauris. Bibendum enim facilisis gravida neque convallis a. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Mauris vitae ultricies leo integer. Tortor posuere ac ut consequat semper viverra nam. In ornare quam viverra orci sagittis eu.
                            <br/>
                            A arcu cursus vitae congue mauris. Volutpat odio facilisis mauris sit. Tincidunt vitae semper quis lectus nulla at volutpat diam. Nulla aliquet enim tortor at. Etiam tempor orci eu lobortis elementum. Dignissim enim sit amet venenatis urna. Sed lectus vestibulum mattis ullamcorper velit. Nec feugiat nisl pretium fusce id velit. Id ornare arcu odio ut sem nulla. Odio pellentesque diam volutpat commodo sed egestas egestas. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Donec ac odio tempor orci. Sed vulputate odio ut enim blandit volutpat maecenas. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. In massa tempor nec feugiat nisl pretium fusce id. Aenean et tortor at risus viverra adipiscing at. Accumsan lacus vel facilisis volutpat.
                        </p>
                    </Col>
                    <Col sm={4}><QuestionList /></Col>
                </Row>
            </Container>
        )
    }
}
