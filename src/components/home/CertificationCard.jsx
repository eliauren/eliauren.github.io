import React from 'react';

import {
    Col
} from "react-bootstrap";
const CertificationCard = ({ data }) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.certficationlogo} alt="" />
                <p className="lead">
                    {data.title}
                    <br />
                    {data.expirationdate}
                </p>

            </div>
        </Col>
    );
}

export default CertificationCard;
