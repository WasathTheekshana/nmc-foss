import app from "./config/app.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello fossnsbm");
});
