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
              height: 98px;
              width: 456px;
            }
            #eu-1 {
              top: 33px;
              left: 125px;
            }
            #eu-2 {
              top: 33px;
              left: 289px;
            }
            /* P1 */
            #s-1 {
              top: 64px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 31px;
            }
            #s-3 {
              top: 64px;
              left: 43px;
            }
            #s-4 {
              top: 2px;
              left: 74px;
            }
            #s-5 {
              top: 64px;
              left: 84px;
            }
            #s-6 {
              top: 2px;
              left: 115px;
            }
            #s-7 {
              top: 64px;
              left: 125px;
            }
            #s-8 {
              top: 2px;
              left: 156px;
            }
            #s-9 {
              top: 64px;
              left: 166px;
            }
            #s-10 {
              top: 64px;
              left: 207px;
            }
            #s-11 {
              top: 64px;
              left: 248px;
            }
            #s-12 {
              top: 2px;
              left: 248px;
            }
            #s-13 {
              top: 2px;
              left: 289px;
            }
            #s-14 {
              top: 64px;
              left: 289px;
            }
            #s-15 {
              top: 2px;
              left: 330px;
            }
            #s-16 {
              top: 64px;
              left: 330px;
            }
            #s-17 {
              top: 64px;
              left: 371px;
            }
            #s-18 {
              top: 64px;
              left: 412px;
            }
            /* P2 */
            #s-19 {
              top: 64px;
              left: 2px;
            }
            #s-20 {
              top: 2px;
              left: 31px;
            }
            #s-21 {
              top: 64px;
              left: 43px;
            }
            #s-22 {
              top: 2px;
              left: 74px;
            }
            #s-23 {
              top: 64px;
              left: 84px;
            }
            #s-24 {
              top: 2px;
              left: 115px;
            }
            #s-25 {
              top: 64px;
              left: 125px;
            }
            #s-26 {
              top: 2px;
              left: 156px;
            }
            #s-27 {
              top: 64px;
              left: 166px;
            }
            #s-28 {
              top: 64px;
              left: 207px;
            }
            #s-29 {
              top: 64px;
              left: 248px;
            }
            #s-30 {
              top: 2px;
              left: 248px;
            }
            #s-31 {
              top: 2px;
              left: 289px;
            }
            #s-32 {
              top: 64px;
              left: 289px;
            }
            #s-33 {
              top: 2px;
              left: 330px;
            }
            #s-34 {
              top: 64px;
              left: 330px;
            }
            #s-35 {
              top: 64px;
              left: 371px;
            }
            #s-36 {
              top: 64px;
              left: 412px;
            }
            /* P3 */
            #s-37 {
              top: 64px;
              left: 2px;
            }
            #s-38 {
              top: 2px;
              left: 31px;
            }
            #s-39 {
              top: 64px;
              left: 43px;
            }
            #s-40 {
              top: 2px;
              left: 74px;
            }
            #s-41 {
              top: 64px;
              left: 84px;
            }
            #s-42 {
              top: 2px;
              left: 115px;
            }
            #s-43 {
              top: 64px;
              left: 125px;
            }
            #s-44 {
              top: 2px;
              left: 156px;
            }
            #s-45 {
              top: 64px;
              left: 166px;
            }
            #s-46 {
              top: 64px;
              left: 207px;
            }
            #s-47 {
              top: 64px;
              left: 248px;
            }
            #s-48 {
              top: 2px;
              left: 248px;
            }
            #s-49 {
              top: 2px;
              left: 289px;
            }
            #s-50 {
              top: 64px;
              left: 289px;
            }
            #s-51 {
              top: 2px;
              left: 330px;
            }
            #s-52 {
              top: 64px;
              left: 330px;
            }
            #s-53 {
              top: 64px;
              left: 371px;
            }
            #s-54 {
              top: 64px;
              left: 412px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
