import React, { useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { AppShell, Loader, Overlay } from "@mantine/core";
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTop from "../components/scrollToTop";
import { useDisclosure } from "@mantine/hooks";

export default function LayoutMain() {
  const [opened, { toggle }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(navigation.state === "loading");
  }, [navigation]);

  return (
    <AppShell
      header={{ height: 83 }}
      navbar={{ width: 300, breakpoint: "md", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <AppShell.Main style={{ padding: 0 }}>
        <ScrollToTop></ScrollToTop>
        {loading && (
          <Box
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <Overlay visible={loading} opacity={0.6} color="#000" blur={2} />
            <Loader size="xl" color="white" />
          </Box>
        )}
        <Outlet />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
