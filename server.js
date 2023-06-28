import express from "express";
import db from "./src/config/dbConnect.js";
import routes from "./src/routes/index.js";
const port = process.env.PORT || 3000;

db.on("error", console.error.bind(console, "Conection error: "));
db.once("open", () => {
  console.log("Successfuly connected to database!");
});

const app = express();
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})