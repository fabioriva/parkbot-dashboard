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
    for (let i = 1; i < 14; i++) {
      const p = `
      #s-${24 + offset} {
        top: 2px;
        left: 2px;
      }
      #s-${23 + offset} {
        top: 33px;
        left: 2px;
      }
      #s-${22 + offset} {
        top: 95px;
        left: 2px;
      }
      #s-${21 + offset} {
        top: 126px;
        left: 2px;
      }
      #s-${20 + offset}  {
        top: 2px;
        left: 43px;
      }
      #s-${19 + offset}  {
        top: 33px;
        left: 43px;
      }
      #s-${18 + offset}  {
        top: 95px;
        left: 43px;
      }
      #s-${17 + offset}  {
        top: 126px;
        left: 43px;
      }
      #s-${16 + offset}  {
        top: 2px;
        left: 84px;
      }
      #s-${15 + offset}  {
        top: 33px;
        left: 84px;
      }
      #s-${14 + offset}  {
        top: 95px;
        left: 84px;
      }
      #s-${13 + offset}  {
        top: 126px;
        left: 84px;
      }
      #s-${12 + offset}  {
        top: 2px;
        left: 125px;
      }
      #s-${11 + offset}  {
        top: 33px;
        left: 125px;
      }
      #s-${10 + offset}  {
        top: 95px;
        left: 125px;
      }
      #s-${9 + offset}  {
        top: 126px;
        left: 125px;
      }
      #s-${8 + offset}  {
        top: 2px;
        left: 166px;
      }
      #s-${7 + offset}  {
        top: 33px;
        left: 166px;
      }
      #s-${6 + offset}  {
        top: 95px;
        left: 166px;
      }
      #s-${5 + offset}  {
        top: 126px;
        left: 166px;
      }
      #s-${4 + offset}  {
        top: 2px;
        left: 207px;
      }
      #s-${3 + offset}  {
        top: 33px;
        left: 207px;
      }
      #s-${2 + offset}  {
        top: 95px;
        left: 207px;
      }
      #s-${1 + offset}  {
        top: 126px;
        left: 207px;
      }`;
      levels.push(p);
      offset += 24;
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
            numItemsMd={2}
            className="overflow-auto gap-6 mt-3"
          >
            {Levels.reverse().map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 160px;
              width: 251px;
            }
            #el-1 {
              top: 64px;
              left: 2px;
            }
            #el-2 {
              top: 64px;
              left: 84px;
            }
            #el-3 {
              top: 64px;
              left: 207px;
            }
            ${jsx()}
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
