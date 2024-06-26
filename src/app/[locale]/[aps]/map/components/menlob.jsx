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
            .el {
              width: 36px !important; /* override */
            }
            .s {
              width: 36px !important; /* override */
            }
            .l {
              height: 160px;
              width: 745px;
            }
            #l-2,
            #l-3 {
              height: 191px;
            }
            /* El */
            #el-1 {
              top: 126px;
              left: 113px;
            }
            #el-2 {
              top: 126px;
              left: 335px;
            }
            #el-3 {
              top: 126px;
              left: 557px;
            }
            /* Level 1 */
            #s-62 {
              top: 2px;
              left: 2px;
            }
            #s-61 {
              top: 33px;
              left: 2px;
            }
            #s-60 {
              top: 95px;
              left: 2px;
            }
            #s-59 {
              top: 126px;
              left: 2px;
            }
            #s-58 {
              top: 2px;
              left: 39px;
            }
            #s-57 {
              top: 33px;
              left: 39px;
            }
            #s-56 {
              top: 95px;
              left: 39px;
            }
            #s-55 {
              top: 126px;
              left: 39px;
            }
            #s-54 {
              top: 2px;
              left: 76px;
            }
            #s-53 {
              top: 33px;
              left: 76px;
            }
            #s-52 {
              top: 95px;
              left: 76px;
            }
            #s-51 {
              top: 2px;
              left: 113px;
            }
            #s-50 {
              top: 33px;
              left: 113px;
            }
            #s-49 {
              top: 2px;
              left: 150px;
            }
            #s-48 {
              top: 33px;
              left: 150px;
            }
            #s-47 {
              top: 95px;
              left: 150px;
            }
            #s-46 {
              top: 2px;
              left: 187px;
            }
            #s-45 {
              top: 33px;
              left: 187px;
            }
            #s-44 {
              top: 95px;
              left: 187px;
            }
            #s-43 {
              top: 126px;
              left: 187px;
            }
            #s-42 {
              top: 2px;
              left: 224px;
            }
            #s-41 {
              top: 33px;
              left: 224px;
            }
            #s-40 {
              top: 95px;
              left: 224px;
            }
            #s-39 {
              top: 126px;
              left: 224px;
            }
            #s-38 {
              top: 2px;
              left: 261px;
            }
            #s-37 {
              top: 33px;
              left: 261px;
            }
            #s-36 {
              top: 95px;
              left: 261px;
            }
            #s-35 {
              top: 126px;
              left: 261px;
            }
            #s-34 {
              top: 2px;
              left: 298px;
            }
            #s-33 {
              top: 33px;
              left: 298px;
            }
            #s-32 {
              top: 95px;
              left: 298px;
            }
            #s-31 {
              top: 2px;
              left: 335px;
            }
            #s-30 {
              top: 33px;
              left: 335px;
            }
            #s-29 {
              top: 2px;
              left: 372px;
            }
            #s-28 {
              top: 33px;
              left: 372px;
            }
            #s-27 {
              top: 95px;
              left: 372px;
            }
            #s-26 {
              top: 2px;
              left: 409px;
            }
            #s-25 {
              top: 33px;
              left: 409px;
            }
            #s-24 {
              top: 95px;
              left: 409px;
            }
            #s-23 {
              top: 126px;
              left: 409px;
            }
            #s-22 {
              top: 2px;
              left: 446px;
            }
            #s-21 {
              top: 33px;
              left: 446px;
            }
            #s-20 {
              top: 95px;
              left: 446px;
            }
            #s-19 {
              top: 126px;
              left: 446px;
            }
            #s-18 {
              top: 2px;
              left: 483px;
            }
            #s-17 {
              top: 33px;
              left: 483px;
            }
            #s-16 {
              top: 95px;
              left: 483px;
            }
            #s-15 {
              top: 126px;
              left: 483px;
            }
            #s-14 {
              top: 2px;
              left: 520px;
            }
            #s-13 {
              top: 33px;
              left: 520px;
            }
            #s-12 {
              top: 95px;
              left: 520px;
            }
            #s-11 {
              top: 2px;
              left: 557px;
            }
            #s-10 {
              top: 33px;
              left: 557px;
            }
            #s-9 {
              top: 2px;
              left: 594px;
            }
            #s-8 {
              top: 33px;
              left: 594px;
            }
            #s-7 {
              top: 95px;
              left: 594px;
            }
            #s-6 {
              top: 2px;
              left: 631px;
            }
            #s-5 {
              top: 33px;
              left: 631px;
            }
            #s-4 {
              top: 95px;
              left: 631px;
            }
            #s-3 {
              top: 2px;
              left: 668px;
            }
            #s-2 {
              top: 33px;
              left: 668px;
            }
            #s-1 {
              top: 95px;
              left: 668px;
            }
            /* Level 2 */
            #s-149 {
              top: 2px;
              left: 2px;
            }
            #s-148 {
              top: 33px;
              left: 2px;
            }
            #s-147 {
              top: 95px;
              left: 2px;
            }
            #s-146 {
              top: 2px;
              left: 39px;
            }
            #s-145 {
              top: 33px;
              left: 39px;
            }
            #s-144 {
              top: 95px;
              left: 39px;
            }
            #s-143 {
              top: 2px;
              left: 76px;
            }
            #s-142 {
              top: 33px;
              left: 76px;
            }
            #s-141 {
              top: 95px;
              left: 76px;
            }
            #s-140 {
              top: 126px;
              left: 76px;
            }
            #s-139 {
              top: 157px;
              left: 76px;
            }
            #s-138 {
              top: 2px;
              left: 113px;
            }
            #s-137 {
              top: 33px;
              left: 113px;
            }
            #s-136 {
              top: 95px;
              left: 113px;
            }
            #s-135 {
              top: 126px;
              left: 113px;
            }
            #s-134 {
              top: 157px;
              left: 113px;
            }
            #s-133 {
              top: 2px;
              left: 150px;
            }
            #s-132 {
              top: 33px;
              left: 150px;
            }
            #s-131 {
              top: 95px;
              left: 150px;
            }
            #s-130 {
              top: 126px;
              left: 150px;
            }
            #s-129 {
              top: 157px;
              left: 150px;
            }
            #s-128 {
              top: 2px;
              left: 187px;
            }
            #s-127 {
              top: 33px;
              left: 187px;
            }
            #s-126 {
              top: 95px;
              left: 187px;
            }
            #s-125 {
              top: 126px;
              left: 187px;
            }
            #s-124 {
              top: 157px;
              left: 187px;
            }
            #s-123 {
              top: 2px;
              left: 224px;
            }
            #s-122 {
              top: 33px;
              left: 224px;
            }
            #s-121 {
              top: 95px;
              left: 224px;
            }
            #s-120 {
              top: 126px;
              left: 224px;
            }
            #s-119 {
              top: 157px;
              left: 224px;
            }
            #s-118 {
              top: 2px;
              left: 261px;
            }
            #s-117 {
              top: 33px;
              left: 261px;
            }
            #s-116 {
              top: 95px;
              left: 261px;
            }
            #s-115 {
              top: 126px;
              left: 261px;
            }
            #s-114 {
              top: 157px;
              left: 261px;
            }
            #s-113 {
              top: 2px;
              left: 298px;
            }
            #s-112 {
              top: 33px;
              left: 298px;
            }
            #s-111 {
              top: 95px;
              left: 298px;
            }
            #s-110 {
              top: 126px;
              left: 298px;
            }
            #s-109 {
              top: 157px;
              left: 298px;
            }
            #s-108 {
              top: 2px;
              left: 335px;
            }
            #s-107 {
              top: 33px;
              left: 335px;
            }
            #s-106 {
              top: 95px;
              left: 335px;
            }
            #s-105 {
              top: 126px;
              left: 335px;
            }
            #s-104 {
              top: 157px;
              left: 335px;
            }
            #s-103 {
              top: 2px;
              left: 372px;
            }
            #s-102 {
              top: 33px;
              left: 372px;
            }
            #s-101 {
              top: 95px;
              left: 372px;
            }
            #s-100 {
              top: 126px;
              left: 372px;
            }
            #s-99 {
              top: 157px;
              left: 372px;
            }
            #s-98 {
              top: 2px;
              left: 409px;
            }
            #s-97 {
              top: 33px;
              left: 409px;
            }
            #s-96 {
              top: 95px;
              left: 409px;
            }
            #s-95 {
              top: 126px;
              left: 409px;
            }
            #s-94 {
              top: 157px;
              left: 409px;
            }
            #s-93 {
              top: 2px;
              left: 446px;
            }
            #s-92 {
              top: 33px;
              left: 446px;
            }
            #s-91 {
              top: 95px;
              left: 446px;
            }
            #s-90 {
              top: 126px;
              left: 446px;
            }
            #s-89 {
              top: 157px;
              left: 446px;
            }
            #s-88 {
              top: 2px;
              left: 483px;
            }
            #s-87 {
              top: 33px;
              left: 483px;
            }
            #s-86 {
              top: 95px;
              left: 483px;
            }
            #s-85 {
              top: 126px;
              left: 483px;
            }
            #s-84 {
              top: 157px;
              left: 483px;
            }
            #s-83 {
              top: 2px;
              left: 520px;
            }
            #s-82 {
              top: 33px;
              left: 520px;
            }
            #s-81 {
              top: 95px;
              left: 520px;
            }
            #s-80 {
              top: 126px;
              left: 520px;
            }
            #s-79 {
              top: 157px;
              left: 520px;
            }
            #s-78 {
              top: 2px;
              left: 557px;
            }
            #s-77 {
              top: 33px;
              left: 557px;
            }
            #s-76 {
              top: 95px;
              left: 557px;
            }
            #s-75 {
              top: 126px;
              left: 557px;
            }
            #s-74 {
              top: 157px;
              left: 557px;
            }
            #s-73 {
              top: 2px;
              left: 594px;
            }
            #s-72 {
              top: 33px;
              left: 594px;
            }
            #s-71 {
              top: 95px;
              left: 594px;
            }
            #s-70 {
              top: 126px;
              left: 594px;
            }
            #s-69 {
              top: 157px;
              left: 594px;
            }
            #s-68 {
              top: 2px;
              left: 631px;
            }
            #s-67 {
              top: 33px;
              left: 631px;
            }
            #s-66 {
              top: 95px;
              left: 631px;
            }
            #s-65 {
              top: 2px;
              left: 668px;
            }
            #s-64 {
              top: 33px;
              left: 668px;
            }
            #s-63 {
              top: 95px;
              left: 668px;
            }
            /* Level 3 */
            #s-234 {
              top: 2px;
              left: 2px;
            }
            #s-233 {
              top: 33px;
              left: 2px;
            }
            #s-232 {
              top: 95px;
              left: 2px;
            }
            #s-231 {
              top: 2px;
              left: 39px;
            }
            #s-230 {
              top: 33px;
              left: 39px;
            }
            #s-229 {
              top: 95px;
              left: 39px;
            }
            #s-228 {
              top: 33px;
              left: 76px;
            }
            #s-227 {
              top: 95px;
              left: 76px;
            }
            #s-226 {
              top: 126px;
              left: 76px;
            }
            #s-225 {
              top: 157px;
              left: 76px;
            }
            #s-224 {
              top: 33px;
              left: 113px;
            }
            #s-223 {
              top: 95px;
              left: 113px;
            }
            #s-222 {
              top: 126px;
              left: 113px;
            }
            #s-221 {
              top: 157px;
              left: 113px;
            }
            #s-220 {
              top: 2px;
              left: 150px;
            }
            #s-219 {
              top: 33px;
              left: 150px;
            }
            #s-218 {
              top: 95px;
              left: 150px;
            }
            #s-217 {
              top: 126px;
              left: 150px;
            }
            #s-216 {
              top: 157px;
              left: 150px;
            }
            #s-215 {
              top: 2px;
              left: 187px;
            }
            #s-214 {
              top: 33px;
              left: 187px;
            }
            #s-213 {
              top: 95px;
              left: 187px;
            }
            #s-212 {
              top: 126px;
              left: 187px;
            }
            #s-211 {
              top: 157px;
              left: 187px;
            }
            #s-210 {
              top: 2px;
              left: 224px;
            }
            #s-209 {
              top: 33px;
              left: 224px;
            }
            #s-208 {
              top: 95px;
              left: 224px;
            }
            #s-207 {
              top: 126px;
              left: 224px;
            }
            #s-206 {
              top: 157px;
              left: 224px;
            }
            #s-205 {
              top: 2px;
              left: 261px;
            }
            #s-204 {
              top: 33px;
              left: 261px;
            }
            #s-203 {
              top: 95px;
              left: 261px;
            }
            #s-202 {
              top: 126px;
              left: 261px;
            }
            #s-201 {
              top: 157px;
              left: 261px;
            }
            #s-200 {
              top: 2px;
              left: 298px;
            }
            #s-199 {
              top: 33px;
              left: 298px;
            }
            #s-198 {
              top: 95px;
              left: 298px;
            }
            #s-197 {
              top: 126px;
              left: 298px;
            }
            #s-196 {
              top: 157px;
              left: 298px;
            }
            #s-195 {
              top: 2px;
              left: 335px;
            }
            #s-194 {
              top: 33px;
              left: 335px;
            }
            #s-193 {
              top: 95px;
              left: 335px;
            }
            #s-192 {
              top: 126px;
              left: 335px;
            }
            #s-191 {
              top: 157px;
              left: 335px;
            }
            #s-190 {
              top: 2px;
              left: 372px;
            }
            #s-189 {
              top: 33px;
              left: 372px;
            }
            #s-188 {
              top: 95px;
              left: 372px;
            }
            #s-187 {
              top: 126px;
              left: 372px;
            }
            #s-186 {
              top: 157px;
              left: 372px;
            }
            #s-185 {
              top: 2px;
              left: 409px;
            }
            #s-184 {
              top: 33px;
              left: 409px;
            }
            #s-183 {
              top: 95px;
              left: 409px;
            }
            #s-182 {
              top: 126px;
              left: 409px;
            }
            #s-181 {
              top: 157px;
              left: 409px;
            }
            #s-180 {
              top: 2px;
              left: 446px;
            }
            #s-179 {
              top: 33px;
              left: 446px;
            }
            #s-178 {
              top: 95px;
              left: 446px;
            }
            #s-177 {
              top: 126px;
              left: 446px;
            }
            #s-176 {
              top: 157px;
              left: 446px;
            }
            #s-175 {
              top: 2px;
              left: 483px;
            }
            #s-174 {
              top: 33px;
              left: 483px;
            }
            #s-173 {
              top: 95px;
              left: 483px;
            }
            #s-172 {
              top: 126px;
              left: 483px;
            }
            #s-171 {
              top: 157px;
              left: 483px;
            }
            #s-170 {
              top: 2px;
              left: 520px;
            }
            #s-169 {
              top: 33px;
              left: 520px;
            }
            #s-168 {
              top: 95px;
              left: 520px;
            }
            #s-167 {
              top: 126px;
              left: 520px;
            }
            #s-166 {
              top: 157px;
              left: 520px;
            }
            #s-165 {
              top: 2px;
              left: 557px;
            }
            #s-164 {
              top: 33px;
              left: 557px;
            }
            #s-163 {
              top: 95px;
              left: 557px;
            }
            #s-162 {
              top: 126px;
              left: 557px;
            }
            #s-161 {
              top: 157px;
              left: 557px;
            }
            #s-160 {
              top: 2px;
              left: 594px;
            }
            #s-159 {
              top: 33px;
              left: 594px;
            }
            #s-158 {
              top: 95px;
              left: 594px;
            }
            #s-157 {
              top: 126px;
              left: 594px;
            }
            #s-156 {
              top: 157px;
              left: 594px;
            }
            #s-155 {
              top: 2px;
              left: 631px;
            }
            #s-154 {
              top: 33px;
              left: 631px;
            }
            #s-153 {
              top: 95px;
              left: 631px;
            }
            #s-152 {
              top: 2px;
              left: 668px;
            }
            #s-151 {
              top: 33px;
              left: 668px;
            }
            #s-150 {
              top: 95px;
              left: 668px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
