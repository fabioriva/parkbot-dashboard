import { cookies } from "next/headers";
import Error from "@/components/Error";
import Rack from "@/components/Rack";
import fetch from "@/lib/fetch";

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/rack/${params.nr}`;
  const json = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: "Bearer " + token },
  });
  if (!json) {
    return <Error />;
  }
  return <Rack aps={params.aps} data={json} nr={params.nr} />;
}
