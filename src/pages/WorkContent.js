import React from "react";
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Chip, Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const projects = [
    {
        title: "UMS Application",
        description: "These include an AI-powered chatbot development, channel partner management, student dashboards",
        image: "/ums_application.png",
        tags: ["● Work", "UX Design + Research"],
        link: "https://www.behance.net/gallery/220560281/University-management-system"
    },
    {
        title: "Data Science Course Page",
        description: "Data Science Web Page is a dynamic online platform designed to empower aspiring data scientists and industry professionals",
        image: "/data_science_course_page.png",
        tags: ["● Work", "Service Design + Research"],
        link: "https://www.behance.net/gallery/184077041/Data-science-course-page"
    },
    {
        title: "Learning Management System Redesign",
        description: "Collaboratively spearheaded 3 projects for crafting  ",
        image: "/lms.png",
        tags: ["● Work", "Brand Design + B2C App"],
        link: "https://www.behance.net/gallery/183995463/Learning-management-system-redesign-"
    },
    {
        title: "Pet Connect Landing Page",
        description: "Bot Assistance tool for streamlining payments and service inquiries.",
        image: "/pet_connect.png",
        tags: ["● Side Project", "B2C website  + UX design & research"],
        link: "https://www.behance.net/gallery/184098485/Pet-connect-landing-page"
    },
    {
        title: "Gemify App",
        description: "Crafting Digital First experiences for Ministries in Ontario.",
        image: "/gemify_app.png",
        tags: ["● Side Project", "UX Design"],
        link: "https://www.behance.net/gallery/184157121/Client-Billing-app-for-jewelry-designer"
    }
];

const WorkContent = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 5, px: 2 }}>
            <Box textAlign="center" mb={5}>
                <Typography variant="h4" fontWeight="bold">
                    <span
                        style={{
                            background: "linear-gradient(268.72deg, #58D4DD 0%, #6B47E3 32.07%, #09BC8A 84.57%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Hi, I’m Ajay
                    </span>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" fontSize="1.4rem" mt={2}>
                    I design bold, human-centered products that transform complex ideas into intuitive and inclusive experiences people love smart, accessible, and simple across EdTech, Social, Healthcare, AI, and Fintech for both B2B and B2C products.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card
                            component="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderRadius: 3,
                                boxShadow: 3,
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <CardMedia component="img" height="320" image={project.image} alt={project.title} />
                            <CardContent>
                                <Box display="flex" gap={1} mb={1}>
                                    {project.tags.map((tag, i) => (
                                        <Chip key={i} label={tag} size="medium" sx={{
                                            border: "1px solid",
                                            backgroundColor: i === 0 && tag.includes("Work") ? "#2C2C2C" : i === 0 && tag.includes("Side") ? "#E6E6E6" : "#ffffff", // Customize background
                                            color: i === 0 && tag.includes("Work") ? "#ffffff" : "#000000" // Customize text color
                                        }} />
                                    ))}
                                </Box>
                                <Typography variant="h6" fontWeight="bold">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" mt={1}>
                                    {project.description}
                                </Typography>
                                <Button
                                    size="small"
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ mt: 1, textTransform: "none" }}
                                >
                                    Read More
                                    <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default WorkContent;
