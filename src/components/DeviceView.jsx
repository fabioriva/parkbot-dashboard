import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  AccordionList,
} from "@tremor/react";
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
      </TabList>
      <TabPanels>
        {data.motors !== undefined && data.motors.length > 0 && (
          <TabPanel>
            <AccordionList className="max-w-full mx-auto mt-3">
              {data.motors.map((item, key) => (
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
      </TabPanels>
    </TabGroup>
  );
}
