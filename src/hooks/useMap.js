import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Select, SelectItem } from "@tremor/react";
import { useData } from "src/hooks/useWebSocket";
import OccupancyKPI from "@/components/Occupancy";
import Level from "@/components/Map";

export function useMap({ aps, json, token, user }) {
  // console.log(aps, json, token, user);
  const [map, setMap] = useState(json);
  const [view, setView] = useState("1");

  const t = useTranslations("Map.SelectView");

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/map`;
  const { data } = useData(url, {
    initialData: map,
  });
  useEffect(() => setMap(data), [data]);

  let Levels = [];
  Levels = map.levels.map((item, key) => (
    <Level
      aps={aps}
      definitions={map.definitions}
      level={item}
      // stallStatus={map.definitions.stallStatus}
      token={token}
      user={user}
      view={view}
      key={key}
    />
  ));

  // const Levels = (
  //   <Fragment>
  //     {map.levels.map((item, key) => (
  //       <Map
  //         aps={props.aps}
  //         level={item}
  //         stallStatus={map.definitions.stallStatus}
  //         view={view}
  //         key={key}
  //       />
  //     ))}
  //   </Fragment>
  // );

  const Occupancy = <OccupancyKPI aps={aps} occupancy={map.occupancy} />;

  const View = (
    <div className="max-w-sm">
      <Select
        className="mt-1"
        onValueChange={setView}
        // placeholder="Select view"
        value={view}
      >
        <SelectItem value="1">{t("card")}</SelectItem>
        <SelectItem value="2">{t("number")}</SelectItem>
        <SelectItem value="3">{t("size")}</SelectItem>
      </Select>
    </div>
  );

  return {
    // arrayLevels,
    Levels,
    Occupancy,
    View,
  };
}
