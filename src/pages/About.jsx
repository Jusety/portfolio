import { Row } from "antd";
import React from "react";

const About = () => {
    return (
        <Row justify="center">
            <div style={{ marginTop: "100px" }}>
                <h3 style={{ fontSize: "50px" }}>About me</h3>
                <p
                    style={{
                        fontSize: "40px",
                        width: "700px",
                        marginTop: "15px",
                    }}
                >
                    Sevastyan Venediktov loves programming, travelling and lead
                    a healthy lifestyle and doesn't like to write in 3rd person.
                    He is purposeful, ambitious, good in communication and
                    thinks that the most important thing in team is chatting
                    skills, so they can share their problems and solve theme
                    together.
                </p>
                <h1 style={{ marginTop: "70px", fontSize: "60px" }}>Contact</h1>
                <div className="icons">
                    <a href="https://vk.com/jusety">
                        <i class="fa fa-vk" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/Jusety">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <br />
                    <a href="https://t.me/Jusety">
                        <i class="fa fa-telegram" aria-hidden="true"></i>
                    </a>
                    <a href="mailto:venedikt0v@yandex.ru">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </Row>
    );
};

export default About;
