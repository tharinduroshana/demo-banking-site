import express from "express";
import usersRoutes from "./usersRoutes.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
