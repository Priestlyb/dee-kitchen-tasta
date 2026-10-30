import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Linking,
  useWindowDimensions,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { COLORS, BUSINESS } from "./src/constants/brand";
import { categories, menuSections, money } from "./src/data/menu";
import type { Food, Portion, CartItem } from "./src/types/menu";
import FoodCard from "./src/components/FoodCard";
import { styles } from "./src/styles/styles";
import {
  openWhatsApp,
  sendWhatsAppOrder as sendOrderToWhatsApp,
} from "./src/utils/whatsapp";

export default function App() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 900;
  const isTablet = width >= 600;

  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const addToCart = (food: Food, portion: Portion) => {
    const cartId = `${food.id}-${portion.name}`;

    setCart((previous) => {
      const existing = previous.find((item) => item.id === cartId);

      if (existing) {
        return previous.map((item) =>
          item.id === cartId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...previous,
        {
          id: cartId,
          name: food.name,
          portion: portion.name,
          price: portion.price,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + change,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const visibleSections = useMemo(() => {
    if (activeCategory === "All") {
      return menuSections;
    }

    return menuSections.filter((section) => section.title === activeCategory);
  }, [activeCategory]);

  const handleWhatsAppOrder = () => {
    if (!cart.length) return;

    void sendOrderToWhatsApp(cart, customerName, specialRequest);
  };

  const handleOpenWhatsApp = () => {
    void openWhatsApp();
  };

  const openInstagram = () => {
    void Linking.openURL(BUSINESS.instagram);
  };

  const openPhone = () => {
    void Linking.openURL(`tel:+${BUSINESS.phone}`);
  };

  const scrollToMenu = () => {
    setActiveCategory("All");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={COLORS.cream} barStyle="dark-content" />

      {/* NAVIGATION */}

      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => setActiveCategory("All")}
          style={styles.brand}
        >
          <View style={styles.brandMark}>
            <Text style={styles.brandMarkText}>D</Text>
          </View>

          <View>
            <Text style={styles.brandName}>DEE KITCHEN</Text>
            <Text style={styles.brandSub}>TASTA</Text>
          </View>
        </TouchableOpacity>

        {isDesktop && (
          <View style={styles.navLinks}>
            <Text
              onPress={() => setActiveCategory("All")}
              style={styles.navLink}
            >
              Home
            </Text>

            <Text onPress={scrollToMenu} style={styles.navLink}>
              Our Menu
            </Text>

            <Text style={styles.navLink}>About Us</Text>

            <Text style={styles.navLink}>Contact</Text>
          </View>
        )}

        <TouchableOpacity style={styles.navOrder} onPress={handleOpenWhatsApp}>
          <Text style={styles.navOrderText}>Order Now ↗</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {/* HERO */}

        <View
          style={[
            styles.hero,
            {
              paddingHorizontal: isDesktop ? 75 : 24,
              flexDirection: isDesktop ? "row" : "column",
            },
          ]}
        >
          <View style={styles.heroContent}>
            <View style={styles.eyebrow}>
              <View style={styles.eyebrowDot} />

              <Text style={styles.eyebrowText}>A TASTE OF CALABAR</Text>
            </View>

            <Text style={[styles.heroTitle, { fontSize: isDesktop ? 66 : 45 }]}>
              Real food.
              {"\n"}
              <Text style={styles.heroHighlight}>Real flavour.</Text>
              {"\n"}
              <Text style={styles.heroLast}>Real love.</Text>
            </Text>

            <Text style={styles.heroDescription}>
              Authentic Calabar flavours, cooked fresh and served with love.
            </Text>

            <View style={styles.heroButtons}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={scrollToMenu}
              >
                <Text style={styles.primaryButtonText}>Explore Our Menu →</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={handleOpenWhatsApp}
              >
                <Text style={styles.secondaryButtonText}>
                  Order on WhatsApp
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.heroNote}>
              <Text style={styles.heroNoteText}>
                ♥ Made with love. Served with pride.
              </Text>
            </View>
          </View>

          <View
            style={[styles.heroVisual, { minHeight: isDesktop ? 450 : 270 }]}
          >
            <View style={styles.heroCircle}>
              <Text style={styles.heroFoodIcon}>🍲</Text>

              <Text style={styles.heroVisualTitle}>THE TASTE OF HOME</Text>

              <Text style={styles.heroVisualSub}>CALABAR FLAVOURS</Text>
            </View>

            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeTop}>HOT • FRESH</Text>

              <Text style={styles.heroBadgeBottom}>ALWAYS DELICIOUS</Text>
            </View>
          </View>
        </View>

        {/* BRAND STRIP */}

        <View style={styles.brandStrip}>
          <Text style={styles.stripText}>AUTHENTIC CALABAR TASTE</Text>

          <Text style={styles.stripDot}>✦</Text>

          <Text style={styles.stripText}>FRESHLY PREPARED</Text>

          <Text style={styles.stripDot}>✦</Text>

          <Text style={styles.stripText}>MADE WITH LOVE</Text>
        </View>

        {/* MENU INTRODUCTION */}

        <View style={styles.menuIntro}>
          <Text style={styles.sectionEyebrow}>GOOD FOOD STARTS HERE</Text>

          <Text style={styles.sectionTitle}>Explore Our Menu</Text>

          <Text style={styles.sectionDescription}>
            From rich pepper soups to traditional soups and delicious stews,
            there's something for every craving.
          </Text>
        </View>

        {/* CATEGORY FILTER */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((category) => {
            const selected = activeCategory === category;

            return (
              <TouchableOpacity
                key={category}
                onPress={() => setActiveCategory(category)}
                style={[
                  styles.categoryButton,
                  selected && styles.categoryActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selected && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* MENU SECTIONS */}

        {visibleSections.map((section, sectionIndex) => (
          <View key={section.title} style={styles.menuSection}>
            <View style={styles.menuSectionHeading}>
              <View>
                <Text style={styles.sectionNumber}>
                  0{sectionIndex + 1} / MENU
                </Text>

                <Text style={styles.menuSectionTitle}>{section.title}</Text>

                <Text style={styles.menuSectionSub}>{section.subtitle}</Text>
              </View>

              <Text style={styles.menuDecor}>✦</Text>
            </View>

            <View style={[styles.foodGrid, { justifyContent: "flex-start" }]}>
              {section.items.map((food) => (
                <FoodCard
                  key={food.id}
                  food={food}
                  isDesktop={isDesktop}
                  isTablet={isTablet}
                  onAdd={addToCart}
                />
              ))}
            </View>
          </View>
        ))}

        {/* ABOUT SECTION */}

        <View
          style={[
            styles.aboutSection,
            {
              flexDirection: isDesktop ? "row" : "column",
            },
          ]}
        >
          <View style={styles.aboutVisual}>
            <Text style={styles.aboutEmoji}>❤️</Text>

            <Text style={styles.aboutVisualTitle}>COOKED WITH LOVE</Text>

            <Text style={styles.aboutVisualSub}>INSPIRED BY CALABAR</Text>
          </View>

          <View style={styles.aboutContent}>
            <Text style={styles.sectionEyebrow}>OUR STORY</Text>

            <Text style={styles.aboutTitle}>
              More than food.
              {"\n"}
              <Text style={{ color: COLORS.primary }}>
                It's a taste of home.
              </Text>
            </Text>

            <Text style={styles.aboutText}>
              At Dee Kitchen Tasta, we celebrate the richness of authentic
              Calabar cuisine. Every pot is prepared with care, bold ingredients
              and a passion for bringing people together over delicious food.
            </Text>

            <Text style={styles.aboutText}>
              Whether you're craving a comforting bowl of pepper soup, a
              traditional soup for the family or a rich homemade stew, there's
              always something special waiting for you.
            </Text>

            <Text style={styles.aboutSignature}>Dee Kitchen Tasta ♥</Text>
          </View>
        </View>

        {/* ORDER SECTION */}

        <View style={styles.orderSection}>
          <Text style={styles.sectionEyebrow}>YOUR CRAVINGS, OUR PRIORITY</Text>

          <Text style={styles.orderTitle}>Ready to taste the goodness?</Text>

          <Text style={styles.orderDescription}>
            Add your favourites to your order and send them straight to us on
            WhatsApp.
          </Text>

          <View style={styles.cartContainer}>
            <View style={styles.cartHeading}>
              <View>
                <Text style={styles.cartTitle}>Your Order</Text>

                <Text style={styles.cartSubtitle}>
                  {totalItems} item(s) selected
                </Text>
              </View>

              <Text style={styles.cartIcon}>🛍️</Text>
            </View>

            {cart.length === 0 ? (
              <View style={styles.emptyCart}>
                <Text style={styles.emptyCartIcon}>🍲</Text>

                <Text style={styles.emptyCartTitle}>Your basket is empty</Text>

                <Text style={styles.emptyCartText}>
                  Explore our menu and add something delicious.
                </Text>
              </View>
            ) : (
              cart.map((item) => (
                <View key={item.id} style={styles.cartItem}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cartItemName}>{item.name}</Text>

                    <Text style={styles.cartItemPortion}>
                      {item.portion} · {money(item.price)}
                    </Text>
                  </View>

                  <View style={styles.quantityControls}>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, -1)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>−</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityValue}>{item.quantity}</Text>

                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, 1)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.cartItemPrice}>
                    {money(item.price * item.quantity)}
                  </Text>
                </View>
              ))
            )}

            {cart.length > 0 && (
              <>
                <View style={styles.cartDivider} />

                <Text style={styles.inputLabel}>Your name</Text>

                <TextInput
                  placeholder="Enter your name"
                  placeholderTextColor={COLORS.muted}
                  value={customerName}
                  onChangeText={setCustomerName}
                  style={styles.textInput}
                />

                <Text style={styles.inputLabel}>
                  Special requests (optional)
                </Text>

                <TextInput
                  placeholder="Any special instructions?"
                  placeholderTextColor={COLORS.muted}
                  value={specialRequest}
                  onChangeText={setSpecialRequest}
                  style={[
                    styles.textInput,
                    {
                      minHeight: 85,
                      textAlignVertical: "top",
                    },
                  ]}
                  multiline
                />

                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Estimated total</Text>

                  <Text style={styles.totalValue}>{money(totalPrice)}</Text>
                </View>

                <Text style={styles.checkoutNote}>
                  Delivery or pickup arrangements and any applicable charges
                  will be confirmed on WhatsApp.
                </Text>

                <TouchableOpacity
                  style={styles.whatsappButton}
                  onPress={handleWhatsAppOrder}
                >
                  <Text style={styles.whatsappButtonText}>
                    Send Order via WhatsApp ↗
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>

        {/* CONTACT */}

        <View style={styles.contactSection}>
          <View style={styles.contactContent}>
            <Text style={styles.sectionEyebrow}>
              WE'D LOVE TO HEAR FROM YOU
            </Text>

            <Text style={styles.contactTitle}>
              Let's make your next meal special.
            </Text>

            <Text style={styles.contactDescription}>
              Have questions about our menu or want to place an order? Get in
              touch with us.
            </Text>

            <TouchableOpacity onPress={openPhone} style={styles.contactItem}>
              <Text style={styles.contactIcon}>☎</Text>

              <View>
                <Text style={styles.contactLabel}>CALL / WHATSAPP</Text>

                <Text style={styles.contactValue}>{BUSINESS.displayPhone}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={openInstagram}
              style={styles.contactItem}
            >
              <Text style={styles.contactIcon}>◎</Text>

              <View>
                <Text style={styles.contactLabel}>INSTAGRAM</Text>

                <Text style={styles.contactValue}>@dees_kitchen</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>⌖</Text>

              <View style={{ flex: 1 }}>
                <Text style={styles.contactLabel}>OUR LOCATION</Text>

                <Text style={styles.contactValue}>{BUSINESS.address}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.contactButton}
              onPress={handleOpenWhatsApp}
            >
              <Text style={styles.contactButtonText}>
                Chat With Us on WhatsApp →
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FOOTER */}

        <View style={styles.footer}>
          <View style={styles.footerBrand}>
            <Text style={styles.footerBrandName}>DEE KITCHEN TASTA</Text>

            <Text style={styles.footerTagline}>
              Authentic Calabar flavours, cooked fresh and served with love.
            </Text>
          </View>

          <View style={styles.footerDivider} />

          <Text style={styles.footerSlogan}>
            HOT. BOLD. ALWAYS A GOOD IDEA.
          </Text>

          <Text style={styles.copyright}>
            © {new Date().getFullYear()} Dee Kitchen Tasta. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
