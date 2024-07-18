import { getBalance } from "../_api/api";
import { getSession } from "../_auth/auth";
import Shop from "../shop/Shop";
import SHOP_ITEMS from "../shop/ShopItemsData";

const SECRET_ITEMS = SHOP_ITEMS.filter((item) => item.gated);

export default async function Page() {
  const session = await getSession();
  const data = await getBalance(session.user.user_name);
  const hasAccess = data.hasAccess;

  return <Shop items={hasAccess ? SECRET_ITEMS : []} />;
}
