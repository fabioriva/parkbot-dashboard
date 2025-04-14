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
              height: 132px;
              width: 374px;
            }
            .el {
              height: 30px;
              width: 40px;
            }
            #el-l {
              top: 2px;
              left: 2px;
            }
            #s-9 {
              top: 33px;
              left: 2px;
            }
            #s-1 {
              top: 2px;
              left: 43px;
            }
            #s-2 {
              top: 2px;
              left: 84px;
            }
            #s-3 {
              top: 2px;
              left: 125px;
            }
            #s-4 {
              top: 2px;
              left: 166px;
            }
            #s-5 {
              top: 64px;
              left: 43px;
            }
            #s-6 {
              top: 64px;
              left: 84px;
            }
            #s-7 {
              top: 64px;
              left: 125px;
            }
            #s-8 {
              top: 64px;
              left: 166px;
            }
            #s-10 {
              top: 33px;
              left: 207px;
            }
            #el-r {
              top: 2px;
              left: 207px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
