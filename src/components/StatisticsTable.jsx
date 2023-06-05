import { useTranslations } from "next-intl";
import {
  // Badge,
  Table,
  // TableHead,
  // TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Text,
} from "@tremor/react";

export default function Statistics({ colors, data }) {
  const t = useTranslations("Statistics.Table");

  return (
    <div className="mt-3">
      {data.length > 0 ? (
        <Table className="border">
          {/* <TableHead>
            <TableRow>
              <TableHeaderCell />
              <TableHeaderCell>{t("headerEntries")}</TableHeaderCell>
              <TableHeaderCell>{t("headerExits")}</TableHeaderCell>
              <TableHeaderCell>{t("headerTotal")}</TableHeaderCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {/* {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="p-1 text-center">
                  <Badge color={colors[0]}>{item.entries}</Badge>
                </TableCell>
                <TableCell className="p-1 text-center">
                  <Badge color={colors[1]}>{item.exits}</Badge>
                </TableCell>
                <TableCell className="p-1 text-center">
                  <Badge color={colors[2]}>{item.total}</Badge>
                </TableCell>
              </TableRow>
            ))} */}
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className={`text-${colors[0]}-500`}>
                  {t("entries", { nr: item.entries })}
                </TableCell>
                <TableCell className={`text-${colors[1]}-500`}>
                  {t("exits", { nr: item.exits })}
                </TableCell>
                <TableCell className={`text-${colors[2]}-500`}>
                  {t("total", { nr: item.total })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Text className="border p-10 text-center">No data</Text>
      )}
    </div>
  );
}
