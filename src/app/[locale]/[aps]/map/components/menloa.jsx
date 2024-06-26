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
              top: 2px;
              left: 113px;
            }
            #el-2 {
              top: 2px;
              left: 335px;
            }
            #el-3 {
              top: 2px;
              left: 557px;
            }
            /* Level 1 */
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
              top: 126px;
              left: 2px;
            }
            #s-5 {
              top: 2px;
              left: 39px;
            }
            #s-6 {
              top: 33px;
              left: 39px;
            }
            #s-7 {
              top: 95px;
              left: 39px;
            }
            #s-8 {
              top: 126px;
              left: 39px;
            }
            #s-9 {
              top: 33px;
              left: 76px;
            }
            #s-10 {
              top: 95px;
              left: 76px;
            }
            #s-11 {
              top: 126px;
              left: 76px;
            }
            #s-12 {
              top: 95px;
              left: 113px;
            }
            #s-13 {
              top: 126px;
              left: 113px;
            }
            #s-14 {
              top: 33px;
              left: 150px;
            }
            #s-15 {
              top: 95px;
              left: 150px;
            }
            #s-16 {
              top: 126px;
              left: 150px;
            }
            #s-17 {
              top: 2px;
              left: 187px;
            }
            #s-18 {
              top: 33px;
              left: 187px;
            }
            #s-19 {
              top: 95px;
              left: 187px;
            }
            #s-20 {
              top: 126px;
              left: 187px;
            }
            #s-21 {
              top: 2px;
              left: 224px;
            }
            #s-22 {
              top: 33px;
              left: 224px;
            }
            #s-23 {
              top: 95px;
              left: 224px;
            }
            #s-24 {
              top: 126px;
              left: 224px;
            }
            #s-25 {
              top: 2px;
              left: 261px;
            }
            #s-26 {
              top: 33px;
              left: 261px;
            }
            #s-27 {
              top: 95px;
              left: 261px;
            }
            #s-28 {
              top: 126px;
              left: 261px;
            }
            #s-29 {
              top: 33px;
              left: 298px;
            }
            #s-30 {
              top: 95px;
              left: 298px;
            }
            #s-31 {
              top: 126px;
              left: 298px;
            }
            #s-32 {
              top: 95px;
              left: 335px;
            }
            #s-33 {
              top: 126px;
              left: 335px;
            }
            #s-34 {
              top: 33px;
              left: 372px;
            }
            #s-35 {
              top: 95px;
              left: 372px;
            }
            #s-36 {
              top: 126px;
              left: 372px;
            }
            #s-37 {
              top: 2px;
              left: 409px;
            }
            #s-38 {
              top: 33px;
              left: 409px;
            }
            #s-39 {
              top: 95px;
              left: 409px;
            }
            #s-40 {
              top: 126px;
              left: 409px;
            }
            #s-41 {
              top: 2px;
              left: 446px;
            }
            #s-42 {
              top: 33px;
              left: 446px;
            }
            #s-43 {
              top: 95px;
              left: 446px;
            }
            #s-44 {
              top: 126px;
              left: 446px;
            }
            #s-45 {
              top: 2px;
              left: 483px;
            }
            #s-46 {
              top: 33px;
              left: 483px;
            }
            #s-47 {
              top: 95px;
              left: 483px;
            }
            #s-48 {
              top: 126px;
              left: 483px;
            }
            #s-49 {
              top: 33px;
              left: 520px;
            }
            #s-50 {
              top: 95px;
              left: 520px;
            }
            #s-51 {
              top: 126px;
              left: 520px;
            }
            #s-52 {
              top: 95px;
              left: 557px;
            }
            #s-53 {
              top: 126px;
              left: 557px;
            }
            #s-54 {
              top: 33px;
              left: 594px;
            }
            #s-55 {
              top: 95px;
              left: 594px;
            }
            #s-56 {
              top: 126px;
              left: 594px;
            }
            #s-57 {
              top: 33px;
              left: 631px;
            }
            #s-58 {
              top: 95px;
              left: 631px;
            }
            #s-59 {
              top: 126px;
              left: 631px;
            }
            #s-60 {
              top: 33px;
              left: 668px;
            }
            #s-61 {
              top: 95px;
              left: 668px;
            }
            #s-62 {
              top: 126px;
              left: 668px;
            }
            #s-63 {
              top: 33px;
              left: 705px;
            }
            #s-64 {
              top: 95px;
              left: 705px;
            }
            #s-65 {
              top: 126px;
              left: 705px;
            }
            /* Level 2 */
            #s-66 {
              top: 64px;
              left: 2px;
            }
            #s-67 {
              top: 126px;
              left: 2px;
            }
            #s-68 {
              top: 157px;
              left: 2px;
            }
            #s-69 {
              top: 2px;
              left: 39px;
            }
            #s-70 {
              top: 33px;
              left: 39px;
            }
            #s-71 {
              top: 64px;
              left: 39px;
            }
            #s-72 {
              top: 126px;
              left: 39px;
            }
            #s-73 {
              top: 157px;
              left: 39px;
            }
            #s-74 {
              top: 2px;
              left: 76px;
            }
            #s-75 {
              top: 33px;
              left: 76px;
            }
            #s-76 {
              top: 64px;
              left: 76px;
            }
            #s-77 {
              top: 126px;
              left: 76px;
            }
            #s-78 {
              top: 157px;
              left: 76px;
            }
            #s-79 {
              top: 2px;
              left: 113px;
            }
            #s-80 {
              top: 33px;
              left: 113px;
            }
            #s-81 {
              top: 64px;
              left: 113px;
            }
            #s-82 {
              top: 126px;
              left: 113px;
            }
            #s-83 {
              top: 157px;
              left: 113px;
            }
            #s-84 {
              top: 2px;
              left: 150px;
            }
            #s-85 {
              top: 33px;
              left: 150px;
            }
            #s-86 {
              top: 64px;
              left: 150px;
            }
            #s-87 {
              top: 126px;
              left: 150px;
            }
            #s-88 {
              top: 157px;
              left: 150px;
            }
            #s-89 {
              top: 2px;
              left: 187px;
            }
            #s-90 {
              top: 33px;
              left: 187px;
            }
            #s-91 {
              top: 64px;
              left: 187px;
            }
            #s-92 {
              top: 126px;
              left: 187px;
            }
            #s-93 {
              top: 157px;
              left: 187px;
            }
            #s-94 {
              top: 2px;
              left: 224px;
            }
            #s-95 {
              top: 33px;
              left: 224px;
            }
            #s-96 {
              top: 64px;
              left: 224px;
            }
            #s-97 {
              top: 126px;
              left: 224px;
            }
            #s-98 {
              top: 157px;
              left: 224px;
            }
            #s-99 {
              top: 2px;
              left: 261px;
            }
            #s-100 {
              top: 33px;
              left: 261px;
            }
            #s-101 {
              top: 64px;
              left: 261px;
            }
            #s-102 {
              top: 126px;
              left: 261px;
            }
            #s-103 {
              top: 157px;
              left: 261px;
            }
            #s-104 {
              top: 2px;
              left: 298px;
            }
            #s-105 {
              top: 33px;
              left: 298px;
            }
            #s-106 {
              top: 64px;
              left: 298px;
            }
            #s-107 {
              top: 126px;
              left: 298px;
            }
            #s-108 {
              top: 157px;
              left: 298px;
            }
            #s-109 {
              top: 2px;
              left: 335px;
            }
            #s-110 {
              top: 33px;
              left: 335px;
            }
            #s-111 {
              top: 64px;
              left: 335px;
            }
            #s-112 {
              top: 126px;
              left: 335px;
            }
            #s-113 {
              top: 157px;
              left: 335px;
            }
            #s-114 {
              top: 2px;
              left: 372px;
            }
            #s-115 {
              top: 33px;
              left: 372px;
            }
            #s-116 {
              top: 64px;
              left: 372px;
            }
            #s-117 {
              top: 126px;
              left: 372px;
            }
            #s-118 {
              top: 157px;
              left: 372px;
            }
            #s-119 {
              top: 2px;
              left: 409px;
            }
            #s-120 {
              top: 33px;
              left: 409px;
            }
            #s-121 {
              top: 64px;
              left: 409px;
            }
            #s-122 {
              top: 126px;
              left: 409px;
            }
            #s-123 {
              top: 157px;
              left: 409px;
            }
            #s-124 {
              top: 2px;
              left: 446px;
            }
            #s-125 {
              top: 33px;
              left: 446px;
            }
            #s-126 {
              top: 64px;
              left: 446px;
            }
            #s-127 {
              top: 126px;
              left: 446px;
            }
            #s-128 {
              top: 157px;
              left: 446px;
            }
            #s-129 {
              top: 2px;
              left: 483px;
            }
            #s-130 {
              top: 33px;
              left: 483px;
            }
            #s-131 {
              top: 64px;
              left: 483px;
            }
            #s-132 {
              top: 126px;
              left: 483px;
            }
            #s-133 {
              top: 157px;
              left: 483px;
            }
            #s-134 {
              top: 2px;
              left: 520px;
            }
            #s-135 {
              top: 33px;
              left: 520px;
            }
            #s-136 {
              top: 64px;
              left: 520px;
            }
            #s-137 {
              top: 126px;
              left: 520px;
            }
            #s-138 {
              top: 157px;
              left: 520px;
            }
            #s-139 {
              top: 2px;
              left: 557px;
            }
            #s-140 {
              top: 33px;
              left: 557px;
            }
            #s-141 {
              top: 64px;
              left: 557px;
            }
            #s-142 {
              top: 126px;
              left: 557px;
            }
            #s-143 {
              top: 157px;
              left: 557px;
            }
            #s-144 {
              top: 2px;
              left: 594px;
            }
            #s-145 {
              top: 33px;
              left: 594px;
            }
            #s-146 {
              top: 64px;
              left: 594px;
            }
            #s-147 {
              top: 126px;
              left: 594px;
            }
            #s-148 {
              top: 157px;
              left: 594px;
            }
            #s-149 {
              top: 64px;
              left: 631px;
            }
            #s-150 {
              top: 126px;
              left: 631px;
            }
            #s-151 {
              top: 157px;
              left: 631px;
            }
            #s-152 {
              top: 64px;
              left: 668px;
            }
            #s-153 {
              top: 126px;
              left: 668px;
            }
            #s-154 {
              top: 157px;
              left: 668px;
            }
            #s-155 {
              top: 64px;
              left: 705px;
            }
            #s-156 {
              top: 126px;
              left: 705px;
            }
            #s-157 {
              top: 157px;
              left: 705px;
            }
            /* Level 3 */
            #s-158 {
              top: 64px;
              left: 2px;
            }
            #s-159 {
              top: 126px;
              left: 2px;
            }
            #s-160 {
              top: 157px;
              left: 2px;
            }
            #s-161 {
              top: 2px;
              left: 39px;
            }
            #s-162 {
              top: 33px;
              left: 39px;
            }
            #s-163 {
              top: 64px;
              left: 39px;
            }
            #s-164 {
              top: 126px;
              left: 39px;
            }
            #s-165 {
              top: 157px;
              left: 39px;
            }
            #s-166 {
              top: 2px;
              left: 76px;
            }
            #s-167 {
              top: 33px;
              left: 76px;
            }
            #s-168 {
              top: 64px;
              left: 76px;
            }
            #s-169 {
              top: 126px;
              left: 76px;
            }
            #s-170 {
              top: 157px;
              left: 76px;
            }
            #s-171 {
              top: 2px;
              left: 113px;
            }
            #s-172 {
              top: 33px;
              left: 113px;
            }
            #s-173 {
              top: 64px;
              left: 113px;
            }
            #s-174 {
              top: 126px;
              left: 113px;
            }
            #s-175 {
              top: 157px;
              left: 113px;
            }
            #s-176 {
              top: 2px;
              left: 150px;
            }
            #s-177 {
              top: 33px;
              left: 150px;
            }
            #s-178 {
              top: 64px;
              left: 150px;
            }
            #s-179 {
              top: 126px;
              left: 150px;
            }
            #s-180 {
              top: 157px;
              left: 150px;
            }
            #s-181 {
              top: 2px;
              left: 187px;
            }
            #s-182 {
              top: 33px;
              left: 187px;
            }
            #s-183 {
              top: 64px;
              left: 187px;
            }
            #s-184 {
              top: 126px;
              left: 187px;
            }
            #s-185 {
              top: 157px;
              left: 187px;
            }
            #s-186 {
              top: 2px;
              left: 224px;
            }
            #s-187 {
              top: 33px;
              left: 224px;
            }
            #s-188 {
              top: 64px;
              left: 224px;
            }
            #s-189 {
              top: 126px;
              left: 224px;
            }
            #s-190 {
              top: 157px;
              left: 224px;
            }
            #s-191 {
              top: 2px;
              left: 261px;
            }
            #s-192 {
              top: 33px;
              left: 261px;
            }
            #s-193 {
              top: 64px;
              left: 261px;
            }
            #s-194 {
              top: 126px;
              left: 261px;
            }
            #s-195 {
              top: 157px;
              left: 261px;
            }
            #s-196 {
              top: 2px;
              left: 298px;
            }
            #s-197 {
              top: 33px;
              left: 298px;
            }
            #s-198 {
              top: 64px;
              left: 298px;
            }
            #s-199 {
              top: 126px;
              left: 298px;
            }
            #s-200 {
              top: 157px;
              left: 298px;
            }
            #s-201 {
              top: 2px;
              left: 335px;
            }
            #s-202 {
              top: 33px;
              left: 335px;
            }
            #s-203 {
              top: 64px;
              left: 335px;
            }
            #s-204 {
              top: 126px;
              left: 335px;
            }
            #s-205 {
              top: 157px;
              left: 335px;
            }
            #s-206 {
              top: 2px;
              left: 372px;
            }
            #s-207 {
              top: 33px;
              left: 372px;
            }
            #s-208 {
              top: 64px;
              left: 372px;
            }
            #s-209 {
              top: 126px;
              left: 372px;
            }
            #s-210 {
              top: 157px;
              left: 372px;
            }
            #s-211 {
              top: 2px;
              left: 409px;
            }
            #s-212 {
              top: 33px;
              left: 409px;
            }
            #s-213 {
              top: 64px;
              left: 409px;
            }
            #s-214 {
              top: 126px;
              left: 409px;
            }
            #s-215 {
              top: 157px;
              left: 409px;
            }
            #s-216 {
              top: 2px;
              left: 446px;
            }
            #s-217 {
              top: 33px;
              left: 446px;
            }
            #s-218 {
              top: 64px;
              left: 446px;
            }
            #s-219 {
              top: 126px;
              left: 446px;
            }
            #s-220 {
              top: 157px;
              left: 446px;
            }
            #s-221 {
              top: 2px;
              left: 483px;
            }
            #s-222 {
              top: 33px;
              left: 483px;
            }
            #s-223 {
              top: 64px;
              left: 483px;
            }
            #s-224 {
              top: 126px;
              left: 483px;
            }
            #s-225 {
              top: 157px;
              left: 483px;
            }
            #s-226 {
              top: 2px;
              left: 520px;
            }
            #s-227 {
              top: 33px;
              left: 520px;
            }
            #s-228 {
              top: 64px;
              left: 520px;
            }
            #s-229 {
              top: 126px;
              left: 520px;
            }
            #s-230 {
              top: 157px;
              left: 520px;
            }
            #s-231 {
              top: 2px;
              left: 557px;
            }
            #s-232 {
              top: 33px;
              left: 557px;
            }
            #s-233 {
              top: 64px;
              left: 557px;
            }
            #s-234 {
              top: 126px;
              left: 557px;
            }
            #s-235 {
              top: 157px;
              left: 557px;
            }
            #s-236 {
              top: 2px;
              left: 594px;
            }
            #s-237 {
              top: 33px;
              left: 594px;
            }
            #s-238 {
              top: 64px;
              left: 594px;
            }
            #s-239 {
              top: 126px;
              left: 594px;
            }
            #s-240 {
              top: 64px;
              left: 631px;
            }
            #s-241 {
              top: 126px;
              left: 631px;
            }
            #s-242 {
              top: 157px;
              left: 631px;
            }
            #s-243 {
              top: 64px;
              left: 668px;
            }
            #s-244 {
              top: 126px;
              left: 668px;
            }
            #s-245 {
              top: 157px;
              left: 668px;
            }
            #s-246 {
              top: 64px;
              left: 705px;
            }
            #s-247 {
              top: 126px;
              left: 705px;
            }
            #s-248 {
              top: 157px;
              left: 705px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
