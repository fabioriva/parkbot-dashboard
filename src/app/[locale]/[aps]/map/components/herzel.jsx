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
              height: 222px;
              width: 660px;
            }
            #el-1 {
              top: 64px;
              left: 371px;
            }
            #el-2 {
              top: 64px;
              left: 412px;
            }
            /* P1 */
            #s-1 {
              top: 64px;
              left: 617px;
            }
            #s-2 {
              top: 33px;
              left: 617px;
            }
            #s-3 {
              top: 64px;
              left: 576px;
            }
            #s-4 {
              top: 33px;
              left: 576px;
            }
            #s-5 {
              top: 64px;
              left: 535px;
            }
            #s-6 {
              top: 33px;
              left: 535px;
            }
            #s-7 {
              top: 126px;
              left: 535px;
            }
            #s-8 {
              top: 157px;
              left: 535px;
            }
            #s-9 {
              top: 188px;
              left: 535px;
            }
            #s-10 {
              top: 64px;
              left: 494px;
            }
            #s-11 {
              top: 33px;
              left: 494px;
            }
            #s-12 {
              top: 126px;
              left: 494px;
            }
            #s-13 {
              top: 157px;
              left: 494px;
            }
            #s-14 {
              top: 188px;
              left: 494px;
            }
            #s-15 {
              top: 64px;
              left: 453px;
            }
            #s-16 {
              top: 33px;
              left: 453px;
            }
            #s-17 {
              top: 33px;
              left: 412px;
            }
            #s-18 {
              top: 126px;
              left: 412px;
            }
            #s-19 {
              top: 157px;
              left: 412px;
            }
            #s-20 {
              top: 188px;
              left: 412px;
            }
            #s-21 {
              top: 126px;
              left: 371px;
            }
            #s-22 {
              top: 157px;
              left: 371px;
            }
            #s-23 {
              top: 188px;
              left: 371px;
            }
            #s-24 {
              top: 33px;
              left: 371px;
            }
            #s-25 {
              top: 64px;
              left: 330px;
            }
            #s-26 {
              top: 33px;
              left: 330px;
            }
            #s-27 {
              top: 64px;
              left: 289px;
            }
            #s-28 {
              top: 64px;
              left: 166px;
            }
            #s-29 {
              top: 33px;
              left: 166px;
            }
            #s-30 {
              top: 126px;
              left: 125px;
            }
            #s-31 {
              top: 157px;
              left: 125px;
            }
            #s-32 {
              top: 126px;
              left: 84px;
            }
            #s-33 {
              top: 157px;
              left: 84px;
            }
            #s-34 {
              top: 64px;
              left: 43px;
            }
            #s-35 {
              top: 33px;
              left: 43px;
            }
            #s-36 {
              top: 2px;
              left: 43px;
            }
            #s-37 {
              top: 64px;
              left: 2px;
            }
            #s-38 {
              top: 33px;
              left: 2px;
            }

            // #s-32 {
            //   top: 162px;
            //   left: 80px;
            //   transform: rotate(-80deg);
            // }
            // #s-33 {
            //   top: 204px;
            //   left: 73px;
            //   transform: rotate(-80deg);
            // }

            // #s-34 {
            //   top: 88px;
            //   left: 77px;
            //   transform: rotate(75deg);
            // }
            // #s-35 {
            //   top: 48px;
            //   left: 66px;
            //   transform: rotate(75deg);
            // }
            // #s-36 {
            //   top: 8px;
            //   left: 55px;
            //   transform: rotate(75deg);
            // }

            // #s-37 {
            //   top: 108px;
            //   left: 38px;
            //   transform: rotate(45deg);
            // }
            // #s-38 {
            //   top: 78px;
            //   left: 9px;
            //   transform: rotate(45deg);
            // }

            /* P2 */
            #s-39 {
              top: 64px;
              left: 617px;
            }
            #s-40 {
              top: 33px;
              left: 617px;
            }
            #s-41 {
              top: 64px;
              left: 576px;
            }
            #s-42 {
              top: 33px;
              left: 576px;
            }
            #s-43 {
              top: 64px;
              left: 535px;
            }
            #s-44 {
              top: 33px;
              left: 535px;
            }
            #s-45 {
              top: 126px;
              left: 535px;
            }
            #s-46 {
              top: 157px;
              left: 535px;
            }
            #s-47 {
              top: 188px;
              left: 535px;
            }
            #s-48 {
              top: 64px;
              left: 494px;
            }
            #s-49 {
              top: 33px;
              left: 494px;
            }
            #s-50 {
              top: 126px;
              left: 494px;
            }
            #s-51 {
              top: 157px;
              left: 494px;
            }
            #s-52 {
              top: 188px;
              left: 494px;
            }
            #s-53 {
              top: 64px;
              left: 453px;
            }
            #s-54 {
              top: 33px;
              left: 453px;
            }
            #s-55 {
              top: 33px;
              left: 412px;
            }
            #s-56 {
              top: 126px;
              left: 412px;
            }
            #s-57 {
              top: 157px;
              left: 412px;
            }
            #s-58 {
              top: 188px;
              left: 412px;
            }
            #s-59 {
              top: 126px;
              left: 371px;
            }
            #s-60 {
              top: 157px;
              left: 371px;
            }
            #s-61 {
              top: 188px;
              left: 371px;
            }
            #s-62 {
              top: 33px;
              left: 371px;
            }
            #s-63 {
              top: 64px;
              left: 330px;
            }
            #s-64 {
              top: 33px;
              left: 330px;
            }
            #s-65 {
              top: 64px;
              left: 289px;
            }
            #s-66 {
              top: 64px;
              left: 166px;
            }
            #s-67 {
              top: 33px;
              left: 166px;
            }
            #s-68 {
              top: 126px;
              left: 125px;
            }
            #s-69 {
              top: 157px;
              left: 125px;
            }
            #s-70 {
              top: 126px;
              left: 84px;
            }
            #s-71 {
              top: 157px;
              left: 84px;
            }
            #s-72 {
              top: 188px;
              left: 84px;
            }
            #s-73 {
              top: 64px;
              left: 43px;
            }
            #s-74 {
              top: 33px;
              left: 43px;
            }
            #s-75 {
              top: 2px;
              left: 43px;
            }
            #s-76 {
              top: 64px;
              left: 2px;
            }
            #s-77 {
              top: 33px;
              left: 2px;
            }
            /* P3 */
            #s-78 {
              top: 64px;
              left: 576px;
            }
            #s-79 {
              top: 33px;
              left: 576px;
            }
            #s-80 {
              top: 64px;
              left: 535px;
            }
            #s-81 {
              top: 33px;
              left: 535px;
            }
            #s-82 {
              top: 126px;
              left: 535px;
            }
            #s-83 {
              top: 157px;
              left: 535px;
            }
            #s-84 {
              top: 188px;
              left: 535px;
            }
            #s-85 {
              top: 64px;
              left: 494px;
            }
            #s-86 {
              top: 33px;
              left: 494px;
            }
            #s-87 {
              top: 126px;
              left: 494px;
            }
            #s-88 {
              top: 64px;
              left: 453px;
            }
            #s-89 {
              top: 33px;
              left: 453px;
            }
            #s-90 {
              top: 33px;
              left: 412px;
            }
            #s-91 {
              top: 126px;
              left: 412px;
            }
            #s-92 {
              top: 157px;
              left: 412px;
            }
            #s-93 {
              top: 188px;
              left: 412px;
            }
            #s-94 {
              top: 126px;
              left: 371px;
            }
            #s-95 {
              top: 157px;
              left: 371px;
            }
            #s-96 {
              top: 188px;
              left: 371px;
            }
            #s-97 {
              top: 33px;
              left: 371px;
            }
            #s-98 {
              top: 64px;
              left: 330px;
            }
            #s-99 {
              top: 33px;
              left: 330px;
            }
            #s-100 {
              top: 64px;
              left: 289px;
            }
            #s-101 {
              top: 64px;
              left: 166px;
            }
            #s-102 {
              top: 33px;
              left: 166px;
            }
            #s-103 {
              top: 126px;
              left: 125px;
            }
            #s-104 {
              top: 157px;
              left: 125px;
            }
            #s-105 {
              top: 126px;
              left: 84px;
            }
            #s-106 {
              top: 157px;
              left: 84px;
            }
            #s-107 {
              top: 188px;
              left: 84px;
            }
            #s-108 {
              top: 64px;
              left: 43px;
            }
            #s-109 {
              top: 33px;
              left: 43px;
            }
            #s-110 {
              top: 2px;
              left: 43px;
            }
            #s-111 {
              top: 64px;
              left: 2px;
            }
            #s-112 {
              top: 33px;
              left: 2px;
            }
          `}</style>
        </Card>
      </Col>
      <Card className="max-w-sm self-start">{Occupancy}</Card>
    </Grid>
  );
}
