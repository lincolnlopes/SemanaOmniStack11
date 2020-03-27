const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
