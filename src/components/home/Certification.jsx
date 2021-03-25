import React from 'react';
import CertificationCard from "./CertificationCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Certification = ({ certifications }) => {
    return (
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white" id="certifications">
                    <h2 className="display-4 mb-5 text-center">
                        {certifications.heading}
                    </h2>
                    <Row>
                        {
                            certifications.data.map(data => {
                                return <CertificationCard key={data.certification} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}

export default Certification;
