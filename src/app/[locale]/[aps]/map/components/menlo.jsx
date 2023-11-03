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
            .el {
              width: 36px !important; /* override */
            }
            .s {
              width: 36px !important; /* override */
            }
            .l {
              height: 129px;
              width: 1078px;
            }
            /* El */
            #el-1 {
              top: 64px;
              left: 483px;
            }
            #el-2 {
              top: 64px;
              left: 594px;
            }
            #el-3 {
              top: 64px;
              left: 816px;
            }
            /* Level 1 */
            #s-1 {
              top: 64px;
              left: 2px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
