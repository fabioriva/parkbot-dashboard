"use client";

import { useTranslations } from "next-intl";
import {
  Grid,
  Col,
  Flex,
  Card,
  Title,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@tremor/react";
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
          <TabGroup>
            <TabList className="mt-3" variant="solid">
              {Levels.map((level, index) => (
                <Tab key={index}>Basement {index + 1}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {Levels.map((level, index) => (
                <TabPanel key={index}>
                  <div className="overflow-auto mt-6">{level}</div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
          <style jsx global>{`
            .l {
              height: 580px;
              width: 776px;
            }
            .el {
              background-color: #c0c0c0;
              font-size: 12px;
              font-weight: bold;
              height: 50px;
              width: 35px;
              text-align: center;
              vertical-align: middle;
              line-height: 50px;
            }
            .s {
              font-size: 11px;
              height: 50px !important;
              width: 35px !important;
              text-align: center;
              vertical-align: middle;
              line-height: 50px !important;
            }
            #sh-1L {
              top: 367px;
              left: 90px;
            }
            #sh-2L {
              top: 163px;
              left: 270px;
            }
            #sh-1R {
              top: 367px;
              left: 600px;
            }
            #sh-2R {
              top: 163px;
              left: 480px;
            }

            /*	Basement B2 */

            /* 03 */
            #s-1 {
              top: 112px;
              left: 10px;
            }
            /* 05 */
            #s-2 {
              top: 214px;
              left: 10px;
            }
            /* 06 */
            #s-3 {
              top: 265px;
              left: 10px;
            }
            /* 07 */
            #s-4 {
              top: 316px;
              left: 10px;
            }
            /* 09 */
            #s-5 {
              top: 418px;
              left: 10px;
            }

            /* 03 */
            #s-6 {
              top: 112px;
              left: 46px;
            }
            /* 05 */
            #s-7 {
              top: 214px;
              left: 46px;
            }
            /* 06 */
            #s-8 {
              top: 265px;
              left: 46px;
            }
            /* 07 */
            #s-9 {
              top: 316px;
              left: 46px;
            }
            /* 09 */
            #s-10 {
              top: 418px;
              left: 46px;
            }

            /* 03 */
            #s-11 {
              top: 112px;
              left: 82px;
            }
            /* 05 */
            #s-12 {
              top: 214px;
              left: 82px;
            }
            /* 06 */
            #s-13 {
              top: 265px;
              left: 82px;
            }
            /* 07 */
            #s-14 {
              top: 316px;
              left: 82px;
            }
            /* 09 */
            #s-15 {
              top: 418px;
              left: 82px;
            }

            /* 02 */
            #s-16 {
              top: 61px;
              left: 118px;
            }
            /* 03 */
            #s-17 {
              top: 112px;
              left: 118px;
            }
            /* 05 */
            #s-18 {
              top: 214px;
              left: 118px;
            }
            /* 06 */
            #s-19 {
              top: 265px;
              left: 118px;
            }
            /* 07 */
            #s-20 {
              top: 316px;
              left: 118px;
            }
            /* 09 */
            #s-21 {
              top: 418px;
              left: 118px;
            }
            /* 10 */
            #s-22 {
              top: 469px;
              left: 118px;
            }

            /* 01 */
            #s-23 {
              top: 10px;
              left: 154px;
            }
            /* 02 */
            #s-24 {
              top: 61px;
              left: 154px;
            }
            /* 03 */
            #s-25 {
              top: 112px;
              left: 154px;
            }
            /* 05 */
            #s-26 {
              top: 214px;
              left: 154px;
            }
            /* 06 */
            #s-27 {
              top: 265px;
              left: 154px;
            }
            /* 07 */
            #s-28 {
              top: 316px;
              left: 154px;
            }
            /* 09 */
            #s-29 {
              top: 418px;
              left: 154px;
            }
            /* 10 */
            #s-30 {
              top: 469px;
              left: 154px;
            }
            /* 11 */
            #s-31 {
              top: 520px;
              left: 154px;
            }

            /* 01 */
            #s-32 {
              top: 10px;
              left: 190px;
            }
            /* 02 */
            #s-33 {
              top: 61px;
              left: 190px;
            }
            /* 03 */
            #s-34 {
              top: 112px;
              left: 190px;
            }
            /* 05 */
            #s-35 {
              top: 214px;
              left: 190px;
            }
            /* 06 */
            #s-36 {
              top: 265px;
              left: 190px;
            }
            /* 07 */
            #s-37 {
              top: 316px;
              left: 190px;
            }
            /* 09 */
            #s-38 {
              top: 418px;
              left: 190px;
            }
            /* 10 */
            #s-39 {
              top: 469px;
              left: 190px;
            }
            /* 11 */
            #s-40 {
              top: 520px;
              left: 190px;
            }

            /* 01 */
            #s-41 {
              top: 10px;
              left: 226px;
            }
            /* 02 */
            #s-42 {
              top: 61px;
              left: 226px;
            }
            /* 03 */
            #s-43 {
              top: 112px;
              left: 226px;
            }
            /* 05 */
            #s-44 {
              top: 214px;
              left: 226px;
            }
            /* E1 */
            #el-1 {
              top: 265px;
              left: 226px;
            }
            /* 07 */
            #s-45 {
              top: 316px;
              left: 226px;
            }
            /* 09 */
            #s-46 {
              top: 418px;
              left: 226px;
            }
            /* 10 */
            #s-47 {
              top: 469px;
              left: 226px;
            }
            /* 11 */
            #s-48 {
              top: 520px;
              left: 226px;
            }

            /* 01 */
            #s-49 {
              top: 10px;
              left: 262px;
            }
            /* 02 */
            #s-50 {
              top: 61px;
              left: 262px;
            }
            /* 03 */
            #s-51 {
              top: 112px;
              left: 262px;
            }
            /* 05 */
            #s-52 {
              top: 214px;
              left: 262px;
            }
            /* 07 */
            #s-53 {
              top: 316px;
              left: 262px;
            }
            /* 09 */
            #s-54 {
              top: 418px;
              left: 262px;
            }
            /* 10 */
            #s-55 {
              top: 469px;
              left: 262px;
            }
            /* 11 */
            #s-56 {
              top: 520px;
              left: 262px;
            }

            /* 01 */
            #s-57 {
              top: 10px;
              left: 298px;
            }
            /* 02 */
            #s-58 {
              top: 61px;
              left: 298px;
            }
            /* 03 */
            #s-59 {
              top: 112px;
              left: 298px;
            }
            /* 05 */
            #s-60 {
              top: 214px;
              left: 298px;
            }
            /* E2 */
            #el-2 {
              top: 265px;
              left: 298px;
            }
            /* 07 */
            #s-61 {
              top: 316px;
              left: 298px;
            }
            /* 09 */
            #s-62 {
              top: 418px;
              left: 298px;
            }
            /* 10 */
            #s-63 {
              top: 469px;
              left: 298px;
            }
            /* 11 */
            #s-64 {
              top: 520px;
              left: 298px;
            }

            /* 01 */
            #s-65 {
              top: 10px;
              left: 334px;
            }
            /* 02 */
            #s-66 {
              top: 61px;
              left: 334px;
            }
            /* 03 */
            #s-67 {
              top: 112px;
              left: 334px;
            }
            /* 05 */
            #s-68 {
              top: 214px;
              left: 334px;
            }
            /* E3 */
            #el-3 {
              top: 265px;
              left: 334px;
            }
            /* 07 */
            #s-69 {
              top: 316px;
              left: 334px;
            }
            /* 09 */
            #s-70 {
              top: 418px;
              left: 334px;
            }
            /* 10 */
            #s-71 {
              top: 469px;
              left: 334px;
            }
            /* 11 */
            #s-72 {
              top: 520px;
              left: 334px;
            }

            /* 01 */
            #s-73 {
              top: 10px;
              left: 370px;
            }
            /* 02 */
            #s-74 {
              top: 61px;
              left: 370px;
            }
            /* 03 */
            #s-75 {
              top: 112px;
              left: 370px;
            }
            /* 05 */
            #s-76 {
              top: 214px;
              left: 370px;
            }
            /* 07 */
            #s-77 {
              top: 316px;
              left: 370px;
            }
            /* 09 */
            #s-78 {
              top: 418px;
              left: 370px;
            }
            /* 10 */
            #s-79 {
              top: 469px;
              left: 370px;
            }
            /* 11 */
            #s-80 {
              top: 520px;
              left: 370px;
            }

            /* 01 */
            #s-81 {
              top: 10px;
              left: 406px;
            }
            /* 02 */
            #s-82 {
              top: 61px;
              left: 406px;
            }
            /* 03 */
            #s-83 {
              top: 112px;
              left: 406px;
            }
            /* 05 */
            #s-84 {
              top: 214px;
              left: 406px;
            }
            /* E4 */
            #el-4 {
              top: 265px;
              left: 406px;
            }
            /* 07 */
            #s-85 {
              top: 316px;
              left: 406px;
            }
            /* 09 */
            #s-86 {
              top: 418px;
              left: 406px;
            }
            /* 10 */
            #s-87 {
              top: 469px;
              left: 406px;
            }
            /* 11 */
            #s-88 {
              top: 520px;
              left: 406px;
            }

            /* 01 */
            #s-89 {
              top: 10px;
              left: 442px;
            }
            /* 02 */
            #s-90 {
              top: 61px;
              left: 442px;
            }
            /* 03 */
            #s-91 {
              top: 112px;
              left: 442px;
            }
            /* 05 */
            #s-92 {
              top: 214px;
              left: 442px;
            }
            /* E5 */
            #el-5 {
              top: 265px;
              left: 442px;
            }
            /* 07 */
            #s-93 {
              top: 316px;
              left: 442px;
            }
            /* 09 */
            #s-94 {
              top: 418px;
              left: 442px;
            }
            /* 10 */
            #s-95 {
              top: 469px;
              left: 442px;
            }
            /* 11 */
            #s-96 {
              top: 520px;
              left: 442px;
            }

            /* 01 */
            #s-97 {
              top: 10px;
              left: 478px;
            }
            /* 02 */
            #s-98 {
              top: 61px;
              left: 478px;
            }
            /* 03 */
            #s-99 {
              top: 112px;
              left: 478px;
            }
            /* 05 */
            #s-100 {
              top: 214px;
              left: 478px;
            }
            /* 07 */
            #s-101 {
              top: 316px;
              left: 478px;
            }
            /* 09 */
            #s-102 {
              top: 418px;
              left: 478px;
            }
            /* 10 */
            #s-103 {
              top: 469px;
              left: 478px;
            }
            /* 11 */
            #s-104 {
              top: 520px;
              left: 478px;
            }

            /* 01 */
            #s-105 {
              top: 10px;
              left: 514px;
            }
            /* 02 */
            #s-106 {
              top: 61px;
              left: 514px;
            }
            /* 03 */
            #s-107 {
              top: 112px;
              left: 514px;
            }
            /* 05 */
            #s-108 {
              top: 214px;
              left: 514px;
            }
            /* E6 */
            #el-6 {
              top: 265px;
              left: 514px;
            }
            /* 07 */
            #s-109 {
              top: 316px;
              left: 514px;
            }
            /* 09 */
            #s-110 {
              top: 418px;
              left: 514px;
            }
            /* 10 */
            #s-111 {
              top: 469px;
              left: 514px;
            }
            /* 11 */
            #s-112 {
              top: 520px;
              left: 514px;
            }

            /* 01 */
            #s-113 {
              top: 10px;
              left: 550px;
            }
            /* 02 */
            #s-114 {
              top: 61px;
              left: 550px;
            }
            /* 03 */
            #s-115 {
              top: 112px;
              left: 550px;
            }
            /* 05 */
            #s-116 {
              top: 214px;
              left: 550px;
            }
            /* 06 */
            #s-117 {
              top: 265px;
              left: 550px;
            }
            /* 07 */
            #s-118 {
              top: 316px;
              left: 550px;
            }
            /* 09 */
            #s-119 {
              top: 418px;
              left: 550px;
            }
            /* 10 */
            #s-120 {
              top: 469px;
              left: 550px;
            }
            /* 11 */
            #s-121 {
              top: 520px;
              left: 550px;
            }

            /* 01 */
            #s-122 {
              top: 10px;
              left: 586px;
            }
            /* 02 */
            #s-123 {
              top: 61px;
              left: 586px;
            }
            /* 03 */
            #s-124 {
              top: 112px;
              left: 586px;
            }
            /* 05 */
            #s-125 {
              top: 214px;
              left: 586px;
            }
            /* 06 */
            #s-126 {
              top: 265px;
              left: 586px;
            }
            /* 07 */
            #s-127 {
              top: 316px;
              left: 586px;
            }
            /* 09 */
            #s-128 {
              top: 418px;
              left: 586px;
            }
            /* 10 */
            #s-129 {
              top: 469px;
              left: 586px;
            }
            /* 11 */
            #s-130 {
              top: 520px;
              left: 586px;
            }

            /* 02 */
            #s-131 {
              top: 61px;
              left: 622px;
            }
            /* 03 */
            #s-132 {
              top: 112px;
              left: 622px;
            }
            /* 05 */
            #s-133 {
              top: 214px;
              left: 622px;
            }
            /* 06 */
            #s-134 {
              top: 265px;
              left: 622px;
            }
            /* 07 */
            #s-135 {
              top: 316px;
              left: 622px;
            }
            /* 09 */
            #s-136 {
              top: 418px;
              left: 622px;
            }
            /* 10 */
            #s-137 {
              top: 469px;
              left: 622px;
            }

            /* 03 */
            #s-138 {
              top: 112px;
              left: 658px;
            }
            /* 05 */
            #s-139 {
              top: 214px;
              left: 658px;
            }
            /* 06 */
            #s-140 {
              top: 265px;
              left: 658px;
            }
            /* 07 */
            #s-141 {
              top: 316px;
              left: 658px;
            }
            /* 09 */
            #s-142 {
              top: 418px;
              left: 658px;
            }

            /* 03 */
            #s-143 {
              top: 112px;
              left: 694px;
            }
            /* 05 */
            #s-144 {
              top: 214px;
              left: 694px;
            }
            /* 06 */
            #s-145 {
              top: 265px;
              left: 694px;
            }
            /* 07 */
            #s-146 {
              top: 316px;
              left: 694px;
            }
            /* 09 */
            #s-147 {
              top: 418px;
              left: 694px;
            }

            /* 03 */
            #s-148 {
              top: 112px;
              left: 730px;
            }
            /* 05 */
            #s-149 {
              top: 214px;
              left: 730px;
            }
            /* 06 */
            #s-150 {
              top: 265px;
              left: 730px;
            }
            /* 07 */
            #s-151 {
              top: 316px;
              left: 730px;
            }
            /* 09 */
            #s-152 {
              top: 418px;
              left: 730px;
            }

            /* SH1 */
            #sh-1 {
              top: 367px;
              left: 214px;
            }
            /* SH2 */
            #sh-2 {
              top: 163px;
              left: 199px;
            }
            /* SH3 */
            #sh-3 {
              top: 367px;
              left: 404px;
            }
            /* SH4 */
            #sh-4 {
              top: 163px;
              left: 618px;
            }

            /*
          /*	Basement B3 */

            /* 03 */
            #s-153 {
              top: 112px;
              left: 10px;
            }
            /* 05 */
            #s-154 {
              top: 214px;
              left: 10px;
            }
            /* 06 */
            #s-155 {
              top: 265px;
              left: 10px;
            }
            /* 07 */
            #s-156 {
              top: 316px;
              left: 10px;
            }
            /* 09 */
            #s-157 {
              top: 418px;
              left: 10px;
            }

            /* 03 */
            #s-158 {
              top: 112px;
              left: 46px;
            }
            /* 05 */
            #s-159 {
              top: 214px;
              left: 46px;
            }
            /* 06 */
            #s-160 {
              top: 265px;
              left: 46px;
            }
            /* 07 */
            #s-161 {
              top: 316px;
              left: 46px;
            }
            /* 09 */
            #s-162 {
              top: 418px;
              left: 46px;
            }

            /* 03 */
            #s-163 {
              top: 112px;
              left: 82px;
            }
            /* 05 */
            #s-164 {
              top: 214px;
              left: 82px;
            }
            /* 06 */
            #s-165 {
              top: 265px;
              left: 82px;
            }
            /* 07 */
            #s-166 {
              top: 316px;
              left: 82px;
            }
            /* 09 */
            #s-167 {
              top: 418px;
              left: 82px;
            }

            /* 02 */
            #s-168 {
              top: 61px;
              left: 118px;
            }
            /* 03 */
            #s-169 {
              top: 112px;
              left: 118px;
            }
            /* 05 */
            #s-170 {
              top: 214px;
              left: 118px;
            }
            /* 06 */
            #s-171 {
              top: 265px;
              left: 118px;
            }
            /* 07 */
            #s-172 {
              top: 316px;
              left: 118px;
            }
            /* 09 */
            #s-173 {
              top: 418px;
              left: 118px;
            }
            /* 10 */
            #s-174 {
              top: 469px;
              left: 118px;
            }

            /* 01 */
            #s-175 {
              top: 10px;
              left: 154px;
            }
            /* 02 */
            #s-176 {
              top: 61px;
              left: 154px;
            }
            /* 03 */
            #s-177 {
              top: 112px;
              left: 154px;
            }
            /* 05 */
            #s-178 {
              top: 214px;
              left: 154px;
            }
            /* 06 */
            #s-179 {
              top: 265px;
              left: 154px;
            }
            /* 07 */
            #s-180 {
              top: 316px;
              left: 154px;
            }
            /* 09 */
            #s-181 {
              top: 418px;
              left: 154px;
            }
            /* 10 */
            #s-182 {
              top: 469px;
              left: 154px;
            }
            /* 11 */
            #s-183 {
              top: 520px;
              left: 154px;
            }

            /* 01 */
            #s-184 {
              top: 10px;
              left: 190px;
            }
            /* 02 */
            #s-185 {
              top: 61px;
              left: 190px;
            }
            /* 03 */
            #s-186 {
              top: 112px;
              left: 190px;
            }
            /* 05 */
            #s-187 {
              top: 214px;
              left: 190px;
            }
            /* 06 */
            #s-188 {
              top: 265px;
              left: 190px;
            }
            /* 07 */
            #s-189 {
              top: 316px;
              left: 190px;
            }
            /* 09 */
            #s-190 {
              top: 418px;
              left: 190px;
            }
            /* 10 */
            #s-191 {
              top: 469px;
              left: 190px;
            }
            /* 11 */
            #s-192 {
              top: 520px;
              left: 190px;
            }

            /* 01 */
            #s-193 {
              top: 10px;
              left: 226px;
            }
            /* 02 */
            #s-194 {
              top: 61px;
              left: 226px;
            }
            /* 03 */
            #s-195 {
              top: 112px;
              left: 226px;
            }
            /* 05 */
            #s-196 {
              top: 214px;
              left: 226px;
            }
            /* E1 */
            #el-1 {
              top: 265px;
              left: 226px;
            }
            /* 07 */
            #s-197 {
              top: 316px;
              left: 226px;
            }
            /* 09 */
            #s-198 {
              top: 418px;
              left: 226px;
            }
            /* 10 */
            #s-199 {
              top: 469px;
              left: 226px;
            }
            /* 11 */
            #s-200 {
              top: 520px;
              left: 226px;
            }

            /* 01 */
            #s-201 {
              top: 10px;
              left: 262px;
            }
            /* 02 */
            #s-202 {
              top: 61px;
              left: 262px;
            }
            /* 03 */
            #s-203 {
              top: 112px;
              left: 262px;
            }
            /* 05 */
            #s-204 {
              top: 214px;
              left: 262px;
            }
            /* 07 */
            #s-205 {
              top: 316px;
              left: 262px;
            }
            /* 09 */
            #s-206 {
              top: 418px;
              left: 262px;
            }
            /* 10 */
            #s-207 {
              top: 469px;
              left: 262px;
            }
            /* 11 */
            #s-208 {
              top: 520px;
              left: 262px;
            }

            /* 01 */
            #s-209 {
              top: 10px;
              left: 298px;
            }
            /* 02 */
            #s-210 {
              top: 61px;
              left: 298px;
            }
            /* 03 */
            #s-211 {
              top: 112px;
              left: 298px;
            }
            /* 05 */
            #s-212 {
              top: 214px;
              left: 298px;
            }
            /* E2 */
            #el-2 {
              top: 265px;
              left: 298px;
            }
            /* 07 */
            #s-213 {
              top: 316px;
              left: 298px;
            }
            /* 09 */
            #s-214 {
              top: 418px;
              left: 298px;
            }
            /* 10 */
            #s-215 {
              top: 469px;
              left: 298px;
            }
            /* 11 */
            #s-216 {
              top: 520px;
              left: 298px;
            }

            /* 01 */
            #s-217 {
              top: 10px;
              left: 334px;
            }
            /* 02 */
            #s-218 {
              top: 61px;
              left: 334px;
            }
            /* 03 */
            #s-219 {
              top: 112px;
              left: 334px;
            }
            /* 05 */
            #s-220 {
              top: 214px;
              left: 334px;
            }
            /* E3 */
            #el-3 {
              top: 265px;
              left: 334px;
            }
            /* 07 */
            #s-221 {
              top: 316px;
              left: 334px;
            }
            /* 09 */
            #s-222 {
              top: 418px;
              left: 334px;
            }
            /* 10 */
            #s-223 {
              top: 469px;
              left: 334px;
            }
            /* 11 */
            #s-224 {
              top: 520px;
              left: 334px;
            }

            /* 01 */
            #s-225 {
              top: 10px;
              left: 370px;
            }
            /* 02 */
            #s-226 {
              top: 61px;
              left: 370px;
            }
            /* 03 */
            #s-227 {
              top: 112px;
              left: 370px;
            }
            /* 05 */
            #s-228 {
              top: 214px;
              left: 370px;
            }
            /* 07 */
            #s-229 {
              top: 316px;
              left: 370px;
            }
            /* 09 */
            #s-230 {
              top: 418px;
              left: 370px;
            }
            /* 10 */
            #s-231 {
              top: 469px;
              left: 370px;
            }
            /* 11 */
            #s-232 {
              top: 520px;
              left: 370px;
            }

            /* 01 */
            #s-233 {
              top: 10px;
              left: 406px;
            }
            /* 02 */
            #s-234 {
              top: 61px;
              left: 406px;
            }
            /* 03 */
            #s-235 {
              top: 112px;
              left: 406px;
            }
            /* 05 */
            #s-236 {
              top: 214px;
              left: 406px;
            }
            /* E4 */
            #el-4 {
              top: 265px;
              left: 406px;
            }
            /* 07 */
            #s-237 {
              top: 316px;
              left: 406px;
            }
            /* 09 */
            #s-238 {
              top: 418px;
              left: 406px;
            }
            /* 10 */
            #s-239 {
              top: 469px;
              left: 406px;
            }
            /* 11 */
            #s-240 {
              top: 520px;
              left: 406px;
            }

            /* 01 */
            #s-241 {
              top: 10px;
              left: 442px;
            }
            /* 02 */
            #s-242 {
              top: 61px;
              left: 442px;
            }
            /* 03 */
            #s-243 {
              top: 112px;
              left: 442px;
            }
            /* 05 */
            #s-244 {
              top: 214px;
              left: 442px;
            }
            /* E5 */
            #el-5 {
              top: 265px;
              left: 442px;
            }
            /* 07 */
            #s-245 {
              top: 316px;
              left: 442px;
            }
            /* 09 */
            #s-246 {
              top: 418px;
              left: 442px;
            }
            /* 10 */
            #s-247 {
              top: 469px;
              left: 442px;
            }
            /* 11 */
            #s-248 {
              top: 520px;
              left: 442px;
            }

            /* 01 */
            #s-249 {
              top: 10px;
              left: 478px;
            }
            /* 02 */
            #s-250 {
              top: 61px;
              left: 478px;
            }
            /* 03 */
            #s-251 {
              top: 112px;
              left: 478px;
            }
            /* 05 */
            #s-252 {
              top: 214px;
              left: 478px;
            }
            /* 07 */
            #s-253 {
              top: 316px;
              left: 478px;
            }
            /* 09 */
            #s-254 {
              top: 418px;
              left: 478px;
            }
            /* 10 */
            #s-255 {
              top: 469px;
              left: 478px;
            }
            /* 11 */
            #s-256 {
              top: 520px;
              left: 478px;
            }

            /* 01 */
            #s-257 {
              top: 10px;
              left: 514px;
            }
            /* 02 */
            #s-258 {
              top: 61px;
              left: 514px;
            }
            /* 03 */
            #s-259 {
              top: 112px;
              left: 514px;
            }
            /* 05 */
            #s-260 {
              top: 214px;
              left: 514px;
            }
            /* E6 */
            #el-6 {
              top: 265px;
              left: 514px;
            }
            /* 07 */
            #s-261 {
              top: 316px;
              left: 514px;
            }
            /* 09 */
            #s-262 {
              top: 418px;
              left: 514px;
            }
            /* 10 */
            #s-263 {
              top: 469px;
              left: 514px;
            }
            /* 11 */
            #s-264 {
              top: 520px;
              left: 514px;
            }

            /* 01 */
            #s-265 {
              top: 10px;
              left: 550px;
            }
            /* 02 */
            #s-266 {
              top: 61px;
              left: 550px;
            }
            /* 03 */
            #s-267 {
              top: 112px;
              left: 550px;
            }
            /* 05 */
            #s-268 {
              top: 214px;
              left: 550px;
            }
            /* 06 */
            #s-269 {
              top: 265px;
              left: 550px;
            }
            /* 07 */
            #s-270 {
              top: 316px;
              left: 550px;
            }
            /* 09 */
            #s-271 {
              top: 418px;
              left: 550px;
            }
            /* 10 */
            #s-272 {
              top: 469px;
              left: 550px;
            }
            /* 11 */
            #s-273 {
              top: 520px;
              left: 550px;
            }

            /* 01 */
            #s-274 {
              top: 10px;
              left: 586px;
            }
            /* 02 */
            #s-275 {
              top: 61px;
              left: 586px;
            }
            /* 03 */
            #s-276 {
              top: 112px;
              left: 586px;
            }
            /* 05 */
            #s-277 {
              top: 214px;
              left: 586px;
            }
            /* 06 */
            #s-278 {
              top: 265px;
              left: 586px;
            }
            /* 07 */
            #s-279 {
              top: 316px;
              left: 586px;
            }
            /* 09 */
            #s-280 {
              top: 418px;
              left: 586px;
            }
            /* 10 */
            #s-281 {
              top: 469px;
              left: 586px;
            }
            /* 11 */
            #s-282 {
              top: 520px;
              left: 586px;
            }

            /* 02 */
            #s-283 {
              top: 61px;
              left: 622px;
            }
            /* 03 */
            #s-284 {
              top: 112px;
              left: 622px;
            }
            /* 05 */
            #s-285 {
              top: 214px;
              left: 622px;
            }
            /* 06 */
            #s-286 {
              top: 265px;
              left: 622px;
            }
            /* 07 */
            #s-287 {
              top: 316px;
              left: 622px;
            }
            /* 09 */
            #s-288 {
              top: 418px;
              left: 622px;
            }
            /* 10 */
            #s-289 {
              top: 469px;
              left: 622px;
            }

            /* 03 */
            #s-290 {
              top: 112px;
              left: 658px;
            }
            /* 05 */
            #s-291 {
              top: 214px;
              left: 658px;
            }
            /* 06 */
            #s-292 {
              top: 265px;
              left: 658px;
            }
            /* 07 */
            #s-293 {
              top: 316px;
              left: 658px;
            }
            /* 09 */
            #s-294 {
              top: 418px;
              left: 658px;
            }

            /* 03 */
            #s-295 {
              top: 112px;
              left: 694px;
            }
            /* 05 */
            #s-296 {
              top: 214px;
              left: 694px;
            }
            /* 06 */
            #s-297 {
              top: 265px;
              left: 694px;
            }
            /* 07 */
            #s-298 {
              top: 316px;
              left: 694px;
            }
            /* 09 */
            #s-299 {
              top: 418px;
              left: 694px;
            }

            /* 03 */
            #s-300 {
              top: 112px;
              left: 730px;
            }
            /* 05 */
            #s-301 {
              top: 214px;
              left: 730px;
            }
            /* 06 */
            #s-302 {
              top: 265px;
              left: 730px;
            }
            /* 07 */
            #s-303 {
              top: 316px;
              left: 730px;
            }
            /* 09 */
            #s-304 {
              top: 418px;
              left: 730px;
            }

            /* SH1 */
            #sh-1 {
              top: 367px;
              left: 214px;
            }
            /* SH2 */
            #sh-2 {
              top: 163px;
              left: 199px;
            }
            /* SH3 */
            #sh-3 {
              top: 367px;
              left: 404px;
            }
            /* SH4 */
            #sh-4 {
              top: 163px;
              left: 618px;
            }

            /*
          /*	Basement B4 */

            /* 03 */
            #s-305 {
              top: 112px;
              left: 10px;
            }
            /* 05 */
            #s-306 {
              top: 214px;
              left: 10px;
            }
            /* 06 */
            #s-307 {
              top: 265px;
              left: 10px;
            }
            /* 07 */
            #s-308 {
              top: 316px;
              left: 10px;
            }
            /* 09 */
            #s-309 {
              top: 418px;
              left: 10px;
            }

            /* 03 */
            #s-310 {
              top: 112px;
              left: 46px;
            }
            /* 05 */
            #s-311 {
              top: 214px;
              left: 46px;
            }
            /* 06 */
            #s-312 {
              top: 265px;
              left: 46px;
            }
            /* 07 */
            #s-313 {
              top: 316px;
              left: 46px;
            }
            /* 09 */
            #s-314 {
              top: 418px;
              left: 46px;
            }

            /* 03 */
            #s-315 {
              top: 112px;
              left: 82px;
            }
            /* 05 */
            #s-316 {
              top: 214px;
              left: 82px;
            }
            /* 06 */
            #s-317 {
              top: 265px;
              left: 82px;
            }
            /* 07 */
            #s-318 {
              top: 316px;
              left: 82px;
            }
            /* 09 */
            #s-319 {
              top: 418px;
              left: 82px;
            }

            /* 02 */
            #s-320 {
              top: 61px;
              left: 118px;
            }
            /* 03 */
            #s-321 {
              top: 112px;
              left: 118px;
            }
            /* 05 */
            #s-322 {
              top: 214px;
              left: 118px;
            }
            /* 06 */
            #s-323 {
              top: 265px;
              left: 118px;
            }
            /* 07 */
            #s-324 {
              top: 316px;
              left: 118px;
            }
            /* 09 */
            #s-325 {
              top: 418px;
              left: 118px;
            }
            /* 10 */
            #s-326 {
              top: 469px;
              left: 118px;
            }

            /* 01 */
            #s-327 {
              top: 10px;
              left: 154px;
            }
            /* 02 */
            #s-328 {
              top: 61px;
              left: 154px;
            }
            /* 03 */
            #s-329 {
              top: 112px;
              left: 154px;
            }
            /* 05 */
            #s-330 {
              top: 214px;
              left: 154px;
            }
            /* 06 */
            #s-331 {
              top: 265px;
              left: 154px;
            }
            /* 07 */
            #s-332 {
              top: 316px;
              left: 154px;
            }
            /* 09 */
            #s-333 {
              top: 418px;
              left: 154px;
            }
            /* 10 */
            #s-334 {
              top: 469px;
              left: 154px;
            }
            /* 11 */
            #s-335 {
              top: 520px;
              left: 154px;
            }

            /* 01 */
            #s-336 {
              top: 10px;
              left: 190px;
            }
            /* 02 */
            #s-337 {
              top: 61px;
              left: 190px;
            }
            /* 03 */
            #s-338 {
              top: 112px;
              left: 190px;
            }
            /* 05 */
            #s-339 {
              top: 214px;
              left: 190px;
            }
            /* 06 */
            #s-340 {
              top: 265px;
              left: 190px;
            }
            /* 07 */
            #s-341 {
              top: 316px;
              left: 190px;
            }
            /* 09 */
            #s-342 {
              top: 418px;
              left: 190px;
            }
            /* 10 */
            #s-343 {
              top: 469px;
              left: 190px;
            }
            /* 11 */
            #s-344 {
              top: 520px;
              left: 190px;
            }

            /* 01 */
            #s-345 {
              top: 10px;
              left: 226px;
            }
            /* 02 */
            #s-346 {
              top: 61px;
              left: 226px;
            }
            /* 03 */
            #s-347 {
              top: 112px;
              left: 226px;
            }
            /* 05 */
            #s-348 {
              top: 214px;
              left: 226px;
            }
            /* E1 */
            #el-1 {
              top: 265px;
              left: 226px;
            }
            /* 07 */
            #s-349 {
              top: 316px;
              left: 226px;
            }
            /* 09 */
            #s-350 {
              top: 418px;
              left: 226px;
            }
            /* 10 */
            #s-351 {
              top: 469px;
              left: 226px;
            }
            /* 11 */
            #s-352 {
              top: 520px;
              left: 226px;
            }

            /* 01 */
            #s-353 {
              top: 10px;
              left: 262px;
            }
            /* 02 */
            #s-354 {
              top: 61px;
              left: 262px;
            }
            /* 03 */
            #s-355 {
              top: 112px;
              left: 262px;
            }
            /* 05 */
            #s-356 {
              top: 214px;
              left: 262px;
            }
            /* 07 */
            #s-357 {
              top: 316px;
              left: 262px;
            }
            /* 09 */
            #s-358 {
              top: 418px;
              left: 262px;
            }
            /* 10 */
            #s-359 {
              top: 469px;
              left: 262px;
            }
            /* 11 */
            #s-360 {
              top: 520px;
              left: 262px;
            }

            /* 01 */
            #s-361 {
              top: 10px;
              left: 298px;
            }
            /* 02 */
            #s-362 {
              top: 61px;
              left: 298px;
            }
            /* 03 */
            #s-363 {
              top: 112px;
              left: 298px;
            }
            /* 05 */
            #s-364 {
              top: 214px;
              left: 298px;
            }
            /* E2 */
            #el-2 {
              top: 265px;
              left: 298px;
            }
            /* 07 */
            #s-365 {
              top: 316px;
              left: 298px;
            }
            /* 09 */
            #s-366 {
              top: 418px;
              left: 298px;
            }
            /* 10 */
            #s-367 {
              top: 469px;
              left: 298px;
            }
            /* 11 */
            #s-368 {
              top: 520px;
              left: 298px;
            }

            /* 01 */
            #s-369 {
              top: 10px;
              left: 334px;
            }
            /* 02 */
            #s-370 {
              top: 61px;
              left: 334px;
            }
            /* 03 */
            #s-371 {
              top: 112px;
              left: 334px;
            }
            /* 05 */
            #s-372 {
              top: 214px;
              left: 334px;
            }
            /* E3 */
            #el-3 {
              top: 265px;
              left: 334px;
            }
            /* 07 */
            #s-373 {
              top: 316px;
              left: 334px;
            }
            /* 09 */
            #s-374 {
              top: 418px;
              left: 334px;
            }
            /* 10 */
            #s-375 {
              top: 469px;
              left: 334px;
            }
            /* 11 */
            #s-376 {
              top: 520px;
              left: 334px;
            }

            /* 01 */
            #s-377 {
              top: 10px;
              left: 370px;
            }
            /* 02 */
            #s-378 {
              top: 61px;
              left: 370px;
            }
            /* 03 */
            #s-379 {
              top: 112px;
              left: 370px;
            }
            /* 05 */
            #s-380 {
              top: 214px;
              left: 370px;
            }
            /* 07 */
            #s-381 {
              top: 316px;
              left: 370px;
            }
            /* 09 */
            #s-382 {
              top: 418px;
              left: 370px;
            }
            /* 10 */
            #s-383 {
              top: 469px;
              left: 370px;
            }
            /* 11 */
            #s-384 {
              top: 520px;
              left: 370px;
            }

            /* 01 */
            #s-385 {
              top: 10px;
              left: 406px;
            }
            /* 02 */
            #s-386 {
              top: 61px;
              left: 406px;
            }
            /* 03 */
            #s-387 {
              top: 112px;
              left: 406px;
            }
            /* 05 */
            #s-388 {
              top: 214px;
              left: 406px;
            }
            /* E4 */
            #el-4 {
              top: 265px;
              left: 406px;
            }
            /* 07 */
            #s-389 {
              top: 316px;
              left: 406px;
            }
            /* 09 */
            #s-390 {
              top: 418px;
              left: 406px;
            }
            /* 10 */
            #s-391 {
              top: 469px;
              left: 406px;
            }
            /* 11 */
            #s-392 {
              top: 520px;
              left: 406px;
            }

            /* 01 */
            #s-393 {
              top: 10px;
              left: 442px;
            }
            /* 02 */
            #s-394 {
              top: 61px;
              left: 442px;
            }
            /* 03 */
            #s-395 {
              top: 112px;
              left: 442px;
            }
            /* 05 */
            #s-396 {
              top: 214px;
              left: 442px;
            }
            /* E5 */
            #el-5 {
              top: 265px;
              left: 442px;
            }
            /* 07 */
            #s-397 {
              top: 316px;
              left: 442px;
            }
            /* 09 */
            #s-398 {
              top: 418px;
              left: 442px;
            }
            /* 10 */
            #s-399 {
              top: 469px;
              left: 442px;
            }
            /* 11 */
            #s-400 {
              top: 520px;
              left: 442px;
            }

            /* 01 */
            #s-401 {
              top: 10px;
              left: 478px;
            }
            /* 02 */
            #s-402 {
              top: 61px;
              left: 478px;
            }
            /* 03 */
            #s-403 {
              top: 112px;
              left: 478px;
            }
            /* 05 */
            #s-404 {
              top: 214px;
              left: 478px;
            }
            /* 07 */
            #s-405 {
              top: 316px;
              left: 478px;
            }
            /* 09 */
            #s-406 {
              top: 418px;
              left: 478px;
            }
            /* 10 */
            #s-407 {
              top: 469px;
              left: 478px;
            }
            /* 11 */
            #s-408 {
              top: 520px;
              left: 478px;
            }

            /* 01 */
            #s-409 {
              top: 10px;
              left: 514px;
            }
            /* 02 */
            #s-410 {
              top: 61px;
              left: 514px;
            }
            /* 03 */
            #s-411 {
              top: 112px;
              left: 514px;
            }
            /* 05 */
            #s-412 {
              top: 214px;
              left: 514px;
            }
            /* E6 */
            #el-6 {
              top: 265px;
              left: 514px;
            }
            /* 07 */
            #s-413 {
              top: 316px;
              left: 514px;
            }
            /* 09 */
            #s-414 {
              top: 418px;
              left: 514px;
            }
            /* 10 */
            #s-415 {
              top: 469px;
              left: 514px;
            }
            /* 11 */
            #s-416 {
              top: 520px;
              left: 514px;
            }

            /* 01 */
            #s-417 {
              top: 10px;
              left: 550px;
            }
            /* 02 */
            #s-418 {
              top: 61px;
              left: 550px;
            }
            /* 03 */
            #s-419 {
              top: 112px;
              left: 550px;
            }
            /* 05 */
            #s-420 {
              top: 214px;
              left: 550px;
            }
            /* 06 */
            #s-421 {
              top: 265px;
              left: 550px;
            }
            /* 07 */
            #s-422 {
              top: 316px;
              left: 550px;
            }
            /* 09 */
            #s-423 {
              top: 418px;
              left: 550px;
            }
            /* 10 */
            #s-424 {
              top: 469px;
              left: 550px;
            }
            /* 11 */
            #s-425 {
              top: 520px;
              left: 550px;
            }

            /* 01 */
            #s-426 {
              top: 10px;
              left: 586px;
            }
            /* 02 */
            #s-427 {
              top: 61px;
              left: 586px;
            }
            /* 03 */
            #s-428 {
              top: 112px;
              left: 586px;
            }
            /* 05 */
            #s-429 {
              top: 214px;
              left: 586px;
            }
            /* 06 */
            #s-430 {
              top: 265px;
              left: 586px;
            }
            /* 07 */
            #s-431 {
              top: 316px;
              left: 586px;
            }
            /* 09 */
            #s-432 {
              top: 418px;
              left: 586px;
            }
            /* 10 */
            #s-433 {
              top: 469px;
              left: 586px;
            }
            /* 11 */
            #s-434 {
              top: 520px;
              left: 586px;
            }

            /* 02 */
            #s-435 {
              top: 61px;
              left: 622px;
            }
            /* 03 */
            #s-436 {
              top: 112px;
              left: 622px;
            }
            /* 05 */
            #s-437 {
              top: 214px;
              left: 622px;
            }
            /* 06 */
            #s-438 {
              top: 265px;
              left: 622px;
            }
            /* 07 */
            #s-439 {
              top: 316px;
              left: 622px;
            }
            /* 09 */
            #s-440 {
              top: 418px;
              left: 622px;
            }
            /* 10 */
            #s-441 {
              top: 469px;
              left: 622px;
            }

            /* 03 */
            #s-442 {
              top: 112px;
              left: 658px;
            }
            /* 05 */
            #s-443 {
              top: 214px;
              left: 658px;
            }
            /* 06 */
            #s-444 {
              top: 265px;
              left: 658px;
            }
            /* 07 */
            #s-445 {
              top: 316px;
              left: 658px;
            }
            /* 09 */
            #s-446 {
              top: 418px;
              left: 658px;
            }

            /* 03 */
            #s-447 {
              top: 112px;
              left: 694px;
            }
            /* 05 */
            #s-448 {
              top: 214px;
              left: 694px;
            }
            /* 06 */
            #s-449 {
              top: 265px;
              left: 694px;
            }
            /* 07 */
            #s-450 {
              top: 316px;
              left: 694px;
            }
            /* 09 */
            #s-451 {
              top: 418px;
              left: 694px;
            }

            /* 03 */
            #s-452 {
              top: 112px;
              left: 730px;
            }
            /* 05 */
            #s-453 {
              top: 214px;
              left: 730px;
            }
            /* 06 */
            #s-454 {
              top: 265px;
              left: 730px;
            }
            /* 07 */
            #s-455 {
              top: 316px;
              left: 730px;
            }
            /* 09 */
            #s-456 {
              top: 418px;
              left: 730px;
            }

            /* SH1 */
            #sh-1 {
              top: 367px;
              left: 214px;
            }
            /* SH2 */
            #sh-2 {
              top: 163px;
              left: 199px;
            }
            /* SH3 */
            #sh-3 {
              top: 367px;
              left: 404px;
            }
            /* SH4 */
            #sh-4 {
              top: 163px;
              left: 618px;
            }

            /*
          /*	Basement B5 */

            /* 03 */
            #s-457 {
              top: 112px;
              left: 10px;
            }
            /* 05 */
            #s-458 {
              top: 214px;
              left: 10px;
            }
            /* 06 */
            #s-459 {
              top: 265px;
              left: 10px;
            }
            /* 07 */
            #s-460 {
              top: 316px;
              left: 10px;
            }
            /* 09 */
            #s-461 {
              top: 418px;
              left: 10px;
            }

            /* 03 */
            #s-462 {
              top: 112px;
              left: 46px;
            }
            /* 05 */
            #s-463 {
              top: 214px;
              left: 46px;
            }
            /* 06 */
            #s-464 {
              top: 265px;
              left: 46px;
            }
            /* 07 */
            #s-465 {
              top: 316px;
              left: 46px;
            }
            /* 09 */
            #s-466 {
              top: 418px;
              left: 46px;
            }

            /* 03 */
            #s-467 {
              top: 112px;
              left: 82px;
            }
            /* 05 */
            #s-468 {
              top: 214px;
              left: 82px;
            }
            /* 06 */
            #s-469 {
              top: 265px;
              left: 82px;
            }
            /* 07 */
            #s-470 {
              top: 316px;
              left: 82px;
            }
            /* 09 */
            #s-471 {
              top: 418px;
              left: 82px;
            }

            /* 02 */
            #s-472 {
              top: 61px;
              left: 118px;
            }
            /* 03 */
            #s-473 {
              top: 112px;
              left: 118px;
            }
            /* 05 */
            #s-474 {
              top: 214px;
              left: 118px;
            }
            /* 06 */
            #s-475 {
              top: 265px;
              left: 118px;
            }
            /* 07 */
            #s-476 {
              top: 316px;
              left: 118px;
            }
            /* 09 */
            #s-477 {
              top: 418px;
              left: 118px;
            }
            /* 10 */
            #s-478 {
              top: 469px;
              left: 118px;
            }

            /* 01 */
            #s-479 {
              top: 10px;
              left: 154px;
            }
            /* 02 */
            #s-480 {
              top: 61px;
              left: 154px;
            }
            /* 03 */
            #s-481 {
              top: 112px;
              left: 154px;
            }
            /* 05 */
            #s-482 {
              top: 214px;
              left: 154px;
            }
            /* 06 */
            #s-483 {
              top: 265px;
              left: 154px;
            }
            /* 07 */
            #s-484 {
              top: 316px;
              left: 154px;
            }
            /* 09 */
            #s-485 {
              top: 418px;
              left: 154px;
            }
            /* 10 */
            #s-486 {
              top: 469px;
              left: 154px;
            }
            /* 11 */
            #s-487 {
              top: 520px;
              left: 154px;
            }

            /* 01 */
            #s-488 {
              top: 10px;
              left: 190px;
            }
            /* 02 */
            #s-489 {
              top: 61px;
              left: 190px;
            }
            /* 03 */
            #s-490 {
              top: 112px;
              left: 190px;
            }
            /* 05 */
            #s-491 {
              top: 214px;
              left: 190px;
            }
            /* 06 */
            #s-492 {
              top: 265px;
              left: 190px;
            }
            /* 07 */
            #s-493 {
              top: 316px;
              left: 190px;
            }
            /* 09 */
            #s-494 {
              top: 418px;
              left: 190px;
            }
            /* 10 */
            #s-495 {
              top: 469px;
              left: 190px;
            }
            /* 11 */
            #s-496 {
              top: 520px;
              left: 190px;
            }

            /* 01 */
            #s-497 {
              top: 10px;
              left: 226px;
            }
            /* 02 */
            #s-498 {
              top: 61px;
              left: 226px;
            }
            /* 03 */
            #s-499 {
              top: 112px;
              left: 226px;
            }
            /* 05 */
            #s-500 {
              top: 214px;
              left: 226px;
            }
            /* E1 */
            #el-1 {
              top: 265px;
              left: 226px;
            }
            /* 07 */
            #s-501 {
              top: 316px;
              left: 226px;
            }
            /* 09 */
            #s-502 {
              top: 418px;
              left: 226px;
            }
            /* 10 */
            #s-503 {
              top: 469px;
              left: 226px;
            }
            /* 11 */
            #s-504 {
              top: 520px;
              left: 226px;
            }

            /* 01 */
            #s-505 {
              top: 10px;
              left: 262px;
            }
            /* 02 */
            #s-506 {
              top: 61px;
              left: 262px;
            }
            /* 03 */
            #s-507 {
              top: 112px;
              left: 262px;
            }
            /* 05 */
            #s-508 {
              top: 214px;
              left: 262px;
            }
            /* 07 */
            #s-509 {
              top: 316px;
              left: 262px;
            }
            /* 09 */
            #s-510 {
              top: 418px;
              left: 262px;
            }
            /* 10 */
            #s-511 {
              top: 469px;
              left: 262px;
            }
            /* 11 */
            #s-512 {
              top: 520px;
              left: 262px;
            }

            /* 01 */
            #s-513 {
              top: 10px;
              left: 298px;
            }
            /* 02 */
            #s-514 {
              top: 61px;
              left: 298px;
            }
            /* 03 */
            #s-515 {
              top: 112px;
              left: 298px;
            }
            /* 05 */
            #s-516 {
              top: 214px;
              left: 298px;
            }
            /* E2 */
            #el-2 {
              top: 265px;
              left: 298px;
            }
            /* 07 */
            #s-517 {
              top: 316px;
              left: 298px;
            }
            /* 09 */
            #s-518 {
              top: 418px;
              left: 298px;
            }
            /* 10 */
            #s-519 {
              top: 469px;
              left: 298px;
            }
            /* 11 */
            #s-520 {
              top: 520px;
              left: 298px;
            }

            /* 01 */
            #s-521 {
              top: 10px;
              left: 334px;
            }
            /* 02 */
            #s-522 {
              top: 61px;
              left: 334px;
            }
            /* 03 */
            #s-523 {
              top: 112px;
              left: 334px;
            }
            /* 05 */
            #s-524 {
              top: 214px;
              left: 334px;
            }
            /* E3 */
            #el-3 {
              top: 265px;
              left: 334px;
            }
            /* 07 */
            #s-525 {
              top: 316px;
              left: 334px;
            }
            /* 09 */
            #s-526 {
              top: 418px;
              left: 334px;
            }
            /* 10 */
            #s-527 {
              top: 469px;
              left: 334px;
            }
            /* 11 */
            #s-528 {
              top: 520px;
              left: 334px;
            }

            /* 01 */
            #s-529 {
              top: 10px;
              left: 370px;
            }
            /* 02 */
            #s-530 {
              top: 61px;
              left: 370px;
            }
            /* 03 */
            #s-531 {
              top: 112px;
              left: 370px;
            }
            /* 05 */
            #s-532 {
              top: 214px;
              left: 370px;
            }
            /* 07 */
            #s-533 {
              top: 316px;
              left: 370px;
            }
            /* 09 */
            #s-534 {
              top: 418px;
              left: 370px;
            }
            /* 10 */
            #s-535 {
              top: 469px;
              left: 370px;
            }
            /* 11 */
            #s-536 {
              top: 520px;
              left: 370px;
            }

            /* 01 */
            #s-537 {
              top: 10px;
              left: 406px;
            }
            /* 02 */
            #s-538 {
              top: 61px;
              left: 406px;
            }
            /* 03 */
            #s-539 {
              top: 112px;
              left: 406px;
            }
            /* 05 */
            #s-540 {
              top: 214px;
              left: 406px;
            }
            /* E4 */
            #el-4 {
              top: 265px;
              left: 406px;
            }
            /* 07 */
            #s-541 {
              top: 316px;
              left: 406px;
            }
            /* 09 */
            #s-542 {
              top: 418px;
              left: 406px;
            }
            /* 10 */
            #s-543 {
              top: 469px;
              left: 406px;
            }
            /* 11 */
            #s-544 {
              top: 520px;
              left: 406px;
            }

            /* 01 */
            #s-545 {
              top: 10px;
              left: 442px;
            }
            /* 02 */
            #s-546 {
              top: 61px;
              left: 442px;
            }
            /* 03 */
            #s-547 {
              top: 112px;
              left: 442px;
            }
            /* 05 */
            #s-548 {
              top: 214px;
              left: 442px;
            }
            /* E5 */
            #el-5 {
              top: 265px;
              left: 442px;
            }
            /* 07 */
            #s-549 {
              top: 316px;
              left: 442px;
            }
            /* 09 */
            #s-550 {
              top: 418px;
              left: 442px;
            }
            /* 10 */
            #s-551 {
              top: 469px;
              left: 442px;
            }
            /* 11 */
            #s-552 {
              top: 520px;
              left: 442px;
            }

            /* 01 */
            #s-553 {
              top: 10px;
              left: 478px;
            }
            /* 02 */
            #s-554 {
              top: 61px;
              left: 478px;
            }
            /* 03 */
            #s-555 {
              top: 112px;
              left: 478px;
            }
            /* 05 */
            #s-556 {
              top: 214px;
              left: 478px;
            }
            /* 07 */
            #s-557 {
              top: 316px;
              left: 478px;
            }
            /* 09 */
            #s-558 {
              top: 418px;
              left: 478px;
            }
            /* 10 */
            #s-559 {
              top: 469px;
              left: 478px;
            }
            /* 11 */
            #s-560 {
              top: 520px;
              left: 478px;
            }

            /* 01 */
            #s-561 {
              top: 10px;
              left: 514px;
            }
            /* 02 */
            #s-562 {
              top: 61px;
              left: 514px;
            }
            /* 03 */
            #s-563 {
              top: 112px;
              left: 514px;
            }
            /* 05 */
            #s-564 {
              top: 214px;
              left: 514px;
            }
            /* E6 */
            #el-6 {
              top: 265px;
              left: 514px;
            }
            /* 07 */
            #s-565 {
              top: 316px;
              left: 514px;
            }
            /* 09 */
            #s-566 {
              top: 418px;
              left: 514px;
            }
            /* 10 */
            #s-567 {
              top: 469px;
              left: 514px;
            }
            /* 11 */
            #s-568 {
              top: 520px;
              left: 514px;
            }

            /* 01 */
            #s-569 {
              top: 10px;
              left: 550px;
            }
            /* 02 */
            #s-570 {
              top: 61px;
              left: 550px;
            }
            /* 03 */
            #s-571 {
              top: 112px;
              left: 550px;
            }
            /* 05 */
            #s-572 {
              top: 214px;
              left: 550px;
            }
            /* 06 */
            #s-573 {
              top: 265px;
              left: 550px;
            }
            /* 07 */
            #s-574 {
              top: 316px;
              left: 550px;
            }
            /* 09 */
            #s-575 {
              top: 418px;
              left: 550px;
            }
            /* 10 */
            #s-576 {
              top: 469px;
              left: 550px;
            }
            /* 11 */
            #s-577 {
              top: 520px;
              left: 550px;
            }

            /* 01 */
            #s-578 {
              top: 10px;
              left: 586px;
            }
            /* 02 */
            #s-579 {
              top: 61px;
              left: 586px;
            }
            /* 03 */
            #s-580 {
              top: 112px;
              left: 586px;
            }
            /* 05 */
            #s-581 {
              top: 214px;
              left: 586px;
            }
            /* 06 */
            #s-582 {
              top: 265px;
              left: 586px;
            }
            /* 07 */
            #s-583 {
              top: 316px;
              left: 586px;
            }
            /* 09 */
            #s-584 {
              top: 418px;
              left: 586px;
            }
            /* 10 */
            #s-585 {
              top: 469px;
              left: 586px;
            }
            /* 11 */
            #s-586 {
              top: 520px;
              left: 586px;
            }

            /* 02 */
            #s-587 {
              top: 61px;
              left: 622px;
            }
            /* 03 */
            #s-588 {
              top: 112px;
              left: 622px;
            }
            /* 05 */
            #s-589 {
              top: 214px;
              left: 622px;
            }
            /* 06 */
            #s-590 {
              top: 265px;
              left: 622px;
            }
            /* 07 */
            #s-591 {
              top: 316px;
              left: 622px;
            }
            /* 09 */
            #s-592 {
              top: 418px;
              left: 622px;
            }
            /* 10 */
            #s-593 {
              top: 469px;
              left: 622px;
            }

            /* 03 */
            #s-594 {
              top: 112px;
              left: 658px;
            }
            /* 05 */
            #s-595 {
              top: 214px;
              left: 658px;
            }
            /* 06 */
            #s-596 {
              top: 265px;
              left: 658px;
            }
            /* 07 */
            #s-597 {
              top: 316px;
              left: 658px;
            }
            /* 09 */
            #s-598 {
              top: 418px;
              left: 658px;
            }

            /* 03 */
            #s-599 {
              top: 112px;
              left: 694px;
            }
            /* 05 */
            #s-600 {
              top: 214px;
              left: 694px;
            }
            /* 06 */
            #s-601 {
              top: 265px;
              left: 694px;
            }
            /* 07 */
            #s-602 {
              top: 316px;
              left: 694px;
            }
            /* 09 */
            #s-603 {
              top: 418px;
              left: 694px;
            }

            /* 03 */
            #s-604 {
              top: 112px;
              left: 730px;
            }
            /* 05 */
            #s-605 {
              top: 214px;
              left: 730px;
            }
            /* 06 */
            #s-606 {
              top: 265px;
              left: 730px;
            }
            /* 07 */
            #s-607 {
              top: 316px;
              left: 730px;
            }
            /* 09 */
            #s-608 {
              top: 418px;
              left: 730px;
            }

            /* SH1 */
            #sh-1 {
              top: 367px;
              left: 214px;
            }
            /* SH2 */
            #sh-2 {
              top: 163px;
              left: 199px;
            }
            /* SH3 */
            #sh-3 {
              top: 367px;
              left: 404px;
            }
            /* SH4 */
            #sh-4 {
              top: 163px;
              left: 618px;
            }

            /*
          /*	Basement B6 */

            /* 03 */
            #s-609 {
              top: 112px;
              left: 10px;
            }
            /* 05 */
            #s-610 {
              top: 214px;
              left: 10px;
            }
            /* 06 */
            #s-611 {
              top: 265px;
              left: 10px;
            }
            /* 07 */
            #s-612 {
              top: 316px;
              left: 10px;
            }
            /* 09 */
            #s-613 {
              top: 418px;
              left: 10px;
            }

            /* 03 */
            #s-614 {
              top: 112px;
              left: 46px;
            }
            /* 05 */
            #s-615 {
              top: 214px;
              left: 46px;
            }
            /* 06 */
            #s-616 {
              top: 265px;
              left: 46px;
            }
            /* 07 */
            #s-617 {
              top: 316px;
              left: 46px;
            }
            /* 09 */
            #s-618 {
              top: 418px;
              left: 46px;
            }

            /* 03 */
            #s-619 {
              top: 112px;
              left: 82px;
            }
            /* 05 */
            #s-620 {
              top: 214px;
              left: 82px;
            }
            /* 06 */
            #s-621 {
              top: 265px;
              left: 82px;
            }
            /* 07 */
            #s-622 {
              top: 316px;
              left: 82px;
            }
            /* 09 */
            #s-623 {
              top: 418px;
              left: 82px;
            }

            /* 02 */
            #s-624 {
              top: 61px;
              left: 118px;
            }
            /* 03 */
            #s-625 {
              top: 112px;
              left: 118px;
            }
            /* 05 */
            #s-626 {
              top: 214px;
              left: 118px;
            }
            /* 06 */
            #s-627 {
              top: 265px;
              left: 118px;
            }
            /* 07 */
            #s-628 {
              top: 316px;
              left: 118px;
            }
            /* 09 */
            #s-629 {
              top: 418px;
              left: 118px;
            }
            /* 10 */
            #s-630 {
              top: 469px;
              left: 118px;
            }

            /* 01 */
            #s-631 {
              top: 10px;
              left: 154px;
            }
            /* 02 */
            #s-632 {
              top: 61px;
              left: 154px;
            }
            /* 03 */
            #s-633 {
              top: 112px;
              left: 154px;
            }
            /* 05 */
            #s-634 {
              top: 214px;
              left: 154px;
            }
            /* 06 */
            #s-635 {
              top: 265px;
              left: 154px;
            }
            /* 07 */
            #s-636 {
              top: 316px;
              left: 154px;
            }
            /* 09 */
            #s-637 {
              top: 418px;
              left: 154px;
            }
            /* 10 */
            #s-638 {
              top: 469px;
              left: 154px;
            }
            /* 11 */
            #s-639 {
              top: 520px;
              left: 154px;
            }

            /* 01 */
            #s-640 {
              top: 10px;
              left: 190px;
            }
            /* 02 */
            #s-641 {
              top: 61px;
              left: 190px;
            }
            /* 03 */
            #s-642 {
              top: 112px;
              left: 190px;
            }
            /* 05 */
            #s-643 {
              top: 214px;
              left: 190px;
            }
            /* 06 */
            #s-644 {
              top: 265px;
              left: 190px;
            }
            /* 07 */
            #s-645 {
              top: 316px;
              left: 190px;
            }
            /* 09 */
            #s-646 {
              top: 418px;
              left: 190px;
            }
            /* 10 */
            #s-647 {
              top: 469px;
              left: 190px;
            }
            /* 11 */
            #s-648 {
              top: 520px;
              left: 190px;
            }

            /* 01 */
            #s-649 {
              top: 10px;
              left: 226px;
            }
            /* 02 */
            #s-650 {
              top: 61px;
              left: 226px;
            }
            /* 03 */
            #s-651 {
              top: 112px;
              left: 226px;
            }
            /* 05 */
            #s-652 {
              top: 214px;
              left: 226px;
            }
            /* E1 */
            #el-1 {
              top: 265px;
              left: 226px;
            }
            /* 07 */
            #s-653 {
              top: 316px;
              left: 226px;
            }
            /* 09 */
            #s-654 {
              top: 418px;
              left: 226px;
            }
            /* 10 */
            #s-655 {
              top: 469px;
              left: 226px;
            }
            /* 11 */
            #s-656 {
              top: 520px;
              left: 226px;
            }

            /* 01 */
            #s-657 {
              top: 10px;
              left: 262px;
            }
            /* 02 */
            #s-658 {
              top: 61px;
              left: 262px;
            }
            /* 03 */
            #s-659 {
              top: 112px;
              left: 262px;
            }
            /* 05 */
            #s-660 {
              top: 214px;
              left: 262px;
            }
            /* 07 */
            #s-661 {
              top: 316px;
              left: 262px;
            }
            /* 09 */
            #s-662 {
              top: 418px;
              left: 262px;
            }
            /* 10 */
            #s-663 {
              top: 469px;
              left: 262px;
            }
            /* 11 */
            #s-664 {
              top: 520px;
              left: 262px;
            }

            /* 01 */
            #s-665 {
              top: 10px;
              left: 298px;
            }
            /* 02 */
            #s-666 {
              top: 61px;
              left: 298px;
            }
            /* 03 */
            #s-667 {
              top: 112px;
              left: 298px;
            }
            /* 05 */
            #s-668 {
              top: 214px;
              left: 298px;
            }
            /* E2 */
            #el-2 {
              top: 265px;
              left: 298px;
            }
            /* 07 */
            #s-669 {
              top: 316px;
              left: 298px;
            }
            /* 09 */
            #s-670 {
              top: 418px;
              left: 298px;
            }
            /* 10 */
            #s-671 {
              top: 469px;
              left: 298px;
            }
            /* 11 */
            #s-672 {
              top: 520px;
              left: 298px;
            }

            /* 01 */
            #s-673 {
              top: 10px;
              left: 334px;
            }
            /* 02 */
            #s-674 {
              top: 61px;
              left: 334px;
            }
            /* 03 */
            #s-675 {
              top: 112px;
              left: 334px;
            }
            /* 05 */
            #s-676 {
              top: 214px;
              left: 334px;
            }
            /* E3 */
            #el-3 {
              top: 265px;
              left: 334px;
            }
            /* 07 */
            #s-677 {
              top: 316px;
              left: 334px;
            }
            /* 09 */
            #s-678 {
              top: 418px;
              left: 334px;
            }
            /* 10 */
            #s-679 {
              top: 469px;
              left: 334px;
            }
            /* 11 */
            #s-680 {
              top: 520px;
              left: 334px;
            }

            /* 01 */
            #s-681 {
              top: 10px;
              left: 370px;
            }
            /* 02 */
            #s-682 {
              top: 61px;
              left: 370px;
            }
            /* 03 */
            #s-683 {
              top: 112px;
              left: 370px;
            }
            /* 05 */
            #s-684 {
              top: 214px;
              left: 370px;
            }
            /* 07 */
            #s-685 {
              top: 316px;
              left: 370px;
            }
            /* 09 */
            #s-686 {
              top: 418px;
              left: 370px;
            }
            /* 10 */
            #s-687 {
              top: 469px;
              left: 370px;
            }
            /* 11 */
            #s-688 {
              top: 520px;
              left: 370px;
            }

            /* 01 */
            #s-689 {
              top: 10px;
              left: 406px;
            }
            /* 02 */
            #s-690 {
              top: 61px;
              left: 406px;
            }
            /* 03 */
            #s-691 {
              top: 112px;
              left: 406px;
            }
            /* 05 */
            #s-692 {
              top: 214px;
              left: 406px;
            }
            /* E4 */
            #el-4 {
              top: 265px;
              left: 406px;
            }
            /* 07 */
            #s-693 {
              top: 316px;
              left: 406px;
            }
            /* 09 */
            #s-694 {
              top: 418px;
              left: 406px;
            }
            /* 10 */
            #s-695 {
              top: 469px;
              left: 406px;
            }
            /* 11 */
            #s-696 {
              top: 520px;
              left: 406px;
            }

            /* 01 */
            #s-697 {
              top: 10px;
              left: 442px;
            }
            /* 02 */
            #s-698 {
              top: 61px;
              left: 442px;
            }
            /* 03 */
            #s-699 {
              top: 112px;
              left: 442px;
            }
            /* 05 */
            #s-700 {
              top: 214px;
              left: 442px;
            }
            /* E5 */
            #el-5 {
              top: 265px;
              left: 442px;
            }
            /* 07 */
            #s-701 {
              top: 316px;
              left: 442px;
            }
            /* 09 */
            #s-702 {
              top: 418px;
              left: 442px;
            }
            /* 10 */
            #s-703 {
              top: 469px;
              left: 442px;
            }
            /* 11 */
            #s-704 {
              top: 520px;
              left: 442px;
            }

            /* 01 */
            #s-705 {
              top: 10px;
              left: 478px;
            }
            /* 02 */
            #s-706 {
              top: 61px;
              left: 478px;
            }
            /* 03 */
            #s-707 {
              top: 112px;
              left: 478px;
            }
            /* 05 */
            #s-708 {
              top: 214px;
              left: 478px;
            }
            /* 07 */
            #s-709 {
              top: 316px;
              left: 478px;
            }
            /* 09 */
            #s-710 {
              top: 418px;
              left: 478px;
            }
            /* 10 */
            #s-711 {
              top: 469px;
              left: 478px;
            }
            /* 11 */
            #s-712 {
              top: 520px;
              left: 478px;
            }

            /* 01 */
            #s-713 {
              top: 10px;
              left: 514px;
            }
            /* 02 */
            #s-714 {
              top: 61px;
              left: 514px;
            }
            /* 03 */
            #s-715 {
              top: 112px;
              left: 514px;
            }
            /* 05 */
            #s-716 {
              top: 214px;
              left: 514px;
            }
            /* E6 */
            #el-6 {
              top: 265px;
              left: 514px;
            }
            /* 07 */
            #s-717 {
              top: 316px;
              left: 514px;
            }
            /* 09 */
            #s-718 {
              top: 418px;
              left: 514px;
            }
            /* 10 */
            #s-719 {
              top: 469px;
              left: 514px;
            }
            /* 11 */
            #s-720 {
              top: 520px;
              left: 514px;
            }

            /* 01 */
            #s-721 {
              top: 10px;
              left: 550px;
            }
            /* 02 */
            #s-722 {
              top: 61px;
              left: 550px;
            }
            /* 03 */
            #s-723 {
              top: 112px;
              left: 550px;
            }
            /* 05 */
            #s-724 {
              top: 214px;
              left: 550px;
            }
            /* 06 */
            #s-725 {
              top: 265px;
              left: 550px;
            }
            /* 07 */
            #s-726 {
              top: 316px;
              left: 550px;
            }
            /* 09 */
            #s-727 {
              top: 418px;
              left: 550px;
            }
            /* 10 */
            #s-728 {
              top: 469px;
              left: 550px;
            }
            /* 11 */
            #s-729 {
              top: 520px;
              left: 550px;
            }

            /* 01 */
            #s-730 {
              top: 10px;
              left: 586px;
            }
            /* 02 */
            #s-731 {
              top: 61px;
              left: 586px;
            }
            /* 03 */
            #s-732 {
              top: 112px;
              left: 586px;
            }
            /* 05 */
            #s-733 {
              top: 214px;
              left: 586px;
            }
            /* 06 */
            #s-734 {
              top: 265px;
              left: 586px;
            }
            /* 07 */
            #s-735 {
              top: 316px;
              left: 586px;
            }
            /* 09 */
            #s-736 {
              top: 418px;
              left: 586px;
            }
            /* 10 */
            #s-737 {
              top: 469px;
              left: 586px;
            }
            /* 11 */
            #s-738 {
              top: 520px;
              left: 586px;
            }

            /* 02 */
            #s-739 {
              top: 61px;
              left: 622px;
            }
            /* 03 */
            #s-740 {
              top: 112px;
              left: 622px;
            }
            /* 05 */
            #s-741 {
              top: 214px;
              left: 622px;
            }
            /* 06 */
            #s-742 {
              top: 265px;
              left: 622px;
            }
            /* 07 */
            #s-743 {
              top: 316px;
              left: 622px;
            }
            /* 09 */
            #s-744 {
              top: 418px;
              left: 622px;
            }
            /* 10 */
            #s-745 {
              top: 469px;
              left: 622px;
            }

            /* 03 */
            #s-746 {
              top: 112px;
              left: 658px;
            }
            /* 05 */
            #s-747 {
              top: 214px;
              left: 658px;
            }
            /* 06 */
            #s-748 {
              top: 265px;
              left: 658px;
            }
            /* 07 */
            #s-749 {
              top: 316px;
              left: 658px;
            }
            /* 09 */
            #s-750 {
              top: 418px;
              left: 658px;
            }

            /* 03 */
            #s-751 {
              top: 112px;
              left: 694px;
            }
            /* 05 */
            #s-752 {
              top: 214px;
              left: 694px;
            }
            /* 06 */
            #s-753 {
              top: 265px;
              left: 694px;
            }
            /* 07 */
            #s-754 {
              top: 316px;
              left: 694px;
            }
            /* 09 */
            #s-755 {
              top: 418px;
              left: 694px;
            }

            /* 03 */
            #s-756 {
              top: 112px;
              left: 730px;
            }
            /* 05 */
            #s-757 {
              top: 214px;
              left: 730px;
            }
            /* 06 */
            #s-758 {
              top: 265px;
              left: 730px;
            }
            /* 07 */
            #s-759 {
              top: 316px;
              left: 730px;
            }
            /* 09 */
            #s-760 {
              top: 418px;
              left: 730px;
            }

            /* SH1 */
            #sh-1 {
              top: 367px;
              left: 214px;
            }
            /* SH2 */
            #sh-2 {
              top: 163px;
              left: 199px;
            }
            /* SH3 */
            #sh-3 {
              top: 367px;
              left: 404px;
            }
            /* SH4 */
            #sh-4 {
              top: 163px;
              left: 618px;
            }

            /*
          /*	Basement B7 */

            /* 03 */
            #s-761 {
              top: 112px;
              left: 10px;
            }
            /* 05 */
            #s-762 {
              top: 214px;
              left: 10px;
            }
            /* 06 */
            #s-763 {
              top: 265px;
              left: 10px;
            }
            /* 07 */
            #s-764 {
              top: 316px;
              left: 10px;
            }
            /* 09 */
            #s-765 {
              top: 418px;
              left: 10px;
            }

            /* 03 */
            #s-766 {
              top: 112px;
              left: 46px;
            }
            /* 05 */
            #s-767 {
              top: 214px;
              left: 46px;
            }
            /* 06 */
            #s-768 {
              top: 265px;
              left: 46px;
            }
            /* 07 */
            #s-769 {
              top: 316px;
              left: 46px;
            }
            /* 09 */
            #s-770 {
              top: 418px;
              left: 46px;
            }

            /* 03 */
            #s-771 {
              top: 112px;
              left: 82px;
            }
            /* 05 */
            #s-772 {
              top: 214px;
              left: 82px;
            }
            /* 06 */
            #s-773 {
              top: 265px;
              left: 82px;
            }
            /* 07 */
            #s-774 {
              top: 316px;
              left: 82px;
            }
            /* 09 */
            #s-775 {
              top: 418px;
              left: 82px;
            }

            /* 02 */
            #s-776 {
              top: 61px;
              left: 118px;
            }
            /* 03 */
            #s-777 {
              top: 112px;
              left: 118px;
            }
            /* 05 */
            #s-778 {
              top: 214px;
              left: 118px;
            }
            /* 06 */
            #s-779 {
              top: 265px;
              left: 118px;
            }
            /* 07 */
            #s-780 {
              top: 316px;
              left: 118px;
            }
            /* 09 */
            #s-781 {
              top: 418px;
              left: 118px;
            }
            /* 10 */
            #s-782 {
              top: 469px;
              left: 118px;
            }

            /* 01 */
            #s-783 {
              top: 10px;
              left: 154px;
            }
            /* 02 */
            #s-784 {
              top: 61px;
              left: 154px;
            }
            /* 03 */
            #s-785 {
              top: 112px;
              left: 154px;
            }
            /* 05 */
            #s-786 {
              top: 214px;
              left: 154px;
            }
            /* 06 */
            #s-787 {
              top: 265px;
              left: 154px;
            }
            /* 07 */
            #s-788 {
              top: 316px;
              left: 154px;
            }
            /* 09 */
            #s-789 {
              top: 418px;
              left: 154px;
            }
            /* 10 */
            #s-790 {
              top: 469px;
              left: 154px;
            }
            /* 11 */
            #s-791 {
              top: 520px;
              left: 154px;
            }

            /* 01 */
            #s-792 {
              top: 10px;
              left: 190px;
            }
            /* 02 */
            #s-793 {
              top: 61px;
              left: 190px;
            }
            /* 03 */
            #s-794 {
              top: 112px;
              left: 190px;
            }
            /* 05 */
            #s-795 {
              top: 214px;
              left: 190px;
            }
            /* 06 */
            #s-796 {
              top: 265px;
              left: 190px;
            }
            /* 07 */
            #s-797 {
              top: 316px;
              left: 190px;
            }
            /* 09 */
            #s-798 {
              top: 418px;
              left: 190px;
            }
            /* 10 */
            #s-799 {
              top: 469px;
              left: 190px;
            }
            /* 11 */
            #s-800 {
              top: 520px;
              left: 190px;
            }

            /* 01 */
            #s-801 {
              top: 10px;
              left: 226px;
            }
            /* 02 */
            #s-802 {
              top: 61px;
              left: 226px;
            }
            /* 03 */
            #s-803 {
              top: 112px;
              left: 226px;
            }
            /* 05 */
            #s-804 {
              top: 214px;
              left: 226px;
            }
            /* E1 */
            #el-1 {
              top: 265px;
              left: 226px;
            }
            /* 07 */
            #s-805 {
              top: 316px;
              left: 226px;
            }
            /* 09 */
            #s-806 {
              top: 418px;
              left: 226px;
            }
            /* 10 */
            #s-807 {
              top: 469px;
              left: 226px;
            }
            /* 11 */
            #s-808 {
              top: 520px;
              left: 226px;
            }

            /* 01 */
            #s-809 {
              top: 10px;
              left: 262px;
            }
            /* 02 */
            #s-810 {
              top: 61px;
              left: 262px;
            }
            /* 03 */
            #s-811 {
              top: 112px;
              left: 262px;
            }
            /* 05 */
            #s-812 {
              top: 214px;
              left: 262px;
            }
            /* 07 */
            #s-813 {
              top: 316px;
              left: 262px;
            }
            /* 09 */
            #s-814 {
              top: 418px;
              left: 262px;
            }
            /* 10 */
            #s-815 {
              top: 469px;
              left: 262px;
            }
            /* 11 */
            #s-816 {
              top: 520px;
              left: 262px;
            }

            /* 01 */
            #s-817 {
              top: 10px;
              left: 298px;
            }
            /* 02 */
            #s-818 {
              top: 61px;
              left: 298px;
            }
            /* 03 */
            #s-819 {
              top: 112px;
              left: 298px;
            }
            /* 05 */
            #s-820 {
              top: 214px;
              left: 298px;
            }
            /* E2 */
            #el-2 {
              top: 265px;
              left: 298px;
            }
            /* 07 */
            #s-821 {
              top: 316px;
              left: 298px;
            }
            /* 09 */
            #s-822 {
              top: 418px;
              left: 298px;
            }
            /* 10 */
            #s-823 {
              top: 469px;
              left: 298px;
            }
            /* 11 */
            #s-824 {
              top: 520px;
              left: 298px;
            }

            /* 01 */
            #s-825 {
              top: 10px;
              left: 334px;
            }
            /* 02 */
            #s-826 {
              top: 61px;
              left: 334px;
            }
            /* 03 */
            #s-827 {
              top: 112px;
              left: 334px;
            }
            /* 05 */
            #s-828 {
              top: 214px;
              left: 334px;
            }
            /* E3 */
            #el-3 {
              top: 265px;
              left: 334px;
            }
            /* 07 */
            #s-829 {
              top: 316px;
              left: 334px;
            }
            /* 09 */
            #s-830 {
              top: 418px;
              left: 334px;
            }
            /* 10 */
            #s-831 {
              top: 469px;
              left: 334px;
            }
            /* 11 */
            #s-832 {
              top: 520px;
              left: 334px;
            }

            /* 01 */
            #s-833 {
              top: 10px;
              left: 370px;
            }
            /* 02 */
            #s-834 {
              top: 61px;
              left: 370px;
            }
            /* 03 */
            #s-835 {
              top: 112px;
              left: 370px;
            }
            /* 05 */
            #s-836 {
              top: 214px;
              left: 370px;
            }
            /* 07 */
            #s-837 {
              top: 316px;
              left: 370px;
            }
            /* 09 */
            #s-838 {
              top: 418px;
              left: 370px;
            }
            /* 10 */
            #s-839 {
              top: 469px;
              left: 370px;
            }
            /* 11 */
            #s-840 {
              top: 520px;
              left: 370px;
            }

            /* 01 */
            #s-841 {
              top: 10px;
              left: 406px;
            }
            /* 02 */
            #s-842 {
              top: 61px;
              left: 406px;
            }
            /* 03 */
            #s-843 {
              top: 112px;
              left: 406px;
            }
            /* 05 */
            #s-844 {
              top: 214px;
              left: 406px;
            }
            /* E4 */
            #el-4 {
              top: 265px;
              left: 406px;
            }
            /* 07 */
            #s-845 {
              top: 316px;
              left: 406px;
            }
            /* 09 */
            #s-846 {
              top: 418px;
              left: 406px;
            }
            /* 10 */
            #s-847 {
              top: 469px;
              left: 406px;
            }
            /* 11 */
            #s-848 {
              top: 520px;
              left: 406px;
            }

            /* 01 */
            #s-849 {
              top: 10px;
              left: 442px;
            }
            /* 02 */
            #s-850 {
              top: 61px;
              left: 442px;
            }
            /* 03 */
            #s-851 {
              top: 112px;
              left: 442px;
            }
            /* 05 */
            #s-852 {
              top: 214px;
              left: 442px;
            }
            /* E5 */
            #el-5 {
              top: 265px;
              left: 442px;
            }
            /* 07 */
            #s-853 {
              top: 316px;
              left: 442px;
            }
            /* 09 */
            #s-854 {
              top: 418px;
              left: 442px;
            }
            /* 10 */
            #s-855 {
              top: 469px;
              left: 442px;
            }
            /* 11 */
            #s-856 {
              top: 520px;
              left: 442px;
            }

            /* 01 */
            #s-857 {
              top: 10px;
              left: 478px;
            }
            /* 02 */
            #s-858 {
              top: 61px;
              left: 478px;
            }
            /* 03 */
            #s-859 {
              top: 112px;
              left: 478px;
            }
            /* 05 */
            #s-860 {
              top: 214px;
              left: 478px;
            }
            /* 07 */
            #s-861 {
              top: 316px;
              left: 478px;
            }
            /* 09 */
            #s-862 {
              top: 418px;
              left: 478px;
            }
            /* 10 */
            #s-863 {
              top: 469px;
              left: 478px;
            }
            /* 11 */
            #s-864 {
              top: 520px;
              left: 478px;
            }

            /* 01 */
            #s-865 {
              top: 10px;
              left: 514px;
            }
            /* 02 */
            #s-866 {
              top: 61px;
              left: 514px;
            }
            /* 03 */
            #s-867 {
              top: 112px;
              left: 514px;
            }
            /* 05 */
            #s-868 {
              top: 214px;
              left: 514px;
            }
            /* E6 */
            #el-6 {
              top: 265px;
              left: 514px;
            }
            /* 07 */
            #s-869 {
              top: 316px;
              left: 514px;
            }
            /* 09 */
            #s-870 {
              top: 418px;
              left: 514px;
            }
            /* 10 */
            #s-871 {
              top: 469px;
              left: 514px;
            }
            /* 11 */
            #s-872 {
              top: 520px;
              left: 514px;
            }

            /* 01 */
            #s-873 {
              top: 10px;
              left: 550px;
            }
            /* 02 */
            #s-874 {
              top: 61px;
              left: 550px;
            }
            /* 03 */
            #s-875 {
              top: 112px;
              left: 550px;
            }
            /* 05 */
            #s-876 {
              top: 214px;
              left: 550px;
            }
            /* 06 */
            #s-877 {
              top: 265px;
              left: 550px;
            }
            /* 07 */
            #s-878 {
              top: 316px;
              left: 550px;
            }
            /* 09 */
            #s-879 {
              top: 418px;
              left: 550px;
            }
            /* 10 */
            #s-880 {
              top: 469px;
              left: 550px;
            }
            /* 11 */
            #s-881 {
              top: 520px;
              left: 550px;
            }

            /* 01 */
            #s-882 {
              top: 10px;
              left: 586px;
            }
            /* 02 */
            #s-883 {
              top: 61px;
              left: 586px;
            }
            /* 03 */
            #s-884 {
              top: 112px;
              left: 586px;
            }
            /* 05 */
            #s-885 {
              top: 214px;
              left: 586px;
            }
            /* 06 */
            #s-886 {
              top: 265px;
              left: 586px;
            }
            /* 07 */
            #s-887 {
              top: 316px;
              left: 586px;
            }
            /* 09 */
            #s-888 {
              top: 418px;
              left: 586px;
            }
            /* 10 */
            #s-889 {
              top: 469px;
              left: 586px;
            }
            /* 11 */
            #s-890 {
              top: 520px;
              left: 586px;
            }

            /* 02 */
            #s-891 {
              top: 61px;
              left: 622px;
            }
            /* 03 */
            #s-892 {
              top: 112px;
              left: 622px;
            }
            /* 05 */
            #s-893 {
              top: 214px;
              left: 622px;
            }
            /* 06 */
            #s-894 {
              top: 265px;
              left: 622px;
            }
            /* 07 */
            #s-895 {
              top: 316px;
              left: 622px;
            }
            /* 09 */
            #s-896 {
              top: 418px;
              left: 622px;
            }
            /* 10 */
            #s-897 {
              top: 469px;
              left: 622px;
            }

            /* 03 */
            #s-898 {
              top: 112px;
              left: 658px;
            }
            /* 05 */
            #s-899 {
              top: 214px;
              left: 658px;
            }
            /* 06 */
            #s-900 {
              top: 265px;
              left: 658px;
            }
            /* 07 */
            #s-901 {
              top: 316px;
              left: 658px;
            }
            /* 09 */
            #s-902 {
              top: 418px;
              left: 658px;
            }

            /* 03 */
            #s-903 {
              top: 112px;
              left: 694px;
            }
            /* 05 */
            #s-904 {
              top: 214px;
              left: 694px;
            }
            /* 06 */
            #s-905 {
              top: 265px;
              left: 694px;
            }
            /* 07 */
            #s-906 {
              top: 316px;
              left: 694px;
            }
            /* 09 */
            #s-907 {
              top: 418px;
              left: 694px;
            }

            /* 03 */
            #s-908 {
              top: 112px;
              left: 730px;
            }
            /* 05 */
            #s-909 {
              top: 214px;
              left: 730px;
            }
            /* 06 */
            #s-910 {
              top: 265px;
              left: 730px;
            }
            /* 07 */
            #s-911 {
              top: 316px;
              left: 730px;
            }
            /* 09 */
            #s-912 {
              top: 418px;
              left: 730px;
            }

            /* SH1 */
            #sh-1 {
              top: 367px;
              left: 214px;
            }
            /* SH2 */
            #sh-2 {
              top: 163px;
              left: 199px;
            }
            /* SH3 */
            #sh-3 {
              top: 367px;
              left: 404px;
            }
            /* SH4 */
            #sh-4 {
              top: 163px;
              left: 618px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
