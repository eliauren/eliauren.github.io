import React from 'react';

import {
    Col
} from "react-bootstrap";

const EducationCard = ({ data }) => {
    return (
        <Col className="col text-center" >
            <img src={data.image} alt={data.image} />
            <p className="lead text-center" style={{ fontSize: '20px' }}>{data.title}</p>
            <br />
            <p className="lead text-center" style={{ fontSize: '14px' }}>{data.school}</p>
        </Col>
    );
}

export default EducationCard;
