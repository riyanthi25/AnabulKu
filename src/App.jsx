import React from "react";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { router } from "./router";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Josefin Sans, sans-serif",
        headings: { fontFamily: "Josefin Sans, sans-serif" },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
