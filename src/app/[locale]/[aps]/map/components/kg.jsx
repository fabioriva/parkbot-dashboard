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
            numItemsLg={3}
            className="gap-3 mt-3"
          >
            {Levels.map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 100px;
              width: 251px;
            }
            #el {
              top: 34px;
              left: 2px;
            }
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-2 {
              top: 66px;
              left: 43px;
            }
            #s-3 {
              top: 2px;
              left: 43px;
            }
            #s-4 {
              top: 66px;
              left: 84px;
            }
            #s-5 {
              top: 2px;
              left: 84px;
            }
            #s-6 {
              top: 66px;
              left: 125px;
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
              top: 2px;
              left: 2px;
            }
            #s-11 {
              top: 66px;
              left: 2px;
            }
            #s-12 {
              top: 2px;
              left: 43px;
            }
            #s-13 {
              top: 66px;
              left: 43px;
            }
            #s-14 {
              top: 2px;
              left: 84px;
            }
            #s-15 {
              top: 66px;
              left: 84px;
            }
            #s-16 {
              top: 2px;
              left: 125px;
            }
            #s-17 {
              top: 66px;
              left: 125px;
            }
            #s-18 {
              top: 2px;
              left: 166px;
            }
            #s-19 {
              top: 2px;
              left: 207px;
            }
            #s-20 {
              top: 2px;
              left: 2px;
            }
            #s-21 {
              top: 66px;
              left: 2px;
            }
            #s-22 {
              top: 2px;
              left: 43px;
            }
            #s-23 {
              top: 66px;
              left: 43px;
            }
            #s-24 {
              top: 2px;
              left: 84px;
            }
            #s-25 {
              top: 66px;
              left: 84px;
            }
            #s-26 {
              top: 2px;
              left: 125px;
            }
            #s-27 {
              top: 66px;
              left: 125px;
            }
            #s-28 {
              top: 2px;
              left: 166px;
            }
            #s-29 {
              top: 2px;
              left: 207px;
            }
            #s-30 {
              top: 2px;
              left: 2px;
            }
            #s-31 {
              top: 66px;
              left: 2px;
            }
            #s-32 {
              top: 2px;
              left: 43px;
            }
            #s-33 {
              top: 66px;
              left: 43px;
            }
            #s-34 {
              top: 2px;
              left: 84px;
            }
            #s-35 {
              top: 66px;
              left: 84px;
            }
            #s-36 {
              top: 2px;
              left: 125px;
            }
            #s-37 {
              top: 66px;
              left: 125px;
            }
            #s-38 {
              top: 2px;
              left: 166px;
            }
            #s-39 {
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
