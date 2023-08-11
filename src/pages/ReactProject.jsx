import { Row } from "antd";
import React from "react";
import Template from "../components/Template";
import { reactProj } from "../utils/consts";

const ReactProject = () => {
    return (
        <Row>
            <div className="grid">
                {reactProj.map((p) => (
                    <Template
                        key={p.id}
                        title={p.title}
                        text={p.text}
                        href={p.href}
                        src={p.src}
                        width={p.width}
                    />
                ))}
            </div>
        </Row>
    );
};

export default ReactProject;
