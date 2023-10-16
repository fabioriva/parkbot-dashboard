import { useTranslations } from "next-intl";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Text,
} from "@tremor/react";

export default function Statistics({ data }) {
  const t = useTranslations("Statistics.Table");

  const [sky, violet, fuchsia] = ["sky", "violet", "fuchsia"];

  return (
    <div className="mt-3">
      {data.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell />
              <TableHeaderCell>{t("headerEntries")}</TableHeaderCell>
              <TableHeaderCell>{t("headerExits")}</TableHeaderCell>
              <TableHeaderCell>{t("headerTotal")}</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-center">
                  <span className={`font-medium text-${sky}-500`}>
                    {item.entries}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className={`font-medium text-${violet}-500`}>
                    {item.exits}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className={`font-medium text-${fuchsia}-500`}>
                    {item.total}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Text className="border border-dotted p-10 text-center">No data</Text>
      )}
    </div>
  );
}
