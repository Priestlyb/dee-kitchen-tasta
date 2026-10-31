export type Portion = {
  name: string;
  price: number;
};

export type Food = {
  id: string;
  name: string;
  description: string;
  image: any;
  portions: Portion[];
};

export type CartItem = {
  id: string;
  name: string;
  portion: string;
  price: number;
  quantity: number;
};

export type MenuSection = {
  title: string;
  subtitle: string;
  items: Food[];
};
