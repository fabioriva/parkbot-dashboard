"use client";

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Grid, Col, Flex, Button, Card, Title } from "@tremor/react";
import BarChart from "@/components/OperationsBarChart";
import Device from "@/components/Device";
import HistoryList from "@/components/HistoryList";
import Occupancy from "@/components/Occupancy";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ViewMore({ aps, role, roles }) {
  const router = useRouter();
  return (
    <Flex className="mt-6 pt-4 border-t">
      <Button
        size="xs"
        variant="light"
        icon={ArrowRightIcon}
        iconPosition="right"
        disabled={!roles.some((role) => role === role)}
        onClick={() => router.push(`/${aps}/${role}`)}
      >
        View more
      </Button>
    </Flex>
  );
}

export default function Dashboard({ aps, json, token, user }) {
  // console.log(json);
  const [dashboard, setDashboard] = useState(json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/dashboard`;
  const { data } = useSWR(url, fetcher, {
    fallbackData: dashboard,
    refreshInterval: 1000,
  });
  useEffect(() => setDashboard(data), [data]);

  return (
    <Fragment>
      <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-3">
        {dashboard.system.devices.map((item, key) => (
          <Device aps={aps} data={item} token={token} user={user} key={key} />
        ))}
      </Grid>
      <div className="my-3" />
      <Grid numItemsMd={2} numItemsLg={4} className="gap-3">
        <Card className="p-3 sm:p-6 self-start">
          <Occupancy occupancy={dashboard.occupancy} />
          <ViewMore aps={aps} role="map" roles={user.roles} />
        </Card>
        <Card className="p-3 sm:p-6 self-start">
          <Title className="mb-3">Recent activity</Title>
          <HistoryList data={dashboard.activity.documents} />
          <ViewMore aps={aps} role="history" roles={user.roles} />
        </Card>
        <Col numColSpanMd={2}>
          <Card className="p-3 sm:p-6 self-start">
            <Title className="mb-3">Daily operations</Title>
            <BarChart data={dashboard.operations[0].data} stacked={true} />
            <ViewMore aps={aps} role="statistics" roles={user.roles} />
          </Card>
        </Col>
      </Grid>
    </Fragment>
  );
}
