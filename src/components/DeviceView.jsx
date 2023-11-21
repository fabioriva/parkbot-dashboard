import { Fragment, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  Flex,
  Text,
  AccordionList,
} from "@tremor/react";
import Drive from "@/components/DriveKPI";
import Garage from "@/components/Garage";
import Motor from "@/components/Motor";
import Silomat from "@/components/Silomat";

export default function View({ data }) {
  const t = useTranslations("Device");

  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(data.motor), [data.motor]); // automatically change Tab

  return (
    <TabGroup index={index} onIndexChange={(index) => setIndex(index)}>
      <TabList className="mt-3 w-full" variant="solid">
        {data.views.map((view, key) => (
          <Tab key={key}>{t(view.name)}</Tab>
        ))}
      </TabList>
      <TabPanels className="mt-3">
        {data.views.map((view, key) => (
          <TabPanel key={key}>
            {view.name === "view-garage" && (
              <Garage panel={view.panel} sensors={view.sensors} />
            )}
            {view.name === "view-sil" && <Silomat sensors={view.sensors} />}
            <AccordionList className="max-w-full mx-auto mt-3">
              {view.drives !== undefined ? (
                view.drives.map((item, key) => <Drive item={item} key={key} />)
              ) : (
                <Fragment />
              )}
              {view.motors !== undefined ? (
                view.motors.map((item, key) => <Motor item={item} key={key} />)
              ) : (
                <Fragment />
              )}
            </AccordionList>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
