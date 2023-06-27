import { lazy, Fragment, Suspense } from "react";
import { cookies } from "next/headers";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { verifyAuth } from "@/lib/auth";
import fetch from "@/lib/fetch";

const mapList = {
  // alumim: lazy(() => import("src/maps/alumim")),
  "18017K": lazy(() => import("@/maps/18017K")),
  // bmc: lazy(() => import("src/maps/bmc")),
  // chandan: lazy(() => import("src/maps/chandan")),
  // chiattone: lazy(() => import("src/maps/chiattone")),
  // donini: lazy(() => import("src/maps/donini")),
  // hdante: lazy(() => import("src/maps/hdante")),
  ironbank: lazy(() => import("@/maps/ironbank")),
  // jhn: lazy(() => import("src/maps/jhn")),
  // jhs: lazy(() => import("src/maps/jhs")),
  // kg: lazy(() => import("src/maps/kg")),
  // knl: lazy(() => import("src/maps/kn")),
  // knr: lazy(() => import("src/maps/kn")),
  muse: lazy(() => import("@/maps/muse")),
  // nhidcl: lazy(() => import("src/maps/nhidcl")),
  nyu: lazy(() => import("@/maps/nyu")),
  // parshvnath: lazy(() => import("src/maps/parshvnath")),
  // qihe1: lazy(() => import("src/maps/qihe")),
  // qihe2: lazy(() => import("src/maps/qihe")),
  // smoritz: lazy(() => import("src/maps/smoritz")),
  // teenmurty: lazy(() => import("src/maps/teenmurty")),
  // trumpeldor: lazy(() => import("src/maps/trumpeldor")),
  // vl: lazy(() => import("src/maps/vl")),
  wallstreet: lazy(() => import("@/maps/wallstreet")),
  // washingtonblvd: lazy(() => import("src/maps/washingtonblvd")),
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
