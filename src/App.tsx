import { Box } from "@mui/material";
import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (WebApp.initDataUnsafe?.user) {
      console.log(WebApp.initDataUnsafe.user);
      WebApp.showAlert(`Welcome ${WebApp.initDataUnsafe.user.username}`);
    } else {
      alert("Please login via Telegram");
    }
  }, []);

  return (
    <Box width={"100vw"} height={"100vh"}>
      <Box
        sx={{
          background: `url(/assets/home.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        height={"100%"}
        width={"100%"}
      ></Box>
    </Box>
  );
};

export default App;
