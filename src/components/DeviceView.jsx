import { TabList, Tab, TabGroup, TabPanels, TabPanel } from "@tremor/react";
import Motor from "@/components/Motor";
// import Silomat from "@/components/Silomat";

export default function View({ data }) {
  // console.log(data);
  // const actuators = [
  //   {
  //     name: "Motor 3",
  //     io: data.e.slice(6, 9),
  //     status: "Locked",
  //     encoders: [],
  //   },
  // ];
  // const motors = [
  //   {
  //     name: "Motor 1",
  //     io: data.e.slice(0, 2),
  //     status: "Going up",
  //     encoders: data.b.slice(2, 3),
  //   },
  // ];

  return (
    <TabGroup>
      <TabList className="mt-3">
        {data.main.length > 0 && <Tab>Main</Tab>}
        {data.silomat !== undefined && <Tab>Silomat</Tab>}
        {data.more.length > 0 && <Tab>More</Tab>}
      </TabList>
      <TabPanels>
        {data.main.length > 0 && (
          <TabPanel>
            <div className="mt-3">
              {data.main.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </div>
          </TabPanel>
        )}

        {data.silomat !== undefined && (
          <TabPanel>
            <div className="mt-3">
              {/* <Silomat data={data.silomat} /> */}
              {data.silomat.motors.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </div>
          </TabPanel>
        )}
        {data.more.length > 0 && (
          <TabPanel>
            <div className="mt-3">
              {data.more.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </div>
          </TabPanel>
        )}
        {/* <TabPanel>
          <div className="mt-3">
            {data.b.map((item, key) => (
              <Position item={item} key={key} />
            ))}
            {data.main.length > 0 &&
              data.main.map((item, key) => <Motor item={item} key={key} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-3">
            {data.more.map((item, key) => (
              <Motor item={item} key={key} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-3">
            {data.e.length > 0 && <Silomat data={data.e} />}
            {data.silomat !== undefined && <Silomat data={data.silomat} />}
          </div>
        </TabPanel> */}
      </TabPanels>
    </TabGroup>
  );
}
