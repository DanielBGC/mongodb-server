import livroRouter from "./livrosRoutes.js";
import autorRouter from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({title: 'Hello World'});
  });

  app.use('/api', livroRouter, autorRouter);
};

export default routes;