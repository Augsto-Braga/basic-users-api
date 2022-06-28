import { config } from "./config";
import { app } from "./server";

app.listen(config.PORT, () => {
  console.log(`server is running on port ${config.PORT}`);
});
