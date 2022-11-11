import DrawBill from "./actions/draw-bill";
import Export from "./actions/export";
import Import from "./actions/import";
import RemitBill from "./actions/remit-bill";

export default function ActionForms({
  action,
  player,
  setOpened,
}: {
  action: string | null;
  player: any;
  setOpened: (v: any) => void;
}) {
  if (action === null) {
    return <></>;
  }

  if (action === "drawBill") {
    return <DrawBill selected={player} setOpened={setOpened}/>;
  } else if (action === "remitBill") {
    return <RemitBill selected={player} setOpened={setOpened}/>;
  } else if (action === "import") {
    return <Import selected={player} setOpened={setOpened}/>;
  } else if (action === "export") {
    return <Export selected={player} setOpened={setOpened}/>;
  }
}
