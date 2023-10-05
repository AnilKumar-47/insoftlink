const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // Define dynamic data for the page
  const dynamicData = {
    pageTitle: "SCHOOLAURA PROVIDE SMART STUDY AND SCHOOL MANAGEMENT SOLUTION",
    imageUrl:
      "https://schoolaura.com/Content/new_assets/images/school_aura_app.jpg", // Change this to the dynamic image URL
    // Add other dynamic data as needed
    pageName: "Home Page",
  };

  // Render the template and pass the data
  res.render("index", dynamicData);
});
app.get("/blog", (req, res) => {
  const dynamicData = {
    pageTitle: "Get Daily Updates of SchoolAura",
    imageUrl:
      "https://admin.schoolaura.com//Content/images/blog/20210761103000_536.jpg", // Change this to the dynamic image URL
    // Add other dynamic data as needed
    pageName: "Blog Page",
  };

  // Render the template and pass the data
  res.render("index", dynamicData);
});
app.get("/about", (req, res) => {
  const dynamicData = {
    pageTitle:
      "Contact Us for Online Education or School Management Software Solution",
    imageUrl:
      "https://schoolaura.com/Content/new_assets/images/contact-us/team-2.jpg", // Change this to the dynamic image URL
    // Add other dynamic data as needed
    pageName: "About Us",
  };

  // Render the template and pass the data
  res.render("index", dynamicData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
