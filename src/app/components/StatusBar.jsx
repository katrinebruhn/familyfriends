import { IoCellular, IoWifi, IoBatteryFull } from "react-icons/io5";

const StatusBar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2">
      <span className="text-sm font-semibold">9:41</span>

      <div className="flex items-center gap-1">
        <IoCellular />
        <IoWifi />
        <IoBatteryFull />
      </div>
    </div>
  );
};

export default StatusBar;
