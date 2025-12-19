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
              width: 784px;
            }
            #el-1 {
              top: 2px;
              left: 371px;
            }
            #el-2 {
              top: 2px;
              left: 453px;
            }
            #el-3 {
              top: 2px;
              left: 535px;
            }
            #el-4 {
              top: 2px;
              left: 617px;
            }
            #el-5 {
              top: 64px;
              left: 740px;
            }
            // P1
            #s-1 {
              top: 126px;
              left: 2px;
            }
            #s-2 {
              top: 95px;
              left: 2px;
            }
            #s-3 {
              top: 33px;
              left: 2px;
            }
            #s-4 {
              top: 2px;
              left: 2px;
            }
            #s-5 {
              top: 126px;
              left: 43px;
            }
            #s-6 {
              top: 95px;
              left: 43px;
            }
            #s-7 {
              top: 33px;
              left: 43px;
            }
            #s-8 {
              top: 126px;
              left: 84px;
            }
            #s-9 {
              top: 95px;
              left: 84px;
            }
            #s-10 {
              top: 33px;
              left: 84px;
            }
            #s-11 {
              top: 126px;
              left: 125px;
            }
            #s-12 {
              top: 95px;
              left: 125px;
            }
            #s-13 {
              top: 33px;
              left: 125px;
            }
            #s-14 {
              top: 2px;
              left: 125px;
            }
            #s-15 {
              top: 126px;
              left: 166px;
            }
            #s-16 {
              top: 95px;
              left: 166px;
            }
            #s-17 {
              top: 33px;
              left: 166px;
            }
            #s-18 {
              top: 2px;
              left: 166px;
            }
            #s-19 {
              top: 126px;
              left: 207px;
            }
            #s-20 {
              top: 95px;
              left: 207px;
            }
            #s-21 {
              top: 33px;
              left: 207px;
            }
            #s-22 {
              top: 2px;
              left: 207px;
            }
            #s-23 {
              top: 126px;
              left: 248px;
            }
            #s-24 {
              top: 95px;
              left: 248px;
            }
            #s-25 {
              top: 33px;
              left: 248px;
            }
            #s-26 {
              top: 2px;
              left: 248px;
            }
            #s-27 {
              top: 126px;
              left: 289px;
            }
            #s-28 {
              top: 95px;
              left: 289px;
            }
            #s-29 {
              top: 33px;
              left: 289px;
            }
            #s-30 {
              top: 2px;
              left: 289px;
            }
            #s-31 {
              top: 126px;
              left: 330px;
            }
            #s-32 {
              top: 95px;
              left: 330px;
            }
            #s-33 {
              top: 33px;
              left: 330px;
            }
            #s-34 {
              top: 2px;
              left: 330px;
            }
            #s-35 {
              top: 126px;
              left: 371px;
            }
            #s-36 {
              top: 95px;
              left: 371px;
            }
            #s-37 {
              top: 126px;
              left: 412px;
            }
            #s-38 {
              top: 95px;
              left: 412px;
            }
            #s-39 {
              top: 33px;
              left: 412px;
            }
            #s-40 {
              top: 126px;
              left: 453px;
            }
            #s-41 {
              top: 95px;
              left: 453px;
            }
            #s-42 {
              top: 126px;
              left: 494px;
            }
            #s-43 {
              top: 95px;
              left: 494px;
            }
            #s-44 {
              top: 126px;
              left: 535px;
            }
            #s-45 {
              top: 95px;
              left: 535px;
            }
            #s-46 {
              top: 126px;
              left: 576px;
            }
            #s-47 {
              top: 95px;
              left: 576px;
            }
            #s-48 {
              top: 33px;
              left: 576px;
            }
            #s-49 {
              top: 126px;
              left: 617px;
            }
            #s-50 {
              top: 95px;
              left: 617px;
            }
            #s-51 {
              top: 126px;
              left: 658px;
            }
            #s-52 {
              top: 95px;
              left: 658px;
            }
            #s-53 {
              top: 126px;
              left: 699px;
            }
            #s-54 {
              top: 95px;
              left: 699px;
            }
            #s-55 {
              top: 126px;
              left: 740px;
            }
            #s-56 {
              top: 95px;
              left: 740px;
            }
            #s-57 {
              top: 33px;
              left: 740px;
            }
            #s-58 {
              top: 2px;
              left: 740px;
            }
            // P2
            #s-59 {
              top: 126px;
              left: 2px;
            }
            #s-60 {
              top: 95px;
              left: 2px;
            }
            #s-61 {
              top: 33px;
              left: 2px;
            }
            #s-62 {
              top: 2px;
              left: 2px;
            }
            #s-63 {
              top: 126px;
              left: 43px;
            }
            #s-64 {
              top: 95px;
              left: 43px;
            }
            #s-65 {
              top: 33px;
              left: 43px;
            }
            #s-66 {
              top: 126px;
              left: 84px;
            }
            #s-67 {
              top: 95px;
              left: 84px;
            }
            #s-68 {
              top: 33px;
              left: 84px;
            }
            #s-69 {
              top: 126px;
              left: 125px;
            }
            #s-70 {
              top: 95px;
              left: 125px;
            }
            #s-71 {
              top: 33px;
              left: 125px;
            }
            #s-72 {
              top: 2px;
              left: 125px;
            }
            #s-73 {
              top: 126px;
              left: 166px;
            }
            #s-74 {
              top: 95px;
              left: 166px;
            }
            #s-75 {
              top: 33px;
              left: 166px;
            }
            #s-76 {
              top: 2px;
              left: 166px;
            }
            #s-77 {
              top: 126px;
              left: 207px;
            }
            #s-78 {
              top: 95px;
              left: 207px;
            }
            #s-79 {
              top: 33px;
              left: 207px;
            }
            #s-80 {
              top: 2px;
              left: 207px;
            }
            #s-81 {
              top: 126px;
              left: 248px;
            }
            #s-82 {
              top: 95px;
              left: 248px;
            }
            #s-83 {
              top: 33px;
              left: 248px;
            }
            #s-84 {
              top: 2px;
              left: 248px;
            }
            #s-85 {
              top: 126px;
              left: 289px;
            }
            #s-86 {
              top: 95px;
              left: 289px;
            }
            #s-87 {
              top: 33px;
              left: 289px;
            }
            #s-88 {
              top: 2px;
              left: 289px;
            }
            #s-89 {
              top: 126px;
              left: 330px;
            }
            #s-90 {
              top: 95px;
              left: 330px;
            }
            #s-91 {
              top: 33px;
              left: 330px;
            }
            #s-92 {
              top: 2px;
              left: 330px;
            }
            #s-93 {
              top: 126px;
              left: 371px;
            }
            #s-94 {
              top: 95px;
              left: 371px;
            }
            #s-95 {
              top: 126px;
              left: 412px;
            }
            #s-96 {
              top: 95px;
              left: 412px;
            }
            #s-97 {
              top: 33px;
              left: 412px;
            }
            #s-98 {
              top: 126px;
              left: 453px;
            }
            #s-99 {
              top: 95px;
              left: 453px;
            }
            #s-100 {
              top: 126px;
              left: 494px;
            }
            #s-101 {
              top: 95px;
              left: 494px;
            }
            #s-102 {
              top: 126px;
              left: 535px;
            }
            #s-103 {
              top: 95px;
              left: 535px;
            }
            #s-104 {
              top: 126px;
              left: 576px;
            }
            #s-105 {
              top: 95px;
              left: 576px;
            }
            #s-106 {
              top: 33px;
              left: 576px;
            }
            #s-107 {
              top: 126px;
              left: 617px;
            }
            #s-108 {
              top: 95px;
              left: 617px;
            }
            #s-109 {
              top: 126px;
              left: 658px;
            }
            #s-110 {
              top: 95px;
              left: 658px;
            }
            #s-111 {
              top: 126px;
              left: 699px;
            }
            #s-112 {
              top: 95px;
              left: 699px;
            }
            #s-113 {
              top: 126px;
              left: 740px;
            }
            #s-114 {
              top: 95px;
              left: 740px;
            }
            #s-115 {
              top: 33px;
              left: 740px;
            }
            #s-116 {
              top: 2px;
              left: 740px;
            }
            // P3
            #s-117 {
              top: 126px;
              left: 2px;
            }
            #s-118 {
              top: 95px;
              left: 2px;
            }
            #s-119 {
              top: 33px;
              left: 2px;
            }
            #s-120 {
              top: 2px;
              left: 2px;
            }
            #s-121 {
              top: 126px;
              left: 43px;
            }
            #s-122 {
              top: 95px;
              left: 43px;
            }
            #s-123 {
              top: 33px;
              left: 43px;
            }
            #s-124 {
              top: 126px;
              left: 84px;
            }
            #s-125 {
              top: 95px;
              left: 84px;
            }
            #s-126 {
              top: 33px;
              left: 84px;
            }
            #s-127 {
              top: 126px;
              left: 125px;
            }
            #s-128 {
              top: 95px;
              left: 125px;
            }
            #s-129 {
              top: 33px;
              left: 125px;
            }
            #s-130 {
              top: 2px;
              left: 125px;
            }
            #s-131 {
              top: 126px;
              left: 166px;
            }
            #s-132 {
              top: 95px;
              left: 166px;
            }
            #s-133 {
              top: 33px;
              left: 166px;
            }
            #s-134 {
              top: 2px;
              left: 166px;
            }
            #s-135 {
              top: 126px;
              left: 207px;
            }
            #s-136 {
              top: 95px;
              left: 207px;
            }
            #s-137 {
              top: 33px;
              left: 207px;
            }
            #s-138 {
              top: 2px;
              left: 207px;
            }
            #s-139 {
              top: 126px;
              left: 248px;
            }
            #s-140 {
              top: 95px;
              left: 248px;
            }
            #s-141 {
              top: 33px;
              left: 248px;
            }
            #s-142 {
              top: 2px;
              left: 248px;
            }
            #s-143 {
              top: 126px;
              left: 289px;
            }
            #s-144 {
              top: 95px;
              left: 289px;
            }
            #s-145 {
              top: 33px;
              left: 289px;
            }
            #s-146 {
              top: 2px;
              left: 289px;
            }
            #s-147 {
              top: 126px;
              left: 330px;
            }
            #s-148 {
              top: 95px;
              left: 330px;
            }
            #s-149 {
              top: 33px;
              left: 330px;
            }
            #s-150 {
              top: 2px;
              left: 330px;
            }
            #s-151 {
              top: 126px;
              left: 371px;
            }
            #s-152 {
              top: 95px;
              left: 371px;
            }
            #s-153 {
              top: 126px;
              left: 412px;
            }
            #s-154 {
              top: 95px;
              left: 412px;
            }
            #s-155 {
              top: 33px;
              left: 412px;
            }
            #s-156 {
              top: 126px;
              left: 453px;
            }
            #s-157 {
              top: 95px;
              left: 453px;
            }
            #s-158 {
              top: 126px;
              left: 494px;
            }
            #s-159 {
              top: 95px;
              left: 494px;
            }
            #s-160 {
              top: 126px;
              left: 535px;
            }
            #s-161 {
              top: 95px;
              left: 535px;
            }
            #s-162 {
              top: 126px;
              left: 576px;
            }
            #s-163 {
              top: 95px;
              left: 576px;
            }
            #s-164 {
              top: 33px;
              left: 576px;
            }
            #s-165 {
              top: 126px;
              left: 617px;
            }
            #s-166 {
              top: 95px;
              left: 617px;
            }
            #s-167 {
              top: 126px;
              left: 658px;
            }
            #s-168 {
              top: 95px;
              left: 658px;
            }
            #s-169 {
              top: 126px;
              left: 699px;
            }
            #s-170 {
              top: 95px;
              left: 699px;
            }
            #s-171 {
              top: 126px;
              left: 740px;
            }
            #s-172 {
              top: 95px;
              left: 740px;
            }
            #s-173 {
              top: 33px;
              left: 740px;
            }
            #s-174 {
              top: 2px;
              left: 740px;
            }
            // P4
            #s-175 {
              top: 126px;
              left: 2px;
            }
            #s-176 {
              top: 95px;
              left: 2px;
            }
            #s-177 {
              top: 33px;
              left: 2px;
            }
            #s-178 {
              top: 2px;
              left: 2px;
            }
            #s-179 {
              top: 126px;
              left: 43px;
            }
            #s-180 {
              top: 95px;
              left: 43px;
            }
            #s-181 {
              top: 33px;
              left: 43px;
            }
            #s-182 {
              top: 126px;
              left: 84px;
            }
            #s-183 {
              top: 95px;
              left: 84px;
            }
            #s-184 {
              top: 33px;
              left: 84px;
            }
            #s-185 {
              top: 126px;
              left: 125px;
            }
            #s-186 {
              top: 95px;
              left: 125px;
            }
            #s-187 {
              top: 33px;
              left: 125px;
            }
            #s-188 {
              top: 2px;
              left: 125px;
            }
            #s-189 {
              top: 126px;
              left: 166px;
            }
            #s-190 {
              top: 95px;
              left: 166px;
            }
            #s-191 {
              top: 33px;
              left: 166px;
            }
            #s-192 {
              top: 2px;
              left: 166px;
            }
            #s-193 {
              top: 126px;
              left: 207px;
            }
            #s-194 {
              top: 95px;
              left: 207px;
            }
            #s-195 {
              top: 33px;
              left: 207px;
            }
            #s-196 {
              top: 2px;
              left: 207px;
            }
            #s-197 {
              top: 126px;
              left: 248px;
            }
            #s-198 {
              top: 95px;
              left: 248px;
            }
            #s-199 {
              top: 33px;
              left: 248px;
            }
            #s-200 {
              top: 2px;
              left: 248px;
            }
            #s-201 {
              top: 126px;
              left: 289px;
            }
            #s-202 {
              top: 95px;
              left: 289px;
            }
            #s-203 {
              top: 33px;
              left: 289px;
            }
            #s-204 {
              top: 2px;
              left: 289px;
            }
            #s-205 {
              top: 126px;
              left: 330px;
            }
            #s-206 {
              top: 95px;
              left: 330px;
            }
            #s-207 {
              top: 33px;
              left: 330px;
            }
            #s-208 {
              top: 2px;
              left: 330px;
            }
            #s-209 {
              top: 126px;
              left: 371px;
            }
            #s-210 {
              top: 95px;
              left: 371px;
            }
            #s-211 {
              top: 126px;
              left: 412px;
            }
            #s-212 {
              top: 95px;
              left: 412px;
            }
            #s-213 {
              top: 33px;
              left: 412px;
            }
            #s-214 {
              top: 126px;
              left: 453px;
            }
            #s-215 {
              top: 95px;
              left: 453px;
            }
            #s-216 {
              top: 126px;
              left: 494px;
            }
            #s-217 {
              top: 95px;
              left: 494px;
            }
            #s-218 {
              top: 126px;
              left: 535px;
            }
            #s-219 {
              top: 95px;
              left: 535px;
            }
            #s-220 {
              top: 126px;
              left: 576px;
            }
            #s-221 {
              top: 95px;
              left: 576px;
            }
            #s-222 {
              top: 33px;
              left: 576px;
            }
            #s-223 {
              top: 126px;
              left: 617px;
            }
            #s-224 {
              top: 95px;
              left: 617px;
            }
            #s-225 {
              top: 126px;
              left: 658px;
            }
            #s-226 {
              top: 95px;
              left: 658px;
            }
            #s-227 {
              top: 126px;
              left: 699px;
            }
            #s-228 {
              top: 95px;
              left: 699px;
            }
            #s-229 {
              top: 126px;
              left: 740px;
            }
            #s-230 {
              top: 95px;
              left: 740px;
            }
            #s-231 {
              top: 33px;
              left: 740px;
            }
            #s-232 {
              top: 2px;
              left: 740px;
            }
            // P5
            #s-233 {
              top: 126px;
              left: 2px;
            }
            #s-234 {
              top: 95px;
              left: 2px;
            }
            #s-235 {
              top: 33px;
              left: 2px;
            }
            #s-236 {
              top: 2px;
              left: 2px;
            }
            #s-237 {
              top: 126px;
              left: 43px;
            }
            #s-238 {
              top: 95px;
              left: 43px;
            }
            #s-239 {
              top: 33px;
              left: 43px;
            }
            #s-240 {
              top: 126px;
              left: 84px;
            }
            #s-241 {
              top: 95px;
              left: 84px;
            }
            #s-242 {
              top: 33px;
              left: 84px;
            }
            #s-243 {
              top: 126px;
              left: 125px;
            }
            #s-244 {
              top: 95px;
              left: 125px;
            }
            #s-245 {
              top: 33px;
              left: 125px;
            }
            #s-246 {
              top: 2px;
              left: 125px;
            }
            #s-247 {
              top: 126px;
              left: 166px;
            }
            #s-248 {
              top: 95px;
              left: 166px;
            }
            #s-249 {
              top: 33px;
              left: 166px;
            }
            #s-250 {
              top: 2px;
              left: 166px;
            }
            #s-251 {
              top: 126px;
              left: 207px;
            }
            #s-252 {
              top: 95px;
              left: 207px;
            }
            #s-253 {
              top: 33px;
              left: 207px;
            }
            #s-254 {
              top: 2px;
              left: 207px;
            }
            #s-255 {
              top: 126px;
              left: 248px;
            }
            #s-256 {
              top: 95px;
              left: 248px;
            }
            #s-257 {
              top: 33px;
              left: 248px;
            }
            #s-258 {
              top: 2px;
              left: 248px;
            }
            #s-259 {
              top: 126px;
              left: 289px;
            }
            #s-260 {
              top: 95px;
              left: 289px;
            }
            #s-261 {
              top: 33px;
              left: 289px;
            }
            #s-262 {
              top: 2px;
              left: 289px;
            }
            #s-263 {
              top: 126px;
              left: 330px;
            }
            #s-264 {
              top: 95px;
              left: 330px;
            }
            #s-265 {
              top: 33px;
              left: 330px;
            }
            #s-266 {
              top: 2px;
              left: 330px;
            }
            #s-267 {
              top: 126px;
              left: 371px;
            }
            #s-268 {
              top: 95px;
              left: 371px;
            }
            #s-269 {
              top: 126px;
              left: 412px;
            }
            #s-270 {
              top: 95px;
              left: 412px;
            }
            #s-271 {
              top: 33px;
              left: 412px;
            }
            #s-272 {
              top: 126px;
              left: 453px;
            }
            #s-273 {
              top: 95px;
              left: 453px;
            }
            #s-274 {
              top: 126px;
              left: 494px;
            }
            #s-275 {
              top: 95px;
              left: 494px;
            }
            #s-276 {
              top: 126px;
              left: 535px;
            }
            #s-277 {
              top: 95px;
              left: 535px;
            }
            #s-278 {
              top: 126px;
              left: 576px;
            }
            #s-279 {
              top: 95px;
              left: 576px;
            }
            #s-280 {
              top: 33px;
              left: 576px;
            }
            #s-281 {
              top: 126px;
              left: 617px;
            }
            #s-282 {
              top: 95px;
              left: 617px;
            }
            #s-283 {
              top: 126px;
              left: 658px;
            }
            #s-284 {
              top: 95px;
              left: 658px;
            }
            #s-285 {
              top: 126px;
              left: 699px;
            }
            #s-286 {
              top: 95px;
              left: 699px;
            }
            #s-287 {
              top: 126px;
              left: 740px;
            }
            #s-288 {
              top: 95px;
              left: 740px;
            }
            #s-289 {
              top: 33px;
              left: 740px;
            }
            #s-290 {
              top: 2px;
              left: 740px;
            }
            // P6
            #s-291 {
              top: 126px;
              left: 2px;
            }
            #s-292 {
              top: 95px;
              left: 2px;
            }
            #s-293 {
              top: 33px;
              left: 2px;
            }
            #s-294 {
              top: 2px;
              left: 2px;
            }
            #s-295 {
              top: 126px;
              left: 43px;
            }
            #s-296 {
              top: 95px;
              left: 43px;
            }
            #s-297 {
              top: 33px;
              left: 43px;
            }
            #s-298 {
              top: 126px;
              left: 84px;
            }
            #s-299 {
              top: 95px;
              left: 84px;
            }
            #s-300 {
              top: 33px;
              left: 84px;
            }
            #s-301 {
              top: 126px;
              left: 125px;
            }
            #s-302 {
              top: 95px;
              left: 125px;
            }
            #s-303 {
              top: 33px;
              left: 125px;
            }
            #s-304 {
              top: 2px;
              left: 125px;
            }
            #s-305 {
              top: 126px;
              left: 166px;
            }
            #s-306 {
              top: 95px;
              left: 166px;
            }
            #s-307 {
              top: 33px;
              left: 166px;
            }
            #s-308 {
              top: 2px;
              left: 166px;
            }
            #s-309 {
              top: 126px;
              left: 207px;
            }
            #s-310 {
              top: 95px;
              left: 207px;
            }
            #s-311 {
              top: 33px;
              left: 207px;
            }
            #s-312 {
              top: 2px;
              left: 207px;
            }
            #s-313 {
              top: 126px;
              left: 248px;
            }
            #s-314 {
              top: 95px;
              left: 248px;
            }
            #s-315 {
              top: 33px;
              left: 248px;
            }
            #s-316 {
              top: 2px;
              left: 248px;
            }
            #s-317 {
              top: 126px;
              left: 289px;
            }
            #s-318 {
              top: 95px;
              left: 289px;
            }
            #s-319 {
              top: 33px;
              left: 289px;
            }
            #s-320 {
              top: 2px;
              left: 289px;
            }
            #s-321 {
              top: 126px;
              left: 330px;
            }
            #s-322 {
              top: 95px;
              left: 330px;
            }
            #s-323 {
              top: 33px;
              left: 330px;
            }
            #s-324 {
              top: 2px;
              left: 330px;
            }
            #s-325 {
              top: 126px;
              left: 371px;
            }
            #s-326 {
              top: 95px;
              left: 371px;
            }
            #s-327 {
              top: 126px;
              left: 412px;
            }
            #s-328 {
              top: 95px;
              left: 412px;
            }
            #s-329 {
              top: 33px;
              left: 412px;
            }
            #s-330 {
              top: 126px;
              left: 453px;
            }
            #s-331 {
              top: 95px;
              left: 453px;
            }
            #s-332 {
              top: 126px;
              left: 494px;
            }
            #s-333 {
              top: 95px;
              left: 494px;
            }
            #s-334 {
              top: 126px;
              left: 535px;
            }
            #s-335 {
              top: 95px;
              left: 535px;
            }
            #s-336 {
              top: 126px;
              left: 576px;
            }
            #s-337 {
              top: 95px;
              left: 576px;
            }
            #s-338 {
              top: 33px;
              left: 576px;
            }
            #s-339 {
              top: 126px;
              left: 617px;
            }
            #s-340 {
              top: 95px;
              left: 617px;
            }
            #s-341 {
              top: 126px;
              left: 658px;
            }
            #s-342 {
              top: 95px;
              left: 658px;
            }
            #s-343 {
              top: 126px;
              left: 699px;
            }
            #s-344 {
              top: 95px;
              left: 699px;
            }
            #s-345 {
              top: 126px;
              left: 740px;
            }
            #s-346 {
              top: 95px;
              left: 740px;
            }
            #s-347 {
              top: 33px;
              left: 740px;
            }
            #s-348 {
              top: 2px;
              left: 740px;
            }
            // P7
            #s-349 {
              top: 126px;
              left: 2px;
            }
            #s-350 {
              top: 95px;
              left: 2px;
            }
            #s-351 {
              top: 33px;
              left: 2px;
            }
            #s-352 {
              top: 2px;
              left: 2px;
            }
            #s-353 {
              top: 126px;
              left: 43px;
            }
            #s-354 {
              top: 95px;
              left: 43px;
            }
            #s-355 {
              top: 33px;
              left: 43px;
            }
            #s-356 {
              top: 126px;
              left: 84px;
            }
            #s-357 {
              top: 95px;
              left: 84px;
            }
            #s-358 {
              top: 33px;
              left: 84px;
            }
            #s-359 {
              top: 126px;
              left: 125px;
            }
            #s-360 {
              top: 95px;
              left: 125px;
            }
            #s-361 {
              top: 33px;
              left: 125px;
            }
            #s-362 {
              top: 2px;
              left: 125px;
            }
            #s-363 {
              top: 126px;
              left: 166px;
            }
            #s-364 {
              top: 95px;
              left: 166px;
            }
            #s-365 {
              top: 33px;
              left: 166px;
            }
            #s-366 {
              top: 2px;
              left: 166px;
            }
            #s-367 {
              top: 126px;
              left: 207px;
            }
            #s-368 {
              top: 95px;
              left: 207px;
            }
            #s-369 {
              top: 33px;
              left: 207px;
            }
            #s-370 {
              top: 2px;
              left: 207px;
            }
            #s-371 {
              top: 126px;
              left: 248px;
            }
            #s-372 {
              top: 95px;
              left: 248px;
            }
            #s-373 {
              top: 33px;
              left: 248px;
            }
            #s-374 {
              top: 2px;
              left: 248px;
            }
            #s-375 {
              top: 126px;
              left: 289px;
            }
            #s-376 {
              top: 95px;
              left: 289px;
            }
            #s-377 {
              top: 33px;
              left: 289px;
            }
            #s-378 {
              top: 2px;
              left: 289px;
            }
            #s-379 {
              top: 126px;
              left: 330px;
            }
            #s-380 {
              top: 95px;
              left: 330px;
            }
            #s-381 {
              top: 33px;
              left: 330px;
            }
            #s-382 {
              top: 2px;
              left: 330px;
            }
            #s-383 {
              top: 126px;
              left: 371px;
            }
            #s-384 {
              top: 95px;
              left: 371px;
            }
            #s-385 {
              top: 126px;
              left: 412px;
            }
            #s-386 {
              top: 95px;
              left: 412px;
            }
            #s-387 {
              top: 33px;
              left: 412px;
            }
            #s-388 {
              top: 126px;
              left: 453px;
            }
            #s-389 {
              top: 95px;
              left: 453px;
            }
            #s-390 {
              top: 126px;
              left: 494px;
            }
            #s-391 {
              top: 95px;
              left: 494px;
            }
            #s-392 {
              top: 126px;
              left: 535px;
            }
            #s-393 {
              top: 95px;
              left: 535px;
            }
            #s-394 {
              top: 126px;
              left: 576px;
            }
            #s-395 {
              top: 95px;
              left: 576px;
            }
            #s-396 {
              top: 33px;
              left: 576px;
            }
            #s-397 {
              top: 126px;
              left: 617px;
            }
            #s-398 {
              top: 95px;
              left: 617px;
            }
            #s-399 {
              top: 126px;
              left: 658px;
            }
            #s-400 {
              top: 95px;
              left: 658px;
            }
            #s-401 {
              top: 126px;
              left: 699px;
            }
            #s-402 {
              top: 95px;
              left: 699px;
            }
            #s-403 {
              top: 126px;
              left: 740px;
            }
            #s-404 {
              top: 95px;
              left: 740px;
            }
            #s-405 {
              top: 33px;
              left: 740px;
            }
            #s-406 {
              top: 2px;
              left: 740px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
