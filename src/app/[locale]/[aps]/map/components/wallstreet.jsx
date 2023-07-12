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
              height: 98px;
              width: 784px;
            }
            /* Level P1 */
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 43px;
            }
            #s-3 {
              top: 2px;
              left: 84px;
            }
            #s-4 {
              top: 2px;
              left: 166px;
            }
            #s-5 {
              top: 2px;
              left: 207px;
            }
            #s-6 {
              top: 2px;
              left: 248px;
            }
            #s-7 {
              top: 33px;
              left: 43px;
            }
            #s-8 {
              top: 33px;
              left: 84px;
            }
            #s-9 {
              top: 33px;
              left: 166px;
            }
            #s-10 {
              top: 33px;
              left: 207px;
            }
            #s-11 {
              top: 33px;
              left: 248px;
            }
            #s-12 {
              top: 64px;
              left: 43px;
            }
            #s-13 {
              top: 64px;
              left: 84px;
            }
            #s-14 {
              top: 64px;
              left: 166px;
            }
            #s-15 {
              top: 64px;
              left: 207px;
            }
            /* Level P2 */
            #s-39 {
              top: 2px;
              left: 2px;
            }
            #s-40 {
              top: 2px;
              left: 43px;
            }
            #s-41 {
              top: 2px;
              left: 84px;
            }
            #s-42 {
              top: 2px;
              left: 166px;
            }
            #s-43 {
              top: 2px;
              left: 207px;
            }
            #s-44 {
              top: 2px;
              left: 248px;
            }
            #s-45 {
              top: 33px;
              left: 43px;
            }
            #s-46 {
              top: 33px;
              left: 84px;
            }
            #s-47 {
              top: 33px;
              left: 166px;
            }
            #s-48 {
              top: 33px;
              left: 207px;
            }
            #s-49 {
              top: 33px;
              left: 248px;
            }
            #s-50 {
              top: 64px;
              left: 43px;
            }
            #s-51 {
              top: 64px;
              left: 84px;
            }
            #s-52 {
              top: 64px;
              left: 166px;
            }
            #s-53 {
              top: 64px;
              left: 207px;
            }
            /* Level P3 */
            #s-77 {
              top: 2px;
              left: 2px;
            }
            #s-78 {
              top: 2px;
              left: 43px;
            }
            #s-79 {
              top: 2px;
              left: 84px;
            }
            #s-80 {
              top: 2px;
              left: 166px;
            }
            #s-81 {
              top: 2px;
              left: 207px;
            }
            #s-82 {
              top: 2px;
              left: 248px;
            }
            #s-83 {
              top: 33px;
              left: 43px;
            }
            #s-84 {
              top: 33px;
              left: 84px;
            }
            #s-85 {
              top: 33px;
              left: 166px;
            }
            #s-86 {
              top: 33px;
              left: 207px;
            }
            #s-87 {
              top: 33px;
              left: 248px;
            }
            #s-88 {
              top: 64px;
              left: 43px;
            }
            #s-89 {
              top: 64px;
              left: 84px;
            }
            #s-90 {
              top: 64px;
              left: 166px;
            }
            #s-91 {
              top: 64px;
              left: 207px;
            }
            /* Level P4 */
            #s-115 {
              top: 2px;
              left: 2px;
            }
            #s-116 {
              top: 2px;
              left: 43px;
            }
            #s-117 {
              top: 2px;
              left: 84px;
            }
            #s-118 {
              top: 2px;
              left: 166px;
            }
            #s-119 {
              top: 2px;
              left: 207px;
            }
            #s-120 {
              top: 2px;
              left: 248px;
            }
            #s-121 {
              top: 33px;
              left: 43px;
            }
            #s-122 {
              top: 33px;
              left: 84px;
            }
            #s-123 {
              top: 33px;
              left: 166px;
            }
            #s-124 {
              top: 33px;
              left: 207px;
            }
            #s-125 {
              top: 33px;
              left: 248px;
            }
            #s-126 {
              top: 64px;
              left: 43px;
            }
            #s-127 {
              top: 64px;
              left: 84px;
            }
            #s-128 {
              top: 64px;
              left: 166px;
            }
            #s-129 {
              top: 64px;
              left: 207px;
            }
            /* Level P5 */
            #s-153 {
              top: 2px;
              left: 2px;
            }
            #s-154 {
              top: 2px;
              left: 43px;
            }
            #s-155 {
              top: 2px;
              left: 84px;
            }
            #s-156 {
              top: 2px;
              left: 166px;
            }
            #s-157 {
              top: 2px;
              left: 207px;
            }
            #s-158 {
              top: 2px;
              left: 248px;
            }
            #s-159 {
              top: 33px;
              left: 43px;
            }
            #s-160 {
              top: 33px;
              left: 84px;
            }
            #s-161 {
              top: 33px;
              left: 166px;
            }
            #s-162 {
              top: 33px;
              left: 207px;
            }
            #s-163 {
              top: 33px;
              left: 248px;
            }
            #s-164 {
              top: 64px;
              left: 43px;
            }
            #s-165 {
              top: 64px;
              left: 84px;
            }
            #s-166 {
              top: 64px;
              left: 166px;
            }
            #s-167 {
              top: 64px;
              left: 207px;
            }
            /* Level P6 */
            #s-191 {
              top: 2px;
              left: 2px;
            }
            #s-192 {
              top: 2px;
              left: 43px;
            }
            #s-193 {
              top: 2px;
              left: 84px;
            }
            #s-194 {
              top: 2px;
              left: 166px;
            }
            #s-195 {
              top: 2px;
              left: 207px;
            }
            #s-196 {
              top: 2px;
              left: 248px;
            }
            #s-197 {
              top: 33px;
              left: 43px;
            }
            #s-198 {
              top: 33px;
              left: 84px;
            }
            #s-199 {
              top: 33px;
              left: 166px;
            }
            #s-200 {
              top: 33px;
              left: 207px;
            }
            #s-201 {
              top: 33px;
              left: 248px;
            }
            #s-202 {
              top: 64px;
              left: 43px;
            }
            #s-203 {
              top: 64px;
              left: 84px;
            }
            #s-204 {
              top: 64px;
              left: 166px;
            }
            #s-205 {
              top: 64px;
              left: 207px;
            }
            /* Level P7 */
            #s-228 {
              top: 2px;
              left: 2px;
            }
            #s-229 {
              top: 2px;
              left: 43px;
            }
            #s-230 {
              top: 2px;
              left: 84px;
            }
            #s-231 {
              top: 2px;
              left: 166px;
            }
            #s-232 {
              top: 2px;
              left: 207px;
            }
            #s-233 {
              top: 33px;
              left: 43px;
            }
            #s-234 {
              top: 33px;
              left: 84px;
            }
            #s-235 {
              top: 33px;
              left: 166px;
            }
            #s-236 {
              top: 33px;
              left: 207px;
            }
            #s-237 {
              top: 64px;
              left: 43px;
            }
            #s-238 {
              top: 64px;
              left: 84px;
            }
            #s-239 {
              top: 64px;
              left: 166px;
            }
            #s-240 {
              top: 64px;
              left: 207px;
            }
            /* Level P8 */
            #s-256 {
              top: 2px;
              left: 2px;
            }
            #s-257 {
              top: 2px;
              left: 43px;
            }
            #s-258 {
              top: 2px;
              left: 84px;
            }
            #s-259 {
              top: 2px;
              left: 166px;
            }
            #s-260 {
              top: 2px;
              left: 207px;
            }
            #s-261 {
              top: 33px;
              left: 43px;
            }
            #s-262 {
              top: 33px;
              left: 84px;
            }
            #s-263 {
              top: 64px;
              left: 166px;
            }
            #s-264 {
              top: 64px;
              left: 207px;
            }
            /* Transfer stalls */
            #s-271 {
              top: 64px;
              left: 43px;
              border: 2px solid #ffff00;
            }
            #s-272 {
              top: 33px;
              left: 186px;
              border: 2px solid #ffff00;
            }
            /* EVT4 */
            #el-4 {
              top: 2px;
              left: 125px;
            }
            /* Level P1 */
            #s-16 {
              top: 2px;
              left: 330px;
            }
            #s-17 {
              top: 2px;
              left: 371px;
            }
            #s-18 {
              top: 2px;
              left: 453px;
            }
            #s-19 {
              top: 2px;
              left: 494px;
            }
            #s-20 {
              top: 33px;
              left: 330px;
            }
            #s-21 {
              top: 33px;
              left: 371px;
            }
            #s-22 {
              top: 33px;
              left: 453px;
            }
            #s-23 {
              top: 33px;
              left: 494px;
            }
            #s-24 {
              top: 64px;
              left: 371px;
            }
            #s-25 {
              top: 64px;
              left: 453px;
            }
            #s-26 {
              top: 64px;
              left: 494px;
            }
            /* Level P2 */
            #s-54 {
              top: 2px;
              left: 330px;
            }
            #s-55 {
              top: 2px;
              left: 371px;
            }
            #s-56 {
              top: 2px;
              left: 453px;
            }
            #s-57 {
              top: 2px;
              left: 494px;
            }
            #s-58 {
              top: 33px;
              left: 330px;
            }
            #s-59 {
              top: 33px;
              left: 371px;
            }
            #s-60 {
              top: 33px;
              left: 453px;
            }
            #s-61 {
              top: 33px;
              left: 494px;
            }
            #s-62 {
              top: 64px;
              left: 371px;
            }
            #s-63 {
              top: 64px;
              left: 453px;
            }
            #s-64 {
              top: 64px;
              left: 494px;
            }
            /* Level P3 */
            #s-92 {
              top: 2px;
              left: 330px;
            }
            #s-93 {
              top: 2px;
              left: 371px;
            }
            #s-94 {
              top: 2px;
              left: 453px;
            }
            #s-95 {
              top: 2px;
              left: 494px;
            }
            #s-96 {
              top: 33px;
              left: 330px;
            }
            #s-97 {
              top: 33px;
              left: 371px;
            }
            #s-98 {
              top: 33px;
              left: 453px;
            }
            #s-99 {
              top: 33px;
              left: 494px;
            }
            #s-100 {
              top: 64px;
              left: 371px;
            }
            #s-101 {
              top: 64px;
              left: 453px;
            }
            #s-102 {
              top: 64px;
              left: 494px;
            }
            /* Level P4 */
            #s-130 {
              top: 2px;
              left: 330px;
            }
            #s-131 {
              top: 2px;
              left: 371px;
            }
            #s-132 {
              top: 2px;
              left: 453px;
            }
            #s-133 {
              top: 2px;
              left: 494px;
            }
            #s-134 {
              top: 33px;
              left: 330px;
            }
            #s-135 {
              top: 33px;
              left: 371px;
            }
            #s-136 {
              top: 33px;
              left: 453px;
            }
            #s-137 {
              top: 33px;
              left: 494px;
            }
            #s-138 {
              top: 64px;
              left: 371px;
            }
            #s-139 {
              top: 64px;
              left: 453px;
            }
            #s-140 {
              top: 64px;
              left: 494px;
            }
            /* Level P5 */
            #s-168 {
              top: 2px;
              left: 330px;
            }
            #s-169 {
              top: 2px;
              left: 371px;
            }
            #s-170 {
              top: 2px;
              left: 453px;
            }
            #s-171 {
              top: 2px;
              left: 494px;
            }
            #s-172 {
              top: 33px;
              left: 330px;
            }
            #s-173 {
              top: 33px;
              left: 371px;
            }
            #s-174 {
              top: 33px;
              left: 453px;
            }
            #s-175 {
              top: 33px;
              left: 494px;
            }
            #s-176 {
              top: 64px;
              left: 371px;
            }
            #s-177 {
              top: 64px;
              left: 453px;
            }
            #s-178 {
              top: 64px;
              left: 494px;
            }
            /* Level P6 */
            #s-206 {
              top: 2px;
              left: 371px;
            }
            #s-207 {
              top: 2px;
              left: 453px;
            }
            #s-208 {
              top: 2px;
              left: 494px;
            }
            #s-209 {
              top: 33px;
              left: 330px;
            }
            #s-210 {
              top: 33px;
              left: 371px;
            }
            #s-211 {
              top: 33px;
              left: 453px;
            }
            #s-212 {
              top: 33px;
              left: 494px;
            }
            #s-213 {
              top: 64px;
              left: 371px;
            }
            #s-214 {
              top: 64px;
              left: 453px;
            }
            #s-215 {
              top: 64px;
              left: 494px;
            }
            /* Level P7 */
            #s-241 {
              top: 2px;
              left: 371px;
            }
            #s-242 {
              top: 2px;
              left: 453px;
            }
            #s-243 {
              top: 33px;
              left: 371px;
            }
            #s-244 {
              top: 33px;
              left: 453px;
            }
            #s-245 {
              top: 64px;
              left: 371px;
            }
            #s-246 {
              top: 64px;
              left: 453px;
            }
            /* Level P8 */
            #s-265 {
              top: 2px;
              left: 371px;
            }
            #s-266 {
              top: 33px;
              left: 371px;
            }
            #s-267 {
              top: 64px;
              left: 453px;
            }
            /* Transfer stalls */
            #s-273 {
              top: 64px;
              left: 330px;
              border: 2px solid #ffff00;
            }
            #s-274 {
              top: 33px;
              left: 453px;
              border: 2px solid #ffff00;
            }
            /* EVT5 */
            #el-5 {
              top: 2px;
              left: 412px;
            }
            /* Level P1 */
            #s-27 {
              top: 2px;
              left: 576px;
            }
            #s-28 {
              top: 2px;
              left: 617px;
            }
            #s-29 {
              top: 2px;
              left: 699px;
            }
            #s-30 {
              top: 2px;
              left: 740px;
            }
            #s-31 {
              top: 33px;
              left: 576px;
            }
            #s-32 {
              top: 33px;
              left: 617px;
            }
            #s-33 {
              top: 33px;
              left: 699px;
            }
            #s-34 {
              top: 33px;
              left: 740px;
            }
            #s-35 {
              top: 64px;
              left: 576px;
            }
            #s-36 {
              top: 64px;
              left: 617px;
            }
            #s-37 {
              top: 64px;
              left: 699px;
            }
            #s-38 {
              top: 64px;
              left: 740px;
            }
            /* Level P2 */
            #s-65 {
              top: 2px;
              left: 576px;
            }
            #s-66 {
              top: 2px;
              left: 617px;
            }
            #s-67 {
              top: 2px;
              left: 699px;
            }
            #s-68 {
              top: 2px;
              left: 740px;
            }
            #s-69 {
              top: 33px;
              left: 576px;
            }
            #s-70 {
              top: 33px;
              left: 617px;
            }
            #s-71 {
              top: 33px;
              left: 699px;
            }
            #s-72 {
              top: 33px;
              left: 740px;
            }
            #s-73 {
              top: 64px;
              left: 576px;
            }
            #s-74 {
              top: 64px;
              left: 617px;
            }
            #s-75 {
              top: 64px;
              left: 699px;
            }
            #s-76 {
              top: 64px;
              left: 740px;
            }
            /* Level P3 */
            #s-103 {
              top: 2px;
              left: 576px;
            }
            #s-104 {
              top: 2px;
              left: 617px;
            }
            #s-105 {
              top: 2px;
              left: 699px;
            }
            #s-106 {
              top: 2px;
              left: 740px;
            }
            #s-107 {
              top: 33px;
              left: 576px;
            }
            #s-108 {
              top: 33px;
              left: 617px;
            }
            #s-109 {
              top: 33px;
              left: 699px;
            }
            #s-110 {
              top: 33px;
              left: 740px;
            }
            #s-111 {
              top: 64px;
              left: 576px;
            }
            #s-112 {
              top: 64px;
              left: 617px;
            }
            #s-113 {
              top: 64px;
              left: 699px;
            }
            #s-114 {
              top: 64px;
              left: 740px;
            }
            /* Level P4 */
            #s-141 {
              top: 2px;
              left: 576px;
            }
            #s-142 {
              top: 2px;
              left: 617px;
            }
            #s-143 {
              top: 2px;
              left: 699px;
            }
            #s-144 {
              top: 2px;
              left: 740px;
            }
            #s-145 {
              top: 33px;
              left: 576px;
            }
            #s-146 {
              top: 33px;
              left: 617px;
            }
            #s-147 {
              top: 33px;
              left: 699px;
            }
            #s-148 {
              top: 33px;
              left: 740px;
            }
            #s-149 {
              top: 64px;
              left: 576px;
            }
            #s-150 {
              top: 64px;
              left: 617px;
            }
            #s-151 {
              top: 64px;
              left: 699px;
            }
            #s-152 {
              top: 64px;
              left: 740px;
            }
            /* Level P5 */
            #s-179 {
              top: 2px;
              left: 576px;
            }
            #s-180 {
              top: 2px;
              left: 617px;
            }
            #s-181 {
              top: 2px;
              left: 699px;
            }
            #s-182 {
              top: 2px;
              left: 740px;
            }
            #s-183 {
              top: 33px;
              left: 576px;
            }
            #s-184 {
              top: 33px;
              left: 617px;
            }
            #s-185 {
              top: 33px;
              left: 699px;
            }
            #s-186 {
              top: 33px;
              left: 740px;
            }
            #s-187 {
              top: 64px;
              left: 576px;
            }
            #s-188 {
              top: 64px;
              left: 617px;
            }
            #s-189 {
              top: 64px;
              left: 699px;
            }
            #s-190 {
              top: 64px;
              left: 740px;
            }
            /* Level P6 */
            #s-216 {
              top: 2px;
              left: 576px;
            }
            #s-217 {
              top: 2px;
              left: 617px;
            }
            #s-218 {
              top: 2px;
              left: 699px;
            }
            #s-219 {
              top: 2px;
              left: 740px;
            }
            #s-220 {
              top: 33px;
              left: 576px;
            }
            #s-221 {
              top: 33px;
              left: 617px;
            }
            #s-222 {
              top: 33px;
              left: 699px;
            }
            #s-223 {
              top: 33px;
              left: 740px;
            }
            #s-224 {
              top: 64px;
              left: 576px;
            }
            #s-225 {
              top: 64px;
              left: 617px;
            }
            #s-226 {
              top: 64px;
              left: 699px;
            }
            #s-227 {
              top: 64px;
              left: 740px;
            }
            /* Level P7 */
            #s-247 {
              top: 2px;
              left: 576px;
            }
            #s-248 {
              top: 2px;
              left: 617px;
            }
            #s-249 {
              top: 2px;
              left: 699px;
            }
            #s-250 {
              top: 33px;
              left: 576px;
            }
            #s-251 {
              top: 33px;
              left: 617px;
            }
            #s-252 {
              top: 33px;
              left: 699px;
            }
            #s-253 {
              top: 64px;
              left: 576px;
            }
            #s-254 {
              top: 64px;
              left: 617px;
            }
            #s-255 {
              top: 64px;
              left: 699px;
            }
            /* Level P8 */
            #s-268 {
              top: 2px;
              left: 699px;
            }
            #s-269 {
              top: 64px;
              left: 576px;
            }
            #s-270 {
              top: 64px;
              left: 617px;
            }
            /* Transfer stalls */
            #s-275 {
              top: 33px;
              left: 596px;
              border: 2px solid #ffff00;
            }
            #s-276 {
              top: 33px;
              left: 699px;
              border: 2px solid #ffff00;
            }
            /* EVT6 */
            #el-6 {
              top: 2px;
              left: 658px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
