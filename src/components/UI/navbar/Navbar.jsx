import { Button, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../../utils/consts";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Row justify="start">
            <Button id="nav-btn" onClick={() => navigate(routeNames.main)}>
                HOME
            </Button>
            <Button
                id="nav-btn"
                onClick={() => navigate(routeNames.projects)}
                style={{ marginLeft: "auto" }}
            >
                PROJECTS
            </Button>
            <Button id="nav-btn" onClick={() => navigate(routeNames.about)}>
                ABOUT
            </Button>
        </Row>
    );
};

export default Navbar;
