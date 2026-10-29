import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    project: "BLSPI API",
    status: "online",
    message: "BLSPI backend is running"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    project: "BLSPI",
    network: "Pi Testnet",
    tokenStatus: "Not minted",
    message: "Backend preparation in progress"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`BLSPI API running on port ${PORT}`);
});
