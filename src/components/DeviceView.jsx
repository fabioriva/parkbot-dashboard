import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  AccordionList,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@tremor/react";
import Drive from "@/components/DriveKPI";
import Io from "@/components/DeviceIo";
import Motor from "@/components/Motor";

export default function View({ data }) {
  const t = useTranslations("Log");

  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(data.a.motor), [data.a.motor]); // automatically change Tab

  return (
    <TabGroup index={index} onIndexChange={(index) => setIndex(index)}>
      <TabList className="mt-3">
        {data.motors !== undefined && data.motors.length > 0 && (
          <Tab>{t("device-motors")}</Tab>
        )}
        {data.silomat !== undefined && <Tab>Silomat</Tab>}
        {data.vg !== undefined && <Tab>Garage</Tab>}
      </TabList>
      <TabPanels>
        {data.motors !== undefined && data.motors.length > 0 && (
          <TabPanel>
            <AccordionList className="max-w-full mx-auto mt-3">
              {data.drives.map((item, key) => (
                <Drive item={item} key={key} />
              ))}
              {data.motors.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </AccordionList>
          </TabPanel>
        )}
        {data.silomat !== undefined && (
          <TabPanel>
            <AccordionList className="max-w-full mx-auto mt-3">
              {data.silomat.drive && <Drive item={data.silomat.drive} />}
              {data.silomat.motors.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
            </AccordionList>
          </TabPanel>
        )}
        {data.vg !== undefined && (
          <TabPanel>
            <AccordionList className="max-w-full mx-auto mt-3">
              {data.vg.motors.map((item, key) => (
                <Motor item={item} key={key} />
              ))}
              <Accordion>
                <AccordionHeader>
                  <div className="text-sm">light panel</div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="grid grid-cols-6 gap-3">
                    {data.vg.panel.map((item, key) => (
                      <Io item={item} key={key} />
                    ))}
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion>
                <AccordionHeader className="text-sm">
                  <div>sensors</div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="grid grid-cols-6 gap-3">
                    {data.vg.sensors.map((item, key) => (
                      <Io item={item} key={key} />
                    ))}
                  </div>
                </AccordionBody>
              </Accordion>
            </AccordionList>
          </TabPanel>
        )}
      </TabPanels>
    </TabGroup>
  );
}
