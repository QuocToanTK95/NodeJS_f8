import newsRouter from "./news.js";

function route(app) {
  app.use("/news", newsRouter);

  app.get("/", (req, res) => {
    res.render("home");
  });
}

export default route;
