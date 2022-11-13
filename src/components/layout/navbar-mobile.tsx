import { Navbar } from "@mantine/core";
import TabsUi from "../navigation/tabs";

export default function NavbarUi({ mobileOpen }) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!mobileOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <TabsUi />
    </Navbar>
  );
}
