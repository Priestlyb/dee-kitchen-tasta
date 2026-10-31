import { StyleSheet } from "react-native";
import { COLORS } from "../constants/brand";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  // NAVIGATION
  nav: {
    minHeight: 72,
    paddingHorizontal: 20,
    paddingVertical: 12,
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
    flexShrink: 1,
  },

  brandMark: {
    height: 42,
    width: 42,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  brandMarkText: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  brandName: {
    fontWeight: "900",
    fontSize: 15,
    color: COLORS.primary,
    letterSpacing: 0.5,
  },

  brandSub: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 3,
    color: COLORS.dark,
    marginTop: 2,
  },

  navLinks: {
    flexDirection: "row",
    gap: 28,
    alignItems: "center",
  },

  navLink: {
    fontSize: 13,
    color: COLORS.dark,
    fontWeight: "600",
  },

  navOrder: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 7,
  },

  navOrderText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "800",
  },

  // HERO
  hero: {
    paddingHorizontal: 22,
    paddingTop: 45,
    paddingBottom: 50,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 35,
    backgroundColor: COLORS.cream,
  },

  heroContent: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    minWidth: 0,
  },

  eyebrow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 20,
  },

  eyebrowDot: {
    width: 8,
    height: 8,
    borderRadius: 9,
    backgroundColor: COLORS.orange,
  },

  eyebrowText: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 10,
    letterSpacing: 1.5,
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
    marginBottom: 18,
  },

  heroEyebrowLine: {
    width: 25,
    height: 3,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
  },

  heroEyebrowText: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 2,
  },

  heroHeading: {
    width: "100%",
    marginTop: 5,
    alignItems: "flex-start",
  },

  heroTitle: {
    color: COLORS.dark,
    fontWeight: "900",
    letterSpacing: -2,
    lineHeight: 1.2,
    marginBottom: 14,
  },

  heroHighlightWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 0,
    gap: 8,
  },

  heroHighlight: {
    color: COLORS.primary,
    fontWeight: "900",
    letterSpacing: -2,
    marginBottom: 20,
    marginTop: 15,
    lineHeight: 1.2,
  },

  heroHighlightStar: {
    color: COLORS.orange,
    fontSize: 18,
    fontWeight: "900",
  },

  heroLastWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  heroLast: {
    color: COLORS.orange,
    fontWeight: "900",
    letterSpacing: -2,
    lineHeight: 1.2,
  },

  heroAccent: {
    color: COLORS.primary,
    fontSize: 25,
  },

  heroCaption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 22,
  },

  heroCaptionLine: {
    width: 24,
    height: 1,
    backgroundColor: COLORS.orange,
  },

  heroCaptionText: {
    fontSize: 8,
    color: COLORS.muted,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  heroDescription: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 25,
    marginTop: 20,
    maxWidth: 420,
  },

  heroButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 25,
    width: "100%",
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
    color: COLORS.white,
    fontWeight: "800",
    fontSize: 12,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 19,
    paddingVertical: 14,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: COLORS.primary,
    fontWeight: "800",
    fontSize: 12,
  },

  heroNote: {
    marginTop: 28,
  },

  heroNoteText: {
    fontSize: 11,
    color: COLORS.muted,
    fontWeight: "600",
  },

  heroVisual: {
    flex: 1,
    width: "100%",
    minHeight: 320,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },

  heroCircle: {
    height: 220,
    width: 220,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B92325",
  },

  heroFoodImage: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },

  heroVisualTitle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "900",
    marginTop: 15,
    letterSpacing: 1.5,
  },

  heroVisualSub: {
    color: COLORS.orange,
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 7,
    fontWeight: "800",
  },

  heroBadge: {
    position: "absolute",
    bottom: 14,
    right: 14,
    backgroundColor: COLORS.orange,
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 6,
  },

  heroBadgeTop: {
    fontWeight: "900",
    fontSize: 11,
    color: COLORS.primary,
  },

  heroBadgeBottom: {
    fontWeight: "700",
    fontSize: 8,
    color: COLORS.dark,
    marginTop: 4,
    letterSpacing: 0.8,
  },

  // BRAND STRIP
  brandStrip: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },

  stripText: {
    color: COLORS.white,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
    textAlign: "center",
  },

  stripDot: {
    color: COLORS.orange,
    fontSize: 15,
  },

  // MENU INTRO
  menuIntro: {
    paddingHorizontal: 20,
    paddingTop: 65,
    paddingBottom: 30,
    alignItems: "center",
  },

  sectionEyebrow: {
    color: COLORS.primary,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 2,
    marginBottom: 12,
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: COLORS.dark,
    textAlign: "center",
    lineHeight: 40,
  },

  sectionDescription: {
    fontSize: 13,
    lineHeight: 23,
    color: COLORS.muted,
    textAlign: "center",
    maxWidth: 520,
    marginTop: 12,
  },

  // CATEGORY FILTER
  categoryContainer: {
    paddingHorizontal: 20,
    gap: 9,
    paddingBottom: 22,
    justifyContent: "center",
    width: "100%",
  },

  categoryButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 11,
    backgroundColor: COLORS.white,
  },

  categoryActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  categoryText: {
    color: COLORS.dark,
    fontSize: 11,
    fontWeight: "700",
  },

  categoryTextActive: {
    color: COLORS.white,
  },

  // MENU SECTIONS
  menuSection: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 28,
    width: "100%",
  },

  menuSectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
    paddingBottom: 17,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  sectionNumber: {
    fontSize: 9,
    color: COLORS.primary,
    letterSpacing: 2,
    fontWeight: "900",
    marginBottom: 8,
  },

  menuSectionTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: COLORS.dark,
  },

  menuSectionSub: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 6,
  },

  menuDecor: {
    fontSize: 30,
    color: COLORS.orange,
  },

  // FOOD GRID AND CARDS
  foodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    justifyContent: "flex-start",
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
    height: 155,
    backgroundColor: "#F7E5D5",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  foodCardCircle: {
    width: 105,
    height: 105,
    borderRadius: 100,
    backgroundColor: "#FFF5E9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.orange,
    overflow: "hidden",
  },

  foodCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  foodCardTag: {
    position: "absolute",
    top: 11,
    left: 11,
    backgroundColor: COLORS.primary,
    borderRadius: 3,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  foodCardTagText: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 0.8,
  },

  foodCardContent: {
    padding: 15,
  },

  foodName: {
    fontSize: 17,
    fontWeight: "900",
    color: COLORS.dark,
    lineHeight: 23,
  },

  foodDescription: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 18,
    marginTop: 6,
    minHeight: 36,
  },

  portionLabel: {
    fontSize: 9,
    color: COLORS.primary,
    fontWeight: "900",
    letterSpacing: 1.1,
    marginTop: 18,
    marginBottom: 9,
  },

  portionList: {
    gap: 7,
  },

  portionOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 9,
    borderRadius: 5,
    backgroundColor: "#FAF8F5",
    borderWidth: 1,
    borderColor: "transparent",
    gap: 7,
  },

  portionSelected: {
    backgroundColor: "#FFF3EE",
    borderColor: COLORS.primary,
  },

  portionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
    minWidth: 0,
  },

  radio: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B7AAA3",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
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
    fontSize: 10,
    color: COLORS.dark,
    fontWeight: "500",
    flexShrink: 1,
  },

  portionPrice: {
    fontSize: 10,
    color: COLORS.dark,
    fontWeight: "800",
    flexShrink: 0,
  },

  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: "900",
  },

  // ABOUT SECTION
  aboutSection: {
    backgroundColor: "#F4E6D9",
    paddingHorizontal: 22,
    paddingVertical: 40,
    gap: 30,
    alignItems: "center",
    marginTop: 45,
    width: "100%",
  },

  aboutVisual: {
    flex: 1,
    minHeight: 280,
    width: "100%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },

  aboutEmoji: {
    color: COLORS.cream,
    fontSize: 85,
    fontWeight: "900",
  },

  aboutVisualTitle: {
    color: COLORS.white,
    fontWeight: "900",
    fontSize: 15,
    letterSpacing: 1.5,
    marginTop: 15,
    textAlign: "center",
  },

  aboutVisualSub: {
    color: COLORS.orange,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: 9,
    textAlign: "center",
  },

  aboutContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },

  aboutTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: COLORS.dark,
    lineHeight: 39,
  },

  aboutText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 24,
    marginTop: 15,
  },

  aboutSignature: {
    fontSize: 16,
    fontWeight: "900",
    color: COLORS.primary,
    marginTop: 22,
  },

  // ORDER SECTION
  orderSection: {
    paddingHorizontal: 20,
    paddingTop: 65,
    paddingBottom: 65,
    alignItems: "center",
    backgroundColor: COLORS.cream,
    width: "100%",
  },

  orderTitle: {
    fontSize: 29,
    fontWeight: "900",
    textAlign: "center",
    color: COLORS.dark,
    lineHeight: 38,
  },

  orderDescription: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: "center",
    maxWidth: 450,
    lineHeight: 22,
    marginTop: 11,
    marginBottom: 28,
  },

  cartContainer: {
    width: "100%",
    maxWidth: 650,
    padding: 18,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  cartHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 17,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: 10,
  },

  cartTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: COLORS.dark,
  },

  cartSubtitle: {
    fontSize: 10,
    color: COLORS.muted,
    marginTop: 5,
  },

  cartIcon: {
    fontSize: 27,
  },

  emptyCart: {
    alignItems: "center",
    paddingVertical: 38,
  },

  emptyCartIcon: {
    fontSize: 42,
  },

  emptyCartTitle: {
    fontSize: 15,
    color: COLORS.dark,
    fontWeight: "800",
    marginTop: 14,
  },

  emptyCartText: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 7,
    textAlign: "center",
    lineHeight: 18,
  },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    gap: 9,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    flexWrap: "wrap",
  },

  cartItemName: {
    fontSize: 11,
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
    gap: 8,
  },

  quantityButton: {
    height: 27,
    width: 27,
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
    fontSize: 11,
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
    marginVertical: 19,
  },

  inputLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: COLORS.dark,
    marginBottom: 8,
    marginTop: 14,
  },

  textInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#FFFCF9",
    borderRadius: 6,
    padding: 12,
    fontSize: 12,
    color: COLORS.dark,
    minHeight: 44,
  },

  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
    gap: 10,
  },

  totalLabel: {
    fontSize: 13,
    fontWeight: "800",
    color: COLORS.dark,
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "900",
    color: COLORS.primary,
  },

  checkoutNote: {
    fontSize: 10,
    lineHeight: 17,
    color: COLORS.muted,
    marginTop: 11,
  },

  whatsappButton: {
    backgroundColor: "#198754",
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  whatsappButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "900",
  },

  // CONTACT SECTION
  contactSection: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 22,
    paddingVertical: 40,
    width: "100%",
  },

  contactContent: {
    maxWidth: 800,
    width: "100%",
    alignSelf: "center",
  },

  contactTitle: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 41,
  },

  contactDescription: {
    color: "#F3D4CC",
    fontSize: 12,
    lineHeight: 22,
    marginTop: 13,
    marginBottom: 25,
    maxWidth: 450,
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF30",
  },

  contactIcon: {
    color: COLORS.orange,
    fontSize: 23,
    width: 32,
    textAlign: "center",
  },

  contactLabel: {
    color: COLORS.orange,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.3,
    marginBottom: 5,
  },

  contactValue: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 21,
    flexShrink: 1,
  },

  contactButton: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 25,
    alignSelf: "flex-start",
  },

  contactButtonText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "900",
  },

  // FOOTER
  footer: {
    backgroundColor: "#24100F",
    paddingHorizontal: 22,
    paddingVertical: 35,
    alignItems: "center",
  },

  footerBrand: {
    alignItems: "center",
  },

  footerBrandName: {
    fontSize: 19,
    color: COLORS.white,
    fontWeight: "900",
    letterSpacing: 1.5,
    textAlign: "center",
  },

  footerTagline: {
    color: "#BBA8A1",
    fontSize: 10,
    textAlign: "center",
    marginTop: 9,
    lineHeight: 17,
  },

  footerDivider: {
    height: 1,
    backgroundColor: "#FFFFFF25",
    width: "100%",
    maxWidth: 600,
    marginVertical: 22,
  },

  footerSlogan: {
    color: COLORS.orange,
    fontWeight: "900",
    fontSize: 10,
    letterSpacing: 1.5,
    textAlign: "center",
  },

  copyright: {
    fontSize: 9,
    color: "#BBA8A1",
    marginTop: 18,
    textAlign: "center",
    lineHeight: 16,
  },
});
