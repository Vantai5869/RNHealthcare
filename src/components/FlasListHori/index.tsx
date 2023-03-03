import React from 'react';
import { FlatList } from 'react-native';

const HorizontalList = ({ data, renderItem }) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default HorizontalList;
