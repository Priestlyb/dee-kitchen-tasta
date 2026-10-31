import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS } from "../constants/brand";
import { money } from "../data/menu";
import type { Food, Portion } from "../types/menu";
import { styles } from "../styles/styles";

type FoodCardProps = {
  food: Food;
  isDesktop: boolean;
  isTablet: boolean;
  onAdd: (food: Food, portion: Portion) => void;
};

export default function FoodCard({
  food,
  isDesktop,
  isTablet,
  onAdd,
}: FoodCardProps) {
  const [selected, setSelected] = useState(food.portions[0]);

  return (
    <View
      style={[
        styles.foodCard,
        {
          width: isDesktop ? "31.5%" : isTablet ? "47.5%" : "100%",
        },
      ]}
    >
      <View style={styles.foodCardVisual}>
        <View style={styles.foodCardCircle}>
          <Image
            source={food.image}
            style={styles.foodCardImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.foodCardTag}>
          <Text style={styles.foodCardTagText}>DEE'S SPECIAL</Text>
        </View>
      </View>

      <View style={styles.foodCardContent}>
        <Text style={styles.foodName}>{food.name}</Text>

        <Text style={styles.foodDescription}>{food.description}</Text>

        <Text style={styles.portionLabel}>SELECT YOUR PORTION</Text>

        <View style={styles.portionList}>
          {food.portions.map((portion) => {
            const isSelected = selected.name === portion.name;

            return (
              <TouchableOpacity
                key={portion.name}
                onPress={() => setSelected(portion)}
                style={[
                  styles.portionOption,
                  isSelected && styles.portionSelected,
                ]}
              >
                <View style={styles.portionLeft}>
                  <View
                    style={[styles.radio, isSelected && styles.radioSelected]}
                  >
                    {isSelected && <View style={styles.radioDot} />}
                  </View>

                  <Text
                    style={[
                      styles.portionName,
                      isSelected && {
                        color: COLORS.primary,
                        fontWeight: "700",
                      },
                    ]}
                  >
                    {portion.name}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.portionPrice,
                    isSelected && { color: COLORS.primary },
                  ]}
                >
                  {money(portion.price)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAdd(food, selected)}
        >
          <Text style={styles.addButtonText}>+ Add to Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
