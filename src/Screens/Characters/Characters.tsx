import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { charactersGql } from '../../graphql';
import { CustomHeader } from '../../Components/CustomHeader';
import { colors } from '../../AppStyles';
import withRenderCharacter from './hoc/withRenderCharacter';
import { ICharactersProps, IRickyMortyCharacterProps } from './Characters.interface';
import { ICharactersResult } from '../../graphql/GraphQl.interface';
import withFooter from '../../Hoc/withFooter';

const singlePageLength = 20;

const Characters = ({ navigation }: ICharactersProps) => {
  const [name, setName] = useState('');
  const { data, fetchMore, refetch, error } = useQuery(charactersGql, {
    variables: {
      page: 1,
      name: name,
    },
    fetchPolicy: 'cache-and-network',
  });

  const results: ICharactersResult[] = data && data.characters && data.characters.results;
  const resultsLength: number = results && results.length;
  const count: number =
    data && data.characters && data.characters.info && data.characters.info.count;
  const moreExist = resultsLength && resultsLength < count;
  const loadMoreCharacters = () => {
    if (moreExist) {
      fetchMore({
        variables: {
          page: resultsLength / singlePageLength + 1,
          name: name,
        },
      });
    }
  };

  const onCharacterPress = ({ name, id, image }: IRickyMortyCharacterProps) => {
    navigation.navigate('characterDetails', {
      id,
      name,
      image,
    });
  };

  const onChangeName = (text: string) => {
    // refetch({page: 1,name: text }).then(()=>setName(text));
    setName(text);
  };
  return (
    <>
      <CustomHeader
        title="Ricky and morty"
        searchIcon={true}
        setName={setName}
        onChaneName={onChangeName}
      />
      <FlatList
        data={results || []}
        renderItem={withRenderCharacter(onCharacterPress)}
        style={{ backgroundColor: colors.mainThemeBackgroundColor }}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => loadMoreCharacters()}
        onTouchStart={() => Keyboard.dismiss()}
        ListFooterComponent={withFooter(moreExist, error)}
      />
    </>
  );
};

export default Characters;
