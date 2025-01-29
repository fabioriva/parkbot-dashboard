"use client";

import { useTranslations } from "next-intl";
import { Grid, Col, Flex, Card, Title } from "@tremor/react";
import { useMap } from "@/hooks/useMap";

export default function Map(props) {
  const { Levels, Occupancy, View } = useMap(props);
  const t = useTranslations("Map");

  return (
    <Grid numItemsLg={3} className="gap-6">
      <Col numColSpan={1} numColSpanLg={2}>
        <Card className="p-3 sm:p-6">
          <Flex>
            <Title>{t("title")}</Title>
            {View}
          </Flex>
          <Grid className="overflow-auto gap-6 mt-3">
            {Levels.reverse().map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 160px;
              width: 333px;
            }
            #el-1 {
              top: 95px;
              left: 43px;
            }
            /* P1 */
            #s-1 {
              top: 2px;
              left: 289px;
            }
            #s-2 {
              top: 33px;
              left: 289px;
            }
            #s-3 {
              top: 64px;
              left: 289px;
            }
            #s-4 {
              top: 2px;
              left: 248px;
            }
            #s-5 {
              top: 33px;
              left: 248px;
            }
            #s-6 {
              top: 64px;
              left: 248px;
            }
            #s-7 {
              top: 2px;
              left: 207px;
            }
            #s-8 {
              top: 33px;
              left: 207px;
            }
            #s-9 {
              top: 64px;
              left: 207px;
            }
            #s-10 {
              top: 2px;
              left: 166px;
            }
            #s-11 {
              top: 33px;
              left: 166px;
            }
            #s-12 {
              top: 64px;
              left: 166px;
            }
            #s-13 {
              top: 2px;
              left: 125px;
            }
            #s-14 {
              top: 33px;
              left: 125px;
            }
            #s-15 {
              top: 64px;
              left: 125px;
            }
            #s-16 {
              top: 64px;
              left: 84px;
            }
            #s-17 {
              top: 64px;
              left: 43px;
            }
            /* P2 */
            #s-18 {
              top: 2px;
              left: 289px;
            }
            #s-19 {
              top: 33px;
              left: 289px;
            }
            #s-20 {
              top: 64px;
              left: 289px;
            }
            #s-21 {
              top: 2px;
              left: 248px;
            }
            #s-22 {
              top: 33px;
              left: 248px;
            }
            #s-23 {
              top: 64px;
              left: 248px;
            }
            #s-24 {
              top: 2px;
              left: 207px;
            }
            #s-25 {
              top: 33px;
              left: 207px;
            }
            #s-26 {
              top: 64px;
              left: 207px;
            }
            #s-27 {
              top: 2px;
              left: 166px;
            }
            #s-28 {
              top: 33px;
              left: 166px;
            }
            #s-29 {
              top: 64px;
              left: 166px;
            }
            #s-30 {
              top: 2px;
              left: 125px;
            }
            #s-31 {
              top: 33px;
              left: 125px;
            }
            #s-32 {
              top: 64px;
              left: 125px;
            }
            #s-33 {
              top: 64px;
              left: 43px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
