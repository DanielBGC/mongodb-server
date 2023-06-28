import bookRouter from "./booksRoutes.js";
import authorRouter from "./authorsRoutes.js";

function middleware(req, res, next) {
  const protocol = req.secure ? 'https' : 'http';
  const url = `${req.method} - ${protocol}://${req.headers.host}${req.originalUrl}`;
  console.log(url)
  console.log(req.body)
  console.log(req.params)
  next();
}

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({title: 'Hello World'});
  });

  app.use('/api', middleware, bookRouter, authorRouter);
};

export default routes;