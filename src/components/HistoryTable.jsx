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
// import Pagination from "@/components/HistoryTablePagination";

export default function HistoryTable({ data }) {
  // console.log(data);
  const t = useTranslations("Log");

  const defaultPageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * defaultPageSize;
  const endIndex = startIndex + defaultPageSize;

  // function renderPagination() {
  //   const totalPages = Math.ceil(data.length / defaultPageSize);
  //   const startItem = (currentPage - 1) * defaultPageSize + 1;
  //   const endItem = Math.min(currentPage * defaultPageSize, data.length);

  //   return (
  //     <div className="flex justify-between items-center mt-3">
  //       <div className="text-sm">
  //         Showing {startItem} – {endItem} of {data.length}
  //       </div>
  //       <div className="flex">
  //         <button
  //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none"
  //           disabled={currentPage === 1}
  //           onClick={() => setCurrentPage(currentPage - 1)}
  //         >
  //           &larr; Prev
  //         </button>
  //         <button
  //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
  //           disabled={currentPage === totalPages}
  //           onClick={() => setCurrentPage(currentPage + 1)}
  //         >
  //           Next &rarr;
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

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
                      ({item.mode.id})&nbsp;{t(item.mode.key)}
                    </TableCell>
                    <TableCell className="py-3">
                      {t(item.operation.key)}
                    </TableCell>
                    <TableCell className="py-3">
                      {item.alarm !== undefined && (
                        // <Badge color={item.operation.id === 1 ? "rose" : "emerald"}>
                        //   AL{item.alarm.id}
                        // </Badge>
                        <span
                          className={`${
                            item.operation.id === 1
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          AL{item.alarm.id}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="py-3">{item.card}</TableCell>
                    <TableCell className="py-3">{item.stall}</TableCell>
                    <TableCell className="py-3">{item.size}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {/* {renderPagination()} */}
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
