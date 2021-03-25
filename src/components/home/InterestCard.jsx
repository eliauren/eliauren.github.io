import React from 'react';

import {
    Col
} from "react-bootstrap";

const InterestCard = ({ data }) => {
    return (
        <Col className="col text-center" >
            <p className="lead text-center" style={{ fontSize: '28px' }}>{data.title}</p>
            <img src={data.image} alt={data.title} />
            <p className="lead text-center">
                {data.description}
            </p>
        </Col>
    );
}

export default InterestCard;
