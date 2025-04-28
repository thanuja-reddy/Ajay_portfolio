// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Work from "./pages/WorkContent";
import About from "./pages/About";

// Create the custom theme
const theme = createTheme({
  typography: {
    fontFamily: "Sora, sans-serif", // Set Sora globally
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap inside ThemeProvider */}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
