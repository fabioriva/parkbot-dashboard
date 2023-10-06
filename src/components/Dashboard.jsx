"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Grid, Col, Button, Card, Title } from "@tremor/react";
import BarChart from "@/components/OperationsBarChart";
import Device from "@/components/Device";
import HistoryList from "@/components/HistoryList";
import Loading from "@/components/Loading";
import Occupancy from "@/components/Occupancy";
import { isAuthorized } from "@/lib/auth";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

function More({ aps, role, roles }) {
  const router = useRouter();
  const t = useTranslations("Buttons");

  return (
    <Button
      className="mt-6"
      size="xs"
      variant="light"
      icon={ArrowRightIcon}
      iconPosition="right"
      disabled={!isAuthorized(role, roles)}
      onClick={() => router.push(`/${aps}/${role}`)}
    >
      {t("button-more")}
    </Button>
  );
}

export default function Dashboard({ aps, json, token, user }) {
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
          <More aps={aps} role="map" roles={user.roles} />
        </Card>
        <Card className="p-3 sm:p-6 self-start">
          <Title className="mb-3">{t("kpi-activity")}</Title>
          <HistoryList data={dashboard.activity.documents} />
          <More aps={aps} role="history" roles={user.roles} />
        </Card>
        <Col numColSpanMd={2}>
          <Card className="p-3 sm:p-6 self-start">
            <Title className="mb-3">{t("kpi-operations")}</Title>
            <BarChart data={dashboard.operations[0].data} stacked={true} />
            <More aps={aps} role="statistics" roles={user.roles} />
          </Card>
        </Col>
      </Grid>
    </Suspense>
  );
}
