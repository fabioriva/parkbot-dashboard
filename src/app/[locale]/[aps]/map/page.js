import { lazy, Fragment, Suspense } from "react";
import { cookies } from "next/headers";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { verifyAuth } from "@/lib/auth";
import fetch from "@/lib/fetch";

const mapList = {
  alumim: lazy(() => import("@/maps/alumim")),
  "18017K": lazy(() => import("@/maps/18017K")),
  bmc: lazy(() => import("@/maps/bmc")),
  chandan: lazy(() => import("@/maps/chandan")),
  // chiattone: lazy(() => import("src/maps/chiattone")),
  // donini: lazy(() => import("src/maps/donini")),
  // hdante: lazy(() => import("src/maps/hdante")),
  ironbank: lazy(() => import("@/maps/ironbank")),
  // jhn: lazy(() => import("src/maps/jhn")),
  // jhs: lazy(() => import("src/maps/jhs")),
  kg: lazy(() => import("@/maps/kg")),
  knl: lazy(() => import("@/maps/kn")),
  knr: lazy(() => import("@/maps/kn")),
  mesacon: lazy(() => import("@/maps/mesacon")),
  muse: lazy(() => import("@/maps/muse")),
  nhidcl: lazy(() => import("@/maps/nhidcl")),
  nyu: lazy(() => import("@/maps/nyu")),
  parshvnath: lazy(() => import("@/maps/parshvnath")),
  // qihe1: lazy(() => import("src/maps/qihe")),
  // qihe2: lazy(() => import("src/maps/qihe")),
  // smoritz: lazy(() => import("src/maps/smoritz")),
  teenmurty: lazy(() => import("@/maps/teenmurty")),
  trumpeldor: lazy(() => import("@/maps/trumpeldor")),
  vl: lazy(() => import("@/maps/vl")),
  wallstreet: lazy(() => import("@/maps/wallstreet")),
  washingtonblvd: lazy(() => import("@/maps/8888")),
  // xian: lazy(() => import("src/maps/xian")),
};

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/map`;
  const json = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: "Bearer " + token },
  });
  if (!json) {
    return <Error />;
  }
  const DynamicComponent = mapList[params.aps];
  const { payload } = await verifyAuth(token);
  return (
    <Fragment>
      {DynamicComponent !== undefined && (
        <Suspense fallback={<Loading />}>
          <DynamicComponent
            aps={params.aps}
            json={json}
            token={token}
            user={payload}
          />
        </Suspense>
      )}
    </Fragment>
  );
}
