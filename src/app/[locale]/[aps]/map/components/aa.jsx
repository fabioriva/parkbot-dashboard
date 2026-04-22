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
              height: 99px;
              width: 456px;
            }
            #el-1 {
              top: 2px;
              left: 43px;
            }
            #el-2 {
              top: 64px;
              left: 166px;
            }
            #el-3 {
              top: 2px;
              left: 330px;
            }
            // P1
            #s-1 {
              top: 2px;
              left: 2px;
            }
            #s-3 {
              top: 33px;
              left: 2px;
            }
            #s-5 {
              top: 64px;
              left: 2px;
            }
            #s-2 {
              top: 2px;
              left: 84px;
            }
            #s-4 {
              top: 33px;
              left: 84px;
            }
            #s-6 {
              top: 64px;
              left: 84px;
            }
            #s-13 {
              top: 2px;
              left: 125px;
            }
            #s-10 {
              top: 33px;
              left: 125px;
            }
            #s-7 {
              top: 64px;
              left: 125px;
            }
            #s-14 {
              top: 2px;
              left: 207px;
            }
            #s-11 {
              top: 33px;
              left: 207px;
            }
            #s-8 {
              top: 64px;
              left: 207px;
            }
            #s-15 {
              top: 2px;
              left: 248px;
            }
            #s-12 {
              top: 33px;
              left: 248px;
            }
            #s-9 {
              top: 64px;
              left: 248px;
            }
            #s-16 {
              top: 2px;
              left: 289px;
            }
            #s-19 {
              top: 33px;
              left: 289px;
            }
            #s-22 {
              top: 64px;
              left: 289px;
            }
            #s-17 {
              top: 2px;
              left: 371px;
            }
            #s-20 {
              top: 33px;
              left: 371px;
            }
            #s-18 {
              top: 2px;
              left: 412px;
            }
            #s-21 {
              top: 33px;
              left: 412px;
            }
            // P2
            #s-23 {
              top: 2px;
              left: 2px;
            }
            #s-25 {
              top: 33px;
              left: 2px;
            }
            #s-27 {
              top: 64px;
              left: 2px;
            }
            #s-24 {
              top: 2px;
              left: 84px;
            }
            #s-26 {
              top: 33px;
              left: 84px;
            }
            #s-28 {
              top: 64px;
              left: 84px;
            }
            #s-35 {
              top: 2px;
              left: 125px;
            }
            #s-32 {
              top: 33px;
              left: 125px;
            }
            #s-29 {
              top: 64px;
              left: 125px;
            }
            #s-36 {
              top: 2px;
              left: 207px;
            }
            #s-33 {
              top: 33px;
              left: 207px;
            }
            #s-30 {
              top: 64px;
              left: 207px;
            }
            #s-37 {
              top: 2px;
              left: 248px;
            }
            #s-34 {
              top: 33px;
              left: 248px;
            }
            #s-31 {
              top: 64px;
              left: 248px;
            }
            #s-38 {
              top: 2px;
              left: 289px;
            }
            #s-41 {
              top: 33px;
              left: 289px;
            }
            #s-44 {
              top: 64px;
              left: 289px;
            }
            #s-39 {
              top: 2px;
              left: 371px;
            }
            #s-42 {
              top: 33px;
              left: 371px;
            }
            #s-40 {
              top: 2px;
              left: 412px;
            }
            #s-43 {
              top: 33px;
              left: 412px;
            }
            // P3
            #s-45 {
              top: 2px;
              left: 2px;
            }
            #s-47 {
              top: 33px;
              left: 2px;
            }
            #s-49 {
              top: 64px;
              left: 2px;
            }
            #s-46 {
              top: 2px;
              left: 84px;
            }
            #s-48 {
              top: 33px;
              left: 84px;
            }
            #s-50 {
              top: 64px;
              left: 84px;
            }
            #s-57 {
              top: 2px;
              left: 125px;
            }
            #s-54 {
              top: 33px;
              left: 125px;
            }
            #s-51 {
              top: 64px;
              left: 125px;
            }
            #s-58 {
              top: 2px;
              left: 207px;
            }
            #s-55 {
              top: 33px;
              left: 207px;
            }
            #s-52 {
              top: 64px;
              left: 207px;
            }
            #s-59 {
              top: 2px;
              left: 248px;
            }
            #s-56 {
              top: 33px;
              left: 248px;
            }
            #s-53 {
              top: 64px;
              left: 248px;
            }
            #s-60 {
              top: 2px;
              left: 289px;
            }
            #s-63 {
              top: 33px;
              left: 289px;
            }
            #s-66 {
              top: 64px;
              left: 289px;
            }
            #s-61 {
              top: 2px;
              left: 371px;
            }
            #s-64 {
              top: 33px;
              left: 371px;
            }
            #s-62 {
              top: 2px;
              left: 412px;
            }
            #s-65 {
              top: 33px;
              left: 412px;
            }
            // P4
            #s-67 {
              top: 2px;
              left: 2px;
            }
            #s-69 {
              top: 33px;
              left: 2px;
            }
            #s-71 {
              top: 64px;
              left: 2px;
            }
            #s-68 {
              top: 2px;
              left: 84px;
            }
            #s-70 {
              top: 33px;
              left: 84px;
            }
            #s-72 {
              top: 64px;
              left: 84px;
            }
            #s-79 {
              top: 2px;
              left: 125px;
            }
            #s-76 {
              top: 33px;
              left: 125px;
            }
            #s-73 {
              top: 64px;
              left: 125px;
            }
            #s-80 {
              top: 2px;
              left: 207px;
            }
            #s-77 {
              top: 33px;
              left: 207px;
            }
            #s-74 {
              top: 64px;
              left: 207px;
            }
            #s-81 {
              top: 2px;
              left: 248px;
            }
            #s-78 {
              top: 33px;
              left: 248px;
            }
            #s-75 {
              top: 64px;
              left: 248px;
            }
            #s-82 {
              top: 2px;
              left: 289px;
            }
            #s-85 {
              top: 33px;
              left: 289px;
            }
            #s-88 {
              top: 64px;
              left: 289px;
            }
            #s-83 {
              top: 2px;
              left: 371px;
            }
            #s-86 {
              top: 33px;
              left: 371px;
            }
            #s-84 {
              top: 2px;
              left: 412px;
            }
            #s-87 {
              top: 33px;
              left: 412px;
            }
            // P5
            #s-89 {
              top: 2px;
              left: 2px;
            }
            #s-91 {
              top: 33px;
              left: 2px;
            }
            #s-93 {
              top: 64px;
              left: 2px;
            }
            #s-90 {
              top: 2px;
              left: 84px;
            }
            #s-92 {
              top: 33px;
              left: 84px;
            }
            #s-94 {
              top: 64px;
              left: 84px;
            }
            #s-101 {
              top: 2px;
              left: 125px;
            }
            #s-98 {
              top: 33px;
              left: 125px;
            }
            #s-95 {
              top: 64px;
              left: 125px;
            }
            #s-102 {
              top: 2px;
              left: 207px;
            }
            #s-99 {
              top: 33px;
              left: 207px;
            }
            #s-96 {
              top: 64px;
              left: 207px;
            }
            #s-103 {
              top: 2px;
              left: 248px;
            }
            #s-100 {
              top: 33px;
              left: 248px;
            }
            #s-97 {
              top: 64px;
              left: 248px;
            }
            #s-104 {
              top: 2px;
              left: 289px;
            }
            #s-107 {
              top: 33px;
              left: 289px;
            }
            #s-110 {
              top: 64px;
              left: 289px;
            }
            #s-105 {
              top: 2px;
              left: 371px;
            }
            #s-08 {
              top: 33px;
              left: 371px;
            }
            #s-106 {
              top: 2px;
              left: 412px;
            }
            #s-109 {
              top: 33px;
              left: 412px;
            }
            // P6
            #s-111 {
              top: 2px;
              left: 2px;
            }
            #s-113 {
              top: 33px;
              left: 2px;
            }
            #s-115 {
              top: 64px;
              left: 2px;
            }
            #s-112 {
              top: 2px;
              left: 84px;
            }
            #s-114 {
              top: 33px;
              left: 84px;
            }
            #s-116 {
              top: 64px;
              left: 84px;
            }
            #s-123 {
              top: 2px;
              left: 125px;
            }
            #s-120 {
              top: 33px;
              left: 125px;
            }
            #s-117 {
              top: 64px;
              left: 125px;
            }
            #s-124 {
              top: 2px;
              left: 207px;
            }
            #s-121 {
              top: 33px;
              left: 207px;
            }
            #s-118 {
              top: 64px;
              left: 207px;
            }
            #s-125 {
              top: 2px;
              left: 248px;
            }
            #s-122 {
              top: 33px;
              left: 248px;
            }
            #s-119 {
              top: 64px;
              left: 248px;
            }
            #s-126 {
              top: 2px;
              left: 289px;
            }
            #s-129 {
              top: 33px;
              left: 289px;
            }
            #s-132 {
              top: 64px;
              left: 289px;
            }
            #s-127 {
              top: 2px;
              left: 371px;
            }
            #s-131 {
              top: 33px;
              left: 371px;
            }
            #s-128 {
              top: 2px;
              left: 412px;
            }
            #s-132 {
              top: 33px;
              left: 412px;
            }
            // P7
            #s-133 {
              top: 2px;
              left: 2px;
            }
            #s-135 {
              top: 33px;
              left: 2px;
            }
            #s-137 {
              top: 64px;
              left: 2px;
            }
            #s-134 {
              top: 2px;
              left: 84px;
            }
            #s-136 {
              top: 33px;
              left: 84px;
            }
            #s-138 {
              top: 64px;
              left: 84px;
            }
            #s-145 {
              top: 2px;
              left: 125px;
            }
            #s-142 {
              top: 33px;
              left: 125px;
            }
            #s-139 {
              top: 64px;
              left: 125px;
            }
            #s-146 {
              top: 2px;
              left: 207px;
            }
            #s-143 {
              top: 33px;
              left: 207px;
            }
            #s-140 {
              top: 64px;
              left: 207px;
            }
            #s-147 {
              top: 2px;
              left: 248px;
            }
            #s-144 {
              top: 33px;
              left: 248px;
            }
            #s-141 {
              top: 64px;
              left: 248px;
            }
            #s-148 {
              top: 2px;
              left: 289px;
            }
            #s-151 {
              top: 33px;
              left: 289px;
            }
            #s-154 {
              top: 64px;
              left: 289px;
            }
            #s-149 {
              top: 2px;
              left: 371px;
            }
            #s-152 {
              top: 33px;
              left: 371px;
            }
            #s-150 {
              top: 2px;
              left: 412px;
            }
            #s-153 {
              top: 33px;
              left: 412px;
            }
            // P8
            #s-155 {
              top: 2px;
              left: 2px;
            }
            #s-157 {
              top: 33px;
              left: 2px;
            }
            #s-159 {
              top: 64px;
              left: 2px;
            }
            #s-156 {
              top: 2px;
              left: 84px;
            }
            #s-158 {
              top: 33px;
              left: 84px;
            }
            #s-160 {
              top: 64px;
              left: 84px;
            }
            #s-167 {
              top: 2px;
              left: 125px;
            }
            #s-164 {
              top: 33px;
              left: 125px;
            }
            #s-161 {
              top: 64px;
              left: 125px;
            }
            #s-168 {
              top: 2px;
              left: 207px;
            }
            #s-165 {
              top: 33px;
              left: 207px;
            }
            #s-162 {
              top: 64px;
              left: 207px;
            }
            #s-169 {
              top: 2px;
              left: 248px;
            }
            #s-166 {
              top: 33px;
              left: 248px;
            }
            #s-163 {
              top: 64px;
              left: 248px;
            }
            #s-170 {
              top: 2px;
              left: 289px;
            }
            #s-173 {
              top: 33px;
              left: 289px;
            }
            #s-176 {
              top: 64px;
              left: 289px;
            }
            #s-171 {
              top: 2px;
              left: 371px;
            }
            #s-174 {
              top: 33px;
              left: 371px;
            }
            #s-172 {
              top: 2px;
              left: 412px;
            }
            #s-175 {
              top: 33px;
              left: 412px;
            }
            // P9
            #s-177 {
              top: 2px;
              left: 2px;
            }
            #s-179 {
              top: 33px;
              left: 2px;
            }
            #s-181 {
              top: 64px;
              left: 2px;
            }
            #s-178 {
              top: 2px;
              left: 84px;
            }
            #s-80 {
              top: 33px;
              left: 84px;
            }
            #s-182 {
              top: 64px;
              left: 84px;
            }
            #s-189 {
              top: 2px;
              left: 125px;
            }
            #s-186 {
              top: 33px;
              left: 125px;
            }
            #s-183 {
              top: 64px;
              left: 125px;
            }
            #s-190 {
              top: 2px;
              left: 207px;
            }
            #s-187 {
              top: 33px;
              left: 207px;
            }
            #s-184 {
              top: 64px;
              left: 207px;
            }
            #s-191 {
              top: 2px;
              left: 248px;
            }
            #s-188 {
              top: 33px;
              left: 248px;
            }
            #s-185 {
              top: 64px;
              left: 248px;
            }
            #s-192 {
              top: 2px;
              left: 289px;
            }
            #s-195 {
              top: 33px;
              left: 289px;
            }
            #s-198 {
              top: 64px;
              left: 289px;
            }
            #s-193 {
              top: 2px;
              left: 371px;
            }
            #s-196 {
              top: 33px;
              left: 371px;
            }
            #s-194 {
              top: 2px;
              left: 412px;
            }
            #s-197 {
              top: 33px;
              left: 412px;
            }
            // P10
            #s-199 {
              top: 2px;
              left: 2px;
            }
            #s-201 {
              top: 33px;
              left: 2px;
            }
            #s-203 {
              top: 64px;
              left: 2px;
            }
            #s-200 {
              top: 2px;
              left: 84px;
            }
            #s-202 {
              top: 33px;
              left: 84px;
            }
            #s-204 {
              top: 64px;
              left: 84px;
            }
            #s-211 {
              top: 2px;
              left: 125px;
            }
            #s-208 {
              top: 33px;
              left: 125px;
            }
            #s-205 {
              top: 64px;
              left: 125px;
            }
            #s-212 {
              top: 2px;
              left: 207px;
            }
            #s-209 {
              top: 33px;
              left: 207px;
            }
            #s-206 {
              top: 64px;
              left: 207px;
            }
            #s-213 {
              top: 2px;
              left: 248px;
            }
            #s-210 {
              top: 33px;
              left: 248px;
            }
            #s-207 {
              top: 64px;
              left: 248px;
            }
            #s-214 {
              top: 2px;
              left: 289px;
            }
            #s-217 {
              top: 33px;
              left: 289px;
            }
            #s-220 {
              top: 64px;
              left: 289px;
            }
            #s-215 {
              top: 2px;
              left: 371px;
            }
            #s-218 {
              top: 33px;
              left: 371px;
            }
            #s-216 {
              top: 2px;
              left: 412px;
            }
            #s-219 {
              top: 33px;
              left: 412px;
            }
            // P11
            #s-221 {
              top: 2px;
              left: 2px;
            }
            #s-223 {
              top: 33px;
              left: 2px;
            }
            #s-225 {
              top: 64px;
              left: 2px;
            }
            #s-222 {
              top: 2px;
              left: 84px;
            }
            #s-224 {
              top: 33px;
              left: 84px;
            }
            #s-226 {
              top: 64px;
              left: 84px;
            }
            #s-233 {
              top: 2px;
              left: 125px;
            }
            #s-230 {
              top: 33px;
              left: 125px;
            }
            #s-227 {
              top: 64px;
              left: 125px;
            }
            #s-234 {
              top: 2px;
              left: 207px;
            }
            #s-231 {
              top: 33px;
              left: 207px;
            }
            #s-228 {
              top: 64px;
              left: 207px;
            }
            #s-235 {
              top: 2px;
              left: 248px;
            }
            #s-232 {
              top: 33px;
              left: 248px;
            }
            #s-229 {
              top: 64px;
              left: 248px;
            }
            #s-236 {
              top: 2px;
              left: 289px;
            }
            #s-239 {
              top: 33px;
              left: 289px;
            }
            #s-242 {
              top: 64px;
              left: 289px;
            }
            #s-237 {
              top: 2px;
              left: 371px;
            }
            #s-240 {
              top: 33px;
              left: 371px;
            }
            #s-238 {
              top: 2px;
              left: 412px;
            }
            #s-241 {
              top: 33px;
              left: 412px;
            }
            // P12
            #s-243 {
              top: 2px;
              left: 2px;
            }
            #s-245 {
              top: 33px;
              left: 2px;
            }
            #s-247 {
              top: 64px;
              left: 2px;
            }
            #s-244 {
              top: 2px;
              left: 84px;
            }
            #s-246 {
              top: 33px;
              left: 84px;
            }
            #s-248 {
              top: 64px;
              left: 84px;
            }
            #s-255 {
              top: 2px;
              left: 125px;
            }
            #s-252 {
              top: 33px;
              left: 125px;
            }
            #s-249 {
              top: 64px;
              left: 125px;
            }
            #s-256 {
              top: 2px;
              left: 207px;
            }
            #s-253 {
              top: 33px;
              left: 207px;
            }
            #s-250 {
              top: 64px;
              left: 207px;
            }
            #s-257 {
              top: 2px;
              left: 248px;
            }
            #s-254 {
              top: 33px;
              left: 248px;
            }
            #s-251 {
              top: 64px;
              left: 248px;
            }
            #s-258 {
              top: 2px;
              left: 289px;
            }
            #s-261 {
              top: 33px;
              left: 289px;
            }
            #s-264 {
              top: 64px;
              left: 289px;
            }
            #s-259 {
              top: 2px;
              left: 371px;
            }
            #s-262 {
              top: 33px;
              left: 371px;
            }
            #s-260 {
              top: 2px;
              left: 412px;
            }
            #s-263 {
              top: 33px;
              left: 412px;
            }
            // P13
            #s-265 {
              top: 2px;
              left: 2px;
            }
            #s-267 {
              top: 33px;
              left: 2px;
            }
            #s-269 {
              top: 64px;
              left: 2px;
            }
            #s-266 {
              top: 2px;
              left: 84px;
            }
            #s-268 {
              top: 33px;
              left: 84px;
            }
            #s-270 {
              top: 64px;
              left: 84px;
            }
            #s-277 {
              top: 2px;
              left: 125px;
            }
            #s-274 {
              top: 33px;
              left: 125px;
            }
            #s-271 {
              top: 64px;
              left: 125px;
            }
            #s-278 {
              top: 2px;
              left: 207px;
            }
            #s-275 {
              top: 33px;
              left: 207px;
            }
            #s-272 {
              top: 64px;
              left: 207px;
            }
            #s-279 {
              top: 2px;
              left: 248px;
            }
            #s-276 {
              top: 33px;
              left: 248px;
            }
            #s-273 {
              top: 64px;
              left: 248px;
            }
            #s-280 {
              top: 2px;
              left: 289px;
            }
            #s-283 {
              top: 33px;
              left: 289px;
            }
            #s-286 {
              top: 64px;
              left: 289px;
            }
            #s-281 {
              top: 2px;
              left: 371px;
            }
            #s-284 {
              top: 33px;
              left: 371px;
            }
            #s-282 {
              top: 2px;
              left: 412px;
            }
            #s-285 {
              top: 33px;
              left: 412px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
