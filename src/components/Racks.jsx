"use client";

// import Image from "next/image";
import Link from "next-intl/link";
import React from "react";
import { Grid, Flex, Card, Text, Metric, Badge } from "@tremor/react";
// import et200mp from "../../public/et200mp.png";

export default function Racks({ aps, data }) {
  // console.log(data);
  // ADD PROP ONLINE IF ONLINE EMERALD ELSE RED
  return (
    <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
      {data.map((item, key) => (
        <Link href={`/${aps}/racks/${key}`} key={key}>
          <Card
            className="max-w-sm mx-auto hover:bg-emerald-50"
            decoration="left"
            decorationColor="emerald"
          >
            <Flex>
              <div className="truncate">
                <Text>PLC Rack # {item.nr}</Text>
                <Metric>{item.title}</Metric>
              </div>
              <Badge color="emerald">ONLINE</Badge>
            </Flex>
          </Card>
        </Link>
      ))}
    </Grid>
  );
}
