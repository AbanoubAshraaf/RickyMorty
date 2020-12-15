import React from 'react';
import { Image, Text } from 'react-native';
import styles from './RickyMortyCharacter.style';
import { IRickyMortyCharacterProps } from './RickyMortyCharacter.interface';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RickyMortyCharacter = ({ image, id, name }: IRickyMortyCharacterProps) => (
  <TouchableOpacity style={styles.container}>
    <Image source={{ uri: image }} style={styles.characterImage} resizeMode="contain" />
    <Text style={styles.title}>{name}</Text>
  </TouchableOpacity>
);
export default RickyMortyCharacter;
