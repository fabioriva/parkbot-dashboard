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
          <div className="overflow-auto gap-6 mt-3">
            {Levels.reverse().map((level) => level)}
          </div>
          <style jsx global>{`
            .l {
              height: 129px;
              width: 292px;
            }
            /* Level -3 */
            #el-1 {
              top: 33px;
              left: 43px;
            }
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-2 {
              top: 64px;
              left: 2px;
            }
            #s-3 {
              top: 2px;
              left: 43px;
            }
            #s-4 {
              top: 64px;
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
              top: 2px;
              left: 125px;
            }
            #s-8 {
              top: 2px;
              left: 166px;
            }
            #s-9 {
              top: 2px;
              left: 207px;
            }
            #s-10 {
              top: 64px;
              left: 207px;
            }
            #s-11 {
              top: 95px;
              left: 207px;
            }
            #s-12 {
              top: 2px;
              left: 248px;
            }
            /* Level -2 */
            #el-2 {
              top: 33px;
              left: 43px;
            }
            #s-13 {
              top: 2px;
              left: 2px;
            }
            #s-14 {
              top: 64px;
              left: 2px;
            }
            #s-15 {
              top: 2px;
              left: 43px;
            }
            #s-16 {
              top: 64px;
              left: 43px;
            }
            #s-17 {
              top: 95px;
              left: 43px;
            }
            #s-18 {
              top: 2px;
              left: 84px;
            }
            #s-19 {
              top: 2px;
              left: 125px;
            }
            #s-20 {
              top: 2px;
              left: 166px;
            }
            #s-21 {
              top: 2px;
              left: 207px;
            }
            #s-22 {
              top: 64px;
              left: 207px;
            }
            #s-23 {
              top: 95px;
              left: 207px;
            }
            #s-24 {
              top: 2px;
              left: 248px;
            }
            /* Level -1 */
            #el-3 {
              top: 33px;
              left: 43px;
            }
            #s-25 {
              top: 2px;
              left: 2px;
            }
            #s-26 {
              top: 64px;
              left: 2px;
            }
            #s-27 {
              top: 2px;
              left: 43px;
            }
            #s-28 {
              top: 64px;
              left: 43px;
            }
            #s-29 {
              top: 95px;
              left: 43px;
            }
            #s-30 {
              top: 2px;
              left: 84px;
            }
            #s-31 {
              top: 2px;
              left: 125px;
            }
            #s-32 {
              top: 2px;
              left: 166px;
            }
            #s-33 {
              top: 2px;
              left: 207px;
            }
            #s-34 {
              top: 64px;
              left: 207px;
            }
            #s-35 {
              top: 95px;
              left: 207px;
            }
            #s-36 {
              top: 2px;
              left: 248px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
