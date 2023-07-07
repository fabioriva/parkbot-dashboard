import clsx from "clsx";
import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { Text, TextInput, Flex, Button } from "@tremor/react";
import Dialog from "@/components/Dialog";
import Tooltip from "@/components/Tooltip";

const Stall = ({ aps, definitions, stall, token, user, view }) => {
  const t = useTranslations("Map");

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [value, setValue] = useState(stall.status);

  const { cards, stalls, stallStatus } = definitions;

  const handleConfirm = async (data) => {
    console.log(data);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/map/edit`;
    const res = await fetch(url, {
      method: "POST",
      // withCredentials: true,
      // credentials: "include",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card: data.status, stall: data.nr }),
    });
    setIsOpen(false);
  };

  const handleOnChange = (e) => {
    const n = parseInt(e.target.value);
    n < 1 || n > cards
      ? setError({ status: true, message: "Out of range" })
      : setError({ status: false, message: "" });
    setValue(e.target.value);
  };

  const handleOpen = () => {
    console.log(stall);
    if (user.rights.some((right) => right === "edit-stall")) {
      setIsOpen(true);
    }
  };

  const tooltip =
    stall.status === 0
      ? t("stallEmpty", { nr: stall.nr })
      : stall.status === stallStatus.LOCK
      ? t.rich("stallLock", { nr: stall.nr, date: stall.date, br: <br /> })
      : t.rich("stallBusy", {
          nr: stall.nr,
          card: stall.status,
          date: stall.date,
          br: <br />,
        });

  return (
    <Fragment>
      <Tooltip tooltip={tooltip}>
        <div
          className={clsx(
            "absolute h-[30px] w-[40px] leading-[30px] text-center text-sm s",
            {
              "bg-red-500": stall.status !== 0,
              "bg-emerald-500": stall.status === stallStatus.FREE,
              "bg-violet-500": stall.status === stallStatus.LOCK,
              "bg-sky-500": stall.status === stallStatus.PAPA,
              "bg-yellow-500": stall.status === stallStatus.RSVD,
            }
          )}
          id={"s-" + stall.nr}
        >
          <span
            className="hover:cursor-pointer hover:font-bold no-underline"
            onClick={handleOpen}
          >
            {view === "1"
              ? stall.status
              : view === "2"
              ? stall.nr
              : view === "3"
              ? stall.size
              : "---"}
          </span>
        </div>
      </Tooltip>
      <Dialog isOpen={isOpen} title={t("dialogTitle")}>
        <div className="mt-3">
          <Text>{t("dialogText", { nr: stall.nr })}</Text>
        </div>
        {/* <pre className="mt-3">Stall: {JSON.stringify(stall, null, 2)}</pre> */}
        <TextInput
          className="mt-3"
          placeholder={t("dialogTextInput", {
            min: 1,
            max: stalls,
          })}
          type="number"
          error={error.status}
          errorMessage={error.message}
          min={1}
          max={cards}
          value={value}
          onChange={handleOnChange}
        />
        <Flex justifyContent="end" className="space-x-3 mt-6">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            {t("dialogCancel")}
          </Button>
          <Button
            color="red"
            variant="primary"
            onClick={() => handleConfirm({ ...stall, status: value })}
            disabled={error.status}
          >
            {t("dialogCard")}
          </Button>
          <Button
            color="emerald"
            variant="primary"
            onClick={() =>
              handleConfirm({ ...stall, status: stallStatus.FREE })
            }
          >
            {t("dialogClear")}
          </Button>
          <Button
            color="violet"
            variant="primary"
            onClick={() =>
              handleConfirm({ ...stall, status: stallStatus.LOCK })
            }
          >
            {t("dialogLock")}
          </Button>
        </Flex>
      </Dialog>
    </Fragment>
  );
};

const Level = ({ aps, definitions, level, token, user, view }) => {
  return (
    <div className="mt-3">
      <Text>
        {level.label}: {level.min} - {level.max}
      </Text>
      <div
        className="relative bg-transparent border border-dotted dark:border-white w-full l"
        id={"l-" + level.nr}
      >
        {level.elevators &&
          level.elevators.map((el, i) => (
            <div
              className="absolute h-[30px] w-[40px] leading-[30px] bg-slate-400 text-center text-sm el"
              id={el.id}
              key={i}
            >
              {el.label}
            </div>
          ))}
        {level.stalls.map((stall, i) => (
          <Stall
            aps={aps}
            definitions={definitions}
            stall={stall}
            // stallStatus={stallStatus}
            token={token}
            user={user}
            view={view}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Level;

// export default function Map({ map, filter, handleOpen }) {
//   return (
//     <>
//       {map.levels.map((item, key) => (
//         <Level
//           key={key}
//           level={item}
//           stallStatus={map.definitions.stallStatus}
//           view={filter}
//           openModal={handleOpen}
//         />
//       ))}
//     </>
//   );
// }
