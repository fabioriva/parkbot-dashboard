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
              height: 99px;
              width: 211px;
            }
            #el {
              top: 64px;
              left: 84px;
            }
            /* P1 */
            #s-12 {
              top: 2px;
              left: 2px;
            }
            #s-11 {
              top: 2px;
              left: 43px;
            }
            #s-10 {
              top: 2px;
              left: 125px;
            }
            #s-9 {
              top: 2px;
              left: 166px;
            }
            #s-8 {
              top: 33px;
              left: 2px;
            }
            #s-7 {
              top: 33px;
              left: 43px;
            }
            #s-6 {
              top: 33px;
              left: 125px;
            }
            #s-5 {
              top: 33px;
              left: 166px;
            }
            #s-4 {
              top: 64px;
              left: 2px;
            }
            #s-3 {
              top: 64px;
              left: 43px;
            }
            #s-2 {
              top: 64px;
              left: 125px;
            }
            #s-1 {
              top: 64px;
              left: 166px;
            }
            /* P2 */
            #s-24 {
              top: 2px;
              left: 2px;
            }
            #s-23 {
              top: 2px;
              left: 43px;
            }
            #s-22 {
              top: 2px;
              left: 125px;
            }
            #s-21 {
              top: 2px;
              left: 166px;
            }
            #s-20 {
              top: 33px;
              left: 2px;
            }
            #s-19 {
              top: 33px;
              left: 43px;
            }
            #s-18 {
              top: 33px;
              left: 125px;
            }
            #s-17 {
              top: 33px;
              left: 166px;
            }
            #s-16 {
              top: 64px;
              left: 2px;
            }
            #s-15 {
              top: 64px;
              left: 43px;
            }
            #s-14 {
              top: 64px;
              left: 125px;
            }
            #s-13 {
              top: 64px;
              left: 166px;
            }
            /* P3 */
            #s-36 {
              top: 2px;
              left: 2px;
            }
            #s-35 {
              top: 2px;
              left: 43px;
            }
            #s-34 {
              top: 2px;
              left: 125px;
            }
            #s-33 {
              top: 2px;
              left: 166px;
            }
            #s-32 {
              top: 33px;
              left: 2px;
            }
            #s-31 {
              top: 33px;
              left: 43px;
            }
            #s-30 {
              top: 33px;
              left: 125px;
            }
            #s-29 {
              top: 33px;
              left: 166px;
            }
            #s-28 {
              top: 64px;
              left: 2px;
            }
            #s-27 {
              top: 64px;
              left: 43px;
            }
            #s-26 {
              top: 64px;
              left: 125px;
            }
            #s-25 {
              top: 64px;
              left: 166px;
            }
            /* P4 */
            #s-48 {
              top: 2px;
              left: 2px;
            }
            #s-47 {
              top: 2px;
              left: 43px;
            }
            #s-46 {
              top: 2px;
              left: 125px;
            }
            #s-45 {
              top: 2px;
              left: 166px;
            }
            #s-44 {
              top: 33px;
              left: 2px;
            }
            #s-43 {
              top: 33px;
              left: 43px;
            }
            #s-42 {
              top: 33px;
              left: 125px;
            }
            #s-41 {
              top: 33px;
              left: 166px;
            }
            #s-40 {
              top: 64px;
              left: 2px;
            }
            #s-39 {
              top: 64px;
              left: 43px;
            }
            #s-38 {
              top: 64px;
              left: 125px;
            }
            #s-37 {
              top: 64px;
              left: 166px;
            }
            /* P5 */
            #s-50 {
              top: 64px;
              left: 43px;
            }
            #s-49 {
              top: 64px;
              left: 125px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
