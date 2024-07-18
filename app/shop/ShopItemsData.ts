import type ShopItemType from "../_types/ShopItem";

const SHOP_ITEMS: ShopItemType[] = [
  {
    name: "Nike Dunks",
    id: "1",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
    price: 140,
    gated: false,
  },
  {
    name: "Wingspan T",
    id: "2",
    imgUrl:
      "https://i.etsystatic.com/34255624/r/il/a34869/4449822663/il_794xN.4449822663_m7jy.jpg",
    price: 30,
    gated: false,
  },
  {
    name: "Gardening Gloves",
    id: "3",
    imgUrl:
      "https://images.thdstatic.com/productImages/75561cb9-287a-46a5-8eeb-8d84a7d4cce0/svn/digz-gardening-gloves-79871-014-64_600.jpg",
    price: 40,
    gated: false,
  },
  {
    name: "Essential Canadian Headwear",
    id: "4",
    imgUrl:
      "https://i5.walmartimages.com/asr/81bd284c-7f39-42c1-a586-c8ae5fe74503_1.245c653f8a4ef61e0845e1d85d55e9bf.jpeg",
    price: 25,
    gated: false,
  },
  {
    name: "Fresh Carrots",
    id: "5",
    imgUrl:
      "https://harvesttotable.com/wp-content/uploads/2016/08/bigstock-Fresh-Dug-Carrots-5970768-1024x683.jpg",
    price: 100,
    gated: true,
  },
  {
    name: "Death Metal Vinyl",
    id: "6",
    imgUrl:
      "https://napalmrecords.com/media/catalog/product/cache/2c98b5dedb058b51317c19b0b945bfc5/6/7/67004_sentenced_death_metal_orchestra_from_finland_black_2_lp_vinyl_napalm_records.jpg",
    price: 40,
    gated: true,
  },
  {
    name: "Hello Kitty Slippers",
    id: "7",
    imgUrl: "https://m.media-amazon.com/images/I/81c4OQVhw1L._AC_SX395_.jpg",
    price: 300,
    gated: true,
  },
];

export default SHOP_ITEMS;
