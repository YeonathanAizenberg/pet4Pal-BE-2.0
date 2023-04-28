import express from "express";
const app = express();
app.get('/', (req, res) => {
    res.json({ message: "GET METHOD TEST" });
});
app.listen("3001", () => {
    console.log("Server Running??");
});
//# sourceMappingURL=index.js.map