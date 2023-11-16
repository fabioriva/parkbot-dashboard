"use client";

import React, { useState, useEffect } from "react";
import { Button, Text } from "@tremor/react";
import { useData } from "@/hooks/useWebSocket";

export default function Page({ params }) {
  const [ws, setWs] = useState("");
  const [wsMessages, setWsMessages] = useState([]);
  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${params.aps}/mqtt`;
  const { data } = useData(url, {
    initialData: "",
  });
  // console.log(data);
  useEffect(() => {
    setWs(data);
    // const objDiv = document.getElementById("log");
    // objDiv.scrollTop = objDiv.scrollHeight;
  }, [data]);
  // console.log(typeof ws, ws);
  useEffect(() => setWsMessages([...wsMessages, data]), [data]);
  // console.log(typeof wsMessages, wsMessages);

  return (
    <>
      <h1 className="dark:text-white text-lg">MQTT over WebSockets</h1>
      <Text className="mt-3">Last message:</Text>
      <Text className="mt-3">
        {ws && (
          <span>
            {ws.date}
            {" >>> "}
            {ws.message}
          </span>
        )}
      </Text>
      <Text className="mt-3">Incoming messages:</Text>
      <div
        className="bg-white dark:bg-slate-900 my-3 p-3 text-sm text-slate-700 dark:text-slate-50 overflow-auto border border-1 border-slate-300 dark:border-slate-800 rounded-lg h-[312px]"
        id="log"
      >
        {wsMessages.map(
          (m) =>
            m && (
              // <pre key={Math.random()}>
              //   {m.date} {m.topic}
              //   {" >>> "}
              //   {m.message}
              // </pre>
              <pre key={Math.random()}>
                <span className="mr-2">{m.date}</span>
                <span className="mr-2 text-blue-500">{m.device}</span>
                <span className="mr-2 text-yellow-500">{m.cycle}</span>
                {m.message}
              </pre>
            )
        )}
      </div>
      {/* <Textarea
        className="h-[300px]"
        // onChange={(e) => setValue(e.target.value)}
        id="mqtt_messages"
        // placeholder="Start typing here..."
        // value={wsMessages.map((m) => JSON.stringify(m))}
        value={wsMessages.map((m) => `${m.date} ${m.message}\r`)}
      /> */}
      <Button onClick={() => setWsMessages(() => [])}>Clear Messages</Button>
    </>
  );
}
