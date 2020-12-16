import React from 'react';
import { IEpisodeListProps } from './EpisodeList.interface';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IEspoide } from '../CharacterDetails.interface';
import EpisodeListItem from './EpisodeListItem';
import withFooter from '../../../hoc/withFooter';

const EpisodeList = ({ episodes, loading, error }: IEpisodeListProps) => {
  const renderEpisodeItem = ({ item }: { item: IEspoide }) => <EpisodeListItem {...item} />;

  return (
    <FlatList
      data={episodes}
      renderItem={renderEpisodeItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={withFooter(loading, error)}
    />
  );
};

export default EpisodeList;
