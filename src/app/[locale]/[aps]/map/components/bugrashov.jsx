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
              height: 160px;
              width: 1030px;
            }
            #l-4 {
              height: 160px;
              width: 415px;
            }
            // P1
            #s-70 {
              top: 2px;
              left: 2px;
            }
            #s-69 {
              top: 33px;
              left: 2px;
            }
            #s-68 {
              top: 95px;
              left: 2px;
            }
            #s-67 {
              top: 2px;
              left: 43px;
            }
            #s-66 {
              top: 33px;
              left: 43px;
            }
            #s-65 {
              top: 95px;
              left: 43px;
            }
            #s-64 {
              top: 126px;
              left: 43px;
            }
            #s-63 {
              top: 2px;
              left: 84px;
            }
            #s-62 {
              top: 33px;
              left: 84px;
            }
            #s-61 {
              top: 95px;
              left: 84px;
            }
            #s-60 {
              top: 126px;
              left: 84px;
            }
            #s-59 {
              top: 2px;
              left: 125px;
            }
            #s-58 {
              top: 33px;
              left: 125px;
            }
            #s-57 {
              top: 95px;
              left: 125px;
            }
            #s-56 {
              top: 126px;
              left: 125px;
            }
            #s-55 {
              top: 2px;
              left: 166px;
            }
            #s-54 {
              top: 33px;
              left: 166px;
            }
            #s-53 {
              top: 95px;
              left: 166px;
            }
            #s-52 {
              top: 2px;
              left: 207px;
            }
            #s-51 {
              top: 33px;
              left: 207px;
            }
            #s-50 {
              top: 95px;
              left: 207px;
            }
            #s-49 {
              top: 2px;
              left: 248px;
            }
            #s-48 {
              top: 33px;
              left: 248px;
            }
            #s-47 {
              top: 95px;
              left: 248px;
            }
            #s-46 {
              top: 2px;
              left: 289px;
            }
            #s-45 {
              top: 33px;
              left: 289px;
            }
            #s-44 {
              top: 95px;
              left: 289px;
            }
            #el-2 {
              top: 33px;
              left: 330px;
            }
            #el-3 {
              top: 95px;
              left: 330px;
            }
            #s-42 {
              top: 33px;
              left: 371px;
            }
            #s-43 {
              top: 95px;
              left: 371px;
            }
            #el-1 {
              top: 33px;
              left: 412px;
            }
            #el-4 {
              top: 126px;
              left: 412px;
            }
            #s-41 {
              top: 95px;
              left: 453px;
            }
            #s-40 {
              top: 126px;
              left: 453px;
            }
            #s-37 {
              top: 33px;
              left: 494px;
            }
            #s-39 {
              top: 95px;
              left: 494px;
            }
            #s-38 {
              top: 126px;
              left: 494px;
            }
            #s-36 {
              top: 33px;
              left: 535px;
            }
            #s-35 {
              top: 95px;
              left: 535px;
            }
            #s-34 {
              top: 126px;
              left: 535px;
            }
            #s-33 {
              top: 2px;
              left: 576px;
            }
            #s-32 {
              top: 33px;
              left: 576px;
            }
            #s-31 {
              top: 95px;
              left: 576px;
            }
            #s-30 {
              top: 2px;
              left: 617px;
            }
            #s-29 {
              top: 33px;
              left: 617px;
            }
            #s-28 {
              top: 95px;
              left: 617px;
            }
            #s-27 {
              top: 2px;
              left: 658px;
            }
            #s-26 {
              top: 33px;
              left: 658px;
            }
            #s-25 {
              top: 95px;
              left: 658px;
            }
            #s-24 {
              top: 2px;
              left: 699px;
            }
            #s-23 {
              top: 33px;
              left: 699px;
            }
            #s-22 {
              top: 95px;
              left: 699px;
            }
            #s-21 {
              top: 2px;
              left: 740px;
            }
            #s-20 {
              top: 33px;
              left: 740px;
            }
            #s-19 {
              top: 95px;
              left: 740px;
            }
            #s-18 {
              top: 2px;
              left: 781px;
            }
            #s-17 {
              top: 33px;
              left: 781px;
            }
            #s-16 {
              top: 95px;
              left: 781px;
            }
            #s-15 {
              top: 2px;
              left: 822px;
            }
            #s-14 {
              top: 33px;
              left: 822px;
            }
            #s-13 {
              top: 95px;
              left: 822px;
            }
            #s-12 {
              top: 2px;
              left: 863px;
            }
            #s-11 {
              top: 33px;
              left: 863px;
            }
            #s-10 {
              top: 95px;
              left: 863px;
            }
            #s-9 {
              top: 2px;
              left: 904px;
            }
            #s-8 {
              top: 33px;
              left: 904px;
            }
            #s-7 {
              top: 95px;
              left: 904px;
            }
            #s-6 {
              top: 2px;
              left: 945px;
            }
            #s-5 {
              top: 33px;
              left: 945px;
            }
            #s-4 {
              top: 95px;
              left: 945px;
            }
            #s-3 {
              top: 2px;
              left: 986px;
            }
            #s-2 {
              top: 33px;
              left: 986px;
            }
            #s-1 {
              top: 95px;
              left: 986px;
            }

            // P2
            #s-140 {
              top: 2px;
              left: 2px;
            }
            #s-139 {
              top: 33px;
              left: 2px;
            }
            #s-138 {
              top: 95px;
              left: 2px;
            }
            #s-137 {
              top: 2px;
              left: 43px;
            }
            #s-136 {
              top: 33px;
              left: 43px;
            }
            #s-135 {
              top: 95px;
              left: 43px;
            }
            #s-134 {
              top: 126px;
              left: 43px;
            }
            #s-133 {
              top: 2px;
              left: 84px;
            }
            #s-132 {
              top: 33px;
              left: 84px;
            }
            #s-131 {
              top: 95px;
              left: 84px;
            }
            #s-130 {
              top: 126px;
              left: 84px;
            }
            #s-129 {
              top: 2px;
              left: 125px;
            }
            #s-128 {
              top: 33px;
              left: 125px;
            }
            #s-127 {
              top: 95px;
              left: 125px;
            }
            #s-126 {
              top: 126px;
              left: 125px;
            }
            #s-125 {
              top: 2px;
              left: 166px;
            }
            #s-124 {
              top: 33px;
              left: 166px;
            }
            #s-123 {
              top: 95px;
              left: 166px;
            }
            #s-122 {
              top: 2px;
              left: 207px;
            }
            #s-121 {
              top: 33px;
              left: 207px;
            }
            #s-120 {
              top: 95px;
              left: 207px;
            }
            #s-119 {
              top: 2px;
              left: 248px;
            }
            #s-118 {
              top: 33px;
              left: 248px;
            }
            #s-117 {
              top: 95px;
              left: 248px;
            }
            #s-116 {
              top: 2px;
              left: 289px;
            }
            #s-115 {
              top: 33px;
              left: 289px;
            }
            #s-114 {
              top: 95px;
              left: 289px;
            }
            #el-2 {
              top: 33px;
              left: 330px;
            }
            #el-3 {
              top: 95px;
              left: 330px;
            }
            #s-112 {
              top: 33px;
              left: 371px;
            }
            #s-113 {
              top: 95px;
              left: 371px;
            }
            #el-1 {
              top: 33px;
              left: 412px;
            }
            #el-4 {
              top: 126px;
              left: 412px;
            }
            #s-111 {
              top: 95px;
              left: 453px;
            }
            #s-110 {
              top: 126px;
              left: 453px;
            }
            #s-107 {
              top: 33px;
              left: 494px;
            }
            #s-109 {
              top: 95px;
              left: 494px;
            }
            #s-108 {
              top: 126px;
              left: 494px;
            }
            #s-106 {
              top: 33px;
              left: 535px;
            }
            #s-105 {
              top: 95px;
              left: 535px;
            }
            #s-104 {
              top: 126px;
              left: 535px;
            }
            #s-103 {
              top: 2px;
              left: 576px;
            }
            #s-102 {
              top: 33px;
              left: 576px;
            }
            #s-101 {
              top: 95px;
              left: 576px;
            }
            #s-100 {
              top: 2px;
              left: 617px;
            }
            #s-99 {
              top: 33px;
              left: 617px;
            }
            #s-98 {
              top: 95px;
              left: 617px;
            }
            #s-97 {
              top: 2px;
              left: 658px;
            }
            #s-96 {
              top: 33px;
              left: 658px;
            }
            #s-95 {
              top: 95px;
              left: 658px;
            }
            #s-94 {
              top: 2px;
              left: 699px;
            }
            #s-93 {
              top: 33px;
              left: 699px;
            }
            #s-92 {
              top: 95px;
              left: 699px;
            }
            #s-91 {
              top: 2px;
              left: 740px;
            }
            #s-90 {
              top: 33px;
              left: 740px;
            }
            #s-89 {
              top: 95px;
              left: 740px;
            }
            #s-88 {
              top: 2px;
              left: 781px;
            }
            #s-87 {
              top: 33px;
              left: 781px;
            }
            #s-86 {
              top: 95px;
              left: 781px;
            }
            #s-85 {
              top: 2px;
              left: 822px;
            }
            #s-84 {
              top: 33px;
              left: 822px;
            }
            #s-83 {
              top: 95px;
              left: 822px;
            }
            #s-82 {
              top: 2px;
              left: 863px;
            }
            #s-81 {
              top: 33px;
              left: 863px;
            }
            #s-80 {
              top: 95px;
              left: 863px;
            }
            #s-79 {
              top: 2px;
              left: 904px;
            }
            #s-78 {
              top: 33px;
              left: 904px;
            }
            #s-77 {
              top: 95px;
              left: 904px;
            }
            #s-76 {
              top: 2px;
              left: 945px;
            }
            #s-75 {
              top: 33px;
              left: 945px;
            }
            #s-74 {
              top: 95px;
              left: 945px;
            }
            #s-73 {
              top: 2px;
              left: 986px;
            }
            #s-72 {
              top: 33px;
              left: 986px;
            }
            #s-71 {
              top: 95px;
              left: 986px;
            }

            // P3
            #s-210 {
              top: 2px;
              left: 2px;
            }
            #s-209 {
              top: 33px;
              left: 2px;
            }
            #s-208 {
              top: 95px;
              left: 2px;
            }
            #s-207 {
              top: 2px;
              left: 43px;
            }
            #s-206 {
              top: 33px;
              left: 43px;
            }
            #s-205 {
              top: 95px;
              left: 43px;
            }
            #s-204 {
              top: 126px;
              left: 43px;
            }
            #s-203 {
              top: 2px;
              left: 84px;
            }
            #s-202 {
              top: 33px;
              left: 84px;
            }
            #s-201 {
              top: 95px;
              left: 84px;
            }
            #s-200 {
              top: 126px;
              left: 84px;
            }
            #s-199 {
              top: 2px;
              left: 125px;
            }
            #s-198 {
              top: 33px;
              left: 125px;
            }
            #s-197 {
              top: 95px;
              left: 125px;
            }
            #s-196 {
              top: 126px;
              left: 125px;
            }
            #s-195 {
              top: 2px;
              left: 166px;
            }
            #s-194 {
              top: 33px;
              left: 166px;
            }
            #s-193 {
              top: 95px;
              left: 166px;
            }
            #s-192 {
              top: 2px;
              left: 207px;
            }
            #s-191 {
              top: 33px;
              left: 207px;
            }
            #s-190 {
              top: 95px;
              left: 207px;
            }
            #s-189 {
              top: 2px;
              left: 248px;
            }
            #s-188 {
              top: 33px;
              left: 248px;
            }
            #s-187 {
              top: 95px;
              left: 248px;
            }
            #s-186 {
              top: 2px;
              left: 289px;
            }
            #s-185 {
              top: 33px;
              left: 289px;
            }
            #s-184 {
              top: 95px;
              left: 289px;
            }
            #el-2 {
              top: 33px;
              left: 330px;
            }
            #el-3 {
              top: 95px;
              left: 330px;
            }
            #s-182 {
              top: 33px;
              left: 371px;
            }
            #s-183 {
              top: 95px;
              left: 371px;
            }
            #el-1 {
              top: 33px;
              left: 412px;
            }
            #el-4 {
              top: 126px;
              left: 412px;
            }
            #s-181 {
              top: 95px;
              left: 453px;
            }
            #s-180 {
              top: 126px;
              left: 453px;
            }
            #s-177 {
              top: 33px;
              left: 494px;
            }
            #s-179 {
              top: 95px;
              left: 494px;
            }
            #s-178 {
              top: 126px;
              left: 494px;
            }
            #s-176 {
              top: 33px;
              left: 535px;
            }
            #s-175 {
              top: 95px;
              left: 535px;
            }
            #s-174 {
              top: 126px;
              left: 535px;
            }
            #s-173 {
              top: 2px;
              left: 576px;
            }
            #s-172 {
              top: 33px;
              left: 576px;
            }
            #s-171 {
              top: 95px;
              left: 576px;
            }
            #s-170 {
              top: 2px;
              left: 617px;
            }
            #s-169 {
              top: 33px;
              left: 617px;
            }
            #s-168 {
              top: 95px;
              left: 617px;
            }
            #s-167 {
              top: 2px;
              left: 658px;
            }
            #s-166 {
              top: 33px;
              left: 658px;
            }
            #s-165 {
              top: 95px;
              left: 658px;
            }
            #s-164 {
              top: 2px;
              left: 699px;
            }
            #s-163 {
              top: 33px;
              left: 699px;
            }
            #s-162 {
              top: 95px;
              left: 699px;
            }
            #s-161 {
              top: 2px;
              left: 740px;
            }
            #s-160 {
              top: 33px;
              left: 740px;
            }
            #s-159 {
              top: 95px;
              left: 740px;
            }
            #s-158 {
              top: 2px;
              left: 781px;
            }
            #s-157 {
              top: 33px;
              left: 781px;
            }
            #s-156 {
              top: 95px;
              left: 781px;
            }
            #s-155 {
              top: 2px;
              left: 822px;
            }
            #s-154 {
              top: 33px;
              left: 822px;
            }
            #s-153 {
              top: 95px;
              left: 822px;
            }
            #s-152 {
              top: 2px;
              left: 863px;
            }
            #s-151 {
              top: 33px;
              left: 863px;
            }
            #s-150 {
              top: 95px;
              left: 863px;
            }
            #s-149 {
              top: 2px;
              left: 904px;
            }
            #s-148 {
              top: 33px;
              left: 904px;
            }
            #s-147 {
              top: 95px;
              left: 904px;
            }
            #s-146 {
              top: 2px;
              left: 945px;
            }
            #s-145 {
              top: 33px;
              left: 945px;
            }
            #s-144 {
              top: 95px;
              left: 945px;
            }
            #s-143 {
              top: 2px;
              left: 986px;
            }
            #s-142 {
              top: 33px;
              left: 986px;
            }
            #s-141 {
              top: 95px;
              left: 986px;
            }
            // P4
            #s-211 {
              top: 2px;
              left: 2px;
            }
            #s-212 {
              top: 2px;
              left: 43px;
            }
            #s-213 {
              top: 64px;
              left: 84px;
            }
            #s-214 {
              top: 95px;
              left: 84px;
            }
            #s-215 {
              top: 2px;
              left: 84px;
            }
            #s-216 {
              top: 64px;
              left: 125px;
            }
            #s-217 {
              top: 95px;
              left: 125px;
            }
            #s-218 {
              top: 2px;
              left: 125px;
            }
            #s-219 {
              top: 95px;
              left: 166px;
            }
            #s-220 {
              top: 2px;
              left: 166px;
            }
            #s-221 {
              top: 95px;
              left: 207px;
            }
            #s-222 {
              top: 2px;
              left: 207px;
            }
            #s-223 {
              top: 95px;
              left: 248px;
            }
            #s-224 {
              top: 2px;
              left: 289px;
            }
            #el-2 {
              top: 126px;
              left: 289px;
            }
            #s-225 {
              top: 2px;
              left: 330px;
            }
            #s-226 {
              top: 95px;
              left: 330px;
            }
            #s-227 {
              top: 2px;
              left: 371px;
            }
            #s-228 {
              top: 64px;
              left: 371px;
            }
            #s-229 {
              top: 95px;
              left: 371px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
