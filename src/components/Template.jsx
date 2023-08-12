import { Image } from "antd";
import React from "react";

const Blog = (props) => {
    return (
        <div className="single">
            <Image src={props.src} height="12vh" width={props.width} />
            <div style={{ marginLeft: "2vh" }}>
                <a href={props.href}>{props.title}</a> <br />
                <span>{props.text}</span>
            </div>
        </div>
    );
};

export default Blog;
