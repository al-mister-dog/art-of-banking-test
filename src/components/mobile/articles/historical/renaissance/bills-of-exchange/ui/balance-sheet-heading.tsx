import { Text, useMantineTheme } from "@mantine/core";

export default function BalanceSheetRowHeading({ side, bills, coins }) {
  const theme = useMantineTheme();

  return (
    <div style={{ marginBottom: "1.5px" }}>
      {bills.length > 0 && (
        <div
          style={{
            margin: 0,
            padding: 0,
            textAlign: "left",
            fontSize: 12,
            color: "black",
            fontWeight: 500,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          }}
        >
          <Text style={{ margin: 0, padding: 0 }}>Bills</Text>
          {bills.map((account, i: number) => {
            return account.paid ? (
              <Text key={account.id} style={{ margin: 0, padding: 0 }}>
                <s>
                  <span>
                    {side === "liabilities"
                      ? `Due to ${account.dueTo}: `
                      : `Due from ${account.dueFrom}: `}
                  </span>

                  <span>{account.amount}</span>
                </s>
              </Text>
            ) : (
              <Text key={account.id} style={{ margin: 0, padding: 0 }}>
                <span>
                  {side === "liabilities"
                    ? `Due to ${account.dueTo}: `
                    : `Due from ${account.dueFrom}: `}
                </span>
                <span>{account.amount}</span>
              </Text>
            );
          })}
        </div>
      )}
      {coins.length > 0 && (
        <div
          style={{
            margin: 0,
            padding: 0,
            textAlign: "left",
            fontSize: 12,
            color: "black",
            fontWeight: 500,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          }}
        >
          <Text style={{ margin: 0, padding: 0 }}>Coins</Text>

          {coins.map((account, i: number) => {
            return (
              <Text key={i} style={{ margin: 0, padding: 0 }}>
                <span>{account.coinType}: </span>
                <span>{account.amount}</span>
              </Text>
            );
          })}
        </div>
      )}
    </div>
  );
}
