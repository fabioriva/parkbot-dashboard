import { Fragment, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  AccordionList,
  Flex,
  Text,
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

  useEffect(() => setIndex(data.motor), [data.motor]); // automatically change Tab

  return (
    <TabGroup index={index} onIndexChange={(index) => setIndex(index)}>
      <TabList className="mt-3 w-full">
        {data.views.map((item, key) => (
          <Tab key={key}>{t(item.name)}</Tab>
        ))}
      </TabList>
      <TabPanels className="mt-3">
        {data.views.map((view, key) => (
          <TabPanel key={key}>
            <AccordionList className="max-w-full mx-auto mt-3">
              {/* <Accordion className="text-sm">
                <AccordionHeader>Header</AccordionHeader>
                <AccordionBody>Body</AccordionBody>
              </Accordion> */}
              <Accordion />
              {view.bits !== undefined ? (
                view.bits.map((item, key) => (
                  <Accordion key={key}>
                    <AccordionHeader>
                      <Flex>
                        <div className="text-sm">{t(item.name)}</div>
                        <Text className="text-right w-[30%]">
                          {t(item.message)}
                        </Text>
                      </Flex>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="grid grid-cols-6 gap-3">
                        {item.data.map((item, key) => (
                          <Io item={item} key={key} />
                        ))}
                      </div>
                    </AccordionBody>
                  </Accordion>
                ))
              ) : (
                <Fragment />
              )}
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

        {/* {data.views !== undefined &&
          data.views.map((view, key) => (
            <TabPanel key={key}>
              <AccordionList className="max-w-full mx-auto mt-3">
                {view.bits !== undefined ? (
                  view.bits.map((item, key) => (
                    <Accordion key={key}>
                      <AccordionHeader>
                        <Flex>
                          <div className="text-sm">{t(item.name)}</div>
                          <Text className="text-right w-[30%]">
                            {t(item.message)}
                          </Text>
                        </Flex>
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="grid grid-cols-6 gap-3">
                          {item.data.map((item, key) => (
                            <Io item={item} key={key} />
                          ))}
                        </div>
                      </AccordionBody>
                    </Accordion>
                  ))
                ) : (
                  <div />
                )}
                {view.drives !== undefined ? (
                  view.drives.map((item, key) => (
                    <Drive item={item} key={key} />
                  ))
                ) : (
                  <div />
                )}
                {view.motors !== undefined ? (
                  view.motors.map((item, key) => (
                    <Motor item={item} key={key} />
                  ))
                ) : (
                  <div />
                )}
              </AccordionList>
            </TabPanel>
          ))} */}
      </TabPanels>
    </TabGroup>
  );
}
