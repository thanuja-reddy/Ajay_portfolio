// components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// const navItems = ["Work", "About", "Resume", "LinkedIn"];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <AppBar position="static" elevation={0} sx={{ background: "transparent", color: "#000", boxShadow: "none", marginTop: "10px" }}>
            <Container sx={{ px: 2 }}>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Box display="flex" alignItems="center">
                        <img src="/Vector.png" alt="Logo" width="36" height="37" />
                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <Typography variant="body1" sx={{ textDecoration: "underline", fontWeight: location.pathname === "/" ? "bold" : "normal" }}>Work</Typography>
                        </Link>
                        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                            <Typography variant="body1" sx={{ textDecoration: "underline", fontWeight: location.pathname === "/about" ? "bold" : "normal" }}>About</Typography>
                        </Link>
                        <Link to="https://drive.google.com/file/d/1T1dM1mYN8CoeQ_OiGk7JXn3Dn9XDFgsY/view?usp=drive_link" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                            <Typography variant="body1" sx={{ cursor: "pointer", textDecoration: "underline" }}>Resume</Typography>
                        </Link>
                        <Link to="https://www.linkedin.com/in/ajaymdesign/" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                            <Typography variant="body1" sx={{ cursor: "pointer", textDecoration: "underline" }}>LinkedIn</Typography>
                        </Link>
                    </Box>

                    {/* Hamburger menu for small screens */}
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>
                        <IconButton onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                        <List sx={{ width: 200 }}>
                            <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                                <ListItemText primary="Work" />
                            </ListItem>
                            <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
                                <ListItemText primary="About" />
                            </ListItem>
                            <ListItem button component={Link} to="https://drive.google.com/file/d/1T1dM1mYN8CoeQ_OiGk7JXn3Dn9XDFgsY/view?usp=drive_link" target="_blank" onClick={handleDrawerToggle}>
                                <ListItemText primary="Resume" />
                            </ListItem>
                            <ListItem button component={Link} to="https://www.linkedin.com/in/ajaymdesign/" target="_blank" onClick={handleDrawerToggle}>
                                <ListItemText primary="LinkedIn" />
                            </ListItem>
                        </List>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
