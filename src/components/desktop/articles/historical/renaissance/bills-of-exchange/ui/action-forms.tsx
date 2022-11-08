import Export from "./actions/export";
import Import from "./actions/import";

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

  //   if (action === "drawBill") {
  //     return <DrawBill player={player} />;
  //   } else if (action === "remitBill") {
  //     return <RemitBill player={player} />;
  //   } else
  if (action === "import") {
    return <Import selected={player} />;
  } else if (action === "export") {
    return <Export selected={player} />;
  }
}
