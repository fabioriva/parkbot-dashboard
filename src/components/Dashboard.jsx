"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Grid, Col, Flex, Button, Card, Title } from "@tremor/react";
import BarChart from "@/components/OperationsBarChart";
import Device from "@/components/Device";
import HistoryList from "@/components/HistoryList";
import Loading from "@/components/Loading";
import Occupancy from "@/components/Occupancy";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ViewMore({ aps, role, roles }) {
  const router = useRouter();
  const t = useTranslations("Buttons");

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
        {t("button-more")}
      </Button>
    </Flex>
  );
}

export default function Dashboard({ aps, json, token, user }) {
  // console.log(json);
  const t = useTranslations("Dashboard");

  const [dashboard, setDashboard] = useState(json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/dashboard`;
  const { data } = useSWR(url, fetcher, {
    fallbackData: dashboard,
    refreshInterval: 1000,
  });
  useEffect(() => setDashboard(data), [data]);

  return (
    <Suspense fallback={<Loading />}>
      <Grid numItems={1} numItemsSm={2} numItemsLg={5} className="gap-3">
        {dashboard.system.map((item, key) => (
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
          <Title className="mb-3">{t("kpi-activity")}</Title>
          <HistoryList data={dashboard.activity.documents} />
          <ViewMore aps={aps} role="history" roles={user.roles} />
        </Card>
        <Col numColSpanMd={2}>
          <Card className="p-3 sm:p-6 self-start">
            <Title className="mb-3">{t("kpi-operations")}</Title>
            <BarChart data={dashboard.operations[0].data} stacked={true} />
            <ViewMore aps={aps} role="statistics" roles={user.roles} />
          </Card>
        </Col>
      </Grid>
    </Suspense>
  );
}
