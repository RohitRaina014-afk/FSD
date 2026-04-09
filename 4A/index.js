const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Student Information Server");
});

app.get("/about", (req, res) => {
    res.send("Name: Rohit | Roll No: 23 | Course: Computer Engineering");
});

app.get("/contact", (req, res) => {
    res.send("Email: rohit@example.com");
});

app.post("/register", (req, res) => {
    res.status(201).send("Student Registered Successfully");
});

app.put("/update", (req, res) => {
    res.status(200).send("Student Updated Successfully");
});

app.delete("/delete/:id", (req, res) => {
    res.status(200).send(`Student with ID ${req.params.id} deleted successfully`);
});

// Submit Form Route
app.post("/submit", (req, res) => {
    const { name, branch, year } = req.body;

    res.send(`
        <h1>Submitted Information</h1>
        <p>Name: ${name}</p>
        <p>Branch: ${branch}</p>
        <p>Year: ${year}</p>
    `);
});
app.get("/profile", (req, res) => {
    res.render("profile", {
        name: "Joshua",
        branch: "Computer Engineering",
        year: "SE"
    });
});

// 404 Handler (ALWAYS LAST)
app.use((req, res) => {
    res.status(404).send("Route not found");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.set("view engine", "ejs");