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
          <div className="overflow-auto gap-3 mt-3">
            {Levels.reverse().map((level) => level)}
          </div>
          <style jsx global>{`
            .l {
              height: 160px;
              width: 456px;
            }
            #l-1 {
              height: 98px;
            }
            #l-2 {
              height: 129px;
            }
            /* Level +1 */
            #el-b1 {
              top: 64px;
              left: 125px;
            }
            #el-a1 {
              top: 64px;
              left: 412px;
            }
            #s-1 {
              top: 33px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 2px;
            }
            #s-3 {
              top: 33px;
              left: 43px;
            }
            #s-4 {
              top: 2px;
              left: 43px;
            }
            #s-5 {
              top: 33px;
              left: 84px;
            }
            #s-6 {
              top: 2px;
              left: 84px;
            }
            #s-7 {
              top: 33px;
              left: 125px;
            }
            #s-8 {
              top: 2px;
              left: 125px;
            }
            #s-9 {
              top: 33px;
              left: 166px;
            }
            #s-10 {
              top: 2px;
              left: 166px;
            }
            #s-11 {
              top: 33px;
              left: 207px;
            }
            #s-12 {
              top: 2px;
              left: 207px;
            }
            #s-13 {
              top: 33px;
              left: 248px;
            }
            #s-14 {
              top: 2px;
              left: 248px;
            }
            #s-15 {
              top: 33px;
              left: 289px;
            }
            #s-16 {
              top: 2px;
              left: 289px;
            }
            #s-17 {
              top: 33px;
              left: 330px;
            }
            #s-18 {
              top: 2px;
              left: 330px;
            }
            /* Level +2 */
            #el-b2 {
              top: 64px;
              left: 125px;
            }
            #el-a2 {
              top: 64px;
              left: 412px;
            }
            #s-19 {
              top: 95px;
              left: 2px;
            }
            #s-20 {
              top: 33px;
              left: 2px;
            }
            #s-21 {
              top: 2px;
              left: 2px;
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
              top: 95px;
              left: 84px;
            }
            #s-26 {
              top: 33px;
              left: 84px;
            }
            #s-27 {
              top: 2px;
              left: 84px;
            }
            #s-28 {
              top: 95px;
              left: 125px;
            }
            #s-29 {
              top: 33px;
              left: 125px;
            }
            #s-30 {
              top: 2px;
              left: 125px;
            }
            #s-31 {
              top: 95px;
              left: 166px;
            }
            #s-32 {
              top: 33px;
              left: 166px;
            }
            #s-33 {
              top: 2px;
              left: 166px;
            }
            #s-34 {
              top: 95px;
              left: 207px;
            }
            #s-35 {
              top: 33px;
              left: 207px;
            }
            #s-36 {
              top: 2px;
              left: 207px;
            }
            #s-37 {
              top: 95px;
              left: 248px;
            }
            #s-38 {
              top: 33px;
              left: 248px;
            }
            #s-39 {
              top: 2px;
              left: 248px;
            }
            #s-40 {
              top: 95px;
              left: 289px;
            }
            #s-41 {
              top: 33px;
              left: 289px;
            }
            #s-42 {
              top: 2px;
              left: 289px;
            }
            #s-43 {
              top: 95px;
              left: 330px;
            }
            #s-44 {
              top: 33px;
              left: 330px;
            }
            #s-45 {
              top: 2px;
              left: 330px;
            }
            /* Level +3 */
            #el-b3 {
              top: 95px;
              left: 125px;
            }
            #el-a3 {
              top: 95px;
              left: 412px;
            }
            #s-46 {
              top: 126px;
              left: 2px;
            }
            #s-47 {
              top: 64px;
              left: 2px;
            }
            #s-48 {
              top: 33px;
              left: 2px;
            }
            #s-49 {
              top: 2px;
              left: 2px;
            }
            #s-50 {
              top: 126px;
              left: 43px;
            }
            #s-51 {
              top: 64px;
              left: 43px;
            }
            #s-52 {
              top: 33px;
              left: 43px;
            }
            #s-53 {
              top: 2px;
              left: 43px;
            }
            #s-54 {
              top: 126px;
              left: 84px;
            }
            #s-55 {
              top: 64px;
              left: 84px;
            }
            #s-56 {
              top: 33px;
              left: 84px;
            }
            #s-57 {
              top: 2px;
              left: 84px;
            }
            #s-58 {
              top: 126px;
              left: 125px;
            }
            #s-59 {
              top: 64px;
              left: 125px;
            }
            #s-60 {
              top: 33px;
              left: 125px;
            }
            #s-61 {
              top: 126px;
              left: 166px;
            }
            #s-62 {
              top: 64px;
              left: 166px;
            }
            #s-63 {
              top: 33px;
              left: 166px;
            }
            #s-64 {
              top: 126px;
              left: 207px;
            }
            #s-65 {
              top: 64px;
              left: 207px;
            }
            #s-66 {
              top: 33px;
              left: 207px;
            }
            #s-67 {
              top: 126px;
              left: 248px;
            }
            #s-68 {
              top: 64px;
              left: 248px;
            }
            #s-69 {
              top: 33px;
              left: 248px;
            }
            #s-70 {
              top: 126px;
              left: 289px;
            }
            #s-71 {
              top: 64px;
              left: 289px;
            }
            #s-72 {
              top: 33px;
              left: 289px;
            }
            #s-73 {
              top: 2px;
              left: 289px;
            }
            #s-74 {
              top: 126px;
              left: 330px;
            }
            #s-75 {
              top: 64px;
              left: 330px;
            }
            #s-76 {
              top: 33px;
              left: 330px;
            }
            #s-77 {
              top: 2px;
              left: 330px;
            }
            #s-78 {
              top: 126px;
              left: 371px;
            }
            #s-79 {
              top: 64px;
              left: 371px;
            }
            #s-80 {
              top: 33px;
              left: 371px;
            }
            #s-81 {
              top: 126px;
              left: 412px;
            }
            #s-82 {
              top: 64px;
              left: 412px;
            }
            #s-83 {
              top: 33px;
              left: 412px;
            }
            /* Level +4 */
            #el-b4 {
              top: 95px;
              left: 125px;
            }
            #el-a4 {
              top: 95px;
              left: 412px;
            }
            #s-84 {
              top: 126px;
              left: 2px;
            }
            #s-85 {
              top: 64px;
              left: 2px;
            }
            #s-86 {
              top: 33px;
              left: 2px;
            }
            #s-87 {
              top: 2px;
              left: 2px;
            }
            #s-88 {
              top: 126px;
              left: 43px;
            }
            #s-89 {
              top: 64px;
              left: 43px;
            }
            #s-90 {
              top: 33px;
              left: 43px;
            }
            #s-91 {
              top: 2px;
              left: 43px;
            }
            #s-92 {
              top: 126px;
              left: 84px;
            }
            #s-93 {
              top: 64px;
              left: 84px;
            }
            #s-94 {
              top: 33px;
              left: 84px;
            }
            #s-95 {
              top: 2px;
              left: 84px;
            }
            #s-96 {
              top: 126px;
              left: 125px;
            }
            #s-97 {
              top: 64px;
              left: 125px;
            }
            #s-98 {
              top: 33px;
              left: 125px;
            }
            #s-99 {
              top: 126px;
              left: 166px;
            }
            #s-100 {
              top: 64px;
              left: 166px;
            }
            #s-101 {
              top: 33px;
              left: 166px;
            }
            #s-102 {
              top: 126px;
              left: 207px;
            }
            #s-103 {
              top: 64px;
              left: 207px;
            }
            #s-104 {
              top: 33px;
              left: 207px;
            }
            #s-105 {
              top: 126px;
              left: 248px;
            }
            #s-106 {
              top: 64px;
              left: 248px;
            }
            #s-107 {
              top: 33px;
              left: 248px;
            }
            #s-108 {
              top: 126px;
              left: 289px;
            }
            #s-109 {
              top: 64px;
              left: 289px;
            }
            #s-110 {
              top: 33px;
              left: 289px;
            }
            #s-111 {
              top: 2px;
              left: 289px;
            }
            #s-112 {
              top: 126px;
              left: 330px;
            }
            #s-113 {
              top: 64px;
              left: 330px;
            }
            #s-114 {
              top: 33px;
              left: 330px;
            }
            #s-115 {
              top: 2px;
              left: 330px;
            }
            #s-116 {
              top: 126px;
              left: 371px;
            }
            #s-117 {
              top: 64px;
              left: 371px;
            }
            #s-118 {
              top: 33px;
              left: 371px;
            }
            #s-119 {
              top: 126px;
              left: 412px;
            }
            #s-120 {
              top: 64px;
              left: 412px;
            }
            #s-121 {
              top: 33px;
              left: 412px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
