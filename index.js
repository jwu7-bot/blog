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

app.post("/post", (req, res) => {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    };
    posts.push(post);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});