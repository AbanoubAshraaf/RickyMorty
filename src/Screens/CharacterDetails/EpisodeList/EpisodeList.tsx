import React from "react";
import { IEpisodeListProps } from "./EpisodeList.interface";
import { FlatList } from "react-native-gesture-handler";
import { IEspoide } from "../CharacterDetails.interface";
import EpisodeListItem from "./EpisodeListItem";
import withFooter from "../../../hoc/withFooter";
import styles from "./EpisodeList.styles";

const EpisodeList = ({ episodes, loading, error }: IEpisodeListProps) => {
  const renderEpisodeItem = ({ item }: { item: IEspoide }) => (
    <EpisodeListItem {...item} />
  );

  return (
    <FlatList
      data={episodes}
      renderItem={renderEpisodeItem}
      style={styles.eposideList}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={withFooter(loading, error)}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default EpisodeList;
