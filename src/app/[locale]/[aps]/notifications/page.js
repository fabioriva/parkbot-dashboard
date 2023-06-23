import { cookies } from "next/headers";
import Error from "@/components/Error";
import MailingList from "@/components/MailingList";
import { verifyAuth } from "@/lib/auth";
import fetch from "@/lib/fetch";

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/mailingList`;
  const json = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: "Bearer " + token },
  });
  if (!json) {
    return <Error />;
  }
  const { payload } = await verifyAuth(token);
  return (
    <MailingList aps={params.aps} json={json} token={token} user={payload} />
  );
}
