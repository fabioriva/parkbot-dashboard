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
          <Grid
            numItems={1}
            numItemsMd={3}
            numItemsLg={6}
            className="gap-3 mt-3"
          >
            {Levels.map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 160px;
              width: 87px;
            }
            /* Level +1 */
            #el-a1 {
              top: 64px;
              left: 2px;
            }
            #s-1 {
              top: 126px;
              left: 2px;
            }
            #s-2 {
              top: 95px;
              left: 2px;
            }
            #s-3 {
              top: 33px;
              left: 2px;
            }
            #s-4 {
              top: 2px;
              left: 2px;
            }
            #s-5 {
              top: 126px;
              left: 43px;
            }
            #s-6 {
              top: 95px;
              left: 43px;
            }
            #s-7 {
              top: 33px;
              left: 43px;
            }
            #s-8 {
              top: 2px;
              left: 43px;
            }
            /* Level +2 */
            #el-a2 {
              top: 64px;
              left: 2px;
            }
            #s-9 {
              top: 126px;
              left: 2px;
            }
            #s-10 {
              top: 95px;
              left: 2px;
            }
            #s-11 {
              top: 33px;
              left: 2px;
            }
            #s-12 {
              top: 2px;
              left: 2px;
            }
            #s-13 {
              top: 126px;
              left: 43px;
            }
            #s-14 {
              top: 95px;
              left: 43px;
            }
            #s-15 {
              top: 33px;
              left: 43px;
            }
            #s-16 {
              top: 2px;
              left: 43px;
            }
            /* Level +3 */
            #el-a3 {
              top: 64px;
              left: 2px;
            }
            #s-17 {
              top: 126px;
              left: 2px;
            }
            #s-18 {
              top: 95px;
              left: 2px;
            }
            #s-19 {
              top: 33px;
              left: 2px;
            }
            #s-20 {
              top: 2px;
              left: 2px;
            }
            #s-21 {
              top: 126px;
              left: 43px;
            }
            #s-22 {
              top: 95px;
              left: 43px;
            }
            #s-23 {
              top: 33px;
              left: 43px;
            }
            #s-24 {
              top: 2px;
              left: 43px;
            }
            /* Level +4 */
            #el-a4 {
              top: 64px;
              left: 2px;
            }
            #s-25 {
              top: 126px;
              left: 2px;
            }
            #s-26 {
              top: 95px;
              left: 2px;
            }
            #s-27 {
              top: 33px;
              left: 2px;
            }
            #s-28 {
              top: 2px;
              left: 2px;
            }
            #s-29 {
              top: 126px;
              left: 43px;
            }
            #s-30 {
              top: 95px;
              left: 43px;
            }
            #s-31 {
              top: 33px;
              left: 43px;
            }
            #s-32 {
              top: 2px;
              left: 43px;
            }
            /* Level +5 */
            #el-a5 {
              top: 64px;
              left: 2px;
            }
            #s-33 {
              top: 126px;
              left: 2px;
            }
            #s-34 {
              top: 95px;
              left: 2px;
            }
            #s-35 {
              top: 33px;
              left: 2px;
            }
            #s-36 {
              top: 2px;
              left: 2px;
            }
            #s-37 {
              top: 126px;
              left: 43px;
            }
            #s-38 {
              top: 95px;
              left: 43px;
            }
            #s-39 {
              top: 33px;
              left: 43px;
            }
            #s-40 {
              top: 2px;
              left: 43px;
            }
            /* Level +6 */
            #el-a6 {
              top: 64px;
              left: 2px;
            }
            #s-41 {
              top: 126px;
              left: 2px;
            }
            #s-42 {
              top: 95px;
              left: 2px;
            }
            #s-43 {
              top: 33px;
              left: 2px;
            }
            #s-44 {
              top: 2px;
              left: 2px;
            }
            #s-45 {
              top: 126px;
              left: 43px;
            }
            #s-46 {
              top: 95px;
              left: 43px;
            }
            #s-47 {
              top: 33px;
              left: 43px;
            }
            #s-48 {
              top: 2px;
              left: 43px;
            }
            /* Level +7 */
            #el-a7 {
              top: 64px;
              left: 2px;
            }
            #s-49 {
              top: 126px;
              left: 2px;
            }
            #s-50 {
              top: 95px;
              left: 2px;
            }
            #s-51 {
              top: 33px;
              left: 2px;
            }
            #s-52 {
              top: 2px;
              left: 2px;
            }
            #s-53 {
              top: 126px;
              left: 43px;
            }
            #s-54 {
              top: 95px;
              left: 43px;
            }
            #s-55 {
              top: 33px;
              left: 43px;
            }
            #s-56 {
              top: 2px;
              left: 43px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
