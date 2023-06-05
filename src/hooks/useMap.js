import { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "@tremor/react";
import { useData } from "src/hooks/useWebSocket";
import OccupancyKPI from "@/components/Occupancy";
import Level from "@/components/Map";

export function useMap({ aps, json, token, user }) {
  console.log(aps, json, token, user);
  const [map, setMap] = useState(json);
  const [view, setView] = useState("1");

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
      <Dropdown
        className="mt-1"
        onValueChange={setView}
        // placeholder="Select view"
        value={view}
      >
        <DropdownItem value="1" text="Numbers" />
        <DropdownItem value="2" text="Cards" />
        <DropdownItem value="3" text="Sizes" />
      </Dropdown>
    </div>
  );

  return {
    // arrayLevels,
    Levels,
    Occupancy,
    View,
  };
}
