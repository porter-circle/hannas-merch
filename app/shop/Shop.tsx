import { makePurchase } from "../_api/api";
import { getSession } from "../_auth/auth";
import ShopItems from "./ShopItems";

import type UserType from "../_types/User";

const Shop = async () => {
  const session = await getSession();

  const handlePurchase = async (): Promise<UserType> => {
    "use server";
    return await makePurchase(session?.user?.user_name);
  };

  return (
    <div className="flex gap-12 flex-wrap justify-between">
      <ShopItems handlePurchase={handlePurchase} />
    </div>
  );
};

export default Shop;
