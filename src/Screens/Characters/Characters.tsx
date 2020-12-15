import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { charactersGql } from '../../graphql';
import { CustomHeader } from '../../Components/CustomHeader';
import { colors } from '../../appStyles';
import withRenderCharacter from './hoc/withRenderCharacter';
import { ICharactersProps } from './Characters.interface';

const singlePageLength = 20;

const Characters = ({naviagtion}:ICharactersProps) => {
  const [name, setName] = useState('');
  const { data, fetchMore, refetch } = useQuery(charactersGql, {
    variables: {
      page: 1,
      name: name,
    },
    fetchPolicy: 'cache-and-network',
  });

  const results = data && data.characters && data.characters.results;
  const resultsLength = results && results.length;
  const count = data && data.characters && data.characters.info && data.characters.info.count;

  const loadMoreCharacters = () => {
    if (resultsLength < count) {
      fetchMore({
        variables: {
          page: resultsLength / singlePageLength + 1,
          name: name,
        },
      });
    }
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
      {results && (
        <FlatList
          data={results}
          renderItem={withRenderCharacter()}
          style={{ backgroundColor: colors.mainThemeBackgroundColor }}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => loadMoreCharacters()}
          onTouchStart={() => Keyboard.dismiss()}
        />
      )}
    </>
  );
};

export default Characters;
