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
              width: 1153px;
            }
            #el-1 {
              top: 95px;
              left: 207px;
            }
            #el-2 {
              top: 95px;
              left: 289px;
            }
            #el-3 {
              top: 95px;
              left: 371px;
            }
            #el-4 {
              top: 95px;
              left: 453px;
            }
            #el-5 {
              top: 95px;
              left: 535px;
            }
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
              left: 43px;
            }
            #s-6 {
              top: 33px;
              left: 43px;
            }
            #s-7 {
              top: 95px;
              left: 43px;
            }
            #s-8 {
              top: 126px;
              left: 43px;
            }
            #s-9 {
              top: 2px;
              left: 84px;
            }
            #s-10 {
              top: 33px;
              left: 84px;
            }
            #s-11 {
              top: 95px;
              left: 84px;
            }
            #s-12 {
              top: 126px;
              left: 84px;
            }
            #s-13 {
              top: 2px;
              left: 125px;
            }
            #s-14 {
              top: 33px;
              left: 125px;
            }
            #s-15 {
              top: 95px;
              left: 125px;
            }
            #s-16 {
              top: 126px;
              left: 125px;
            }
            #s-17 {
              top: 2px;
              left: 166px;
            }
            #s-18 {
              top: 33px;
              left: 166px;
            }
            #s-19 {
              top: 95px;
              left: 166px;
            }
            #s-20 {
              top: 126px;
              left: 166px;
            }
            #s-21 {
              top: 2px;
              left: 207px;
            }
            #s-22 {
              top: 33px;
              left: 207px;
            }
            #s-23 {
              top: 2px;
              left: 248px;
            }
            #s-24 {
              top: 33px;
              left: 248px;
            }
            #s-25 {
              top: 95px;
              left: 248px;
            }
            #s-26 {
              top: 126px;
              left: 248px;
            }
            #s-27 {
              top: 2px;
              left: 289px;
            }
            #s-28 {
              top: 33px;
              left: 289px;
            }
            #s-29 {
              top: 2px;
              left: 330px;
            }
            #s-30 {
              top: 33px;
              left: 330px;
            }
            #s-31 {
              top: 95px;
              left: 330px;
            }
            #s-32 {
              top: 126px;
              left: 330px;
            }
            #s-33 {
              top: 2px;
              left: 371px;
            }
            #s-34 {
              top: 33px;
              left: 371px;
            }
            #s-35 {
              top: 2px;
              left: 412px;
            }
            #s-36 {
              top: 33px;
              left: 412px;
            }
            #s-37 {
              top: 95px;
              left: 412px;
            }
            #s-38 {
              top: 126px;
              left: 412px;
            }
            #s-39 {
              top: 2px;
              left: 453px;
            }
            #s-40 {
              top: 33px;
              left: 453px;
            }
            #s-41 {
              top: 2px;
              left: 494px;
            }
            #s-42 {
              top: 33px;
              left: 494px;
            }
            #s-43 {
              top: 95px;
              left: 494px;
            }
            #s-44 {
              top: 126px;
              left: 494px;
            }
            #s-45 {
              top: 2px;
              left: 535px;
            }
            #s-46 {
              top: 33px;
              left: 535px;
            }
            #s-47 {
              top: 2px;
              left: 576px;
            }
            #s-48 {
              top: 33px;
              left: 576px;
            }
            #s-49 {
              top: 95px;
              left: 576px;
            }
            #s-50 {
              top: 126px;
              left: 576px;
            }
            #s-51 {
              top: 2px;
              left: 617px;
            }
            #s-52 {
              top: 33px;
              left: 617px;
            }
            #s-53 {
              top: 2px;
              left: 658px;
            }
            #s-54 {
              top: 33px;
              left: 658px;
            }
            #s-55 {
              top: 2px;
              left: 699px;
            }
            #s-56 {
              top: 33px;
              left: 699px;
            }
            #s-57 {
              top: 95px;
              left: 699px;
            }
            #s-58 {
              top: 2px;
              left: 740px;
            }
            #s-59 {
              top: 33px;
              left: 740px;
            }
            #s-60 {
              top: 95px;
              left: 740px;
            }
            #s-61 {
              top: 95px;
              left: 781px;
            }
            #s-62 {
              top: 2px;
              left: 822px;
            }
            #s-63 {
              top: 33px;
              left: 822px;
            }
            #s-64 {
              top: 95px;
              left: 822px;
            }
            #s-65 {
              top: 2px;
              left: 863px;
            }
            #s-66 {
              top: 33px;
              left: 863px;
            }
            #s-67 {
              top: 95px;
              left: 863px;
            }
            #s-68 {
              top: 95px;
              left: 904px;
            }
            #s-69 {
              top: 2px;
              left: 945px;
            }
            #s-70 {
              top: 33px;
              left: 945px;
            }
            #s-71 {
              top: 95px;
              left: 945px;
            }
            #s-72 {
              top: 126px;
              left: 945px;
            }
            #s-69 {
              top: 2px;
              left: 945px;
            }
            #s-70 {
              top: 33px;
              left: 945px;
            }
            #s-71 {
              top: 95px;
              left: 945px;
            }
            #s-72 {
              top: 126px;
              left: 945px;
            }
            #s-73 {
              top: 2px;
              left: 986px;
            }
            #s-74 {
              top: 33px;
              left: 986px;
            }
            #s-75 {
              top: 95px;
              left: 986px;
            }
            #s-76 {
              top: 126px;
              left: 986px;
            }
            #s-77 {
              top: 2px;
              left: 1027px;
            }
            #s-78 {
              top: 33px;
              left: 1027px;
            }
            #s-79 {
              top: 95px;
              left: 1027px;
            }
            #s-80 {
              top: 126px;
              left: 1027px;
            }
            #s-81 {
              top: 2px;
              left: 1068px;
            }
            #s-82 {
              top: 33px;
              left: 1068px;
            }
            #s-83 {
              top: 95px;
              left: 1068px;
            }
            #s-84 {
              top: 126px;
              left: 1068px;
            }
            #s-85 {
              top: 2px;
              left: 1109px;
            }
            #s-86 {
              top: 33px;
              left: 1109px;
            }
            #s-87 {
              top: 95px;
              left: 1109px;
            }
            #s-88 {
              top: 126px;
              left: 1109px;
            }
            #s-89 {
              top: 2px;
              left: 2px;
            }
            #s-90 {
              top: 33px;
              left: 2px;
            }
            #s-91 {
              top: 95px;
              left: 2px;
            }
            #s-92 {
              top: 126px;
              left: 2px;
            }
            #s-93 {
              top: 2px;
              left: 43px;
            }
            #s-94 {
              top: 33px;
              left: 43px;
            }
            #s-95 {
              top: 95px;
              left: 43px;
            }
            #s-96 {
              top: 126px;
              left: 43px;
            }
            #s-97 {
              top: 2px;
              left: 84px;
            }
            #s-98 {
              top: 33px;
              left: 84px;
            }
            #s-99 {
              top: 95px;
              left: 84px;
            }
            #s-100 {
              top: 126px;
              left: 84px;
            }
            #s-101 {
              top: 2px;
              left: 125px;
            }
            #s-102 {
              top: 33px;
              left: 125px;
            }
            #s-103 {
              top: 95px;
              left: 125px;
            }
            #s-104 {
              top: 126px;
              left: 125px;
            }
            #s-105 {
              top: 2px;
              left: 166px;
            }
            #s-106 {
              top: 33px;
              left: 166px;
            }
            #s-107 {
              top: 95px;
              left: 166px;
            }
            #s-108 {
              top: 126px;
              left: 166px;
            }
            #s-109 {
              top: 2px;
              left: 207px;
            }
            #s-110 {
              top: 33px;
              left: 207px;
            }
            #s-111 {
              top: 2px;
              left: 248px;
            }
            #s-112 {
              top: 33px;
              left: 248px;
            }
            #s-113 {
              top: 95px;
              left: 248px;
            }
            #s-114 {
              top: 126px;
              left: 248px;
            }
            #s-115 {
              top: 2px;
              left: 289px;
            }
            #s-116 {
              top: 33px;
              left: 289px;
            }
            #s-117 {
              top: 2px;
              left: 330px;
            }
            #s-118 {
              top: 33px;
              left: 330px;
            }
            #s-119 {
              top: 95px;
              left: 330px;
            }
            #s-120 {
              top: 126px;
              left: 330px;
            }
            #s-121 {
              top: 2px;
              left: 371px;
            }
            #s-122 {
              top: 33px;
              left: 371px;
            }
            #s-123 {
              top: 2px;
              left: 412px;
            }
            #s-124 {
              top: 33px;
              left: 412px;
            }
            #s-125 {
              top: 95px;
              left: 412px;
            }
            #s-126 {
              top: 126px;
              left: 412px;
            }
            #s-127 {
              top: 2px;
              left: 453px;
            }
            #s-128 {
              top: 33px;
              left: 453px;
            }
            #s-129 {
              top: 2px;
              left: 494px;
            }
            #s-130 {
              top: 33px;
              left: 494px;
            }
            #s-131 {
              top: 95px;
              left: 494px;
            }
            #s-132 {
              top: 126px;
              left: 494px;
            }
            #s-133 {
              top: 2px;
              left: 535px;
            }
            #s-134 {
              top: 33px;
              left: 535px;
            }
            #s-135 {
              top: 2px;
              left: 576px;
            }
            #s-136 {
              top: 33px;
              left: 576px;
            }
            #s-137 {
              top: 95px;
              left: 576px;
            }
            #s-138 {
              top: 126px;
              left: 576px;
            }
            #s-139 {
              top: 2px;
              left: 617px;
            }
            #s-140 {
              top: 33px;
              left: 617px;
            }
            #s-141 {
              top: 2px;
              left: 658px;
            }
            #s-142 {
              top: 33px;
              left: 658px;
            }
            #s-143 {
              top: 2px;
              left: 699px;
            }
            #s-144 {
              top: 33px;
              left: 699px;
            }
            #s-145 {
              top: 95px;
              left: 699px;
            }
            #s-146 {
              top: 2px;
              left: 740px;
            }
            #s-147 {
              top: 33px;
              left: 740px;
            }
            #s-148 {
              top: 95px;
              left: 740px;
            }
            #s-149 {
              top: 95px;
              left: 781px;
            }
            #s-150 {
              top: 2px;
              left: 822px;
            }
            #s-151 {
              top: 33px;
              left: 822px;
            }
            #s-152 {
              top: 95px;
              left: 822px;
            }
            #s-153 {
              top: 2px;
              left: 863px;
            }
            #s-154 {
              top: 33px;
              left: 863px;
            }
            #s-155 {
              top: 95px;
              left: 863px;
            }
            #s-156 {
              top: 95px;
              left: 904px;
            }
            #s-157 {
              top: 2px;
              left: 945px;
            }
            #s-158 {
              top: 33px;
              left: 945px;
            }
            #s-159 {
              top: 95px;
              left: 945px;
            }
            #s-160 {
              top: 126px;
              left: 945px;
            }
            #s-161 {
              top: 2px;
              left: 986px;
            }
            #s-162 {
              top: 33px;
              left: 986px;
            }
            #s-163 {
              top: 95px;
              left: 986px;
            }
            #s-164 {
              top: 126px;
              left: 986px;
            }
            #s-165 {
              top: 2px;
              left: 1027px;
            }
            #s-166 {
              top: 33px;
              left: 1027px;
            }
            #s-167 {
              top: 95px;
              left: 1027px;
            }
            #s-168 {
              top: 126px;
              left: 1027px;
            }
            #s-169 {
              top: 2px;
              left: 1068px;
            }
            #s-170 {
              top: 33px;
              left: 1068px;
            }
            #s-171 {
              top: 95px;
              left: 1068px;
            }
            #s-172 {
              top: 126px;
              left: 1068px;
            }
            #s-173 {
              top: 2px;
              left: 1109px;
            }
            #s-174 {
              top: 33px;
              left: 1109px;
            }
            #s-175 {
              top: 95px;
              left: 1109px;
            }
            #s-176 {
              top: 126px;
              left: 1109px;
            }
            #s-177 {
              top: 2px;
              left: 2px;
            }
            #s-178 {
              top: 33px;
              left: 2px;
            }
            #s-179 {
              top: 95px;
              left: 2px;
            }
            #s-180 {
              top: 126px;
              left: 2px;
            }
            #s-181 {
              top: 2px;
              left: 43px;
            }
            #s-182 {
              top: 33px;
              left: 43px;
            }
            #s-183 {
              top: 95px;
              left: 43px;
            }
            #s-184 {
              top: 126px;
              left: 43px;
            }
            #s-185 {
              top: 2px;
              left: 84px;
            }
            #s-186 {
              top: 33px;
              left: 84px;
            }
            #s-187 {
              top: 95px;
              left: 84px;
            }
            #s-188 {
              top: 126px;
              left: 84px;
            }
            #s-189 {
              top: 2px;
              left: 125px;
            }
            #s-190 {
              top: 33px;
              left: 125px;
            }
            #s-191 {
              top: 95px;
              left: 125px;
            }
            #s-192 {
              top: 126px;
              left: 125px;
            }
            #s-193 {
              top: 2px;
              left: 166px;
            }
            #s-194 {
              top: 33px;
              left: 166px;
            }
            #s-195 {
              top: 95px;
              left: 166px;
            }
            #s-196 {
              top: 126px;
              left: 166px;
            }
            #s-197 {
              top: 2px;
              left: 207px;
            }
            #s-198 {
              top: 33px;
              left: 207px;
            }
            #s-199 {
              top: 2px;
              left: 248px;
            }
            #s-200 {
              top: 33px;
              left: 248px;
            }
            #s-201 {
              top: 95px;
              left: 248px;
            }
            #s-202 {
              top: 126px;
              left: 248px;
            }
            #s-203 {
              top: 2px;
              left: 289px;
            }
            #s-204 {
              top: 33px;
              left: 289px;
            }
            #s-205 {
              top: 2px;
              left: 330px;
            }
            #s-206 {
              top: 33px;
              left: 330px;
            }
            #s-207 {
              top: 95px;
              left: 330px;
            }
            #s-208 {
              top: 126px;
              left: 330px;
            }
            #s-209 {
              top: 2px;
              left: 371px;
            }
            #s-210 {
              top: 33px;
              left: 371px;
            }
            #s-211 {
              top: 2px;
              left: 412px;
            }
            #s-212 {
              top: 33px;
              left: 412px;
            }
            #s-213 {
              top: 95px;
              left: 412px;
            }
            #s-214 {
              top: 126px;
              left: 412px;
            }
            #s-215 {
              top: 2px;
              left: 453px;
            }
            #s-216 {
              top: 33px;
              left: 453px;
            }
            #s-217 {
              top: 2px;
              left: 494px;
            }
            #s-218 {
              top: 33px;
              left: 494px;
            }
            #s-219 {
              top: 95px;
              left: 494px;
            }
            #s-220 {
              top: 126px;
              left: 494px;
            }
            #s-221 {
              top: 2px;
              left: 535px;
            }
            #s-222 {
              top: 33px;
              left: 535px;
            }
            #s-223 {
              top: 2px;
              left: 576px;
            }
            #s-224 {
              top: 33px;
              left: 576px;
            }
            #s-225 {
              top: 95px;
              left: 576px;
            }
            #s-226 {
              top: 126px;
              left: 576px;
            }
            #s-227 {
              top: 2px;
              left: 617px;
            }
            #s-228 {
              top: 33px;
              left: 617px;
            }
            #s-229 {
              top: 2px;
              left: 658px;
            }
            #s-230 {
              top: 33px;
              left: 658px;
            }
            #s-231 {
              top: 2px;
              left: 699px;
            }
            #s-232 {
              top: 33px;
              left: 699px;
            }
            #s-233 {
              top: 95px;
              left: 699px;
            }
            #s-234 {
              top: 2px;
              left: 740px;
            }
            #s-235 {
              top: 33px;
              left: 740px;
            }
            #s-236 {
              top: 95px;
              left: 740px;
            }
            #s-237 {
              top: 95px;
              left: 781px;
            }
            #s-238 {
              top: 2px;
              left: 822px;
            }
            #s-239 {
              top: 33px;
              left: 822px;
            }
            #s-240 {
              top: 95px;
              left: 822px;
            }
            #s-241 {
              top: 2px;
              left: 863px;
            }
            #s-242 {
              top: 33px;
              left: 863px;
            }
            #s-243 {
              top: 95px;
              left: 863px;
            }
            #s-244 {
              top: 95px;
              left: 904px;
            }
            #s-245 {
              top: 2px;
              left: 945px;
            }
            #s-246 {
              top: 33px;
              left: 945px;
            }
            #s-247 {
              top: 95px;
              left: 945px;
            }
            #s-248 {
              top: 126px;
              left: 945px;
            }
            #s-249 {
              top: 2px;
              left: 986px;
            }
            #s-250 {
              top: 33px;
              left: 986px;
            }
            #s-251 {
              top: 95px;
              left: 986px;
            }
            #s-252 {
              top: 126px;
              left: 986px;
            }
            #s-253 {
              top: 2px;
              left: 1027px;
            }
            #s-254 {
              top: 33px;
              left: 1027px;
            }
            #s-255 {
              top: 95px;
              left: 1027px;
            }
            #s-256 {
              top: 126px;
              left: 1027px;
            }
            #s-257 {
              top: 2px;
              left: 1068px;
            }
            #s-258 {
              top: 33px;
              left: 1068px;
            }
            #s-259 {
              top: 95px;
              left: 1068px;
            }
            #s-260 {
              top: 126px;
              left: 1068px;
            }
            #s-261 {
              top: 2px;
              left: 1109px;
            }
            #s-262 {
              top: 33px;
              left: 1109px;
            }
            #s-263 {
              top: 95px;
              left: 1109px;
            }
            #s-264 {
              top: 126px;
              left: 1109px;
            }
            #s-265 {
              top: 2px;
              left: 2px;
            }
            #s-266 {
              top: 33px;
              left: 2px;
            }
            #s-267 {
              top: 95px;
              left: 2px;
            }
            #s-268 {
              top: 126px;
              left: 2px;
            }
            #s-269 {
              top: 2px;
              left: 43px;
            }
            #s-270 {
              top: 33px;
              left: 43px;
            }
            #s-271 {
              top: 95px;
              left: 43px;
            }
            #s-272 {
              top: 126px;
              left: 43px;
            }
            #s-273 {
              top: 2px;
              left: 84px;
            }
            #s-274 {
              top: 33px;
              left: 84px;
            }
            #s-275 {
              top: 95px;
              left: 84px;
            }
            #s-276 {
              top: 126px;
              left: 84px;
            }
            #s-277 {
              top: 2px;
              left: 125px;
            }
            #s-278 {
              top: 33px;
              left: 125px;
            }
            #s-279 {
              top: 2px;
              left: 166px;
            }
            #s-280 {
              top: 33px;
              left: 166px;
            }
            #s-281 {
              top: 2px;
              left: 207px;
            }
            #s-282 {
              top: 33px;
              left: 207px;
            }
            #s-283 {
              top: 2px;
              left: 248px;
            }
            #s-284 {
              top: 33px;
              left: 248px;
            }
            #s-285 {
              top: 95px;
              left: 248px;
            }
            #s-286 {
              top: 126px;
              left: 248px;
            }
            #s-287 {
              top: 2px;
              left: 289px;
            }
            #s-288 {
              top: 33px;
              left: 289px;
            }
            #s-289 {
              top: 2px;
              left: 330px;
            }
            #s-290 {
              top: 33px;
              left: 330px;
            }
            #s-291 {
              top: 95px;
              left: 330px;
            }
            #s-292 {
              top: 126px;
              left: 330px;
            }
            #s-293 {
              top: 2px;
              left: 371px;
            }
            #s-294 {
              top: 33px;
              left: 371px;
            }
            #s-295 {
              top: 2px;
              left: 412px;
            }
            #s-296 {
              top: 33px;
              left: 412px;
            }
            #s-297 {
              top: 95px;
              left: 412px;
            }
            #s-298 {
              top: 126px;
              left: 412px;
            }
            #s-299 {
              top: 2px;
              left: 453px;
            }
            #s-300 {
              top: 33px;
              left: 453px;
            }
            #s-301 {
              top: 2px;
              left: 494px;
            }
            #s-302 {
              top: 33px;
              left: 494px;
            }
            #s-303 {
              top: 95px;
              left: 494px;
            }
            #s-304 {
              top: 126px;
              left: 494px;
            }
            #s-305 {
              top: 2px;
              left: 535px;
            }
            #s-306 {
              top: 33px;
              left: 535px;
            }
            #s-307 {
              top: 95px;
              left: 535px;
            }
            #s-308 {
              top: 126px;
              left: 535px;
            }
            #s-309 {
              top: 2px;
              left: 576px;
            }
            #s-310 {
              top: 33px;
              left: 576px;
            }
            #s-311 {
              top: 95px;
              left: 576px;
            }
            #s-312 {
              top: 2px;
              left: 617px;
            }
            #s-313 {
              top: 33px;
              left: 617px;
            }
            #s-314 {
              top: 2px;
              left: 658px;
            }
            #s-315 {
              top: 33px;
              left: 658px;
            }
            #s-316 {
              top: 2px;
              left: 699px;
            }
            #s-317 {
              top: 33px;
              left: 699px;
            }
            #s-318 {
              top: 95px;
              left: 699px;
            }
            #s-319 {
              top: 2px;
              left: 740px;
            }
            #s-320 {
              top: 33px;
              left: 740px;
            }
            #s-321 {
              top: 95px;
              left: 740px;
            }
            #s-322 {
              top: 95px;
              left: 781px;
            }
            #s-323 {
              top: 2px;
              left: 822px;
            }
            #s-324 {
              top: 33px;
              left: 822px;
            }
            #s-325 {
              top: 95px;
              left: 822px;
            }
            #s-326 {
              top: 2px;
              left: 863px;
            }
            #s-327 {
              top: 33px;
              left: 863px;
            }
            #s-328 {
              top: 95px;
              left: 863px;
            }
            #s-329 {
              top: 95px;
              left: 904px;
            }
            #s-330 {
              top: 2px;
              left: 2px;
            }
            #s-331 {
              top: 33px;
              left: 2px;
            }
            #s-332 {
              top: 95px;
              left: 2px;
            }
            #s-333 {
              top: 126px;
              left: 2px;
            }
            #s-334 {
              top: 2px;
              left: 43px;
            }
            #s-335 {
              top: 33px;
              left: 43px;
            }
            #s-336 {
              top: 95px;
              left: 43px;
            }
            #s-337 {
              top: 126px;
              left: 43px;
            }
            #s-338 {
              top: 2px;
              left: 84px;
            }
            #s-339 {
              top: 33px;
              left: 84px;
            }
            #s-340 {
              top: 95px;
              left: 84px;
            }
            #s-341 {
              top: 126px;
              left: 84px;
            }
            #s-342 {
              top: 2px;
              left: 125px;
            }
            #s-343 {
              top: 33px;
              left: 125px;
            }
            #s-344 {
              top: 2px;
              left: 166px;
            }
            #s-345 {
              top: 33px;
              left: 166px;
            }
            #s-346 {
              top: 2px;
              left: 207px;
            }
            #s-347 {
              top: 33px;
              left: 207px;
            }
            #s-348 {
              top: 2px;
              left: 248px;
            }
            #s-349 {
              top: 33px;
              left: 248px;
            }
            #s-350 {
              top: 95px;
              left: 248px;
            }
            #s-351 {
              top: 126px;
              left: 248px;
            }
            #s-352 {
              top: 2px;
              left: 289px;
            }
            #s-353 {
              top: 33px;
              left: 289px;
            }
            #s-354 {
              top: 95px;
              left: 289px;
            }
            #s-355 {
              top: 126px;
              left: 289px;
            }
            #s-356 {
              top: 2px;
              left: 330px;
            }
            #s-357 {
              top: 33px;
              left: 330px;
            }
            #s-358 {
              top: 95px;
              left: 330px;
            }
            #s-359 {
              top: 126px;
              left: 330px;
            }
            #s-360 {
              top: 2px;
              left: 371px;
            }
            #s-361 {
              top: 33px;
              left: 371px;
            }
            #s-362 {
              top: 2px;
              left: 412px;
            }
            #s-363 {
              top: 33px;
              left: 412px;
            }
            #s-364 {
              top: 95px;
              left: 412px;
            }
            #s-365 {
              top: 126px;
              left: 412px;
            }
            #s-366 {
              top: 2px;
              left: 453px;
            }
            #s-367 {
              top: 33px;
              left: 453px;
            }
            #s-368 {
              top: 2px;
              left: 494px;
            }
            #s-369 {
              top: 33px;
              left: 494px;
            }
            #s-370 {
              top: 95px;
              left: 494px;
            }
            #s-371 {
              top: 126px;
              left: 494px;
            }
            #s-372 {
              top: 2px;
              left: 535px;
            }
            #s-373 {
              top: 33px;
              left: 535px;
            }
            #s-374 {
              top: 95px;
              left: 535px;
            }
            #s-375 {
              top: 2px;
              left: 576px;
            }
            #s-376 {
              top: 33px;
              left: 576px;
            }
            #s-377 {
              top: 95px;
              left: 576px;
            }
            #s-378 {
              top: 2px;
              left: 617px;
            }
            #s-379 {
              top: 33px;
              left: 617px;
            }
            #s-380 {
              top: 2px;
              left: 658px;
            }
            #s-381 {
              top: 33px;
              left: 658px;
            }
            #s-382 {
              top: 2px;
              left: 699px;
            }
            #s-383 {
              top: 33px;
              left: 699px;
            }
            #s-384 {
              top: 95px;
              left: 699px;
            }
            #s-385 {
              top: 2px;
              left: 740px;
            }
            #s-386 {
              top: 33px;
              left: 740px;
            }
            #s-387 {
              top: 95px;
              left: 740px;
            }
            #s-388 {
              top: 95px;
              left: 781px;
            }
            #s-389 {
              top: 2px;
              left: 822px;
            }
            #s-390 {
              top: 33px;
              left: 822px;
            }
            #s-391 {
              top: 95px;
              left: 822px;
            }
            #s-392 {
              top: 2px;
              left: 863px;
            }
            #s-393 {
              top: 33px;
              left: 863px;
            }
            #s-394 {
              top: 95px;
              left: 863px;
            }
            #s-395 {
              top: 95px;
              left: 904px;
            }
            #s-396 {
              top: 2px;
              left: 2px;
            }
            #s-397 {
              top: 33px;
              left: 2px;
            }
            #s-398 {
              top: 95px;
              left: 2px;
            }
            #s-399 {
              top: 126px;
              left: 2px;
            }
            #s-400 {
              top: 2px;
              left: 43px;
            }
            #s-401 {
              top: 33px;
              left: 43px;
            }
            #s-402 {
              top: 95px;
              left: 43px;
            }
            #s-403 {
              top: 126px;
              left: 43px;
            }
            #s-404 {
              top: 2px;
              left: 84px;
            }
            #s-405 {
              top: 33px;
              left: 84px;
            }
            #s-406 {
              top: 95px;
              left: 84px;
            }
            #s-407 {
              top: 126px;
              left: 84px;
            }
            #s-408 {
              top: 2px;
              left: 125px;
            }
            #s-409 {
              top: 33px;
              left: 125px;
            }
            #s-410 {
              top: 2px;
              left: 166px;
            }
            #s-411 {
              top: 33px;
              left: 166px;
            }
            #s-412 {
              top: 2px;
              left: 207px;
            }
            #s-413 {
              top: 33px;
              left: 207px;
            }
            #s-414 {
              top: 2px;
              left: 248px;
            }
            #s-415 {
              top: 33px;
              left: 248px;
            }
            #s-416 {
              top: 95px;
              left: 248px;
            }
            #s-417 {
              top: 126px;
              left: 248px;
            }
            #s-418 {
              top: 2px;
              left: 289px;
            }
            #s-419 {
              top: 33px;
              left: 289px;
            }
            #s-420 {
              top: 95px;
              left: 289px;
            }
            #s-421 {
              top: 126px;
              left: 289px;
            }
            #s-422 {
              top: 2px;
              left: 330px;
            }
            #s-423 {
              top: 33px;
              left: 330px;
            }
            #s-424 {
              top: 95px;
              left: 330px;
            }
            #s-425 {
              top: 126px;
              left: 330px;
            }
            #s-426 {
              top: 2px;
              left: 371px;
            }
            #s-427 {
              top: 33px;
              left: 371px;
            }
            #s-428 {
              top: 2px;
              left: 412px;
            }
            #s-429 {
              top: 33px;
              left: 412px;
            }
            #s-430 {
              top: 95px;
              left: 412px;
            }
            #s-431 {
              top: 126px;
              left: 412px;
            }
            #s-432 {
              top: 2px;
              left: 453px;
            }
            #s-433 {
              top: 33px;
              left: 453px;
            }
            #s-434 {
              top: 2px;
              left: 494px;
            }
            #s-435 {
              top: 33px;
              left: 494px;
            }
            #s-436 {
              top: 95px;
              left: 494px;
            }
            #s-437 {
              top: 126px;
              left: 494px;
            }
            #s-438 {
              top: 2px;
              left: 535px;
            }
            #s-439 {
              top: 33px;
              left: 535px;
            }
            #s-440 {
              top: 95px;
              left: 535px;
            }
            #s-441 {
              top: 2px;
              left: 576px;
            }
            #s-442 {
              top: 33px;
              left: 576px;
            }
            #s-443 {
              top: 95px;
              left: 576px;
            }
            #s-444 {
              top: 2px;
              left: 617px;
            }
            #s-445 {
              top: 33px;
              left: 617px;
            }
            #s-446 {
              top: 95px;
              left: 617px;
            }
            #s-447 {
              top: 2px;
              left: 658px;
            }
            #s-448 {
              top: 33px;
              left: 658px;
            }
            #s-449 {
              top: 95px;
              left: 658px;
            }
            #s-450 {
              top: 2px;
              left: 699px;
            }
            #s-451 {
              top: 33px;
              left: 699px;
            }
            #s-452 {
              top: 95px;
              left: 699px;
            }
            #s-453 {
              top: 2px;
              left: 740px;
            }
            #s-454 {
              top: 33px;
              left: 740px;
            }
            #s-455 {
              top: 95px;
              left: 740px;
            }
            #s-456 {
              top: 95px;
              left: 781px;
            }
            #s-457 {
              top: 2px;
              left: 822px;
            }
            #s-458 {
              top: 33px;
              left: 822px;
            }
            #s-459 {
              top: 95px;
              left: 822px;
            }
            #s-460 {
              top: 2px;
              left: 863px;
            }
            #s-461 {
              top: 33px;
              left: 863px;
            }
            #s-462 {
              top: 95px;
              left: 863px;
            }
            #s-463 {
              top: 95px;
              left: 904px;
            }
            #s-464 {
              top: 33px;
              left: 945px;
            }
            #s-465 {
              top: 95px;
              left: 945px;
            }
            #s-466 {
              top: 33px;
              left: 986px;
            }
            #s-467 {
              top: 95px;
              left: 986px;
            }
            #s-468 {
              top: 33px;
              left: 1027px;
            }
            #s-469 {
              top: 95px;
              left: 1027px;
            }
            #s-470 {
              top: 33px;
              left: 1068px;
            }
            #s-471 {
              top: 95px;
              left: 1068px;
            }
            #s-472 {
              top: 33px;
              left: 1109px;
            }
            #s-473 {
              top: 95px;
              left: 1109px;
            }
            #s-474 {
              top: 2px;
              left: 2px;
            }
            #s-475 {
              top: 33px;
              left: 2px;
            }
            #s-476 {
              top: 95px;
              left: 2px;
            }
            #s-477 {
              top: 126px;
              left: 2px;
            }
            #s-478 {
              top: 2px;
              left: 43px;
            }
            #s-479 {
              top: 33px;
              left: 43px;
            }
            #s-480 {
              top: 95px;
              left: 43px;
            }
            #s-481 {
              top: 126px;
              left: 43px;
            }
            #s-482 {
              top: 2px;
              left: 84px;
            }
            #s-483 {
              top: 33px;
              left: 84px;
            }
            #s-484 {
              top: 95px;
              left: 84px;
            }
            #s-485 {
              top: 126px;
              left: 84px;
            }
            #s-486 {
              top: 2px;
              left: 125px;
            }
            #s-487 {
              top: 33px;
              left: 125px;
            }
            #s-488 {
              top: 2px;
              left: 166px;
            }
            #s-489 {
              top: 33px;
              left: 166px;
            }
            #s-490 {
              top: 95px;
              left: 166px;
            }
            #s-491 {
              top: 126px;
              left: 166px;
            }
            #s-492 {
              top: 2px;
              left: 207px;
            }
            #s-493 {
              top: 33px;
              left: 207px;
            }
            #s-494 {
              top: 2px;
              left: 248px;
            }
            #s-495 {
              top: 33px;
              left: 248px;
            }
            #s-496 {
              top: 95px;
              left: 248px;
            }
            #s-497 {
              top: 126px;
              left: 248px;
            }
            #s-498 {
              top: 2px;
              left: 289px;
            }
            #s-499 {
              top: 33px;
              left: 289px;
            }
            #s-500 {
              top: 95px;
              left: 289px;
            }
            #s-501 {
              top: 126px;
              left: 289px;
            }
            #s-502 {
              top: 2px;
              left: 330px;
            }
            #s-503 {
              top: 33px;
              left: 330px;
            }
            #s-504 {
              top: 95px;
              left: 330px;
            }
            #s-505 {
              top: 126px;
              left: 330px;
            }
            #s-506 {
              top: 2px;
              left: 371px;
            }
            #s-507 {
              top: 33px;
              left: 371px;
            }
            #s-508 {
              top: 2px;
              left: 412px;
            }
            #s-509 {
              top: 33px;
              left: 412px;
            }
            #s-510 {
              top: 95px;
              left: 412px;
            }
            #s-511 {
              top: 126px;
              left: 412px;
            }
            #s-512 {
              top: 2px;
              left: 453px;
            }
            #s-513 {
              top: 33px;
              left: 453px;
            }
            #s-514 {
              top: 2px;
              left: 494px;
            }
            #s-515 {
              top: 33px;
              left: 494px;
            }
            #s-516 {
              top: 95px;
              left: 494px;
            }
            #s-517 {
              top: 126px;
              left: 494px;
            }
            #s-518 {
              top: 2px;
              left: 535px;
            }
            #s-519 {
              top: 33px;
              left: 535px;
            }
            #s-520 {
              top: 95px;
              left: 535px;
            }
            #s-521 {
              top: 2px;
              left: 576px;
            }
            #s-522 {
              top: 33px;
              left: 576px;
            }
            #s-523 {
              top: 95px;
              left: 576px;
            }
            #s-524 {
              top: 2px;
              left: 617px;
            }
            #s-525 {
              top: 33px;
              left: 617px;
            }
            #s-526 {
              top: 95px;
              left: 617px;
            }
            #s-527 {
              top: 2px;
              left: 658px;
            }
            #s-528 {
              top: 33px;
              left: 658px;
            }
            #s-529 {
              top: 95px;
              left: 658px;
            }
            #s-530 {
              top: 2px;
              left: 699px;
            }
            #s-531 {
              top: 33px;
              left: 699px;
            }
            #s-532 {
              top: 95px;
              left: 699px;
            }
            #s-533 {
              top: 2px;
              left: 740px;
            }
            #s-534 {
              top: 33px;
              left: 740px;
            }
            #s-535 {
              top: 95px;
              left: 740px;
            }
            #s-536 {
              top: 95px;
              left: 781px;
            }
            #s-537 {
              top: 2px;
              left: 822px;
            }
            #s-538 {
              top: 33px;
              left: 822px;
            }
            #s-539 {
              top: 95px;
              left: 822px;
            }
            #s-540 {
              top: 2px;
              left: 863px;
            }
            #s-541 {
              top: 33px;
              left: 863px;
            }
            #s-542 {
              top: 95px;
              left: 863px;
            }
            #s-543 {
              top: 95px;
              left: 904px;
            }
            #s-544 {
              top: 2px;
              left: 945px;
            }
            #s-545 {
              top: 33px;
              left: 945px;
            }
            #s-546 {
              top: 95px;
              left: 945px;
            }
            #s-547 {
              top: 2px;
              left: 986px;
            }
            #s-548 {
              top: 33px;
              left: 986px;
            }
            #s-549 {
              top: 95px;
              left: 986px;
            }
            #s-550 {
              top: 2px;
              left: 1027px;
            }
            #s-551 {
              top: 33px;
              left: 1027px;
            }
            #s-552 {
              top: 95px;
              left: 1027px;
            }
            #s-553 {
              top: 2px;
              left: 1068px;
            }
            #s-554 {
              top: 33px;
              left: 1068px;
            }
            #s-555 {
              top: 95px;
              left: 1068px;
            }
            #s-556 {
              top: 2px;
              left: 1109px;
            }
            #s-557 {
              top: 33px;
              left: 1109px;
            }
            #s-558 {
              top: 95px;
              left: 1109px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
