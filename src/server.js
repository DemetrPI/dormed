// JS

import express from "express";
import multer from "multer";
import cors from "cors";
import { PORT } from "./config";
import routes from "./routes";

const upload = multer();
const app = express();

app.use(cors());
app.use(upload.none());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});