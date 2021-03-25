import React from 'react';
import InterestCard from "./InterestCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Interest = ({ interests }) => {
    return (
        <section className="section">
            <Container>
                <Jumbotron fluid className="jumbotron jumbotron-fluid m-0" id="interests" style={{ backgroundColor: 'white' }}>
                    <div className="container container-fluid">
                        <div className="row">
                            <div className="col d-lg-inline align-self-center">
                                <h1 className="display-4 pb-4 text-center">{interests.heading}</h1>
                                <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'top' }}>
                                    {
                                        interests.data.map(data => {
                                            return <InterestCard key={data.title} data={data} />
                                        })
                                    }
                                </Row>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </Container>
        </section>
    );
};
export default Interest;
