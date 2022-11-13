import { Tabs } from "@mantine/core";
import LecturesContent from "./nav-content/lectures-list-desktop";
import ArticlesContent from "./nav-content/articles-list-desktop";
import Link from "next/link";

export default function TabsUi() {
  return (
    <Tabs variant="outline" defaultValue="lectures">
      <Tabs.List>
        <Tabs.Tab value="lectures">
          <Link href="/lectures">Lectures</Link>
        </Tabs.Tab>
        <Tabs.Tab value="articles">
          <Link href="/articles">Articles</Link>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="lectures" pt="xs">
        <LecturesContent />
      </Tabs.Panel>
      <Tabs.Panel value="articles" pt="xs">
        <ArticlesContent />
      </Tabs.Panel>
    </Tabs>
  );
}
