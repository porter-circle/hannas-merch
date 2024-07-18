"use client";

import { useState } from "react";
import ShopItemCard from "../_components/ShopItemCard";
import ConfirmPurchaseModal from "./ConfirmPurchaseModal";
import { useToast } from "../_context/ToastContext";
import type UserType from "../_types/User";
import SHOP_ITEMS from "./ShopItemsData";
import ShopItemType from "../_types/ShopItem";

type ShopItemsProps = {
  handlePurchase: () => Promise<UserType>;
  items?: ShopItemType[];
};

const ShopItems = ({ handlePurchase, items = [] }: ShopItemsProps) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [activeItemName, setActiveItemName] = useState<string | undefined>(
    undefined
  );

  const { triggerToast } = useToast();

  const handleClickOnBuy = (itemName: string) => {
    setActiveItemName(itemName);
    setConfirmationModalOpen(true);
  };

  const handlePurchaseItem = async () => {
    await handlePurchase();

    setConfirmationModalOpen(false);
    triggerToast(`purchased ${activeItemName}!`);
  };

  return (
    <>
      {items.map((item) => (
        <ShopItemCard
          onBuyNow={() => handleClickOnBuy(item.name)}
          item={item}
          key={item.id}
        />
      ))}
      <ConfirmPurchaseModal
        open={confirmationModalOpen}
        setOpen={setConfirmationModalOpen}
        onOkay={handlePurchaseItem}
      />
    </>
  );
};

export default ShopItems;
