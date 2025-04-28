import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkContent from "./pages/WorkContent";
import AboutContent from "./pages/About";

const PortfolioNew = () => {
    const [activeTab, setActiveTab] = useState("Work");

    const renderContent = () => {
        switch (activeTab) {
            case "Work":
                return <WorkContent />;
            case "About":
                return <AboutContent />;
            default:
                return <div>Coming soon...</div>;
        }
    };

    return (
        <>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <Container maxWidth="lg" sx={{ mt: 5, px: 2 }}>
                {renderContent()}
            </Container>
            <Footer />
        </>
    );
};

export default PortfolioNew;
