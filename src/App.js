import React from "react";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { Layout } from "antd";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
    return (
        <Layout>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
}

export default App;
