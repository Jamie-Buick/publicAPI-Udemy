import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));




app.get("/", (req, res) => {
    res.render("index.ejs");
});
  

app.post("/submit", async (req, res) => {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
        params: { apiKey: 1
                }
    });
      const result = response.data;
      console.log(result);
      res.render("index.ejs", { data: result });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
    
});




app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  