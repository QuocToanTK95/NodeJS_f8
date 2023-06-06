class NewController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("NEWS DETAIL!!!");
  }
}

export default new NewController();
