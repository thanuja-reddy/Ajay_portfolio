// components/Footer.js
import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

const Footer = () => {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("ajaym.design@gmail.com");
        alert("Email copied!");
    };

    return (
        <Box sx={{ mt: 5, background: "#111", color: "#fff", py: 6, borderRadius: "25px 25px 0 0" }}>
            <Container maxWidth="lg">
                <Typography variant="h6" mb={1}>
                    Ajay
                </Typography>

                <Typography variant="h6" mb={2}>
                    Happy to connect anytime. 😁
                </Typography>

                <Typography variant="body1" mb={4}>
                    Get in touch below or directly at{" "}
                    <a href="mailto:ajaym.design@gmail.com" style={{ color: "#90caf9", textDecoration: "none" }}>
                        ajaym.design@gmail.com
                    </a>
                </Typography>

                <Box display="flex" alignItems="center" gap={4}>
                    <Typography variant="body2">
                        <a href="/" style={{ color: "#90caf9", textDecoration: "none" }}>
                            Home
                        </a>
                    </Typography>
                    <Typography variant="body2">
                        <a href="https://drive.google.com/file/d/1IDHOItSnEX2u3ftyGoyXCnIhq1ln39O2/view?usp=sharing" target="_blank" style={{ color: "#90caf9", textDecoration: "none" }}>
                            <DescriptionIcon sx={{ fontSize: 13 }} /> Resume
                        </a>
                    </Typography>
                    <Typography variant="body2">
                        <Box component="a" href="https://www.linkedin.com/in/ajaymdesign/" target="_blank" rel="noopener noreferrer" sx={{ color: "#ffffff" }}>
                            <LinkedInIcon sx={{ fontSize: 24 }} />
                        </Box>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
