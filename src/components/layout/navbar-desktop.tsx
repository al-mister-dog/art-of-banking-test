import { Navbar } from "@mantine/core";
import { useRouter } from "next/router";
import TabsLearn from "../navigation/learn-tabs";

export default function NavbarUi({ opened }) {
  const router = useRouter();
  let currentPage = router.pathname.split("/")[1];
  let defaultValue = "";
  if (currentPage === "lectures" || currentPage === "articles") {
    defaultValue = currentPage;
    return (
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 270 }}
        style={{ position: "sticky", top: 0, left: 0 }}
      >
        <TabsLearn defaultValue={defaultValue}/>
      </Navbar>
    );
  }
  return null;
}
