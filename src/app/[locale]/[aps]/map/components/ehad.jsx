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
              height: 129px;
              width: 456px;
            }
            #el-1 {
              top: 64px;
              left: 371px;
            }
            #el-2 {
              top: 64px;
              left: 412px;
            }
            // P1
            #s-22 {
              top: 95px;
              left: 2px;
            }
            #s-21 {
              top: 95px;
              left: 43px;
            }
            #s-20 {
              top: 95px;
              left: 84px;
            }
            #s-19 {
              top: 33px;
              left: 84px;
            }
            #s-18 {
              top: 2px;
              left: 84px;
            }
            #s-17 {
              top: 33px;
              left: 125px;
            }
            #s-16 {
              top: 2px;
              left: 125px;
            }
            #s-15 {
              top: 95px;
              left: 166px;
            }
            #s-14 {
              top: 33px;
              left: 166px;
            }
            #s-13 {
              top: 2px;
              left: 166px;
            }
            #s-12 {
              top: 95px;
              left: 207px;
            }
            #s-11 {
              top: 33px;
              left: 207px;
            }
            #s-10 {
              top: 33px;
              left: 248px;
            }
            #s-9 {
              top: 95px;
              left: 248px;
            }
            #s-8 {
              top: 33px;
              left: 289px;
            }
            #s-7 {
              top: 2px;
              left: 289px;
            }
            #s-6 {
              top: 95px;
              left: 289px;
            }
            #s-5 {
              top: 33px;
              left: 330px;
            }
            #s-4 {
              top: 95px;
              left: 330px;
            }
            #s-1 {
              top: 2px;
              left: 371px;
            }
            #s-2 {
              top: 33px;
              left: 371px;
            }
            #s-3 {
              top: 95px;
              left: 371px;
            }
            // P2
            #s-42 {
              top: 95px;
              left: 2px;
            }
            #s-41 {
              top: 95px;
              left: 43px;
            }
            #s-40 {
              top: 95px;
              left: 84px;
            }
            #s-39 {
              top: 33px;
              left: 84px;
            }
            #s-38 {
              top: 2px;
              left: 84px;
            }
            #s-37 {
              top: 33px;
              left: 125px;
            }
            #s-36 {
              top: 2px;
              left: 125px;
            }
            #s-35 {
              top: 95px;
              left: 166px;
            }
            #s-34 {
              top: 33px;
              left: 166px;
            }
            #s-33 {
              top: 2px;
              left: 166px;
            }
            #s-32 {
              top: 95px;
              left: 207px;
            }
            #s-31 {
              top: 33px;
              left: 207px;
            }
            #s-30 {
              top: 33px;
              left: 248px;
            }
            #s-29 {
              top: 95px;
              left: 248px;
            }
            #s-28 {
              top: 33px;
              left: 289px;
            }
            #s-27 {
              top: 95px;
              left: 289px;
            }
            #s-26 {
              top: 33px;
              left: 330px;
            }
            #s-25 {
              top: 95px;
              left: 330px;
            }
            #s-23 {
              top: 2px;
              left: 371px;
            }
            #s-24 {
              top: 95px;
              left: 371px;
            }
            // P3
            #s-62 {
              top: 33px;
              left: 2px;
            }
            #s-61 {
              top: 95px;
              left: 2px;
            }
            #s-60 {
              top: 95px;
              left: 43px;
            }
            #s-59 {
              top: 95px;
              left: 84px;
            }
            #s-58 {
              top: 33px;
              left: 84px;
            }
            #s-57 {
              top: 2px;
              left: 84px;
            }
            #s-56 {
              top: 33px;
              left: 125px;
            }
            #s-55 {
              top: 2px;
              left: 125px;
            }
            #s-54 {
              top: 95px;
              left: 166px;
            }
            #s-53 {
              top: 33px;
              left: 166px;
            }
            #s-52 {
              top: 2px;
              left: 166px;
            }
            #s-51 {
              top: 95px;
              left: 207px;
            }
            #s-50 {
              top: 33px;
              left: 207px;
            }
            #s-49 {
              top: 33px;
              left: 248px;
            }
            #s-48 {
              top: 95px;
              left: 248px;
            }
            #s-47 {
              top: 33px;
              left: 289px;
            }
            #s-46 {
              top: 95px;
              left: 289px;
            }
            #s-45 {
              top: 33px;
              left: 330px;
            }
            #s-44 {
              top: 95px;
              left: 330px;
            }
            #s-43 {
              top: 95px;
              left: 371px;
            }
            // P4
            #s-83 {
              top: 33px;
              left: 2px;
            }
            #s-82 {
              top: 2px;
              left: 2px;
            }
            #s-81 {
              top: 95px;
              left: 2px;
            }
            #s-80 {
              top: 95px;
              left: 43px;
            }
            #s-79 {
              top: 95px;
              left: 84px;
            }
            #s-78 {
              top: 33px;
              left: 84px;
            }
            #s-77 {
              top: 2px;
              left: 84px;
            }
            #s-76 {
              top: 33px;
              left: 125px;
            }
            #s-75 {
              top: 2px;
              left: 125px;
            }
            #s-74 {
              top: 95px;
              left: 166px;
            }
            #s-73 {
              top: 33px;
              left: 166px;
            }
            #s-72 {
              top: 2px;
              left: 166px;
            }
            #s-71 {
              top: 95px;
              left: 207px;
            }
            #s-70 {
              top: 33px;
              left: 207px;
            }
            #s-69 {
              top: 33px;
              left: 248px;
            }
            #s-68 {
              top: 95px;
              left: 248px;
            }
            #s-67 {
              top: 33px;
              left: 289px;
            }
            #s-66 {
              top: 95px;
              left: 289px;
            }
            #s-65 {
              top: 33px;
              left: 330px;
            }
            #s-64 {
              top: 95px;
              left: 330px;
            }
            #s-63 {
              top: 95px;
              left: 371px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
