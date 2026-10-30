
import type { Food, MenuSection } from "../types/menu";

export const pepperSoups: Food[] = [
  {
    id: "village-chicken",
    name: "The Village Chicken",
    description: "Fresh. Spicy. Unforgettable.",
    portions: [
      { name: "On a Budget", price: 6450 },
      { name: "Classic", price: 12900 },
      { name: "Share With a Friend", price: 16125 },
    ],
  },
  {
    id: "classic-goat",
    name: "The Classic Goat Bowl",
    description: "Rich. Tender. Full of flavour.",
    portions: [
      { name: "On a Budget", price: 5375 },
      { name: "Classic", price: 10750 },
      { name: "Share With a Friend", price: 12900 },
    ],
  },
  {
    id: "fisherman-pot",
    name: "Fisherman's Pot",
    description: "Deep flavour. Straight from the water.",
    portions: [
      { name: "Classic", price: 12900 },
      { name: "Share With a Friend", price: 18275 },
      { name: "Family Feast", price: 23650 },
    ],
  },
];

export const soups: Food[] = [
  {
    id: "afang",
    name: "Afang Soup",
    description: "A beloved Calabar classic, rich and satisfying.",
    portions: [
      { name: "Standard Pack", price: 12000 },
      { name: "1 Litre", price: 26000 },
      { name: "2 Litres", price: 35000 },
      { name: "3 Litres", price: 37000 },
    ],
  },
  {
    id: "egusi",
    name: "Egusi Soup",
    description: "A hearty Nigerian favourite, cooked with flavour.",
    portions: [
      { name: "Standard Pack", price: 10000 },
      { name: "1 Litre", price: 24000 },
      { name: "2 Litres", price: 28000 },
      { name: "3 Litres", price: 30000 },
    ],
  },
  {
    id: "white-soup",
    name: "White Soup",
    description: "Traditional, comforting and full of character.",
    portions: [
      { name: "Standard Pack", price: 12000 },
      { name: "1 Litre", price: 26000 },
      { name: "2 Litres", price: 35000 },
      { name: "3 Litres", price: 37000 },
    ],
  },
  {
    id: "banga",
    name: "Banga Soup",
    description: "Deep traditional flavour in every serving.",
    portions: [
      { name: "Standard Pack", price: 12000 },
      { name: "1 Litre", price: 26000 },
      { name: "2 Litres", price: 35000 },
      { name: "3 Litres", price: 37000 },
    ],
  },
  {
    id: "fisherman-soup",
    name: "Fisherman Soup",
    description: "A delicious seafood-inspired Nigerian classic.",
    portions: [
      { name: "Standard Pack", price: 15000 },
      { name: "1 Litre", price: 29000 },
      { name: "2 Litres", price: 36000 },
      { name: "3 Litres", price: 38000 },
    ],
  },
  {
    id: "ogbonno",
    name: "Ogbonno Soup",
    description: "Rich, satisfying and wonderfully traditional.",
    portions: [
      { name: "Standard Pack", price: 11000 },
      { name: "1 Litre", price: 23500 },
      { name: "2 Litres", price: 27000 },
      { name: "3 Litres", price: 29000 },
    ],
  },
];

export const stews: Food[] = [
  {
    id: "beef-stew",
    name: "Beef Stew",
    description: "Rich. Thick. Full of flavour.",
    portions: [
      { name: "1 Litre", price: 18000 },
      { name: "2 Litres", price: 23000 },
      { name: "3 Litres", price: 28000 },
    ],
  },
  {
    id: "chicken-stew",
    name: "Chicken Stew",
    description: "Slow-cooked goodness with a bold, delicious taste.",
    portions: [
      { name: "1 Litre", price: 22000 },
      { name: "2 Litres", price: 27000 },
      { name: "3 Litres", price: 32000 },
    ],
  },
];

export const categories = ["All", "Pepper Soups", "Soups", "Stews"];

export const menuSections: MenuSection[] = [
  {
    title: "Pepper Soups",
    subtitle: "Rich flavours. Real comfort.",
    items: pepperSoups,
  },
  {
    title: "Soups",
    subtitle: "Authentic tastes for every table.",
    items: soups,
  },
  {
    title: "Stews",
    subtitle: "Rich. Thick. Full of flavour.",
    items: stews,
  },
];

export const money = (amount: number) =>
  `₦${amount.toLocaleString("en-NG")}`;
