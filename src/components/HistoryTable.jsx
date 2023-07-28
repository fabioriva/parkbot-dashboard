import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
} from "@tremor/react";
import Alarm from "@/components/Alarm";
import FunctionMode from "@/components/FunctionMode";
// import Pagination from "@/components/HistoryTablePagination";

export default function HistoryTable({ data }) {
  // console.log(data);
  const t = useTranslations("History.Table");

  const defaultPageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * defaultPageSize;
  const endIndex = startIndex + defaultPageSize;

  return (
    <Card>
      {data.length > 0 ? (
        <>
          <Table className="mt-0">
            <TableHead>
              <TableRow>
                <TableHeaderCell>{t("date")}</TableHeaderCell>
                <TableHeaderCell>{t("device")}</TableHeaderCell>
                <TableHeaderCell>{t("mode")}</TableHeaderCell>
                <TableHeaderCell>{t("operation")}</TableHeaderCell>
                <TableHeaderCell>{t("alarm")}</TableHeaderCell>
                <TableHeaderCell>{t("card")}</TableHeaderCell>
                <TableHeaderCell>{t("stall")}</TableHeaderCell>
                <TableHeaderCell>{t("size")}</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                // .slice(startIndex, endIndex)
                .map((item, key) => (
                  <TableRow key={key}>
                    <TableCell className="py-3">
                      {item.date.slice(0, 10) + " " + item.date.slice(11, 19)}
                    </TableCell>
                    <TableCell className="py-3">{item.device.key}</TableCell>
                    <TableCell className="py-3">
                      {/* ({item.mode.id}) <FunctionMode mode={item.mode} /> */}
                      <Badge
                        color={item.mode.id !== 8 ? "yellow" : "blue"}
                        // icon={item.mode?.id !== 8 && WrenchIcon}
                      >
                        <FunctionMode mode={item.mode} />
                      </Badge>
                    </TableCell>
                    <TableCell className="py-3">
                      {item.alarm !== undefined ? (
                        <Alarm alarm={item.alarm} />
                      ) : (
                        t(item.operation.key)
                      )}
                    </TableCell>
                    <TableCell className="py-3">
                      {item.alarm !== undefined && (
                        <Badge
                          color={item.operation.id === 1 ? "rose" : "emerald"}
                        >
                          AL{item.alarm.id}
                        </Badge>
                        // <span
                        //   className={`${
                        //     item.operation.id === 1
                        //       ? "text-red-500"
                        //       : "text-green-500"
                        //   }`}
                        // >
                        //   AL{item.alarm.id}
                        // </span>
                      )}
                    </TableCell>
                    <TableCell className="py-3">{item.card}</TableCell>
                    <TableCell className="py-3">{item.stall}</TableCell>
                    <TableCell className="py-3">{item.size}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {/* <Pagination
            currentPage={currentPage}
            dataLength={data.length}
            defaultPageSize={defaultPageSize}
            handleChangePage={(value) => setCurrentPage(currentPage + value)}
          /> */}
        </>
      ) : (
        <Text className="border border-dotted p-10 text-center">No data</Text>
      )}
    </Card>
  );
}
