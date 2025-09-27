import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: posts,
    });
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});