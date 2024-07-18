import Shop from "./Shop";
import SHOP_ITEMS from "./ShopItemsData";

const NORMAL_ITEMS = SHOP_ITEMS.filter((item) => !item.gated);

export default function Page() {
  return <Shop items={NORMAL_ITEMS} />;
}
