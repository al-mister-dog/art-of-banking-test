import DrawBill from "./actions/draw-bill";
import Export from "./actions/export";
import Import from "./actions/import";
import RemitBill from "./actions/remit-bill";

export default function ActionForms({
  action,
  player,
}: {
  action: string | null;
  player: any;
}) {
  if (action === null) {
    return <></>;
  }

  if (action === "drawBill") {
    return <DrawBill selected={player} />;
  } else if (action === "remitBill") {
    return <RemitBill selected={player} />;
  } else if (action === "import") {
    return <Import selected={player} />;
  } else if (action === "export") {
    return <Export selected={player} />;
  }
}
