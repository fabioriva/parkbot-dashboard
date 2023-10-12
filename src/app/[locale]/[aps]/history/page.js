import { cookies } from "next/headers";
import { format, endOfDay, startOfDay, subDays } from "date-fns";
import Error from "@/components/Error";
import History from "@/components/History";
import fetch from "@/lib/fetch";

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  const strFrom = format(
    subDays(startOfDay(new Date()), 1),
    "yyyy-MM-dd HH:mm:ss"
  );
  const strTo = format(endOfDay(new Date()), "yyyy-MM-dd HH:mm:ss");
  const filter = "a";
  const query = `system=0&dateFrom=${strFrom}&dateTo=${strTo}&filter=${filter}&device=0&number=0`;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/history?${query}`;
  const json = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: "Bearer " + token },
  });
  if (!json) {
    return <Error />;
  }
  return <History aps={params.aps} json={json} token={token} />;
}
