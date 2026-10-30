
import { Linking } from "react-native";
import { BUSINESS } from "../constants/brand";
import type { CartItem } from "../types/menu";
import { money } from "../data/menu";

export const openWhatsApp = async () => {
  await Linking.openURL(BUSINESS.whatsappLink);
};

export const sendWhatsAppOrder = async (
  cart: CartItem[],
  customerName: string,
  specialRequest: string,
) => {
  if (!cart.length) return;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const orderLines = cart
    .map(
      (item, index) =>
        `${index + 1}. ${item.name}\n   ${item.portion} x ${
          item.quantity
        } = ${money(item.price * item.quantity)}`,
    )
    .join("\n\n");

  const message = `
Hello Dee Kitchen Tasta! 👋

I'd like to place an order.

Customer name: ${customerName.trim() || "Not provided"}

${orderLines}

-------------------------
Total: ${money(totalPrice)}
-------------------------

Special request: ${specialRequest.trim() || "None"}

Please confirm availability and delivery/pickup arrangements.

Thank you!
  `.trim();

  // Use the business phone number here so the order details
  // can be prefilled in the WhatsApp message.
  const url = `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(
    message,
  )}`;

  await Linking.openURL(url);
};
