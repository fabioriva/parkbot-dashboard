import clsx from "clsx";
import toast from "react-hot-toast";

export function actionResponse({ message, severity }) {
  toast.custom(
    (t) => (
      <div
        className={clsx("px-6 py-3 shadow-md rounded text-sm", {
          "bg-red-500": severity === "error",
          "bg-green-500": severity === "success",
          "bg-yellow-500": severity === "warning",
        })}
      >
        {message}
      </div>
    ),
    { position: "top-center" }
  );
}

export default async function fetcher(...args) {
  try {
    const res = await fetch(...args);
    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const json = await res.json();
    if (res.ok) {
      return json;
    }
    const error = new Error(response.statusText);
    error.response = res;
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    // return error
    return undefined;
  }
}
