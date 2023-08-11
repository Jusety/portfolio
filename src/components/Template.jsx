import { Image } from "antd";
import React from "react";

const Blog = (props) => {
    return (
        <div className="single">
            <Image src={props.src} height="150px" width={props.width} />
            <div style={{ marginLeft: "20px" }}>
                <a href={props.href}>{props.title}</a> <br />
                <span>{props.text}</span>
            </div>
        </div>
    );
};

export default Blog;
