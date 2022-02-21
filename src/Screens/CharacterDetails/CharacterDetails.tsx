import { useQuery } from "@apollo/client";
import React from "react";
import { characterDetailsGql } from "../../graphql";
import { CustomHeader } from "../../Components/CustomHeader";
import {
  ICharacterDetailsProps,
  IRickyMortyCharcterDetails,
} from "./CharacterDetails.interface";
import { Image, Text, View } from "react-native";
import styles from "./CharacterDetails.styles";
import EpisodeList from "./EpisodeList";
import withFooter from "../../hoc/withFooter";

const CharacterDetails = ({ navigation, route }: ICharacterDetailsProps) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(characterDetailsGql, {
    variables: {
      id,
    },
  });

  const character: IRickyMortyCharcterDetails = (data && data.character) || {};
  const { episode = [], gender, species, image, name } = character;

  if (error && !loading) {
    withFooter(loading, error);
  }

  return (
    <>
      <CustomHeader title={name} backIcon={true} navigation={navigation} />
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.characterImage}
          resizeMode="contain"
        />
        <Text style={styles.infoText}>
          {gender} / {species}
        </Text>
        <Text style={styles.title}>{name}</Text>
        <EpisodeList episodes={episode} loading={loading} error={error} />
      </View>
    </>
  );
};

export default CharacterDetails;
