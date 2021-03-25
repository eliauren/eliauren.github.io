import React from 'react';
import EducationCard from "./EducationCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Education = ({ education }) => {
    return (
        <section className="section">
            <Container>
                <Jumbotron fluid className="jumbotron jumbotron-fluid m-0" id="education" style={{ backgroundColor: 'white' }}>
                    <div className="container container-fluid">
                        <div className="row">
                            <div className="col d-lg-inline align-self-center">
                                <h1 className="display-4 pb-4 text-center">{education.heading}</h1>
                                <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'top' }}>
                                    {
                                        education.data.map(data => {
                                            return <EducationCard key={data.title} data={data} />
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
export default Education;
