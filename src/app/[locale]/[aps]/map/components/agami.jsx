"use client";

import { useTranslations } from "next-intl";
import { Grid, Col, Flex, Card, Title } from "@tremor/react";
import { useMap } from "@/hooks/useMap";

export default function Map(props) {
  const { Levels, Occupancy, View } = useMap(props);
  const t = useTranslations("Map");
  const jsx = () => {
    let levels = [];
    let offset = 0;
    for (let i = 1; i < 29; i++) {
      const p = `
      #s-${3 + offset}  {
        top: 2px;
        left: 2px;
      }
      #s-${5 + offset}  {
        top: 2px;
        left: 43px;
      }
      #s-${4 + offset}  {
        top: 64px;
        left: 2px;
      }
      #s-${6 + offset}  {
        top: 64px;
        left: 43px;
      }`;
      levels.push(p);
      offset += 4;
    }
    return levels.join(" ");
  };

  return (
    <Grid numItemsLg={3} className="gap-6">
      <Col numColSpan={1} numColSpanLg={2}>
        <Card className="p-3 sm:p-6">
          <Flex>
            <Title>{t("title")}</Title>
            {View}
          </Flex>
          <Grid
            numItems={1}
            numItemsMd={3}
            numItemsLg={5}
            className="overflow-auto gap-3 mt-3"
          >
            {Levels.reverse().map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 99px;
              width: 87px;
            }
            #el-1 {
              top: 33px;
              left: 2px;
            }
            // P1
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 43px;
            }
            // P2 - P28
            ${jsx()}
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
