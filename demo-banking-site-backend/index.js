import express from "express";
import usersRoutes from "./usersRoutes.js";
import accountsRoutes from "./accountsRoutes.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/accounts", accountsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
