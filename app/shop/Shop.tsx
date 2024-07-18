import { makePurchase } from "../_api/api";
import { getSession } from "../_auth/auth";
import ShopItems from "./ShopItems";

import type UserType from "../_types/User";

import ShopItemType from "../_types/ShopItem";

type ShopProps = {
  items?: ShopItemType[];
};

const Shop = async ({ items = [] }: ShopProps) => {
  const session = await getSession();

  const handlePurchase = async (): Promise<UserType> => {
    "use server";
    return await makePurchase(session?.user?.user_name);
  };

  return (
    <div className="flex gap-12 flex-wrap justify-between">
      {items.length ? (
        <ShopItems handlePurchase={handlePurchase} items={items} />
      ) : (
        <div className="flex items-center w-full flex-col">
          <p className="text-xl">Go spend more 💸 ❤️</p>
          <p className="text-xl">- Hanna</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
