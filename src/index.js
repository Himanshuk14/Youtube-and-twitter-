import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

import connectDB from "./db/index.js";
import app from "./app.js";
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running in  on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
