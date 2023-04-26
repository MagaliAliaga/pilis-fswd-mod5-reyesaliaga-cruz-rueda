import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { getItems } from './api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  return (
    <View>
      <Text>Lista de Items:</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ItemList;
