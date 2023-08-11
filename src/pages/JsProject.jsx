import { Row } from "antd";
import React from "react";
import Template from "../components/Template";
import { jsProj } from "../utils/consts";

const JsProject = () => {
    return (
        <Row>
            <div className="grid">
                {jsProj.map((p) => (
                    <Template
                        key={p.id}
                        src={p.src}
                        href={p.href}
                        text={p.text}
                        title={p.title}
                        width={p.width}
                    />
                ))}
            </div>
        </Row>
    );
};

export default JsProject;
