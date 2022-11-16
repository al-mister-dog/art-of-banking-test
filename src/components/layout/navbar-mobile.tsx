import { Navbar } from "@mantine/core";
import { useRouter } from "next/router";
import TabsUi from "../navigation/learn-tabs";

export default function NavbarUi({ mobileOpen }) {
  const router = useRouter();
  let currentPage = router.pathname.split("/")[1];
  let defaultValue = "";
  if (currentPage === "lectures" || currentPage === "articles") {
    defaultValue = currentPage;
    return (
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!mobileOpen}
        width={{ sm: 200, lg: 300 }}
      >
        <TabsUi defaultValue={defaultValue} />
      </Navbar>
    );
  }
}
