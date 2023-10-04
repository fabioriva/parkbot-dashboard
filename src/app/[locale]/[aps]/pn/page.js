import { cookies } from "next/headers";
import Error from "@/components/Error";
import Profinet from "@/components/Profinet";
import fetch from "@/lib/fetch";

import { Grid, Flex, Card, Text, Metric, Badge } from "@tremor/react";

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/pn`;
  const json = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: "Bearer " + token },
  });
  if (!json) {
    return <Error />;
  }
  return <Profinet aps={params.aps} json={json} />;
}
