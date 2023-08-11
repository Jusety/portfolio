import { Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../utils/consts";

const Projects = () => {
    const navigate = useNavigate();

    return (
        <Row justify="center">
            <div
                className="react-proj proj"
                onClick={() => navigate(routeNames.react)}
            >
                React
            </div>
            <div
                className="js-proj proj"
                onClick={() => navigate(routeNames.js)}
            >
                Javascript
            </div>
        </Row>
    );
};

export default Projects;
