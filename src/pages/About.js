// src/pages/About.jsx
import React from "react";
import {
    Container,
    Grid,
    Box,
    Avatar,
    Paper,
    Typography
} from "@mui/material";

const experiences = [
    {
        company: "ShepHertz Technologies",
        time: "Jan 2024 – Present",
        location: "Bengaluru, India",
        description: `Currently working on a comprehensive project for Jain University, which involves developing and implementing several key modules. These include an AI-powered chatbot development, channel partner management, student dashboards, fee payment systems, lead management, budget tracking, content authoring tools, and document verification dashboards.`,
    },
    {
        company: "Basal Analytics",
        time: "Mar 2022 – Dec 2023",
        location: "Bengaluru, India",
        description: `Edu-tech projects : Designed an intuitive and visually appealing interface for the educational and training content management system, ensuring seamless creation, organization, distribution, and tracking of diverse learning materials, courses, and assessments within a centralized hub.   

        B2B projects : Worked on a B2B project called QuID Cash, a fintech platform specializing in anchor-led supply chain financing solutions. The platform enables businesses to secure loans with zero percent interest, supporting seamless cash flow management within the supply chain ecosystem.`    },
    {
        company: "Zoho Corporation",
        time: "Sep 2021 – Feb 2021",
        location: "Chennai, India",
        description: `I enhanced Aaratai app by streamlining file-sharing, optimizing the status bar, implementing pinned messages, and improving search functionality for a better user experience.`,
    },
];

const About = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 5, px: 2 }}>
            {/* 1) ABOUT ME */}
            <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
                {/* Avatar + Name Bubble */}
                <Grid item xs={12} md={4}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Avatar
                            src="/Ajay's.png" // ← replace with your image
                            alt="Ajay"
                            sx={{ width: 330, height: 340, objectFit: "cover", borderRadius: "8px" }} />
                        {/* <Paper
                            elevation={1}
                            sx={{
                                mt: 2,
                                px: 3,
                                py: 1,
                                borderRadius: "20px",
                                backgroundColor: "#E3F2FD",
                            }}
                        >
                            <Typography variant="h6" fontWeight="medium">
                                Ajay
                            </Typography>
                        </Paper> */}
                    </Box>
                </Grid>

                {/* About Text */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" mt={1}>
                        About me
                    </Typography>
                    <Paper
                        elevation={1}
                        sx={{
                            mt: 2,
                            p: 3,
                            backgroundColor: "#F5F5F5",
                            borderRadius: 2,
                        }}
                    >
                        <Typography paragraph sx={{ lineHeight: 1.6 }}>
                            Over the years, I’ve contributed to a wide range of design
                            projects spanning sectors like edtech, fintech, and e‑commerce.
                        </Typography>
                        <Typography paragraph sx={{ lineHeight: 1.6 }}>
                            My journey has taken me through diverse work environments—from
                            fast‑paced startups to structured agencies and large‑scale global
                            firms—each sharpening my skills in unique ways.
                        </Typography>
                        <Typography paragraph sx={{ lineHeight: 1.6 }}>
                            Outside of work, I’m passionate about fitness and always on the
                            lookout for the next great food spot or travel destination.
                            If you’re exploring creative collaboration or have an opportunity
                            in mind, I’d love to connect!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* 2) EXPERIENCE */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Experience
            </Typography>

            {experiences.map((exp, idx) => (
                <Paper
                    key={idx}
                    // elevation={1}
                    sx={{
                        p: 3,
                        mt: 2,
                        mb: 3,
                        borderRadius: 2,
                        backgroundColor: "#ffffff",
                        border: "1px solid #B7B7B7",
                    }}
                >
                    <Grid container spacing={2}>
                        {/* Left Column: Company, Time, Location */}
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {exp.company}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                {exp.time}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                                {exp.location}
                            </Typography>
                        </Grid>

                        {/* Right Column: Description */}
                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="body1"
                                sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
                            >
                                {exp.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Container>
    );
};

export default About;
