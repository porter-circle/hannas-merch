import type ShopItemType from "../_types/ShopItem";

type ShopItemCardProps = {
  onBuyNow: () => void;
  item: ShopItemType;
};

const formatNum = (num: number) => new Intl.NumberFormat().format(num);

const ShopItemCard = ({ onBuyNow, item }: ShopItemCardProps) => (
  <div
    className={`card bg-base-200 w-96 shadow-lg ${
      item.gated && "border-2 border-secondary border-solid"
    }`}
  >
    <figure>
      <img
        src={item.imgUrl}
        alt={item.name}
        className="object-cover w-full h-96"
      />
    </figure>
    {item.gated && (
      <div className="p-1 flex justify-center w-full bg-secondary text-secondary-content">
        <p>revealed item!</p>
      </div>
    )}
    <div className="card-body justify-end">
      <div className="flex justify-between items-baseline w-full pb-4">
        <h2 className="card-title">{item.name}</h2>
        <span>
          {formatNum(item.price)} {item.gated ? "HC" : "USDC"}
        </span>
      </div>

      <div className="card-actions justify-center">
        <button className="btn btn-primary flex-1" onClick={onBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

export default ShopItemCard;
