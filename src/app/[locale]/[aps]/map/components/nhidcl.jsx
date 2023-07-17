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
            numItemsMd={2}
            numItemsLg={4}
            className="gap-3 mt-3"
          >
            {Levels.map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 160px;
              width: 169px;
            }
            /* Level +1 */
            #el-a1 {
              top: 64px;
              left: 2px;
            }
            #el-b1 {
              top: 64px;
              left: 125px;
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
            #s-9 {
              top: 126px;
              left: 84px;
            }
            #s-10 {
              top: 95px;
              left: 84px;
            }
            #s-11 {
              top: 33px;
              left: 84px;
            }
            #s-12 {
              top: 2px;
              left: 84px;
            }
            #s-13 {
              top: 126px;
              left: 125px;
            }
            #s-14 {
              top: 95px;
              left: 125px;
            }
            #s-15 {
              top: 33px;
              left: 125px;
            }
            #s-16 {
              top: 2px;
              left: 125px;
            }
            /* Level +2 */
            #el-a2 {
              top: 64px;
              left: 2px;
            }
            #el-b2 {
              top: 64px;
              left: 125px;
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
            #s-25 {
              top: 126px;
              left: 84px;
            }
            #s-26 {
              top: 95px;
              left: 84px;
            }
            #s-27 {
              top: 33px;
              left: 84px;
            }
            #s-28 {
              top: 2px;
              left: 84px;
            }
            #s-29 {
              top: 126px;
              left: 125px;
            }
            #s-30 {
              top: 95px;
              left: 125px;
            }
            #s-31 {
              top: 33px;
              left: 125px;
            }
            #s-32 {
              top: 2px;
              left: 125px;
            }
            /* Level +3 */
            #el-a3 {
              top: 64px;
              left: 2px;
            }
            #el-b3 {
              top: 64px;
              left: 125px;
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
            #s-41 {
              top: 126px;
              left: 84px;
            }
            #s-42 {
              top: 95px;
              left: 84px;
            }
            #s-43 {
              top: 33px;
              left: 84px;
            }
            #s-44 {
              top: 2px;
              left: 84px;
            }
            #s-45 {
              top: 126px;
              left: 125px;
            }
            #s-46 {
              top: 95px;
              left: 125px;
            }
            #s-47 {
              top: 33px;
              left: 125px;
            }
            #s-48 {
              top: 2px;
              left: 125px;
            }
            /* Level +4 */
            #el-a4 {
              top: 64px;
              left: 2px;
            }
            #el-b4 {
              top: 64px;
              left: 125px;
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
              left: 125px;
            }
            #s-62 {
              top: 95px;
              left: 125px;
            }
            #s-63 {
              top: 33px;
              left: 125px;
            }
            #s-64 {
              top: 2px;
              left: 125px;
            }
            /* Level +5 */
            #el-a5 {
              top: 64px;
              left: 2px;
            }
            #el-b5 {
              top: 64px;
              left: 125px;
            }
            #s-65 {
              top: 126px;
              left: 2px;
            }
            #s-66 {
              top: 95px;
              left: 2px;
            }
            #s-67 {
              top: 33px;
              left: 2px;
            }
            #s-68 {
              top: 2px;
              left: 2px;
            }
            #s-69 {
              top: 126px;
              left: 43px;
            }
            #s-70 {
              top: 95px;
              left: 43px;
            }
            #s-71 {
              top: 33px;
              left: 43px;
            }
            #s-72 {
              top: 2px;
              left: 43px;
            }
            #s-73 {
              top: 126px;
              left: 84px;
            }
            #s-74 {
              top: 95px;
              left: 84px;
            }
            #s-75 {
              top: 33px;
              left: 84px;
            }
            #s-76 {
              top: 2px;
              left: 84px;
            }
            #s-77 {
              top: 126px;
              left: 125px;
            }
            #s-78 {
              top: 95px;
              left: 125px;
            }
            #s-79 {
              top: 33px;
              left: 125px;
            }
            #s-80 {
              top: 2px;
              left: 125px;
            }
            /* Level +6 */
            #el-a6 {
              top: 64px;
              left: 2px;
            }
            #el-b6 {
              top: 64px;
              left: 125px;
            }
            #s-81 {
              top: 126px;
              left: 2px;
            }
            #s-82 {
              top: 95px;
              left: 2px;
            }
            #s-83 {
              top: 33px;
              left: 2px;
            }
            #s-84 {
              top: 2px;
              left: 2px;
            }
            #s-85 {
              top: 126px;
              left: 43px;
            }
            #s-86 {
              top: 95px;
              left: 43px;
            }
            #s-87 {
              top: 33px;
              left: 43px;
            }
            #s-88 {
              top: 2px;
              left: 43px;
            }
            #s-89 {
              top: 126px;
              left: 84px;
            }
            #s-90 {
              top: 95px;
              left: 84px;
            }
            #s-91 {
              top: 33px;
              left: 84px;
            }
            #s-92 {
              top: 2px;
              left: 84px;
            }
            #s-93 {
              top: 126px;
              left: 125px;
            }
            #s-94 {
              top: 95px;
              left: 125px;
            }
            #s-95 {
              top: 33px;
              left: 125px;
            }
            #s-96 {
              top: 2px;
              left: 125px;
            }
            /* Level +7 */
            #el-a7 {
              top: 64px;
              left: 2px;
            }
            #el-b7 {
              top: 64px;
              left: 125px;
            }
            #s-97 {
              top: 126px;
              left: 2px;
            }
            #s-98 {
              top: 95px;
              left: 2px;
            }
            #s-99 {
              top: 33px;
              left: 2px;
            }
            #s-100 {
              top: 2px;
              left: 2px;
            }
            #s-101 {
              top: 126px;
              left: 43px;
            }
            #s-102 {
              top: 95px;
              left: 43px;
            }
            #s-103 {
              top: 33px;
              left: 43px;
            }
            #s-104 {
              top: 2px;
              left: 43px;
            }
            #s-105 {
              top: 126px;
              left: 84px;
            }
            #s-106 {
              top: 95px;
              left: 84px;
            }
            #s-107 {
              top: 33px;
              left: 84px;
            }
            #s-108 {
              top: 2px;
              left: 84px;
            }
            #s-109 {
              top: 126px;
              left: 125px;
            }
            #s-110 {
              top: 95px;
              left: 125px;
            }
            #s-111 {
              top: 33px;
              left: 125px;
            }
            #s-112 {
              top: 2px;
              left: 125px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
