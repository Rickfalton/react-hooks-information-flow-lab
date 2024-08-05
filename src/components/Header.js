import React, { useState } from "react";
import NavBar from "./NavBar"; // Adjust the path as necessary
import Home from "./Home";     // Adjust the path as necessary
import About from "./About";   // Adjust the path as necessary
import ArticleList from "./ArticleList"; // Import the ArticleList component
import Header from "./Header"; // Import the Header component

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const blogName = "My Awesome Blog";
    const aboutText = "This is a blog about amazing topics.";

    // Example array of articles
    const articles = [
        { title: "First Post", date: "March 10, 2024", preview: "This is a preview of the first post." },
        { title: "Second Post", preview: "This is a preview of the second post." }, // No date provided, will use default
        { title: "Third Post", date: "April 1, 2024", preview: "This is a preview of the third post." }
    ];

    const handleDarkModeClick = () => {
        setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode
    };

    return (
        <div className={isDarkMode ? "dark-mode" : ""}>
            <Header name={blogName} onDarkModeClick={handleDarkModeClick} /> {/* Pass props to Header */}
            <NavBar />
            <Home />
            <About about={aboutText} />
            <ArticleList articles={articles} /> {/* Pass articles to ArticleList */}
        </div>
    );
};

export default App;
