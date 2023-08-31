import { cookies } from "next/headers";
import Settings from "@/components/Settings";
import Error from "@/components/Error";
import { verifyAuth } from "@/lib/auth";
import fetch from "@/lib/fetch";

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  const { payload } = await verifyAuth(token);
  return <Settings aps={params.aps} token={token} user={payload} />;
}
