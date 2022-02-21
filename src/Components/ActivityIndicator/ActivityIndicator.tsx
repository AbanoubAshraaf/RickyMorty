import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../../appStyles";
import { IActivityIndicator } from "./ActivityIndicator.interface";
import styles from "./ActivityIndicator.styles";

const ActivitIndicator = ({ loading }: IActivityIndicator) => {
  if (!loading) return null;

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={colors.mainTextColor} size={15} />
    </View>
  );
};

export default ActivitIndicator;
