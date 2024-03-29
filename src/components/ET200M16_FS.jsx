import clsx from "clsx";
import BitInfo from "@/components/BitInfo";
import Tooltip from "@/components/Tooltip";

function Bit({ item, nr }) {
  const { addr, label, status } = item;
  const bit = addr.slice(-1);
  const tooltip = <BitInfo bit={item} />;
  return (
    <div className="cursor-default">
      <Tooltip tooltip={tooltip}>
        <span
          className="absolute h-[18px] w-[45px] bg-yellow-200 border-b border-slate-100 pl-1 text-left text-[0.7rem] text-slate-950"
          id={"id-".concat(nr, bit)}
        >
          {label}
        </span>
      </Tooltip>
      <Tooltip tooltip={tooltip}>
        <span
          className={clsx(
            "absolute h-[18px] w-[12px] text-center text-xs text-slate-950",
            {
              "bg-slate-200": !status,
              "bg-green-500": status,
            }
          )}
          id={"st-".concat(nr, bit)}
        >
          {bit}
        </span>
      </Tooltip>
      {/* Dummy */}
      <div
        className="absolute h-[18px] w-[45px] bg-yellow-200 border-b border-slate-100 pl-1 text-left text-[0.7rem] text-slate-950"
        id={"id-".concat(nr + 2, bit)}
      />
      <div
        className="absolute h-[18px] w-[12px] text-center text-xs text-slate-950 bg-slate-200"
        id={"st-".concat(nr + 2, bit)}
      />
      <style jsx>
        {`
          #id-00 {
            left: 22px;
            top: 16px;
          }
          #st-00 {
            left: 10px;
            top: 16px;
          }
          #id-20 {
            left: 22px;
            top: 34px;
          }
          #st-20 {
            left: 10px;
            top: 34px;
          }
          #id-01 {
            left: 22px;
            top: 52px;
          }
          #st-01 {
            left: 10px;
            top: 52px;
          }
          #id-21 {
            left: 22px;
            top: 70px;
          }
          #st-21 {
            left: 10px;
            top: 70px;
          }
          #id-02 {
            left: 22px;
            top: 88px;
          }
          #st-02 {
            left: 10px;
            top: 88px;
          }
          #id-22 {
            left: 22px;
            top: 106px;
          }
          #st-22 {
            left: 10px;
            top: 106px;
          }
          #id-03 {
            left: 22px;
            top: 124px;
          }
          #st-03 {
            left: 10px;
            top: 124px;
          }
          #id-23 {
            left: 22px;
            top: 142px;
          }
          #st-23 {
            left: 10px;
            top: 142px;
          }

          #id-04 {
            left: 22px;
            top: 195px;
          }
          #st-04 {
            left: 10px;
            top: 195px;
          }
          #id-24 {
            left: 22px;
            top: 213px;
          }
          #st-24 {
            left: 10px;
            top: 213px;
          }
          #id-05 {
            left: 22px;
            top: 231px;
          }
          #st-05 {
            left: 10px;
            top: 231px;
          }
          #id-25 {
            left: 22px;
            top: 249px;
          }
          #st-25 {
            left: 10px;
            top: 249px;
          }
          #id-06 {
            left: 22px;
            top: 267px;
          }
          #st-06 {
            left: 10px;
            top: 267px;
          }
          #id-26 {
            left: 22px;
            top: 285px;
          }
          #st-26 {
            left: 10px;
            top: 285px;
          }
          #id-07 {
            left: 22px;
            top: 303px;
          }
          #st-07 {
            left: 10px;
            top: 303px;
          }
          #id-27 {
            left: 22px;
            top: 321px;
          }
          #st-27 {
            left: 10px;
            top: 321px;
          }

          #id-10 {
            left: 68px;
            top: 16px;
          }
          #st-10 {
            left: 113px;
            top: 16px;
          }
          #id-30 {
            left: 68px;
            top: 34px;
          }
          #st-30 {
            left: 113px;
            top: 34px;
          }
          #id-11 {
            left: 68px;
            top: 52px;
          }
          #st-11 {
            left: 113px;
            top: 52px;
          }
          #id-31 {
            left: 68px;
            top: 70px;
          }
          #st-31 {
            left: 113px;
            top: 70px;
          }
          #id-12 {
            left: 68px;
            top: 88px;
          }
          #st-12 {
            left: 113px;
            top: 88px;
          }
          #id-32 {
            left: 68px;
            top: 106px;
          }
          #st-32 {
            left: 113px;
            top: 106px;
          }
          #id-13 {
            left: 68px;
            top: 124px;
          }
          #st-13 {
            left: 113px;
            top: 124px;
          }
          #id-33 {
            left: 68px;
            top: 142px;
          }
          #st-33 {
            left: 113px;
            top: 142px;
          }

          #id-14 {
            left: 68px;
            top: 195px;
          }
          #st-14 {
            left: 113px;
            top: 195px;
          }
          #id-34 {
            left: 68px;
            top: 213px;
          }
          #st-34 {
            left: 113px;
            top: 213px;
          }
          #id-15 {
            left: 68px;
            top: 231px;
          }
          #st-15 {
            left: 113px;
            top: 231px;
          }
          #id-35 {
            left: 68px;
            top: 249px;
          }
          #st-35 {
            left: 113px;
            top: 249px;
          }
          #id-16 {
            left: 68px;
            top: 267px;
          }
          #st-16 {
            left: 113px;
            top: 267px;
          }
          #id-36 {
            left: 68px;
            top: 285px;
          }
          #st-36 {
            left: 113px;
            top: 285px;
          }
          #id-17 {
            left: 68px;
            top: 303px;
          }
          #st-17 {
            left: 113px;
            top: 303px;
          }
          #id-37 {
            left: 68px;
            top: 321px;
          }
          #st-37 {
            left: 113px;
            top: 321px;
          }
        `}
      </style>
    </div>
  );
}

function Byte({ byte, nr }) {
  const { bits, label } = byte;
  return (
    <div>
      <span
        className="absolute bg-[#c0dcec] h-[16px] w-[115px] flex items-center justify-center text-xs text-blue-500"
        id={"label-" + nr}
      >
        {label}
      </span>
      {bits.map((item, key) => (
        <Bit key={key} item={item} nr={nr} />
      ))}
      <style jsx>
        {`
          #label-0 {
            left: 10px;
            top: 161px;
          }
          #label-1 {
            left: 10px;
            top: 178px;
          }
          #label-2 {
            left: 68px;
            top: 161px;
          }
          #label-3 {
            left: 68px;
            top: 178px;
          }
        `}
      </style>
    </div>
  );
}

export default function Module({ module }) {
  const { bytes, nr, type } = module;
  return (
    <div
      className="absolute bg-[#64748b] h-[360px] w-[136px] top-1"
      id={"card-" + nr}
    >
      <span className="absolute bottom-0 left-0 w-full text-center text-xs text-white">
        {type}
      </span>
      {bytes.map((item, key) => (
        <Byte key={key} byte={item} nr={key} />
      ))}
      <style jsx>
        {`
          #card-1 {
            left: 4px;
          }
          #card-2 {
            left: 142px;
          }
          #card-3 {
            left: 280px;
          }
          #card-4 {
            left: 418px;
          }
          #card-5 {
            left: 556px;
          }
          #card-6 {
            left: 694px;
          }
          #card-7 {
            left: 832px;
          }
          #card-8 {
            left: 970px;
          }
          #card-9 {
            left: 1108px;
          }
        `}
      </style>
    </div>
  );
}
