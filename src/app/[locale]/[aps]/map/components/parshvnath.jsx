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
            .l {
              height: 191px;
              width: 907px;
            }
            #el-1 {
              top: 33px;
              left: 107px;
            }
            #el-2 {
              top: 33px;
              left: 166px;
            }
            #el-3 {
              top: 95px;
              left: 166px;
            }
            /* Level B1 */
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-2 {
              top: 33px;
              left: 2px;
            }
            #s-3 {
              top: 95px;
              left: 2px;
            }
            #s-4 {
              top: 2px;
              left: 43px;
            }
            #s-5 {
              top: 33px;
              left: 43px;
            }
            #s-6 {
              top: 95px;
              left: 43px;
            }
            #s-7 {
              top: 95px;
              left: 84px;
            }
            #s-8 {
              top: 95px;
              left: 125px;
            }
            #s-9 {
              top: 33px;
              left: 207px;
            }
            #s-10 {
              top: 2px;
              left: 248px;
            }
            #s-11 {
              top: 33px;
              left: 248px;
            }
            #s-12 {
              top: 2px;
              left: 289px;
            }
            #s-13 {
              top: 33px;
              left: 289px;
            }
            #s-14 {
              top: 95px;
              left: 289px;
            }
            #s-15 {
              top: 126px;
              left: 289px;
            }
            #s-16 {
              top: 157px;
              left: 289px;
            }
            #s-17 {
              top: 2px;
              left: 330px;
            }
            #s-18 {
              top: 33px;
              left: 330px;
            }
            #s-19 {
              top: 95px;
              left: 330px;
            }
            #s-20 {
              top: 126px;
              left: 330px;
            }
            #s-21 {
              top: 2px;
              left: 371px;
            }
            #s-22 {
              top: 33px;
              left: 371px;
            }
            #s-23 {
              top: 95px;
              left: 371px;
            }
            #s-24 {
              top: 126px;
              left: 371px;
            }
            #s-25 {
              top: 2px;
              left: 412px;
            }
            #s-26 {
              top: 33px;
              left: 412px;
            }
            #s-27 {
              top: 95px;
              left: 412px;
            }
            #s-28 {
              top: 126px;
              left: 412px;
            }
            #s-29 {
              top: 157px;
              left: 412px;
            }
            #s-30 {
              top: 2px;
              left: 453px;
            }
            #s-31 {
              top: 33px;
              left: 453px;
            }
            #s-32 {
              top: 95px;
              left: 453px;
            }
            #s-33 {
              top: 126px;
              left: 453px;
            }
            #s-34 {
              top: 157px;
              left: 453px;
            }
            #s-35 {
              top: 2px;
              left: 494px;
            }
            #s-36 {
              top: 33px;
              left: 494px;
            }
            #s-37 {
              top: 95px;
              left: 494px;
            }
            #s-38 {
              top: 126px;
              left: 494px;
            }
            #s-39 {
              top: 157px;
              left: 494px;
            }
            #s-40 {
              top: 2px;
              left: 535px;
            }
            #s-41 {
              top: 33px;
              left: 535px;
            }
            #s-42 {
              top: 95px;
              left: 535px;
            }
            #s-43 {
              top: 126px;
              left: 535px;
            }
            #s-44 {
              top: 157px;
              left: 535px;
            }
            #s-45 {
              top: 2px;
              left: 576px;
            }
            #s-46 {
              top: 33px;
              left: 576px;
            }
            #s-47 {
              top: 95px;
              left: 576px;
            }
            #s-48 {
              top: 126px;
              left: 576px;
            }
            #s-49 {
              top: 157px;
              left: 576px;
            }
            #s-50 {
              top: 2px;
              left: 617px;
            }
            #s-51 {
              top: 33px;
              left: 617px;
            }
            #s-52 {
              top: 95px;
              left: 617px;
            }
            #s-53 {
              top: 126px;
              left: 617px;
            }
            #s-54 {
              top: 157px;
              left: 617px;
            }
            #s-55 {
              top: 2px;
              left: 658px;
            }
            #s-56 {
              top: 33px;
              left: 658px;
            }
            #s-57 {
              top: 95px;
              left: 658px;
            }
            #s-58 {
              top: 126px;
              left: 658px;
            }
            #s-59 {
              top: 157px;
              left: 658px;
            }
            #s-60 {
              top: 2px;
              left: 699px;
            }
            #s-61 {
              top: 33px;
              left: 699px;
            }
            #s-62 {
              top: 95px;
              left: 699px;
            }
            #s-63 {
              top: 126px;
              left: 699px;
            }
            #s-64 {
              top: 2px;
              left: 740px;
            }
            #s-65 {
              top: 33px;
              left: 740px;
            }
            #s-66 {
              top: 95px;
              left: 740px;
            }
            #s-67 {
              top: 126px;
              left: 740px;
            }
            #s-68 {
              top: 2px;
              left: 781px;
            }
            #s-69 {
              top: 33px;
              left: 781px;
            }
            #s-70 {
              top: 95px;
              left: 781px;
            }
            #s-71 {
              top: 126px;
              left: 781px;
            }
            #s-72 {
              top: 157px;
              left: 781px;
            }
            #s-73 {
              top: 2px;
              left: 822px;
            }
            #s-74 {
              top: 33px;
              left: 822px;
            }
            #s-75 {
              top: 95px;
              left: 822px;
            }
            #s-76 {
              top: 126px;
              left: 822px;
            }
            #s-77 {
              top: 157px;
              left: 822px;
            }
            #s-78 {
              top: 2px;
              left: 863px;
            }
            #s-79 {
              top: 33px;
              left: 863px;
            }
            #s-80 {
              top: 95px;
              left: 863px;
            }
            #s-81 {
              top: 126px;
              left: 863px;
            }
            /* Level B2 */
            #s-82 {
              top: 2px;
              left: 2px;
            }
            #s-83 {
              top: 33px;
              left: 2px;
            }
            #s-84 {
              top: 95px;
              left: 2px;
            }
            #s-85 {
              top: 2px;
              left: 43px;
            }
            #s-86 {
              top: 33px;
              left: 43px;
            }
            #s-87 {
              top: 95px;
              left: 43px;
            }
            #s-88 {
              top: 95px;
              left: 84px;
            }
            #s-89 {
              top: 95px;
              left: 125px;
            }
            #s-90 {
              top: 33px;
              left: 207px;
            }
            #s-91 {
              top: 2px;
              left: 248px;
            }
            #s-92 {
              top: 33px;
              left: 248px;
            }
            #s-93 {
              top: 2px;
              left: 289px;
            }
            #s-94 {
              top: 33px;
              left: 289px;
            }
            #s-95 {
              top: 95px;
              left: 289px;
            }
            #s-96 {
              top: 126px;
              left: 289px;
            }
            #s-97 {
              top: 2px;
              left: 330px;
            }
            #s-98 {
              top: 33px;
              left: 330px;
            }
            #s-99 {
              top: 95px;
              left: 330px;
            }
            #s-100 {
              top: 126px;
              left: 330px;
            }
            #s-101 {
              top: 2px;
              left: 371px;
            }
            #s-102 {
              top: 33px;
              left: 371px;
            }
            #s-103 {
              top: 95px;
              left: 371px;
            }
            #s-104 {
              top: 126px;
              left: 371px;
            }
            #s-105 {
              top: 2px;
              left: 412px;
            }
            #s-106 {
              top: 33px;
              left: 412px;
            }
            #s-107 {
              top: 95px;
              left: 412px;
            }
            #s-108 {
              top: 126px;
              left: 412px;
            }
            #s-109 {
              top: 2px;
              left: 453px;
            }
            #s-110 {
              top: 33px;
              left: 453px;
            }
            #s-111 {
              top: 95px;
              left: 453px;
            }
            #s-112 {
              top: 126px;
              left: 453px;
            }
            #s-113 {
              top: 2px;
              left: 494px;
            }
            #s-114 {
              top: 33px;
              left: 494px;
            }
            #s-115 {
              top: 95px;
              left: 494px;
            }
            #s-116 {
              top: 126px;
              left: 494px;
            }
            #s-117 {
              top: 2px;
              left: 535px;
            }
            #s-118 {
              top: 33px;
              left: 535px;
            }
            #s-119 {
              top: 95px;
              left: 535px;
            }
            #s-120 {
              top: 126px;
              left: 535px;
            }
            #s-121 {
              top: 2px;
              left: 576px;
            }
            #s-122 {
              top: 33px;
              left: 576px;
            }
            #s-123 {
              top: 95px;
              left: 576px;
            }
            #s-124 {
              top: 126px;
              left: 576px;
            }
            #s-125 {
              top: 2px;
              left: 617px;
            }
            #s-126 {
              top: 33px;
              left: 617px;
            }
            #s-127 {
              top: 95px;
              left: 617px;
            }
            #s-128 {
              top: 126px;
              left: 617px;
            }
            #s-129 {
              top: 2px;
              left: 658px;
            }
            #s-130 {
              top: 33px;
              left: 658px;
            }
            #s-131 {
              top: 95px;
              left: 658px;
            }
            #s-132 {
              top: 126px;
              left: 658px;
            }
            #s-133 {
              top: 2px;
              left: 699px;
            }
            #s-134 {
              top: 33px;
              left: 699px;
            }
            #s-135 {
              top: 95px;
              left: 699px;
            }
            #s-136 {
              top: 126px;
              left: 699px;
            }
            #s-137 {
              top: 2px;
              left: 740px;
            }
            #s-138 {
              top: 33px;
              left: 740px;
            }
            #s-139 {
              top: 95px;
              left: 740px;
            }
            #s-140 {
              top: 126px;
              left: 740px;
            }
            #s-141 {
              top: 2px;
              left: 781px;
            }
            #s-142 {
              top: 33px;
              left: 781px;
            }
            #s-143 {
              top: 95px;
              left: 781px;
            }
            #s-144 {
              top: 126px;
              left: 781px;
            }
            #s-145 {
              top: 2px;
              left: 822px;
            }
            #s-146 {
              top: 33px;
              left: 822px;
            }
            #s-147 {
              top: 95px;
              left: 822px;
            }
            #s-148 {
              top: 126px;
              left: 822px;
            }
            #s-149 {
              top: 2px;
              left: 863px;
            }
            #s-150 {
              top: 33px;
              left: 863px;
            }
            #s-151 {
              top: 95px;
              left: 863px;
            }
            #s-152 {
              top: 126px;
              left: 863px;
            }
            /* Level B3 */
            #s-153 {
              top: 2px;
              left: 2px;
            }
            #s-154 {
              top: 33px;
              left: 2px;
            }
            #s-155 {
              top: 95px;
              left: 2px;
            }
            #s-156 {
              top: 2px;
              left: 43px;
            }
            #s-157 {
              top: 33px;
              left: 43px;
            }
            #s-158 {
              top: 95px;
              left: 43px;
            }
            #s-159 {
              top: 95px;
              left: 84px;
            }
            #s-160 {
              top: 95px;
              left: 125px;
            }
            #s-161 {
              top: 33px;
              left: 207px;
            }
            #s-162 {
              top: 2px;
              left: 248px;
            }
            #s-163 {
              top: 33px;
              left: 248px;
            }
            #s-164 {
              top: 2px;
              left: 289px;
            }
            #s-165 {
              top: 33px;
              left: 289px;
            }
            #s-166 {
              top: 95px;
              left: 289px;
            }
            #s-167 {
              top: 2px;
              left: 330px;
            }
            #s-168 {
              top: 33px;
              left: 330px;
            }
            #s-169 {
              top: 95px;
              left: 330px;
            }
            #s-170 {
              top: 2px;
              left: 371px;
            }
            #s-171 {
              top: 33px;
              left: 371px;
            }
            #s-172 {
              top: 95px;
              left: 371px;
            }
            #s-173 {
              top: 126px;
              left: 371px;
            }
            #s-174 {
              top: 2px;
              left: 412px;
            }
            #s-175 {
              top: 33px;
              left: 412px;
            }
            #s-176 {
              top: 95px;
              left: 412px;
            }
            #s-177 {
              top: 126px;
              left: 412px;
            }
            #s-178 {
              top: 2px;
              left: 453px;
            }
            #s-179 {
              top: 33px;
              left: 453px;
            }
            #s-180 {
              top: 95px;
              left: 453px;
            }
            #s-181 {
              top: 126px;
              left: 453px;
            }
            #s-182 {
              top: 2px;
              left: 494px;
            }
            #s-183 {
              top: 33px;
              left: 494px;
            }
            #s-184 {
              top: 95px;
              left: 494px;
            }
            #s-185 {
              top: 2px;
              left: 535px;
            }
            #s-186 {
              top: 33px;
              left: 535px;
            }
            #s-187 {
              top: 95px;
              left: 535px;
            }
            #s-188 {
              top: 2px;
              left: 576px;
            }
            #s-189 {
              top: 33px;
              left: 576px;
            }
            #s-190 {
              top: 95px;
              left: 576px;
            }
            #s-191 {
              top: 2px;
              left: 617px;
            }
            #s-192 {
              top: 33px;
              left: 617px;
            }
            #s-193 {
              top: 95px;
              left: 617px;
            }
            #s-194 {
              top: 126px;
              left: 617px;
            }
            #s-195 {
              top: 2px;
              left: 658px;
            }
            #s-196 {
              top: 33px;
              left: 658px;
            }
            #s-197 {
              top: 95px;
              left: 658px;
            }
            #s-198 {
              top: 126px;
              left: 658px;
            }
            #s-199 {
              top: 2px;
              left: 699px;
            }
            #s-200 {
              top: 33px;
              left: 699px;
            }
            #s-201 {
              top: 95px;
              left: 699px;
            }
            #s-202 {
              top: 126px;
              left: 699px;
            }
            #s-203 {
              top: 2px;
              left: 740px;
            }
            #s-204 {
              top: 33px;
              left: 740px;
            }
            #s-205 {
              top: 95px;
              left: 740px;
            }
            #s-206 {
              top: 126px;
              left: 740px;
            }
            #s-207 {
              top: 2px;
              left: 781px;
            }
            #s-208 {
              top: 33px;
              left: 781px;
            }
            #s-209 {
              top: 95px;
              left: 781px;
            }
            #s-210 {
              top: 126px;
              left: 781px;
            }
            #s-211 {
              top: 2px;
              left: 822px;
            }
            #s-212 {
              top: 33px;
              left: 822px;
            }
            #s-213 {
              top: 95px;
              left: 822px;
            }
            #s-214 {
              top: 126px;
              left: 822px;
            }
            #s-215 {
              top: 2px;
              left: 863px;
            }
            #s-216 {
              top: 33px;
              left: 863px;
            }
            #s-217 {
              top: 95px;
              left: 863px;
            }
            #s-218 {
              top: 126px;
              left: 863px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
