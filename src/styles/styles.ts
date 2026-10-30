import { StyleSheet } from "react-native";
import { COLORS } from "../constants/brand";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  nav: {
    minHeight: 76,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.cream,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  brandMark: {
    height: 43,
    width: 43,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  brandMarkText: {
    fontSize: 26,
    fontWeight: "900",
    color: COLORS.white,
  },

  brandName: {
    fontWeight: "900",
    fontSize: 15,
    color: COLORS.primary,
    letterSpacing: 1,
  },

  brandSub: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 4,
    color: COLORS.dark,
  },

  navLinks: {
    flexDirection: "row",
    gap: 35,
  },

  navLink: {
    fontSize: 13,
    color: COLORS.dark,
    fontWeight: "600",
  },

  navOrder: {
    backgroundColor: COLORS.primary,
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 7,
  },

  navOrderText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "800",
  },

  hero: {
    paddingTop: 65,
    paddingBottom: 65,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 35,
    backgroundColor: COLORS.cream,
  },

  heroContent: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },

  eyebrow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 22,
  },

  eyebrowDot: {
    width: 9,
    height: 9,
    borderRadius: 9,
    backgroundColor: COLORS.orange,
  },

  eyebrowText: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 11,
    letterSpacing: 2,
  },

  heroTitleWrapper: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 5,
  },

  heroEyebrow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 22,
  },

  heroEyebrowLine: {
    width: 28,
    height: 3,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
  },

  heroEyebrowText: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2.5,
  },

  heroHeading: {
    width: "100%",
    alignItems: "flex-start",
    gap: 5,
  },

  heroTitle: {
    color: COLORS.dark,
    fontWeight: "900",
    letterSpacing: -3,
    lineHeight: 1.15,
  },

  heroHighlightWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    marginVertical: 4,
    gap: 8,
  },

  heroHighlight: {
    color: COLORS.white,
    fontWeight: "900",
    letterSpacing: -2.5,
    lineHeight: 1.2,
  },

  heroHighlightStar: {
    color: COLORS.orange,
    fontSize: 19,
    fontWeight: "900",
  },

  heroLastWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 3,
  },

  heroLast: {
    color: COLORS.orange,
    fontWeight: "900",
    letterSpacing: -3,
    lineHeight: 1.15,
  },

  heroAccent: {
    color: COLORS.primary,
    fontSize: 27,
    fontWeight: "900",
  },

  heroCaption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 23,
  },

  heroCaptionLine: {
    width: 24,
    height: 1,
    backgroundColor: COLORS.orange,
  },

  heroCaptionText: {
    fontSize: 9,
    color: COLORS.muted,
    fontWeight: "900",
    letterSpacing: 2,
  },

  heroDescription: {
    color: COLORS.muted,
    fontSize: 16,
    lineHeight: 27,
    marginTop: 22,
    maxWidth: 420,
  },

  heroButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 30,
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 23,
    paddingVertical: 16,
    borderRadius: 6,
  },

  primaryButtonText: {
    color: COLORS.white,
    fontWeight: "800",
    fontSize: 13,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderRadius: 6,
  },

  secondaryButtonText: {
    color: COLORS.primary,
    fontWeight: "800",
    fontSize: 13,
  },

  heroNote: {
    marginTop: 35,
  },

  heroNoteText: {
    fontSize: 12,
    color: COLORS.muted,
    fontWeight: "600",
  },

  heroVisual: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },

  heroCircle: {
    height: 245,
    width: 245,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B92325",
  },

  heroFoodIcon: {
    fontSize: 105,
  },

  heroVisualTitle: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 2,
  },

  heroVisualSub: {
    color: COLORS.orange,
    fontSize: 10,
    letterSpacing: 3,
    marginTop: 7,
    fontWeight: "800",
  },

  heroBadge: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: COLORS.orange,
    paddingHorizontal: 17,
    paddingVertical: 13,
    borderRadius: 5,
  },

  heroBadgeTop: {
    fontWeight: "900",
    fontSize: 12,
    color: COLORS.primary,
  },

  heroBadgeBottom: {
    fontWeight: "700",
    fontSize: 8,
    color: COLORS.dark,
    marginTop: 4,
    letterSpacing: 1,
  },

  brandStrip: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },

  stripText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.3,
  },

  stripDot: {
    color: COLORS.orange,
    fontSize: 17,
  },

  menuIntro: {
    paddingHorizontal: 24,
    paddingTop: 85,
    paddingBottom: 35,
    alignItems: "center",
  },

  sectionEyebrow: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2.5,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: COLORS.dark,
    textAlign: "center",
  },

  sectionDescription: {
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.muted,
    textAlign: "center",
    maxWidth: 520,
    marginTop: 14,
  },

  categoryContainer: {
    paddingHorizontal: 24,
    gap: 10,
    paddingBottom: 25,
    justifyContent: "center",
    width: "100%",
  },

  categoryButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },

  categoryActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  categoryText: {
    color: COLORS.dark,
    fontSize: 12,
    fontWeight: "700",
  },

  categoryTextActive: {
    color: COLORS.white,
  },

  menuSection: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 35,
  },

  menuSectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  sectionNumber: {
    fontSize: 10,
    color: COLORS.primary,
    letterSpacing: 2,
    fontWeight: "900",
    marginBottom: 9,
  },

  menuSectionTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: COLORS.dark,
  },

  menuSectionSub: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 7,
  },

  menuDecor: {
    fontSize: 35,
    color: COLORS.orange,
  },

  foodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 18,
  },

  foodCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
    marginBottom: 8,
  },

  foodCardVisual: {
    height: 145,
    backgroundColor: "#F7E5D5",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  foodCardCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#FFF5E9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.orange,
  },

  foodCardEmoji: {
    fontSize: 55,
  },

  foodCardTag: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 3,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  foodCardTagText: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
  },

  foodCardContent: {
    padding: 18,
  },

  foodName: {
    fontSize: 19,
    fontWeight: "900",
    color: COLORS.dark,
  },

  foodDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
    minHeight: 38,
  },

  portionLabel: {
    fontSize: 9,
    color: COLORS.primary,
    fontWeight: "900",
    letterSpacing: 1.3,
    marginTop: 22,
    marginBottom: 10,
  },

  portionList: {
    gap: 7,
  },

  portionOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#FAF8F5",
    borderWidth: 1,
    borderColor: "transparent",
    gap: 8,
  },

  portionSelected: {
    backgroundColor: "#FFF3EE",
    borderColor: COLORS.primary,
  },

  portionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    flex: 1,
  },

  radio: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B7AAA3",
    alignItems: "center",
    justifyContent: "center",
  },

  radioSelected: {
    borderColor: COLORS.primary,
  },

  radioDot: {
    height: 7,
    width: 7,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },

  portionName: {
    fontSize: 11,
    color: COLORS.dark,
    fontWeight: "500",
  },

  portionPrice: {
    fontSize: 11,
    color: COLORS.dark,
    fontWeight: "800",
  },

  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 5,
    marginTop: 17,
    alignItems: "center",
  },

  addButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "900",
  },

  aboutSection: {
    backgroundColor: "#F4E6D9",
    padding: 35,
    gap: 45,
    alignItems: "center",
    marginTop: 65,
  },

  aboutVisual: {
    flex: 1,
    minHeight: 300,
    width: "100%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  aboutEmoji: {
    fontSize: 85,
  },

  aboutVisualTitle: {
    color: COLORS.white,
    fontWeight: "900",
    fontSize: 17,
    letterSpacing: 2,
    marginTop: 15,
  },

  aboutVisualSub: {
    color: COLORS.orange,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 3,
    marginTop: 10,
  },

  aboutContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },

  aboutTitle: {
    fontSize: 36,
    fontWeight: "900",
    color: COLORS.dark,
    lineHeight: 44,
  },

  aboutText: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 26,
    marginTop: 18,
  },

  aboutSignature: {
    fontSize: 17,
    fontWeight: "900",
    color: COLORS.primary,
    marginTop: 25,
  },

  orderSection: {
    paddingHorizontal: 24,
    paddingTop: 85,
    paddingBottom: 85,
    alignItems: "center",
    backgroundColor: COLORS.cream,
  },

  orderTitle: {
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    color: COLORS.dark,
  },

  orderDescription: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: "center",
    maxWidth: 450,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 35,
  },

  cartContainer: {
    width: "100%",
    maxWidth: 650,
    padding: 25,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  cartHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  cartTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.dark,
  },

  cartSubtitle: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 5,
  },

  cartIcon: {
    fontSize: 30,
  },

  emptyCart: {
    alignItems: "center",
    paddingVertical: 45,
  },

  emptyCartIcon: {
    fontSize: 45,
  },

  emptyCartTitle: {
    fontSize: 16,
    color: COLORS.dark,
    fontWeight: "800",
    marginTop: 15,
  },

  emptyCartText: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 8,
    textAlign: "center",
  },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  cartItemName: {
    fontSize: 12,
    fontWeight: "800",
    color: COLORS.dark,
  },

  cartItemPortion: {
    fontSize: 10,
    color: COLORS.muted,
    marginTop: 5,
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  quantityButton: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.cream,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  quantityText: {
    fontSize: 17,
    fontWeight: "800",
    color: COLORS.primary,
  },

  quantityValue: {
    fontSize: 12,
    fontWeight: "800",
    color: COLORS.dark,
  },

  cartItemPrice: {
    fontSize: 11,
    fontWeight: "900",
    color: COLORS.primary,
  },

  cartDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 22,
  },

  inputLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: COLORS.dark,
    marginBottom: 9,
    marginTop: 15,
  },

  textInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#FFFCF9",
    borderRadius: 5,
    padding: 13,
    fontSize: 12,
    color: COLORS.dark,
  },

  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },

  totalLabel: {
    fontSize: 14,
    fontWeight: "800",
    color: COLORS.dark,
  },

  totalValue: {
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.primary,
  },

  checkoutNote: {
    fontSize: 10,
    lineHeight: 17,
    color: COLORS.muted,
    marginTop: 12,
  },

  whatsappButton: {
    backgroundColor: "#198754",
    paddingVertical: 17,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },

  whatsappButtonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "900",
  },

  contactSection: {
    backgroundColor: COLORS.primary,
    padding: 35,
  },

  contactContent: {
    maxWidth: 800,
    width: "100%",
    alignSelf: "center",
  },

  contactTitle: {
    color: COLORS.white,
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 45,
  },

  contactDescription: {
    color: "#F3D4CC",
    fontSize: 13,
    lineHeight: 23,
    marginTop: 15,
    marginBottom: 30,
    maxWidth: 450,
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF30",
  },

  contactIcon: {
    color: COLORS.orange,
    fontSize: 25,
    width: 35,
    textAlign: "center",
  },

  contactLabel: {
    color: COLORS.orange,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  contactValue: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 22,
  },

  contactButton: {
    backgroundColor: COLORS.orange,
    padding: 17,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    alignSelf: "flex-start",
  },

  contactButtonText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "900",
  },

  footer: {
    backgroundColor: "#24100F",
    padding: 35,
    alignItems: "center",
  },

  footerBrand: {
    alignItems: "center",
  },

  footerBrandName: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "900",
    letterSpacing: 2,
  },

  footerTagline: {
    color: "#BBA8A1",
    fontSize: 11,
    textAlign: "center",
    marginTop: 10,
  },

  footerDivider: {
    height: 1,
    backgroundColor: "#FFFFFF25",
    width: "100%",
    maxWidth: 600,
    marginVertical: 25,
  },

  footerSlogan: {
    color: COLORS.orange,
    fontWeight: "900",
    fontSize: 11,
    letterSpacing: 2,
    textAlign: "center",
  },

  copyright: {
    fontSize: 10,
    color: "#BBA8A1",
    marginTop: 20,
    textAlign: "center",
  },
});
