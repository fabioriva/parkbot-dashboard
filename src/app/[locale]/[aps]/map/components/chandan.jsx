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
              height: 98px;
              width: 867px;
            }
            #el-1 {
              top: 64px;
              left: 658px;
            }
            #el-2 {
              top: 64px;
              left: 43px;
            }
            /* P1 */
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 84px;
            }
            #s-3 {
              top: 64px;
              left: 84px;
            }
            #s-4 {
              top: 2px;
              left: 125px;
            }
            #s-5 {
              top: 64px;
              left: 125px;
            }
            #s-6 {
              top: 2px;
              left: 166px;
            }
            #s-7 {
              top: 64px;
              left: 166px;
            }
            #s-8 {
              top: 2px;
              left: 207px;
            }
            #s-9 {
              top: 64px;
              left: 207px;
            }
            #s-10 {
              top: 2px;
              left: 248px;
            }
            #s-11 {
              top: 64px;
              left: 248px;
            }
            #s-12 {
              top: 2px;
              left: 289px;
            }
            #s-13 {
              top: 64px;
              left: 289px;
            }
            #s-14 {
              top: 2px;
              left: 330px;
            }
            #s-15 {
              top: 64px;
              left: 330px;
            }
            #s-16 {
              top: 2px;
              left: 371px;
            }
            #s-17 {
              top: 64px;
              left: 371px;
            }
            #s-18 {
              top: 2px;
              left: 412px;
            }
            #s-19 {
              top: 64px;
              left: 412px;
            }
            #s-20 {
              top: 2px;
              left: 453px;
            }
            #s-21 {
              top: 64px;
              left: 453px;
            }
            #s-22 {
              top: 2px;
              left: 494px;
            }
            #s-23 {
              top: 64px;
              left: 494px;
            }
            #s-24 {
              top: 2px;
              left: 535px;
            }
            #s-25 {
              top: 64px;
              left: 535px;
            }
            #s-26 {
              top: 2px;
              left: 576px;
            }
            #s-27 {
              top: 2px;
              left: 617px;
            }
            #s-28 {
              top: 2px;
              left: 658px;
            }
            #s-29 {
              top: 2px;
              left: 699px;
            }
            #s-30 {
              top: 64px;
              left: 699px;
            }
            #s-31 {
              top: 2px;
              left: 740px;
            }
            #s-32 {
              top: 64px;
              left: 740px;
            }
            #s-33 {
              top: 2px;
              left: 781px;
            }
            #s-34 {
              top: 64px;
              left: 781px;
            }
            #s-35 {
              top: 64px;
              left: 822px;
            }
            /* P2 */
            #s-36 {
              top: 2px;
              left: 2px;
            }
            #s-37 {
              top: 2px;
              left: 84px;
            }
            #s-38 {
              top: 64px;
              left: 84px;
            }
            #s-39 {
              top: 2px;
              left: 125px;
            }
            #s-40 {
              top: 64px;
              left: 125px;
            }
            #s-41 {
              top: 2px;
              left: 166px;
            }
            #s-42 {
              top: 64px;
              left: 166px;
            }
            #s-43 {
              top: 2px;
              left: 207px;
            }
            #s-44 {
              top: 64px;
              left: 207px;
            }
            #s-45 {
              top: 2px;
              left: 248px;
            }
            #s-46 {
              top: 64px;
              left: 248px;
            }
            #s-47 {
              top: 2px;
              left: 289px;
            }
            #s-48 {
              top: 64px;
              left: 289px;
            }
            #s-49 {
              top: 2px;
              left: 330px;
            }
            #s-50 {
              top: 64px;
              left: 330px;
            }
            #s-51 {
              top: 2px;
              left: 371px;
            }
            #s-52 {
              top: 64px;
              left: 371px;
            }
            #s-53 {
              top: 2px;
              left: 412px;
            }
            #s-54 {
              top: 64px;
              left: 412px;
            }
            #s-55 {
              top: 2px;
              left: 453px;
            }
            #s-56 {
              top: 64px;
              left: 453px;
            }
            #s-57 {
              top: 2px;
              left: 494px;
            }
            #s-58 {
              top: 64px;
              left: 494px;
            }
            #s-59 {
              top: 2px;
              left: 535px;
            }
            #s-60 {
              top: 64px;
              left: 535px;
            }
            #s-61 {
              top: 2px;
              left: 576px;
            }
            #s-62 {
              top: 2px;
              left: 617px;
            }
            #s-63 {
              top: 2px;
              left: 658px;
            }
            #s-64 {
              top: 2px;
              left: 699px;
            }
            #s-65 {
              top: 64px;
              left: 699px;
            }
            #s-66 {
              top: 2px;
              left: 740px;
            }
            #s-67 {
              top: 64px;
              left: 740px;
            }
            #s-68 {
              top: 2px;
              left: 781px;
            }
            #s-69 {
              top: 64px;
              left: 781px;
            }
            #s-70 {
              top: 64px;
              left: 822px;
            }
            /* P3 */
            #s-71 {
              top: 2px;
              left: 2px;
            }
            #s-72 {
              top: 2px;
              left: 84px;
            }
            #s-73 {
              top: 64px;
              left: 84px;
            }
            #s-74 {
              top: 2px;
              left: 125px;
            }
            #s-75 {
              top: 64px;
              left: 125px;
            }
            #s-76 {
              top: 2px;
              left: 166px;
            }
            #s-77 {
              top: 64px;
              left: 166px;
            }
            #s-78 {
              top: 2px;
              left: 207px;
            }
            #s-79 {
              top: 64px;
              left: 207px;
            }
            #s-80 {
              top: 2px;
              left: 248px;
            }
            #s-81 {
              top: 64px;
              left: 248px;
            }
            #s-82 {
              top: 2px;
              left: 289px;
            }
            #s-83 {
              top: 64px;
              left: 289px;
            }
            #s-84 {
              top: 2px;
              left: 330px;
            }
            #s-85 {
              top: 64px;
              left: 330px;
            }
            #s-86 {
              top: 2px;
              left: 371px;
            }
            #s-87 {
              top: 64px;
              left: 371px;
            }
            #s-88 {
              top: 2px;
              left: 412px;
            }
            #s-89 {
              top: 64px;
              left: 412px;
            }
            #s-90 {
              top: 2px;
              left: 453px;
            }
            #s-91 {
              top: 64px;
              left: 453px;
            }
            #s-92 {
              top: 2px;
              left: 494px;
            }
            #s-93 {
              top: 64px;
              left: 494px;
            }
            #s-94 {
              top: 2px;
              left: 535px;
            }
            #s-95 {
              top: 64px;
              left: 535px;
            }
            #s-96 {
              top: 2px;
              left: 576px;
            }
            #s-97 {
              top: 2px;
              left: 617px;
            }
            #s-98 {
              top: 2px;
              left: 658px;
            }
            #s-99 {
              top: 2px;
              left: 699px;
            }
            #s-100 {
              top: 64px;
              left: 699px;
            }
            #s-101 {
              top: 2px;
              left: 740px;
            }
            #s-102 {
              top: 64px;
              left: 740px;
            }
            #s-103 {
              top: 2px;
              left: 781px;
            }
            #s-104 {
              top: 64px;
              left: 781px;
            }
            #s-105 {
              top: 64px;
              left: 822px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
