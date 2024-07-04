import { useState } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { Card, Text } from "@tremor/react";
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
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {t("date")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("device")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("mode")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("operation")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("alarm")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("card")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("stall")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("size")}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => (
                <tr
                  className={clsx(
                    "border-b dark:bg-gray-800 dark:border-gray-800",
                    {
                      "bg-red-100 dark:bg-gray-800 text-red-500":
                        item.operation.id === 1,
                      "bg-green-100 dark:bg-gray-800 text-green-500":
                        item.operation.id === 2,
                      "bg-amber-100 dark:bg-gray-800 text-amber-500":
                        item.operation.id === 3,
                    }
                  )}
                  key={key}
                >
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.date.slice(0, 10) + " " + item.date.slice(11, 19)}
                  </th>
                  <td className="px-6 py-2">{item.device.key}</td>
                  <td className="px-6 py-2">
                    <FunctionMode mode={item.mode} />
                  </td>
                  <td className="px-6 py-2">
                    {item.alarm !== undefined ? (
                      <Alarm alarm={item.alarm} />
                    ) : (
                      t(item.operation.key)
                    )}
                  </td>
                  <td className="px-6 py-2">
                    {item.alarm !== undefined && <span>AL{item.alarm.id}</span>}
                  </td>
                  <td className="px-6 py-2">{item.card}</td>
                  <td className="px-6 py-2">{item.stall}</td>
                  <td className="px-6 py-2">{item.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Pagination
            currentPage={currentPage}
            dataLength={data.length}
            defaultPageSize={defaultPageSize}
            handleChangePage={(value) => setCurrentPage(currentPage + value)}
          /> */}
        </div>
      ) : (
        <Text className="border border-dotted p-10 text-center">No data</Text>
      )}
    </Card>
  );
}
