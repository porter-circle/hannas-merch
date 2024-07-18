"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Hanger from "./Hanger";
import { handleSignOut } from "../_auth/auth";
import { useQuery } from "@tanstack/react-query";
import { getBalance } from "../_api/api";
import { useMemo } from "react";
import { useToast } from "../_context/ToastContext";
import useNotifyReward from "../_hooks/useNotifyReward";

type MainNavProps = {
  username: string;
};

const MainNav = ({ username }: MainNavProps) => {
  const pathname = usePathname();
  const { triggerToast } = useToast();

  const { data } = useQuery({
    queryKey: ["balance", username],
    queryFn: ({ queryKey }) => getBalance(queryKey[1]),
    refetchInterval: 5000,
  });

  const hasAccess = useMemo(() => data?.hasAccess, [data]);

  useNotifyReward(hasAccess, triggerToast);

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
          <li className="mr-1">
            <Link
              href="/shop"
              className={`${pathname === "/shop" && "active"}`}
            >
              Shop
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href="/secret-shop"
              className={`${pathname === "/secret-shop" && "active"} ${
                !hasAccess && "text-gray-500"
              }`}
            >
              Secret Shop
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href="/balance"
              className={`${pathname === "/balance" && "active"}`}
            >
              Balance
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
