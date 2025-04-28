import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, Chip, Box, Button, IconButton } from "@mui/material";

const projects = [
    {
        title: "UMS Application",
        description: "These include an AI-powered chatbot development, channel partner management, student dashboards",
        image: "/Group 1000004361.png",
        tags: ["Work", "UX Design + Research"],
    },
    {
        title: "Data Science Course Page",
        description: "Data Science Web Page is a dynamic online platform designed to empower aspiring data scientists and industry professionals",
        image: "/Frame 1000003214.png",
        tags: ["Work", "Service Design + Research"],
    },
    {
        title: "Learning Management System Redesign",
        description: "Collaboratively spearheaded 3 projects for crafting  ",
        image: "/Frame 1000003215.png",
        tags: ["Work", "Brand Design + B2C App"],
    },
    {
        title: "Pet Connect Landing Page",
        description: "Bot Assistance tool for streamlining payments and service inquiries.",
        image: "/Frame 1000003216.png",
        tags: ["Side Project", "Chatbot"],
    },
    {
        title: "Gemify App",
        description: "Crafting Digital First experiences for Ministries in Ontario.",
        image: "/Frame 1000003217.png",
        tags: ["Side Project", "UX Design"],
    }
];

const Portfolio = () => {

    // const [expandedIndex, setExpandedIndex] = useState(null);

    // const toggleReadMore = (index) => {
    //     setExpandedIndex(expandedIndex === index ? null : index);
    // };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("ajaym.design@gmail.com");
        alert("Email copied!");
    };
    return (
        <>
            <AppBar position="static" elevation={0} sx={{ background: "transparent", color: "#000", boxShadow: "none", py: 1 }}>
                <Container sx={{ px: 2 }}>
                    <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                        {/* Logo */}
                        <Box display="flex" alignItems="center">
                            <img src="/Vector.png" alt="Logo" width="30" height="37" />
                        </Box>

                        {/* Navigation Links */}
                        {/* <Box display="flex" gap={3}>
                            {["Work", "Blog", "About"].map((item, index) => (
                                <Typography key={index} variant="body1" sx={{ cursor: "pointer", "&:hover": { color: "#4CAF50" } }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box> */}
                        {/* Navigation Links */}
                        <Box display="flex" gap={3}>
                            {["Work", "About", "Resume", "LinkedIn"].map((item, index) => (
                                <Typography key={index} variant="body1" sx={{ cursor: "pointer", "&:hover": { color: "#4CAF50" } }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ mt: 5, px: 2 }}> {/* Added px:2 for consistent alignment */}
                {/* Header Section */}
                <Box textAlign="center" mb={5}>
                    <Typography variant="h4" fontWeight="bold">
                        <span style={{ background: "linear-gradient(268.72deg, #58D4DD 0%, #6B47E3 32.07%, #09BC8A 84.57%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Hi, I’m Ajay
                        </span>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" textAlign="center" fontSize="1.3rem" mt={2}>
                        A product designer with 3+ YOE building products across Edutech, Social Media, Healthcare, AI and Aviation. Expert in design systems and accessibility-focused design.                    </Typography>
                </Box>

                {/* Project Cards */}
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                                <CardMedia component="img" height="320" width="500" image={project.image} alt={project.title} />
                                <CardContent>
                                    <Box display="flex" gap={1} mb={1}>
                                        {project.tags.map((tag, i) => (
                                            <Chip key={i} label={tag} size="small" color={i === 0 ? "primary" : "default"} />
                                        ))}
                                    </Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" mt={1}>
                                        {project.description}
                                    </Typography>
                                    {/* Show "Read More" button */}
                                    <Button
                                        size="small"
                                        sx={{ mt: 1, textTransform: "none" }}
                                    // onClick={() => toggleReadMore(index)}
                                    >
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Footer Section */}
            <Box sx={{ mt: 5, background: "#111", color: "#fff", py: 6, borderRadius: "25px 25px 0 0" }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" fontStyle="italic">
                        Ajay
                    </Typography>
                    <Typography variant="h6" fontStyle="italic">
                        Happy to connect anytime. 😁
                    </Typography>
                    <Typography variant="h6" mt={1}>
                        Get in touch below or directly at <a href="ajaym.design@gmail.com">ajaym.design@gmail.com</a>
                    </Typography>
                    <Typography variant="h6" mt={1}>
                        <a>Home</a> <a>Resume</a> <a>LinkedIn</a>
                    </Typography>
                    {/* <Box mt={3} display="flex" justifyContent="left" alignItems="center" gap={1}>
                        <Typography variant="body1">ajaym.design@gmail.com</Typography>
                        <IconButton onClick={handleCopyEmail} sx={{ color: "#fff" }}>
                            <ContentCopyIcon />
                        </IconButton>
                    </Box> */}
                </Container>
            </Box>

        </>
    );
};

export default Portfolio;
