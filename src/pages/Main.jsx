import { Image, Row } from "antd";
import React from "react";

const Main = () => {
    return (
        <Row justify="center">
            <Image
                src="/assets/my/pfp.jpg"
                id="photo"
                height="calc(100vh - 64px)"
            />
            <div style={{ marginTop: "30vh", marginRight: "6vh" }}>
                <div>
                    <h3 style={{ fontSize: "13vh" }}>Sevastyan Venediktov</h3>
                    <p
                        style={{
                            fontSize: "7vh",
                            marginTop: "5vh",
                        }}
                    >
                        Frontend developer from Voronezh
                    </p>
                </div>
            </div>
        </Row>
    );
};

export default Main;
