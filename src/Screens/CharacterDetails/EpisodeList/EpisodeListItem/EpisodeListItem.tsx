import React from "react";
import { Text, View } from "react-native";
import { IEspoide } from "../../CharacterDetails.interface";
import styles from "./EpisodeListItem.styles";

const EpisodeListItem = ({ name, air_date, id }: IEspoide) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Episode {id}</Text>
      <Text style={styles.keyText}>
        Name : <Text style={styles.valueText}>{name}</Text>
      </Text>
      <Text style={styles.keyText}>
        Date : <Text style={styles.valueText}>{air_date}</Text>
      </Text>
    </View>
  );
};

export default EpisodeListItem;
