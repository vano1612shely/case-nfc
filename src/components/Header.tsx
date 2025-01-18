"use client";
import Link from "next/link";
import clsx from "clsx";
import RequestDialog from "@/components/RequestDialog";
import { Menu } from "lucide-react";
import { useState } from "react";
export default function Header({ className }: { className?: string }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={clsx("fixed py-5 z-30 px-5 md:px-32 border-b", className)}>
      <nav className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          <Link href="/">Case NFC</Link>
        </h1>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="relative z-30 lg:hidden"
        >
          <Menu />
        </button>
        <ul
          className={clsx(
            !showMenu && "gap-5 items-center text-lg hidden lg:flex",
            showMenu &&
              "fixed bg-white w-full h-screen top-0 left-0 flex flex-col gap-10 items-center p-10 pt-20 drop-shadow-2xl animate-slide-top",
          )}
        >
          <li>
            <Link
              href="/"
              className="hover:bg-orange-400 p-3 rounded-xl duration-200"
              onClick={() => setShowMenu(false)}
            >
              Startseite
            </Link>
          </li>
          <li>
            <Link
              href="#howuse"
              className="hover:bg-orange-400 p-3 rounded-xl duration-200"
              onClick={() => setShowMenu(false)}
            >
              Wie benutzt man es?
            </Link>
          </li>
          <li>
            <Link
              href="#cases"
              className="hover:bg-orange-400 p-3 rounded-xl duration-200"
              onClick={() => setShowMenu(false)}
            >
              Hüllen
            </Link>
          </li>
          <li>
            <RequestDialog>
              <button
                className="bg-orange-400 rounded-xl p-3 px-6 hover:bg-orange-600 duration-200"
                onClick={() => setShowMenu(false)}
              >
                Jetzt bestellen
              </button>
            </RequestDialog>
          </li>
        </ul>
      </nav>
    </div>
  );
}
