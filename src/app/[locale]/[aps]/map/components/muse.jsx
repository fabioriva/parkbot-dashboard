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
            numItemsLg={5}
            className="gap-3 mt-3"
          >
            {Levels.reverse().map((level) => level)}
          </Grid>
          <style jsx global>{`
            .l {
              height: 98px;
              width: 169px;
            }
            #el-3 {
              top: 33px;
              left: 2px;
            }
            #el-4 {
              top: 33px;
              left: 125px;
            }
            #s-1 {
              top: 64px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 2px;
            }
            #s-3 {
              top: 64px;
              left: 43px;
            }
            #s-4 {
              top: 2px;
              left: 43px;
            }
            #s-5 {
              top: 64px;
              left: 84px;
            }
            #s-6 {
              top: 2px;
              left: 84px;
            }
            #s-7 {
              top: 64px;
              left: 125px;
            }
            #s-8 {
              top: 2px;
              left: 125px;
            }
            #s-9 {
              top: 64px;
              left: 2px;
            }
            #s-10 {
              top: 2px;
              left: 2px;
            }
            #s-11 {
              top: 64px;
              left: 43px;
            }
            #s-12 {
              top: 2px;
              left: 43px;
            }
            #s-13 {
              top: 64px;
              left: 84px;
            }
            #s-14 {
              top: 2px;
              left: 84px;
            }
            #s-15 {
              top: 64px;
              left: 125px;
            }
            #s-16 {
              top: 2px;
              left: 125px;
            }
            #s-17 {
              top: 64px;
              left: 2px;
            }
            #s-18 {
              top: 2px;
              left: 2px;
            }
            #s-19 {
              top: 64px;
              left: 43px;
            }
            #s-20 {
              top: 2px;
              left: 43px;
            }
            #s-21 {
              top: 64px;
              left: 84px;
            }
            #s-22 {
              top: 2px;
              left: 84px;
            }
            #s-23 {
              top: 64px;
              left: 125px;
            }
            #s-24 {
              top: 2px;
              left: 125px;
            }
            #s-25 {
              top: 64px;
              left: 2px;
            }
            #s-26 {
              top: 2px;
              left: 2px;
            }
            #s-27 {
              top: 64px;
              left: 43px;
            }
            #s-28 {
              top: 2px;
              left: 43px;
            }
            #s-29 {
              top: 64px;
              left: 84px;
            }
            #s-30 {
              top: 2px;
              left: 84px;
            }
            #s-31 {
              top: 64px;
              left: 125px;
            }
            #s-32 {
              top: 2px;
              left: 125px;
            }
            #s-33 {
              top: 64px;
              left: 2px;
            }
            #s-34 {
              top: 2px;
              left: 2px;
            }
            #s-35 {
              top: 64px;
              left: 43px;
            }
            #s-36 {
              top: 2px;
              left: 43px;
            }
            #s-37 {
              top: 64px;
              left: 84px;
            }
            #s-38 {
              top: 2px;
              left: 84px;
            }
            #s-39 {
              top: 64px;
              left: 125px;
            }
            #s-40 {
              top: 2px;
              left: 125px;
            }
            #s-41 {
              top: 64px;
              left: 2px;
            }
            #s-42 {
              top: 2px;
              left: 2px;
            }
            #s-43 {
              top: 64px;
              left: 43px;
            }
            #s-44 {
              top: 2px;
              left: 43px;
            }
            #s-45 {
              top: 64px;
              left: 84px;
            }
            #s-46 {
              top: 2px;
              left: 84px;
            }
            #s-47 {
              top: 64px;
              left: 125px;
            }
            #s-48 {
              top: 2px;
              left: 125px;
            }
            #s-49 {
              top: 64px;
              left: 2px;
            }
            #s-50 {
              top: 2px;
              left: 2px;
            }
            #s-51 {
              top: 64px;
              left: 43px;
            }
            #s-52 {
              top: 2px;
              left: 43px;
            }
            #s-53 {
              top: 64px;
              left: 84px;
            }
            #s-54 {
              top: 2px;
              left: 84px;
            }
            #s-55 {
              top: 64px;
              left: 125px;
            }
            #s-56 {
              top: 2px;
              left: 125px;
            }
            #s-57 {
              top: 64px;
              left: 2px;
            }
            #s-58 {
              top: 2px;
              left: 2px;
            }
            #s-59 {
              top: 64px;
              left: 43px;
            }
            #s-60 {
              top: 2px;
              left: 43px;
            }
            #s-61 {
              top: 64px;
              left: 84px;
            }
            #s-62 {
              top: 2px;
              left: 84px;
            }
            #s-63 {
              top: 64px;
              left: 125px;
            }
            #s-64 {
              top: 2px;
              left: 125px;
            }
            #s-65 {
              top: 64px;
              left: 2px;
            }
            #s-66 {
              top: 2px;
              left: 2px;
            }
            #s-67 {
              top: 64px;
              left: 43px;
            }
            #s-68 {
              top: 2px;
              left: 43px;
            }
            #s-69 {
              top: 64px;
              left: 84px;
            }
            #s-70 {
              top: 2px;
              left: 84px;
            }
            #s-71 {
              top: 64px;
              left: 125px;
            }
            #s-72 {
              top: 2px;
              left: 125px;
            }
            #s-73 {
              top: 64px;
              left: 2px;
            }
            #s-74 {
              top: 2px;
              left: 2px;
            }
            #s-75 {
              top: 64px;
              left: 43px;
            }
            #s-76 {
              top: 2px;
              left: 43px;
            }
            #s-77 {
              top: 64px;
              left: 84px;
            }
            #s-78 {
              top: 2px;
              left: 84px;
            }
            #s-79 {
              top: 64px;
              left: 125px;
            }
            #s-80 {
              top: 2px;
              left: 125px;
            }
            #s-81 {
              top: 64px;
              left: 2px;
            }
            #s-82 {
              top: 2px;
              left: 2px;
            }
            #s-83 {
              top: 64px;
              left: 43px;
            }
            #s-84 {
              top: 2px;
              left: 43px;
            }
            #s-85 {
              top: 64px;
              left: 84px;
            }
            #s-86 {
              top: 2px;
              left: 84px;
            }
            #s-87 {
              top: 64px;
              left: 125px;
            }
            #s-88 {
              top: 2px;
              left: 125px;
            }
            #s-89 {
              top: 64px;
              left: 2px;
            }
            #s-90 {
              top: 2px;
              left: 2px;
            }
            #s-91 {
              top: 64px;
              left: 43px;
            }
            #s-92 {
              top: 2px;
              left: 43px;
            }
            #s-93 {
              top: 64px;
              left: 84px;
            }
            #s-94 {
              top: 2px;
              left: 84px;
            }
            #s-95 {
              top: 64px;
              left: 125px;
            }
            #s-96 {
              top: 2px;
              left: 125px;
            }
            #s-97 {
              top: 64px;
              left: 2px;
            }
            #s-98 {
              top: 2px;
              left: 2px;
            }
            #s-99 {
              top: 64px;
              left: 43px;
            }
            #s-100 {
              top: 2px;
              left: 43px;
            }
            #s-101 {
              top: 64px;
              left: 84px;
            }
            #s-102 {
              top: 2px;
              left: 84px;
            }
            #s-103 {
              top: 64px;
              left: 125px;
            }
            #s-104 {
              top: 2px;
              left: 125px;
            }
            #s-105 {
              top: 64px;
              left: 2px;
            }
            #s-106 {
              top: 2px;
              left: 2px;
            }
            #s-107 {
              top: 64px;
              left: 43px;
            }
            #s-108 {
              top: 2px;
              left: 43px;
            }
            #s-109 {
              top: 64px;
              left: 84px;
            }
            #s-110 {
              top: 2px;
              left: 84px;
            }
            #s-111 {
              top: 64px;
              left: 125px;
            }
            #s-112 {
              top: 2px;
              left: 125px;
            }
            #s-113 {
              top: 64px;
              left: 2px;
            }
            #s-114 {
              top: 2px;
              left: 2px;
            }
            #s-115 {
              top: 64px;
              left: 43px;
            }
            #s-116 {
              top: 2px;
              left: 43px;
            }
            #s-117 {
              top: 64px;
              left: 84px;
            }
            #s-118 {
              top: 2px;
              left: 84px;
            }
            #s-119 {
              top: 64px;
              left: 125px;
            }
            #s-120 {
              top: 2px;
              left: 125px;
            }
            #s-121 {
              top: 64px;
              left: 2px;
            }
            #s-122 {
              top: 2px;
              left: 2px;
            }
            #s-123 {
              top: 64px;
              left: 43px;
            }
            #s-124 {
              top: 2px;
              left: 43px;
            }
            #s-125 {
              top: 64px;
              left: 84px;
            }
            #s-126 {
              top: 2px;
              left: 84px;
            }
            #s-127 {
              top: 64px;
              left: 125px;
            }
            #s-128 {
              top: 2px;
              left: 125px;
            }
            #s-129 {
              top: 64px;
              left: 2px;
            }
            #s-130 {
              top: 2px;
              left: 2px;
            }
            #s-131 {
              top: 64px;
              left: 43px;
            }
            #s-132 {
              top: 2px;
              left: 43px;
            }
            #s-133 {
              top: 64px;
              left: 84px;
            }
            #s-134 {
              top: 2px;
              left: 84px;
            }
            #s-135 {
              top: 64px;
              left: 125px;
            }
            #s-136 {
              top: 2px;
              left: 125px;
            }
            #s-137 {
              top: 64px;
              left: 2px;
            }
            #s-138 {
              top: 2px;
              left: 2px;
            }
            #s-139 {
              top: 64px;
              left: 43px;
            }
            #s-140 {
              top: 2px;
              left: 43px;
            }
            #s-141 {
              top: 64px;
              left: 84px;
            }
            #s-142 {
              top: 2px;
              left: 84px;
            }
            #s-143 {
              top: 64px;
              left: 125px;
            }
            #s-144 {
              top: 2px;
              left: 125px;
            }
            #s-145 {
              top: 64px;
              left: 2px;
            }
            #s-146 {
              top: 2px;
              left: 2px;
            }
            #s-147 {
              top: 64px;
              left: 43px;
            }
            #s-148 {
              top: 2px;
              left: 43px;
            }
            #s-149 {
              top: 64px;
              left: 84px;
            }
            #s-150 {
              top: 2px;
              left: 84px;
            }
            #s-151 {
              top: 64px;
              left: 125px;
            }
            #s-152 {
              top: 2px;
              left: 125px;
            }
            #s-153 {
              top: 64px;
              left: 2px;
            }
            #s-154 {
              top: 2px;
              left: 2px;
            }
            #s-155 {
              top: 64px;
              left: 43px;
            }
            #s-156 {
              top: 2px;
              left: 43px;
            }
            #s-157 {
              top: 64px;
              left: 84px;
            }
            #s-158 {
              top: 2px;
              left: 84px;
            }
            #s-159 {
              top: 64px;
              left: 125px;
            }
            #s-160 {
              top: 2px;
              left: 125px;
            }
            #s-161 {
              top: 64px;
              left: 2px;
            }
            #s-162 {
              top: 2px;
              left: 2px;
            }
            #s-163 {
              top: 64px;
              left: 43px;
            }
            #s-164 {
              top: 2px;
              left: 43px;
            }
            #s-165 {
              top: 64px;
              left: 84px;
            }
            #s-166 {
              top: 2px;
              left: 84px;
            }
            #s-167 {
              top: 64px;
              left: 125px;
            }
            #s-168 {
              top: 2px;
              left: 125px;
            }
            #s-169 {
              top: 64px;
              left: 2px;
            }
            #s-170 {
              top: 2px;
              left: 2px;
            }
            #s-171 {
              top: 64px;
              left: 43px;
            }
            #s-172 {
              top: 2px;
              left: 43px;
            }
            #s-173 {
              top: 64px;
              left: 84px;
            }
            #s-174 {
              top: 2px;
              left: 84px;
            }
            #s-175 {
              top: 64px;
              left: 125px;
            }
            #s-176 {
              top: 2px;
              left: 125px;
            }
            #s-177 {
              top: 64px;
              left: 2px;
            }
            #s-178 {
              top: 2px;
              left: 2px;
            }
            #s-179 {
              top: 64px;
              left: 43px;
            }
            #s-180 {
              top: 2px;
              left: 43px;
            }
            #s-181 {
              top: 64px;
              left: 84px;
            }
            #s-182 {
              top: 2px;
              left: 84px;
            }
            #s-183 {
              top: 64px;
              left: 125px;
            }
            #s-184 {
              top: 2px;
              left: 125px;
            }
            #s-185 {
              top: 64px;
              left: 2px;
            }
            #s-186 {
              top: 2px;
              left: 2px;
            }
            #s-187 {
              top: 64px;
              left: 43px;
            }
            #s-188 {
              top: 2px;
              left: 43px;
            }
            #s-189 {
              top: 64px;
              left: 84px;
            }
            #s-190 {
              top: 2px;
              left: 84px;
            }
            #s-191 {
              top: 64px;
              left: 125px;
            }
            #s-192 {
              top: 2px;
              left: 125px;
            }
            #s-193 {
              top: 64px;
              left: 2px;
            }
            #s-194 {
              top: 2px;
              left: 2px;
            }
            #s-195 {
              top: 64px;
              left: 43px;
            }
            #s-196 {
              top: 2px;
              left: 43px;
            }
            #s-197 {
              top: 64px;
              left: 84px;
            }
            #s-198 {
              top: 2px;
              left: 84px;
            }
            #s-199 {
              top: 64px;
              left: 125px;
            }
            #s-200 {
              top: 2px;
              left: 125px;
            }
            #s-201 {
              top: 64px;
              left: 2px;
            }
            #s-202 {
              top: 2px;
              left: 2px;
            }
            #s-203 {
              top: 64px;
              left: 43px;
            }
            #s-204 {
              top: 2px;
              left: 43px;
            }
            #s-205 {
              top: 64px;
              left: 84px;
            }
            #s-206 {
              top: 2px;
              left: 84px;
            }
            #s-207 {
              top: 64px;
              left: 125px;
            }
            #s-208 {
              top: 2px;
              left: 125px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
