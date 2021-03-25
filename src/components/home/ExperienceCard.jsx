import React from 'react';

import {
    Col
} from "react-bootstrap";
const ExperienceCard = ({ data }) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt={data.company} />
                <p className="lead">
                    {data.role}
                    <br />
                    {data.date}
                    <br />
                    {data.city}
                </p>

            </div>
        </Col>
    );
}

export default ExperienceCard;
