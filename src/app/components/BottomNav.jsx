import Link from "next/link";
import {
  IoHomeOutline,
  IoStarOutline,
  IoChatbubbleOutline,
  IoPersonOutline,
} from "react-icons/io5";

const BottomNav = ({ active }) => {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[441px] -translate-x-1/2 items-center justify-around bg-white py-4"
    >
      <Link href="/" aria-label="Forside">
        <IoHomeOutline
          className={`h-6 w-6 ${active === "home" ? "text-coral" : "text-icon-gray"}`}
        />
      </Link>

      <Link href="/favorites" aria-label="Mine Favoritter">
        <IoStarOutline
          className={`h-6 w-6 ${active === "favorites" ? "text-coral" : "text-icon-gray"}`}
        />
      </Link>

      <IoChatbubbleOutline
        className={`h-6 w-6 ${active === "messages" ? "text-coral" : "text-icon-gray"}`}
      />

      <IoPersonOutline
        className={`h-6 w-6 ${active === "profile" ? "text-coral" : "text-icon-gray"}`}
      />
    </nav>
  );
};

export default BottomNav;
