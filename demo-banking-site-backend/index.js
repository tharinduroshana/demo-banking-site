import express from "express";

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
    res.send("Hi from server!");
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});