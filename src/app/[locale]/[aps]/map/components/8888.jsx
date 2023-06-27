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
          <Grid numItems={1} className="gap-6 mt-3">
            {Levels.reverse().map((level) => level)}
          </Grid>
          <style>{`
          .s {
            width: 36px !important; /*overrides width in MapStall.js */
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
          #s-2 {
            top: 2px;
            left: 2px;
          }
          #s-3 {
            top: 64px;
            left: 39px;
          }
          #s-4 {
            top: 2px;
            left: 39px;
          }
          #s-5 {
            top: 95px;
            left: 76px;
          }
          #s-6 {
            top: 64px;
            left: 76px;
          }
          #s-7 {
            top: 2px;
            left: 76px;
          }
          #s-8 {
            top: 95px;
            left: 113px;
          }
          #s-9 {
            top: 64px;
            left: 113px;
          }
          #s-10 {
            top: 2px;
            left: 113px;
          }
          #s-11 {
            top: 95px;
            left: 150px;
          }
          #s-12 {
            top: 64px;
            left: 150px;
          }
          #s-13 {
            top: 2px;
            left: 150px;
          }
          #s-14 {
            top: 95px;
            left: 187px;
          }
          #s-15 {
            top: 64px;
            left: 187px;
          }
          #s-16 {
            top: 2px;
            left: 187px;
          }
          #s-17 {
            top: 95px;
            left: 224px;
          }
          #s-18 {
            top: 64px;
            left: 224px;
          }
          #s-19 {
            top: 2px;
            left: 224px;
          }
          #s-20 {
            top: 95px;
            left: 261px;
          }
          #s-21 {
            top: 64px;
            left: 261px;
          }
          #s-22 {
            top: 2px;
            left: 261px;
          }
          #s-23 {
            top: 95px;
            left: 298px;
          }
          #s-24 {
            top: 64px;
            left: 298px;
          }
          #s-25 {
            top: 2px;
            left: 298px;
          }
          #s-26 {
            top: 95px;
            left: 335px;
          }
          #s-27 {
            top: 64px;
            left: 335px;
          }
          #s-28 {
            top: 2px;
            left: 335px;
          }
          #s-29 {
            top: 95px;
            left: 372px;
          }
          #s-30 {
            top: 64px;
            left: 372px;
          }
          #s-31 {
            top: 2px;
            left: 372px;
          }
          #s-32 {
            top: 95px;
            left: 409px;
          }
          #s-33 {
            top: 64px;
            left: 409px;
          }
          #s-34 {
            top: 2px;
            left: 409px;
          }
          #s-35 {
            top: 95px;
            left: 446px;
          }
          #s-36 {
            top: 64px;
            left: 446px;
          }
          #s-37 {
            top: 2px;
            left: 446px;
          }
          #s-38 {
            top: 95px;
            left: 483px;
          }
          #s-39 {
            top: 64px;
            left: 483px;
          }
          #s-40 {
            top: 2px;
            left: 483px;
          }
          #s-41 {
            top: 95px;
            left: 520px;
          }
          #s-42 {
            top: 64px;
            left: 520px;
          }
          #s-43 {
            top: 2px;
            left: 520px;
          }
          #s-44 {
            top: 95px;
            left: 557px;
          }
          #s-45 {
            top: 64px;
            left: 557px;
          }
          #s-46 {
            top: 2px;
            left: 557px;
          }
          #s-47 {
            top: 95px;
            left: 594px;
          }
          #s-48 {
            top: 64px;
            left: 594px;
          }
          #s-49 {
            top: 2px;
            left: 594px;
          }
          #s-50 {
            top: 2px;
            left: 631px;
          }
          #s-51 {
            top: 95px;
            left: 668px;
          }
          #s-52 {
            top: 2px;
            left: 668px;
          }
          #s-53 {
            top: 95px;
            left: 705px;
          }
          #s-54 {
            top: 64px;
            left: 705px;
          }
          #s-55 {
            top: 2px;
            left: 705px;
          }
          #s-56 {
            top: 2px;
            left: 742px;
          }
          #s-57 {
            top: 2px;
            left: 779px;
          }
          #s-58 {
            top: 95px;
            left: 816px;
          }
          #s-59 {
            top: 64px;
            left: 816px;
          }
          #s-60 {
            top: 2px;
            left: 816px;
          }
          #s-61 {
            top: 95px;
            left: 853px;
          }
          #s-62 {
            top: 64px;
            left: 853px;
          }
          #s-63 {
            top: 2px;
            left: 853px;
          }
          #s-64 {
            top: 95px;
            left: 890px;
          }
          #s-65 {
            top: 64px;
            left: 890px;
          }
          #s-66 {
            top: 2px;
            left: 890px;
          }
          #s-67 {
            top: 95px;
            left: 927px;
          }
          #s-68 {
            top: 64px;
            left: 927px;
          }
          #s-69 {
            top: 2px;
            left: 927px;
          }
          #s-70 {
            top: 95px;
            left: 964px;
          }
          #s-71 {
            top: 64px;
            left: 964px;
          }
          #s-72 {
            top: 2px;
            left: 964px;
          }
          #s-73 {
            top: 95px;
            left: 1001px;
          }
          #s-74 {
            top: 64px;
            left: 1001px;
          }
          #s-75 {
            top: 2px;
            left: 1001px;
          }
          #s-76 {
            top: 95px;
            left: 1038px;
          }
          #s-77 {
            top: 64px;
            left: 1038px;
          }
          #s-78 {
            top: 2px;
            left: 1038px;
          }
          /* Level 2 */
          #s-79 {
            top: 64px;
            left: 2px;
          }
          #s-80 {
            top: 2px;
            left: 2px;
          }
          #s-81 {
            top: 64px;
            left: 39px;
          }
          #s-82 {
            top: 2px;
            left: 39px;
          }
          #s-83 {
            top: 95px;
            left: 76px;
          }
          #s-84 {
            top: 64px;
            left: 76px;
          }
          #s-85 {
            top: 2px;
            left: 76px;
          }
          #s-86 {
            top: 95px;
            left: 113px;
          }
          #s-87 {
            top: 64px;
            left: 113px;
          }
          #s-88 {
            top: 2px;
            left: 113px;
          }
          #s-89 {
            top: 95px;
            left: 150px;
          }
          #s-90 {
            top: 64px;
            left: 150px;
          }
          #s-91 {
            top: 2px;
            left: 150px;
          }
          #s-92 {
            top: 95px;
            left: 187px;
          }
          #s-93 {
            top: 64px;
            left: 187px;
          }
          #s-94 {
            top: 2px;
            left: 187px;
          }
          #s-95 {
            top: 95px;
            left: 224px;
          }
          #s-96 {
            top: 64px;
            left: 224px;
          }
          #s-97 {
            top: 2px;
            left: 224px;
          }
          #s-98 {
            top: 95px;
            left: 261px;
          }
          #s-99 {
            top: 64px;
            left: 261px;
          }
          #s-100 {
            top: 2px;
            left: 261px;
          }
          #s-101 {
            top: 95px;
            left: 298px;
          }
          #s-102 {
            top: 64px;
            left: 298px;
          }
          #s-103 {
            top: 2px;
            left: 298px;
          }
          #s-104 {
            top: 95px;
            left: 335px;
          }
          #s-105 {
            top: 64px;
            left: 335px;
          }
          #s-106 {
            top: 2px;
            left: 335px;
          }
          #s-107 {
            top: 95px;
            left: 372px;
          }
          #s-108 {
            top: 64px;
            left: 372px;
          }
          #s-109 {
            top: 2px;
            left: 372px;
          }
          #s-110 {
            top: 95px;
            left: 409px;
          }
          #s-111 {
            top: 64px;
            left: 409px;
          }
          #s-112 {
            top: 2px;
            left: 409px;
          }
          #s-113 {
            top: 95px;
            left: 446px;
          }
          #s-114 {
            top: 64px;
            left: 446px;
          }
          #s-115 {
            top: 2px;
            left: 446px;
          }
          #s-116 {
            top: 2px;
            left: 483px;
          }
          #s-117 {
            top: 2px;
            left: 520px;
          }
          #s-118 {
            top: 2px;
            left: 557px;
          }
          #s-119 {
            top: 2px;
            left: 594px;
          }
          #s-120 {
            top: 2px;
            left: 631px;
          }
          #s-121 {
            top: 2px;
            left: 668px;
          }
          #s-122 {
            top: 95px;
            left: 705px;
          }
          #s-123 {
            top: 64px;
            left: 705px;
          }
          #s-124 {
            top: 2px;
            left: 705px;
          }
          #s-125 {
            top: 2px;
            left: 742px;
          }
          #s-126 {
            top: 64px;
            left: 779px;
          }
          #s-127 {
            top: 2px;
            left: 779px;
          }
          #s-128 {
            top: 2px;
            left: 816px;
          }
          #s-129 {
            top: 2px;
            left: 853px;
          }
          #s-130 {
            top: 95px;
            left: 890px;
          }
          #s-131 {
            top: 64px;
            left: 890px;
          }
          #s-132 {
            top: 2px;
            left: 890px;
          }
          #s-133 {
            top: 95px;
            left: 927px;
          }
          #s-134 {
            top: 64px;
            left: 927px;
          }
          #s-135 {
            top: 2px;
            left: 927px;
          }
          #s-136 {
            top: 95px;
            left: 964px;
          }
          #s-137 {
            top: 64px;
            left: 964px;
          }
          #s-138 {
            top: 2px;
            left: 964px;
          }
          #s-139 {
            top: 95px;
            left: 1001px;
          }
          #s-140 {
            top: 64px;
            left: 1001px;
          }
          #s-141 {
            top: 2px;
            left: 1001px;
          }
          #s-142 {
            top: 95px;
            left: 1038px;
          }
          #s-143 {
            top: 64px;
            left: 1038px;
          }
          #s-144 {
            top: 2px;
            left: 1038px;
          }
          /* Level 3 */
          #s-145 {
            top: 95px;
            left: 779px;
          }
          #s-146 {
            top: 2px;
            left: 2px;
          }
          #s-147 {
            top: 64px;
            left: 39px;
          }
          #s-148 {
            top: 2px;
            left: 39px;
          }
          #s-149 {
            top: 95px;
            left: 76px;
          }
          #s-150 {
            top: 64px;
            left: 76px;
          }
          #s-151 {
            top: 2px;
            left: 76px;
          }
          #s-152 {
            top: 95px;
            left: 113px;
          }
          #s-153 {
            top: 64px;
            left: 113px;
          }
          #s-154 {
            top: 2px;
            left: 113px;
          }
          #s-155 {
            top: 95px;
            left: 150px;
          }
          #s-156 {
            top: 64px;
            left: 150px;
          }
          #s-157 {
            top: 2px;
            left: 150px;
          }
          #s-158 {
            top: 95px;
            left: 187px;
          }
          #s-159 {
            top: 64px;
            left: 187px;
          }
          #s-160 {
            top: 2px;
            left: 187px;
          }
          #s-161 {
            top: 95px;
            left: 224px;
          }
          #s-162 {
            top: 64px;
            left: 224px;
          }
          #s-163 {
            top: 2px;
            left: 224px;
          }
          #s-164 {
            top: 95px;
            left: 261px;
          }
          #s-165 {
            top: 64px;
            left: 261px;
          }
          #s-166 {
            top: 2px;
            left: 261px;
          }
          #s-167 {
            top: 95px;
            left: 298px;
          }
          #s-168 {
            top: 64px;
            left: 298px;
          }
          #s-169 {
            top: 2px;
            left: 298px;
          }
          #s-170 {
            top: 95px;
            left: 335px;
          }
          #s-171 {
            top: 64px;
            left: 335px;
          }
          #s-172 {
            top: 2px;
            left: 335px;
          }
          #s-173 {
            top: 95px;
            left: 372px;
          }
          #s-174 {
            top: 64px;
            left: 372px;
          }
          #s-175 {
            top: 2px;
            left: 372px;
          }
          #s-176 {
            top: 95px;
            left: 409px;
          }
          #s-177 {
            top: 64px;
            left: 409px;
          }
          #s-178 {
            top: 2px;
            left: 409px;
          }
          #s-179 {
            top: 95px;
            left: 446px;
          }
          #s-180 {
            top: 64px;
            left: 446px;
          }
          #s-181 {
            top: 2px;
            left: 446px;
          }
          #s-182 {
            top: 95px;
            left: 483px;
          }
          #s-183 {
            top: 2px;
            left: 483px;
          }
          #s-184 {
            top: 2px;
            left: 520px;
          }
          #s-185 {
            top: 2px;
            left: 557px;
          }
          #s-186 {
            top: 95px;
            left: 594px;
          }
          #s-187 {
            top: 2px;
            left: 594px;
          }
          #s-188 {
            top: 2px;
            left: 631px;
          }
          #s-189 {
            top: 2px;
            left: 668px;
          }
          #s-190 {
            top: 95px;
            left: 705px;
          }
          #s-191 {
            top: 64px;
            left: 705px;
          }
          #s-192 {
            top: 2px;
            left: 705px;
          }
          #s-193 {
            top: 2px;
            left: 742px;
          }
          #s-194 {
            top: 64px;
            left: 779px;
          }
          #s-195 {
            top: 2px;
            left: 779px;
          }
          #s-196 {
            top: 95px;
            left: 816px;
          }
          #s-197 {
            top: 2px;
            left: 816px;
          }
          #s-198 {
            top: 2px;
            left: 853px;
          }
          #s-199 {
            top: 95px;
            left: 890px;
          }
          #s-200 {
            top: 64px;
            left: 890px;
          }
          #s-201 {
            top: 2px;
            left: 890px;
          }
          #s-202 {
            top: 95px;
            left: 927px;
          }
          #s-203 {
            top: 64px;
            left: 927px;
          }
          #s-204 {
            top: 2px;
            left: 927px;
          }
          #s-205 {
            top: 95px;
            left: 964px;
          }
          #s-206 {
            top: 64px;
            left: 964px;
          }
          #s-207 {
            top: 2px;
            left: 964px;
          }
          #s-208 {
            top: 95px;
            left: 1001px;
          }
          #s-209 {
            top: 64px;
            left: 1001px;
          }
          #s-210 {
            top: 2px;
            left: 1001px;
          }
          #s-211 {
            top: 95px;
            left: 1038px;
          }
          #s-212 {
            top: 64px;
            left: 1038px;
          }
          #s-213 {
            top: 2px;
            left: 1038px;
          }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
