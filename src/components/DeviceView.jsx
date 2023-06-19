import {
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  AccordionList,
} from "@tremor/react";
import Motor from "@/components/Motor";
// import Silomat from "@/components/Silomat";

export default function View({ data }) {
  // console.log(data);
  return (
    <TabGroup>
      <TabList className="mt-3">
        {data.main !== undefined && data.main.length > 0 && <Tab>Main</Tab>}
        {data.silomat !== undefined && <Tab>Silomat</Tab>}
        {data.more !== undefined && data.more.length > 0 && <Tab>More</Tab>}
      </TabList>
      <TabPanels>
        {data.main !== undefined && data.main.length > 0 && (
          <TabPanel>
            <AccordionList className="max-w-full mx-auto mt-3">
              {data.main.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </AccordionList>
          </TabPanel>
        )}

        {data.silomat !== undefined && (
          <TabPanel>
            <AccordionList className="max-w-full mx-auto mt-3">
              {data.silomat.motors.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </AccordionList>
          </TabPanel>
        )}
        {data.more !== undefined && data.more.length > 0 && (
          <TabPanel>
            <AccordionList className="max-w-full mx-auto mt-3">
              {data.more.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </AccordionList>
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
