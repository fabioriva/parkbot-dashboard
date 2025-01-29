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
              top: 33px;
              left: 2px;
            }
            #el-2 {
              top: 33px;
              left: 43px;
            }
            /* P1 */
            #s-1 {
              top: 95px;
              left: 289px;
            }
            #s-2 {
              top: 33px;
              left: 289px;
            }
            #s-3 {
              top: 2px;
              left: 289px;
            }
            #s-4 {
              top: 33px;
              left: 248px;
            }
            #s-5 {
              top: 2px;
              left: 248px;
            }
            #s-6 {
              top: 95px;
              left: 207px;
            }
            #s-7 {
              top: 33px;
              left: 207px;
            }
            #s-8 {
              top: 2px;
              left: 207px;
            }
            #s-9 {
              top: 95px;
              left: 166px;
            }
            #s-10 {
              top: 33px;
              left: 166px;
            }
            #s-11 {
              top: 126px;
              left: 125px;
            }
            #s-12 {
              top: 95px;
              left: 125px;
            }
            #s-13 {
              top: 33px;
              left: 125px;
            }
            #s-14 {
              top: 2px;
              left: 125px;
            }
            #s-15 {
              top: 126px;
              left: 84px;
            }
            #s-16 {
              top: 95px;
              left: 84px;
            }
            #s-17 {
              top: 33px;
              left: 84px;
            }
            #s-18 {
              top: 2px;
              left: 84px;
            }
            #s-19 {
              top: 126px;
              left: 43px;
            }
            #s-20 {
              top: 95px;
              left: 43px;
            }
            #s-21 {
              top: 33px;
              left: 43px;
            }
            #s-22 {
              top: 2px;
              left: 43px;
            }
            #s-23 {
              top: 33px;
              left: 2px;
            }
            #s-24 {
              top: 2px;
              left: 2px;
            }

            /* P2 */
            #s-25 {
              top: 33px;
              left: 289px;
            }
            #s-26 {
              top: 2px;
              left: 289px;
            }
            #s-27 {
              top: 33px;
              left: 248px;
            }
            #s-28 {
              top: 2px;
              left: 248px;
            }
            #s-29 {
              top: 95px;
              left: 207px;
            }
            #s-30 {
              top: 33px;
              left: 207px;
            }
            #s-31 {
              top: 2px;
              left: 207px;
            }
            #s-32 {
              top: 95px;
              left: 166px;
            }
            #s-33 {
              top: 33px;
              left: 166px;
            }
            #s-34 {
              top: 126px;
              left: 125px;
            }
            #s-35 {
              top: 95px;
              left: 125px;
            }
            #s-36 {
              top: 33px;
              left: 125px;
            }
            #s-37 {
              top: 2px;
              left: 125px;
            }
            #s-38 {
              top: 126px;
              left: 84px;
            }
            #s-39 {
              top: 95px;
              left: 84px;
            }
            #s-40 {
              top: 33px;
              left: 84px;
            }
            #s-41 {
              top: 2px;
              left: 84px;
            }
            #s-42 {
              top: 126px;
              left: 43px;
            }
            #s-43 {
              top: 95px;
              left: 43px;
            }

            /* P2 */
            #s-44 {
              top: 33px;
              left: 289px;
            }
            #s-45 {
              top: 2px;
              left: 289px;
            }
            #s-46 {
              top: 33px;
              left: 248px;
            }
            #s-47 {
              top: 2px;
              left: 248px;
            }
            #s-48 {
              top: 95px;
              left: 207px;
            }
            #s-49 {
              top: 33px;
              left: 207px;
            }
            #s-50 {
              top: 2px;
              left: 207px;
            }
            #s-51 {
              top: 95px;
              left: 166px;
            }
            #s-52 {
              top: 33px;
              left: 166px;
            }
            #s-53 {
              top: 126px;
              left: 125px;
            }
            #s-54 {
              top: 95px;
              left: 125px;
            }
            #s-55 {
              top: 33px;
              left: 125px;
            }
            #s-56 {
              top: 2px;
              left: 125px;
            }
            #s-57 {
              top: 126px;
              left: 84px;
            }
            #s-58 {
              top: 95px;
              left: 84px;
            }
            #s-59 {
              top: 33px;
              left: 84px;
            }
            #s-60 {
              top: 2px;
              left: 84px;
            }
            #s-61 {
              top: 126px;
              left: 43px;
            }
            #s-62 {
              top: 95px;
              left: 43px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
