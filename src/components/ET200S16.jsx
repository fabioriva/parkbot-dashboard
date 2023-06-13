import clsx from "clsx";
import Tooltip from "./Tooltip";

function Bit({ item, nr }) {
  const { addr, label, status } = item;
  const bit = addr.slice(-1);
  const tooltip = (
    <ul>
      <li>{addr}</li>
      <li>{label}</li>
      <li>{label} info</li>
    </ul>
  );
  return (
    <div className="cursor-default">
      <Tooltip tooltip={tooltip}>
        <span
          className="absolute h-[18px] w-[34px] bg-white border-b border-slate-100 pl-0.5 text-left text-[0.65rem] text-slate-950"
          id={"id-".concat(nr, bit)}
        >
          {label}
        </span>
      </Tooltip>
      <span
        className="absolute h-[18px] w-[12px] text-center text-xs text-slate-100"
        id={"nr-".concat(nr, bit)}
      >
        .{bit}
      </span>
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
      <style jsx>
        {`
          #id-00 {
            left: 10px;
            top: 16px;
          }
          #id-01 {
            left: 10px;
            top: 34px;
          }
          #id-02 {
            left: 10px;
            top: 52px;
          }
          #id-03 {
            left: 10px;
            top: 70px;
          }
          #id-04 {
            left: 10px;
            top: 88px;
          }
          #id-05 {
            left: 10px;
            top: 106px;
          }
          #id-06 {
            left: 10px;
            top: 124px;
          }
          #id-07 {
            left: 10px;
            top: 142px;
          }

          #nr-00 {
            left: 24px;
            top: 203px;
          }
          #nr-01 {
            left: 64px;
            top: 203px;
          }
          #nr-02 {
            left: 24px;
            top: 220px;
          }
          #nr-03 {
            left: 64px;
            top: 220px;
          }
          #nr-04 {
            left: 24px;
            top: 237px;
          }
          #nr-05 {
            left: 64px;
            top: 237px;
          }
          #nr-06 {
            left: 24px;
            top: 254px;
          }
          #nr-07 {
            left: 64px;
            top: 254px;
          }

          #st-00 {
            left: 10px;
            top: 203px;
          }
          #st-01 {
            left: 50px;
            top: 203px;
          }
          #st-02 {
            left: 10px;
            top: 220px;
          }
          #st-03 {
            left: 50px;
            top: 220px;
          }
          #st-04 {
            left: 10px;
            top: 237px;
          }
          #st-05 {
            left: 50px;
            top: 237px;
          }
          #st-06 {
            left: 10px;
            top: 254px;
          }
          #st-07 {
            left: 50px;
            top: 254px;
          }

          #id-10 {
            left: 44px;
            top: 16px;
          }
          #id-11 {
            left: 44px;
            top: 34px;
          }
          #id-12 {
            left: 44px;
            top: 52px;
          }
          #id-13 {
            left: 44px;
            top: 70px;
          }
          #id-14 {
            left: 44px;
            top: 88px;
          }
          #id-15 {
            left: 44px;
            top: 106px;
          }
          #id-16 {
            left: 44px;
            top: 124px;
          }
          #id-17 {
            left: 44px;
            top: 142px;
          }

          #nr-10 {
            left: 24px;
            top: 271px;
          }
          #nr-11 {
            left: 64px;
            top: 271px;
          }
          #nr-12 {
            left: 24px;
            top: 288px;
          }
          #nr-13 {
            left: 64px;
            top: 288px;
          }
          #nr-14 {
            left: 24px;
            top: 305px;
          }
          #nr-15 {
            left: 64px;
            top: 305px;
          }
          #nr-16 {
            left: 24px;
            top: 322px;
          }
          #nr-17 {
            left: 64px;
            top: 322px;
          }

          #st-10 {
            left: 10px;
            top: 271px;
          }
          #st-11 {
            left: 50px;
            top: 271px;
          }
          #st-12 {
            left: 10px;
            top: 288px;
          }
          #st-13 {
            left: 50px;
            top: 288px;
          }
          #st-14 {
            left: 10px;
            top: 305px;
          }
          #st-15 {
            left: 50px;
            top: 305px;
          }
          #st-16 {
            left: 10px;
            top: 322px;
          }
          #st-17 {
            left: 50px;
            top: 322px;
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
        className="absolute bg-[#c0dcec] h-[16px] w-[68px] flex items-center justify-center text-xs"
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
            top: 162px;
          }
          #label-1 {
            left: 10px;
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
      className="absolute bg-[#64748b] h-[360px] w-[88px] top-1"
      id={"card-" + nr}
    >
      <span className="absolute bottom-0 left-0 w-full text-center text-[0.65rem] text-white">
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
            left: 93px;
          }
          #card-3 {
            left: 182px;
          }
          #card-4 {
            left: 271px;
          }
          #card-5 {
            left: 360px;
          }
          #card-6 {
            left: 449px;
          }
          #card-7 {
            left: 538px;
          }
          #card-8 {
            left: 627px;
          }
          #card-9 {
            left: 716px;
          }
          #card-10 {
            left: 805px;
          }
        `}
      </style>
    </div>
  );
}
