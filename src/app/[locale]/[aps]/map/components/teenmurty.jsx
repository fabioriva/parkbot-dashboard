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
            numItemsMd={3}
            numItemsLg={6}
            className="gap-3 mt-3"
          >
            {Levels.map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 98px;
              width: 128px;
            }
            /* Level +1 */
            #el {
              top: 33px;
              left: 43px;
            }
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 84px;
            }
            #s-3 {
              top: 33px;
              left: 2px;
            }
            #s-4 {
              top: 33px;
              left: 84px;
            }
            #s-5 {
              top: 64px;
              left: 2px;
            }
            #s-6 {
              top: 64px;
              left: 84px;
            }
            #s-7 {
              top: 2px;
              left: 2px;
            }
            #s-8 {
              top: 2px;
              left: 84px;
            }
            #s-9 {
              top: 33px;
              left: 2px;
            }
            #s-10 {
              top: 33px;
              left: 84px;
            }
            #s-11 {
              top: 64px;
              left: 2px;
            }
            #s-12 {
              top: 64px;
              left: 84px;
            }
            #s-13 {
              top: 2px;
              left: 2px;
            }
            #s-14 {
              top: 2px;
              left: 84px;
            }
            #s-15 {
              top: 33px;
              left: 2px;
            }
            #s-16 {
              top: 33px;
              left: 84px;
            }
            #s-17 {
              top: 64px;
              left: 2px;
            }
            #s-18 {
              top: 64px;
              left: 84px;
            }
            #s-19 {
              top: 2px;
              left: 2px;
            }
            #s-20 {
              top: 2px;
              left: 84px;
            }
            #s-21 {
              top: 33px;
              left: 2px;
            }
            #s-22 {
              top: 33px;
              left: 84px;
            }
            #s-23 {
              top: 64px;
              left: 2px;
            }
            #s-24 {
              top: 64px;
              left: 84px;
            }
            #s-25 {
              top: 2px;
              left: 2px;
            }
            #s-26 {
              top: 2px;
              left: 84px;
            }
            #s-27 {
              top: 33px;
              left: 2px;
            }
            #s-28 {
              top: 33px;
              left: 84px;
            }
            #s-29 {
              top: 64px;
              left: 2px;
            }
            #s-30 {
              top: 64px;
              left: 84px;
            }
            #s-31 {
              top: 2px;
              left: 2px;
            }
            #s-32 {
              top: 2px;
              left: 84px;
            }
            #s-33 {
              top: 33px;
              left: 2px;
            }
            #s-34 {
              top: 33px;
              left: 84px;
            }
            #s-35 {
              top: 64px;
              left: 2px;
            }
            #s-36 {
              top: 64px;
              left: 84px;
            }
            #s-37 {
              top: 2px;
              left: 2px;
            }
            #s-38 {
              top: 2px;
              left: 84px;
            }
            #s-39 {
              top: 33px;
              left: 2px;
            }
            #s-40 {
              top: 33px;
              left: 84px;
            }
            #s-41 {
              top: 64px;
              left: 2px;
            }
            #s-42 {
              top: 64px;
              left: 84px;
            }
            #s-43 {
              top: 2px;
              left: 2px;
            }
            #s-44 {
              top: 2px;
              left: 84px;
            }
            #s-45 {
              top: 33px;
              left: 2px;
            }
            #s-46 {
              top: 33px;
              left: 84px;
            }
            #s-47 {
              top: 64px;
              left: 2px;
            }
            #s-48 {
              top: 64px;
              left: 84px;
            }
            #s-49 {
              top: 2px;
              left: 2px;
            }
            #s-50 {
              top: 2px;
              left: 84px;
            }
            #s-51 {
              top: 33px;
              left: 2px;
            }
            #s-52 {
              top: 33px;
              left: 84px;
            }
            #s-53 {
              top: 64px;
              left: 2px;
            }
            #s-54 {
              top: 64px;
              left: 84px;
            }
            #s-55 {
              top: 2px;
              left: 2px;
            }
            #s-56 {
              top: 2px;
              left: 84px;
            }
            #s-57 {
              top: 33px;
              left: 2px;
            }
            #s-58 {
              top: 33px;
              left: 84px;
            }
            #s-59 {
              top: 64px;
              left: 2px;
            }
            #s-60 {
              top: 64px;
              left: 84px;
            }
            #s-61 {
              top: 2px;
              left: 2px;
            }
            #s-62 {
              top: 2px;
              left: 84px;
            }
            #s-63 {
              top: 33px;
              left: 2px;
            }
            #s-64 {
              top: 33px;
              left: 84px;
            }
            #s-65 {
              top: 64px;
              left: 2px;
            }
            #s-66 {
              top: 64px;
              left: 84px;
            }
            #s-67 {
              top: 2px;
              left: 2px;
            }
            #s-68 {
              top: 2px;
              left: 84px;
            }
            #s-69 {
              top: 33px;
              left: 2px;
            }
            #s-70 {
              top: 33px;
              left: 84px;
            }
            #s-71 {
              top: 64px;
              left: 2px;
            }
            #s-72 {
              top: 64px;
              left: 84px;
            }
            #s-73 {
              top: 2px;
              left: 2px;
            }
            #s-74 {
              top: 2px;
              left: 84px;
            }
            #s-75 {
              top: 33px;
              left: 2px;
            }
            #s-76 {
              top: 33px;
              left: 84px;
            }
            #s-77 {
              top: 64px;
              left: 2px;
            }
            #s-78 {
              top: 64px;
              left: 84px;
            }
            #s-79 {
              top: 2px;
              left: 2px;
            }
            #s-80 {
              top: 2px;
              left: 84px;
            }
            #s-81 {
              top: 33px;
              left: 2px;
            }
            #s-82 {
              top: 33px;
              left: 84px;
            }
            #s-83 {
              top: 64px;
              left: 2px;
            }
            #s-84 {
              top: 64px;
              left: 84px;
            }
            #s-85 {
              top: 2px;
              left: 2px;
            }
            #s-86 {
              top: 2px;
              left: 84px;
            }
            #s-87 {
              top: 33px;
              left: 2px;
            }
            #s-88 {
              top: 33px;
              left: 84px;
            }
            #s-89 {
              top: 64px;
              left: 2px;
            }
            #s-90 {
              top: 64px;
              left: 84px;
            }
            #s-91 {
              top: 2px;
              left: 2px;
            }
            #s-92 {
              top: 2px;
              left: 84px;
            }
            #s-93 {
              top: 33px;
              left: 2px;
            }
            #s-94 {
              top: 33px;
              left: 84px;
            }
            #s-95 {
              top: 64px;
              left: 2px;
            }
            #s-96 {
              top: 64px;
              left: 84px;
            }
            #s-97 {
              top: 2px;
              left: 2px;
            }
            #s-98 {
              top: 2px;
              left: 84px;
            }
            #s-99 {
              top: 33px;
              left: 2px;
            }
            #s-100 {
              top: 33px;
              left: 84px;
            }
            #s-101 {
              top: 64px;
              left: 2px;
            }
            #s-102 {
              top: 64px;
              left: 84px;
            }
            #s-103 {
              top: 2px;
              left: 2px;
            }
            #s-104 {
              top: 2px;
              left: 84px;
            }
            #s-105 {
              top: 33px;
              left: 2px;
            }
            #s-106 {
              top: 33px;
              left: 84px;
            }
            #s-107 {
              top: 64px;
              left: 2px;
            }
            #s-108 {
              top: 64px;
              left: 84px;
            }
            #s-109 {
              top: 2px;
              left: 2px;
            }
            #s-110 {
              top: 2px;
              left: 84px;
            }
            #s-111 {
              top: 33px;
              left: 2px;
            }
            #s-112 {
              top: 33px;
              left: 84px;
            }
            #s-113 {
              top: 64px;
              left: 2px;
            }
            #s-114 {
              top: 64px;
              left: 84px;
            }
            #s-115 {
              top: 2px;
              left: 2px;
            }
            #s-116 {
              top: 2px;
              left: 84px;
            }
            #s-117 {
              top: 33px;
              left: 2px;
            }
            #s-118 {
              top: 33px;
              left: 84px;
            }
            #s-119 {
              top: 64px;
              left: 2px;
            }
            #s-120 {
              top: 64px;
              left: 84px;
            }
            #s-121 {
              top: 2px;
              left: 2px;
            }
            #s-122 {
              top: 2px;
              left: 84px;
            }
            #s-123 {
              top: 33px;
              left: 2px;
            }
            #s-124 {
              top: 33px;
              left: 84px;
            }
            #s-125 {
              top: 64px;
              left: 2px;
            }
            #s-126 {
              top: 64px;
              left: 84px;
            }
            #s-127 {
              top: 2px;
              left: 2px;
            }
            #s-128 {
              top: 2px;
              left: 84px;
            }
            #s-129 {
              top: 33px;
              left: 2px;
            }
            #s-130 {
              top: 33px;
              left: 84px;
            }
            #s-131 {
              top: 64px;
              left: 2px;
            }
            #s-132 {
              top: 64px;
              left: 84px;
            }
            #s-133 {
              top: 2px;
              left: 2px;
            }
            #s-134 {
              top: 2px;
              left: 84px;
            }
            #s-135 {
              top: 33px;
              left: 2px;
            }
            #s-136 {
              top: 33px;
              left: 84px;
            }
            #s-137 {
              top: 64px;
              left: 2px;
            }
            #s-138 {
              top: 64px;
              left: 84px;
            }
            #s-139 {
              top: 2px;
              left: 2px;
            }
            #s-140 {
              top: 2px;
              left: 84px;
            }
            #s-141 {
              top: 33px;
              left: 2px;
            }
            #s-142 {
              top: 33px;
              left: 84px;
            }
            #s-143 {
              top: 64px;
              left: 2px;
            }
            #s-144 {
              top: 64px;
              left: 84px;
            }
            #s-145 {
              top: 2px;
              left: 2px;
            }
            #s-146 {
              top: 2px;
              left: 84px;
            }
            #s-147 {
              top: 33px;
              left: 2px;
            }
            #s-148 {
              top: 33px;
              left: 84px;
            }
            #s-149 {
              top: 64px;
              left: 2px;
            }
            #s-150 {
              top: 64px;
              left: 84px;
            }
            #s-151 {
              top: 2px;
              left: 2px;
            }
            #s-152 {
              top: 2px;
              left: 84px;
            }
            #s-153 {
              top: 33px;
              left: 2px;
            }
            #s-154 {
              top: 33px;
              left: 84px;
            }
            #s-155 {
              top: 64px;
              left: 2px;
            }
            #s-156 {
              top: 64px;
              left: 84px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
