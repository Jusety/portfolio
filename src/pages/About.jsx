import { Row } from "antd";
import React from "react";

const About = () => {
    return (
        <Row justify="center">
            <div style={{ marginTop: "10vh" }}>
                <h3 style={{ fontSize: "8vh" }}>About me</h3>
                <p
                    style={{
                        fontSize: "3.5vh",
                        width: "60vw",
                        marginTop: "1vh",
                    }}
                >
                    Sevastyan Venediktov loves programming, travelling and lead
                    a healthy lifestyle and doesn't like to write in 3rd person.
                    He is purposeful, ambitious, good in communication and
                    thinks that the most important thing in team is chatting
                    skills, so they can share their problems and solve theme
                    together.
                </p>
                <h1 style={{ marginTop: "5vh", fontSize: "10vh" }}>Contact</h1>
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
