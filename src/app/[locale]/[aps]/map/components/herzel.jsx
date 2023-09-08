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
              width: 373px;
            }
            #el-1 {
              top: 95px;
              left: 2px;
            }
            #el-2 {
              top: 95px;
              left: 330px;
            }
            /* P1 */
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
