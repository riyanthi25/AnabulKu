// // import { Outlet } from "react-router-dom";
// // import Footer from "../components/footer";
// // import Header from "../components/header";

// // export default function LayoutMain() {
// //   return (
// //     <>
// //       <Header />
// //       <Outlet />
// //       <Footer />
// //     </>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { Outlet, useNavigation } from "react-router-dom";
// import { Loader, Overlay } from "@mantine/core";
// import Footer from "../components/footer";
// import Header from "../components/header";

// export default function LayoutMain() {
//   const [loading, setLoading] = useState(false);
//   const navigation = useNavigation();

//   useEffect(() => {
//     setLoading(navigation.state === "loading");
//   }, [navigation]);

//   return (
//     <>
//       <Header />
//       {loading && (
//         <Overlay
//           visible={loading}
//           opacity={0.6}
//           color="#000"
//           blur={2}
//           zIndex={1000}
//         >
//           <Loader size="xl" color="white" />
//         </Overlay>
//       )}
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader, Overlay } from "@mantine/core";
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTop from "../components/scrollToTop";

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

export default function LayoutMain() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(navigation.state === "loading");
  }, [navigation]);

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Header />
      {loading && (
        <div style={overlayStyles}>
          <Overlay visible={loading} opacity={0.6} color="#000" blur={2} />
          <Loader size="xl" color="white" />
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
}
