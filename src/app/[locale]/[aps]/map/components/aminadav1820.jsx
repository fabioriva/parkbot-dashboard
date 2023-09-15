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
              width: 609px;
            }
            #eu-1 {
              top: 33px;
              left: 104px;
            }
            #eu-2 {
              top: 33px;
              left: 427px;
            }
            /* P1 */
            // V side
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-3 {
              top: 2px;
              left: 43px;
            }
            #s-5 {
              top: 2px;
              left: 84px;
            }
            #s-7 {
              top: 2px;
              left: 135px;
            }
            #s-9 {
              top: 2px;
              left: 176px;
            }
            #s-11 {
              top: 2px;
              left: 217px;
            }
            #s-12 {
              top: 2px;
              left: 258px;
            }
            #s-13 {
              top: 2px;
              left: 309px;
            }
            #s-15 {
              top: 2px;
              left: 350px;
            }
            #s-17 {
              top: 2px;
              left: 391px;
            }
            #s-19 {
              top: 2px;
              left: 432px;
            }
            #s-21 {
              top: 2px;
              left: 483px;
            }
            #s-22 {
              top: 2px;
              left: 524px;
            }
            #s-24 {
              top: 2px;
              left: 565px;
            }
            // H side
            #s-2 {
              top: 64px;
              left: 2px;
            }
            #s-4 {
              top: 64px;
              left: 43px;
            }
            #s-6 {
              top: 64px;
              left: 94px;
            }
            #s-8 {
              top: 64px;
              left: 135px;
            }
            #s-10 {
              top: 64px;
              left: 186px;
            }
            #s-14 {
              top: 64px;
              left: 324px;
            }
            #s-16 {
              top: 64px;
              left: 365px;
            }
            #s-18 {
              top: 64px;
              left: 416px;
            }
            #s-20 {
              top: 64px;
              left: 457px;
            }
            #s-23 {
              top: 64px;
              left: 508px;
            }
            /* P2 */
            // V side
            #s-25 {
              top: 2px;
              left: 2px;
            }
            #s-27 {
              top: 2px;
              left: 43px;
            }
            #s-29 {
              top: 2px;
              left: 84px;
            }
            #s-31 {
              top: 2px;
              left: 135px;
            }
            #s-33 {
              top: 2px;
              left: 176px;
            }
            #s-35 {
              top: 2px;
              left: 217px;
            }
            #s-36 {
              top: 2px;
              left: 258px;
            }
            #s-37 {
              top: 2px;
              left: 309px;
            }
            #s-39 {
              top: 2px;
              left: 350px;
            }
            #s-41 {
              top: 2px;
              left: 391px;
            }
            #s-43 {
              top: 2px;
              left: 432px;
            }
            #s-45 {
              top: 2px;
              left: 483px;
            }
            #s-46 {
              top: 2px;
              left: 524px;
            }
            #s-48 {
              top: 2px;
              left: 565px;
            }
            // H side
            #s-26 {
              top: 64px;
              left: 2px;
            }
            #s-28 {
              top: 64px;
              left: 43px;
            }
            #s-30 {
              top: 64px;
              left: 94px;
            }
            #s-32 {
              top: 64px;
              left: 135px;
            }
            #s-34 {
              top: 64px;
              left: 186px;
            }
            #s-38 {
              top: 64px;
              left: 324px;
            }
            #s-40 {
              top: 64px;
              left: 365px;
            }
            #s-42 {
              top: 64px;
              left: 416px;
            }
            #s-44 {
              top: 64px;
              left: 457px;
            }
            #s-47 {
              top: 64px;
              left: 508px;
            }
            /* P3 */
            // V side
            #s-49 {
              top: 2px;
              left: 2px;
            }
            #s-51 {
              top: 2px;
              left: 43px;
            }
            #s-53 {
              top: 2px;
              left: 84px;
            }
            #s-55 {
              top: 2px;
              left: 135px;
            }
            #s-57 {
              top: 2px;
              left: 176px;
            }
            #s-59 {
              top: 2px;
              left: 217px;
            }
            #s-60 {
              top: 2px;
              left: 258px;
            }
            #s-61 {
              top: 2px;
              left: 309px;
            }
            #s-63 {
              top: 2px;
              left: 350px;
            }
            #s-65 {
              top: 2px;
              left: 391px;
            }
            #s-67 {
              top: 2px;
              left: 432px;
            }
            #s-69 {
              top: 2px;
              left: 483px;
            }
            #s-70 {
              top: 2px;
              left: 524px;
            }
            #s-72 {
              top: 2px;
              left: 565px;
            }
            // H side
            #s-50 {
              top: 64px;
              left: 2px;
            }
            #s-52 {
              top: 64px;
              left: 43px;
            }
            #s-54 {
              top: 64px;
              left: 94px;
            }
            #s-56 {
              top: 64px;
              left: 135px;
            }
            #s-58 {
              top: 64px;
              left: 186px;
            }
            #s-62 {
              top: 64px;
              left: 324px;
            }
            #s-64 {
              top: 64px;
              left: 365px;
            }
            #s-66 {
              top: 64px;
              left: 416px;
            }
            #s-68 {
              top: 64px;
              left: 457px;
            }
            #s-71 {
              top: 64px;
              left: 508px;
            }
            /* P4 */
            // V side
            #s-73 {
              top: 2px;
              left: 2px;
            }
            #s-75 {
              top: 2px;
              left: 43px;
            }
            #s-77 {
              top: 2px;
              left: 84px;
            }
            #s-79 {
              top: 2px;
              left: 135px;
            }
            #s-81 {
              top: 2px;
              left: 176px;
            }
            #s-83 {
              top: 2px;
              left: 217px;
            }
            #s-84 {
              top: 2px;
              left: 258px;
            }
            #s-85 {
              top: 2px;
              left: 309px;
            }
            #s-87 {
              top: 2px;
              left: 350px;
            }
            #s-89 {
              top: 2px;
              left: 391px;
            }
            #s-91 {
              top: 2px;
              left: 432px;
            }
            #s-93 {
              top: 2px;
              left: 483px;
            }
            #s-94 {
              top: 2px;
              left: 524px;
            }
            #s-96 {
              top: 2px;
              left: 565px;
            }
            // H side
            #s-74 {
              top: 64px;
              left: 2px;
            }
            #s-76 {
              top: 64px;
              left: 43px;
            }
            #s-78 {
              top: 64px;
              left: 94px;
            }
            #s-80 {
              top: 64px;
              left: 135px;
            }
            #s-82 {
              top: 64px;
              left: 186px;
            }
            #s-86 {
              top: 64px;
              left: 324px;
            }
            #s-88 {
              top: 64px;
              left: 365px;
            }
            #s-90 {
              top: 64px;
              left: 416px;
            }
            #s-92 {
              top: 64px;
              left: 457px;
            }
            #s-95 {
              top: 64px;
              left: 508px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
