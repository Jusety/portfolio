import { Image, Row } from "antd";
import React from "react";

const Main = () => {
    return (
        <Row justify="center">
            <Image
                src="/assets/my/I-hpQqE8SF4.jpg"
                id="photo"
                height="calc(100vh - 64px)"
            />
            <div style={{ marginTop: 250, marginRight: 80 }}>
                <div>
                    <h3 style={{ fontSize: 200 }}>Sevastyan Venediktov</h3>
                    <p style={{ fontSize: 120, marginTop: 200 }}>
                        Frontend developer from Voronezh
                    </p>
                </div>
            </div>
        </Row>
    );
};

export default Main;
