import express from "express";
import usersRoutes from "./usersRoutes.js";
import accountsRoutes from "./accountsRoutes.js";
import transactionsRoutes from "./transactionsRoutes.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/accounts", accountsRoutes);
app.use("/transactions", transactionsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
