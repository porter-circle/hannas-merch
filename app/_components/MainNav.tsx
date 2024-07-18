"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Hanger from "./Hanger";
import { handleSignOut } from "../_auth/auth";

type MainNavProps = {
  username: string;
};

const MainNav = ({ username }: MainNavProps) => {
  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100 fixed z-10 shadow-xl">
      <div className="flex-1">
        <Link href="/shop" className="btn btn-ghost text-xl">
          <Hanger />
          Hanna&apos;s Merch
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/shop"
              className={`${pathname === "/shop" && "active"}`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/nfts"
              className={`${pathname === "/nfts" && "active"}`}
            >
              NFTs
            </Link>
          </li>
          <li>
            <details>
              <summary>{username}</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <form action={handleSignOut}>
                    <button type="submit">Sign Out</button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
