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
            className="gap-6 mt-3"
          >
            {Levels.map((level) => level)}
          </Grid>
          <style>{`
          .l {
            height: 163px;
            width: 251px;
          }
          #el {
            top: 66px;
            left: 2px;
          }
          /* P1 */
          #s-1 {
            top: 2px;
            left: 2px;
          }
          #s-2 {
            top: 34px;
            left: 2px;
          }
          #s-3 {
            top: 98px;
            left: 2px;
          }
          #s-4 {
            top: 130px;
            left: 2px;
          }
          #s-5 {
            top: 2px;
            left: 43px;
          }
          #s-6 {
            top: 34px;
            left: 43px;
          }
          #s-7 {
            top: 98px;
            left: 43px;
          }
          #s-8 {
            top: 130px;
            left: 43px;
          }
          #s-9 {
            top: 2px;
            left: 84px;
          }
          #s-10 {
            top: 34px;
            left: 84px;
          }
          #s-11 {
            top: 98px;
            left: 84px;
          }
          #s-12 {
            top: 130px;
            left: 84px;
          }
          #s-13 {
            top: 2px;
            left: 125px;
          }
          #s-14 {
            top: 34px;
            left: 125px;
          }
          #s-15 {
            top: 98px;
            left: 125px;
          }
          #s-16 {
            top: 130px;
            left: 125px;
          }
          #s-17 {
            top: 2px;
            left: 166px;
          }
          #s-18 {
            top: 34px;
            left: 166px;
          }
          #s-19 {
            top: 2px;
            left: 207px;
          }
          #s-20 {
            top: 34px;
            left: 207px;
          }
          /* P2 */
          #s-21 {
            top: 2px;
            left: 2px;
          }
          #s-22 {
            top: 34px;
            left: 2px;
          }
          #s-23 {
            top: 98px;
            left: 2px;
          }
          #s-24 {
            top: 130px;
            left: 2px;
          }
          #s-25 {
            top: 2px;
            left: 43px;
          }
          #s-26 {
            top: 34px;
            left: 43px;
          }
          #s-27 {
            top: 98px;
            left: 43px;
          }
          #s-28 {
            top: 130px;
            left: 43px;
          }
          #s-29 {
            top: 2px;
            left: 84px;
          }
          #s-30 {
            top: 34px;
            left: 84px;
          }
          #s-31 {
            top: 98px;
            left: 84px;
          }
          #s-32 {
            top: 130px;
            left: 84px;
          }
          #s-33 {
            top: 2px;
            left: 125px;
          }
          #s-34 {
            top: 34px;
            left: 125px;
          }
          #s-35 {
            top: 98px;
            left: 125px;
          }
          #s-36 {
            top: 130px;
            left: 125px;
          }
          #s-37 {
            top: 2px;
            left: 166px;
          }
          #s-38 {
            top: 34px;
            left: 166px;
          }
          #s-39 {
            top: 2px;
            left: 207px;
          }
          #s-40 {
            top: 34px;
            left: 207px;
          }
          /* P3 */
          #s-41 {
            top: 2px;
            left: 2px;
          }
          #s-42 {
            top: 34px;
            left: 2px;
          }
          #s-43 {
            top: 98px;
            left: 2px;
          }
          #s-44 {
            top: 130px;
            left: 2px;
          }
          #s-45 {
            top: 2px;
            left: 43px;
          }
          #s-46 {
            top: 34px;
            left: 43px;
          }
          #s-47 {
            top: 98px;
            left: 43px;
          }
          #s-48 {
            top: 130px;
            left: 43px;
          }
          #s-49 {
            top: 2px;
            left: 84px;
          }
          #s-50 {
            top: 34px;
            left: 84px;
          }
          #s-51 {
            top: 98px;
            left: 84px;
          }
          #s-52 {
            top: 130px;
            left: 84px;
          }
          #s-53 {
            top: 2px;
            left: 125px;
          }
          #s-54 {
            top: 34px;
            left: 125px;
          }
          #s-55 {
            top: 98px;
            left: 125px;
          }
          #s-56 {
            top: 130px;
            left: 125px;
          }
          #s-57 {
            top: 2px;
            left: 166px;
          }
          #s-58 {
            top: 34px;
            left: 166px;
          }
          #s-59 {
            top: 2px;
            left: 207px;
          }
          #s-60 {
            top: 34px;
            left: 207px;
          }
          /* P4 */
          #s-61 {
            top: 2px;
            left: 2px;
          }
          #s-62 {
            top: 34px;
            left: 2px;
          }
          #s-63 {
            top: 98px;
            left: 2px;
          }
          #s-64 {
            top: 130px;
            left: 2px;
          }
          #s-65 {
            top: 2px;
            left: 43px;
          }
          #s-66 {
            top: 34px;
            left: 43px;
          }
          #s-67 {
            top: 98px;
            left: 43px;
          }
          #s-68 {
            top: 130px;
            left: 43px;
          }
          #s-69 {
            top: 2px;
            left: 84px;
          }
          #s-70 {
            top: 34px;
            left: 84px;
          }
          #s-71 {
            top: 98px;
            left: 84px;
          }
          #s-72 {
            top: 130px;
            left: 84px;
          }
          #s-73 {
            top: 2px;
            left: 125px;
          }
          #s-74 {
            top: 34px;
            left: 125px;
          }
          #s-75 {
            top: 98px;
            left: 125px;
          }
          #s-76 {
            top: 130px;
            left: 125px;
          }
          #s-77 {
            top: 2px;
            left: 166px;
          }
          #s-78 {
            top: 34px;
            left: 166px;
          }
          #s-79 {
            top: 2px;
            left: 207px;
          }
          #s-80 {
            top: 34px;
            left: 207px;
          }
          /* P5 */
          #s-81 {
            top: 2px;
            left: 2px;
          }
          #s-82 {
            top: 34px;
            left: 2px;
          }
          #s-83 {
            top: 98px;
            left: 2px;
          }
          #s-84 {
            top: 130px;
            left: 2px;
          }
          #s-85 {
            top: 2px;
            left: 43px;
          }
          #s-86 {
            top: 34px;
            left: 43px;
          }
          #s-87 {
            top: 98px;
            left: 43px;
          }
          #s-88 {
            top: 130px;
            left: 43px;
          }
          #s-89 {
            top: 2px;
            left: 84px;
          }
          #s-90 {
            top: 34px;
            left: 84px;
          }
          #s-91 {
            top: 98px;
            left: 84px;
          }
          #s-92 {
            top: 130px;
            left: 84px;
          }
          #s-93 {
            top: 2px;
            left: 125px;
          }
          #s-94 {
            top: 34px;
            left: 125px;
          }
          #s-95 {
            top: 98px;
            left: 125px;
          }
          #s-96 {
            top: 130px;
            left: 125px;
          }
          #s-97 {
            top: 2px;
            left: 166px;
          }
          #s-98 {
            top: 34px;
            left: 166px;
          }
          #s-99 {
            top: 2px;
            left: 207px;
          }
          #s-100 {
            top: 34px;
            left: 207px;
          }
          /* P6 */
          #s-101 {
            top: 2px;
            left: 2px;
          }
          #s-102 {
            top: 34px;
            left: 2px;
          }
          #s-103 {
            top: 98px;
            left: 2px;
          }
          #s-104 {
            top: 130px;
            left: 2px;
          }
          #s-105 {
            top: 2px;
            left: 43px;
          }
          #s-106 {
            top: 34px;
            left: 43px;
          }
          #s-107 {
            top: 98px;
            left: 43px;
          }
          #s-108 {
            top: 130px;
            left: 43px;
          }
          #s-109 {
            top: 2px;
            left: 84px;
          }
          #s-110 {
            top: 34px;
            left: 84px;
          }
          #s-111 {
            top: 98px;
            left: 84px;
          }
          #s-112 {
            top: 130px;
            left: 84px;
          }
          #s-113 {
            top: 2px;
            left: 125px;
          }
          #s-114 {
            top: 34px;
            left: 125px;
          }
          #s-115 {
            top: 98px;
            left: 125px;
          }
          #s-116 {
            top: 130px;
            left: 125px;
          }
          #s-117 {
            top: 2px;
            left: 166px;
          }
          #s-118 {
            top: 34px;
            left: 166px;
          }
          #s-119 {
            top: 2px;
            left: 207px;
          }
          #s-120 {
            top: 34px;
            left: 207px;
          }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
