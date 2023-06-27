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
          <Grid numItems={1} className="gap-6 mt-3">
            {Levels.reverse().map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 129px;
              width: 210px;
            }
            /* Level -3 */
            #el-3 {
              top: 64px;
              left: 43px;
            }
            #s-1 {
              top: 33px;
              left: 2px;
            }
            #s-2 {
              top: 95px;
              left: 2px;
            }
            #s-3 {
              top: 2px;
              left: 43px;
            }
            #s-4 {
              top: 33px;
              left: 43px;
            }
            #s-5 {
              top: 95px;
              left: 43px;
            }
            #s-6 {
              top: 2px;
              left: 84px;
            }
            #s-7 {
              top: 33px;
              left: 84px;
            }
            #s-8 {
              top: 95px;
              left: 84px;
            }
            #s-9 {
              top: 2px;
              left: 125px;
            }
            #s-10 {
              top: 33px;
              left: 125px;
            }
            #s-11 {
              top: 95px;
              left: 125px;
            }
            #s-12 {
              top: 2px;
              left: 166px;
            }
            #s-13 {
              top: 33px;
              left: 166px;
            }
            /* Level -2 */
            #el-2 {
              top: 64px;
              left: 43px;
            }
            #s-14 {
              top: 33px;
              left: 2px;
            }
            #s-15 {
              top: 95px;
              left: 2px;
            }
            #s-16 {
              top: 2px;
              left: 43px;
            }
            #s-17 {
              top: 33px;
              left: 43px;
            }
            #s-18 {
              top: 95px;
              left: 43px;
            }
            #s-19 {
              top: 2px;
              left: 84px;
            }
            #s-20 {
              top: 33px;
              left: 84px;
            }
            #s-21 {
              top: 95px;
              left: 84px;
            }
            #s-22 {
              top: 2px;
              left: 125px;
            }
            #s-23 {
              top: 33px;
              left: 125px;
            }
            #s-24 {
              top: 95px;
              left: 125px;
            }
            #s-25 {
              top: 2px;
              left: 166px;
            }
            #s-26 {
              top: 33px;
              left: 166px;
            }
            /* Level -1 */
            #el-1 {
              top: 64px;
              left: 43px;
            }
            #s-27 {
              top: 2px;
              left: 2px;
            }
            #s-28 {
              top: 33px;
              left: 2px;
            }
            #s-29 {
              top: 95px;
              left: 2px;
            }
            #s-30 {
              top: 2px;
              left: 43px;
            }
            #s-31 {
              top: 33px;
              left: 43px;
            }
            #s-32 {
              top: 95px;
              left: 43px;
            }
            #s-33 {
              top: 2px;
              left: 84px;
            }
            #s-34 {
              top: 33px;
              left: 84px;
            }
            #s-35 {
              top: 95px;
              left: 84px;
            }
            #s-36 {
              top: 2px;
              left: 125px;
            }
            #s-37 {
              top: 33px;
              left: 125px;
            }
            #s-38 {
              top: 95px;
              left: 125px;
            }
            #s-39 {
              top: 2px;
              left: 166px;
            }
            #s-40 {
              top: 33px;
              left: 166px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
