import { useQuery } from "@apollo/client";
import React from "react";
import { characterDetailsGql } from "../../graphql";
import { CustomHeader } from "../../Components/CustomHeader";
import {
  ICharacterDetailsProps,
  IRickyMortyCharcterDetails,
} from "./CharacterDetails.interface";
import { Image, ScrollView, Text } from "react-native";
import styles from "./CharacterDetails.styles";
import EpisodeList from "./EpisodeList";

const CharacterDetails = ({ navigation, route }: ICharacterDetailsProps) => {
  const { id, name, image } = route.params;
  const { loading, error, data } = useQuery(characterDetailsGql, {
    variables: {
      id,
    },
  });

  const character: IRickyMortyCharcterDetails = data ? data.character : {};

  return (
    <>
      <CustomHeader title={name} backIcon={true} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.characterImage}
          resizeMode="contain"
        />
        <Text style={styles.infoText}>
          {character.gender || ""} / {character.species || ""}
        </Text>
        <Text style={styles.title}>{name}</Text>
        <EpisodeList
          episodes={character.episode || []}
          loading={loading}
          error={error}
        />
      </ScrollView>
    </>
  );
};

export default CharacterDetails;
