import React from 'react';
import { Image, Text } from 'react-native';
import styles from './RickyMortyCharacter.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IRickyMortyCharacterProps } from '../Characters.interface';

const RickyMortyCharacter = ({ image, id, name, onCharacterPress }: IRickyMortyCharacterProps) => (
  <TouchableOpacity style={styles.container} onPress={() => onCharacterPress({ id, image, name })}>
    <Image source={{ uri: image }} style={styles.characterImage} resizeMode="contain" />
    <Text style={styles.title}>{name}</Text>
  </TouchableOpacity>
);
export default RickyMortyCharacter;
