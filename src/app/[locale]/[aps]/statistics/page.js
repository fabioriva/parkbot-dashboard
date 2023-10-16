import { cookies } from "next/headers";
import { format, subDays } from "date-fns";
import Error from "@/components/Error";
// import Statistics from "@/components/Statistics";
import Statistics from "@/components/Statistics";
import fetch from "@/lib/fetch";

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  // statistics
  // const strDate = format(subDays(new Date(), 1), "yyyy-MM-dd");
  // const query = `dateString=${strDate}`;
  // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/statistics?${query}`;
  // statistics by range
  const strFrom = format(subDays(new Date(), 7), "yyyy-MM-dd");
  const strTo = format(new Date(), "yyyy-MM-dd");
  const query = `dateFrom=${strFrom}&dateTo=${strTo}`;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/statistics?${query}`;
  const json = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: "Bearer " + token },
  });
  if (!json) {
    return <Error />;
  }
  return <Statistics aps={params.aps} data={json} token={token} />;
}
