import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Button, StyleSheet } from "react-native";
import { getItems } from "./api";
import { EventosScreen } from "./src/screens/events/EventosScreen.jsx";
import { FAB } from "react-native-paper";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [mostrarEventos, setMostrarEventos] = useState(false);

  function cambiarComponente() {
    setMostrarEventos(!mostrarEventos);
  }

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {mostrarEventos ? (
          <EventosScreen />
        ) : (
          <>
            <View>
              <Text>Lista de Items:</Text>
              <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
              />
            </View>
          </>
        )}
        {mostrarEventos ? (
          <FAB
            style={styles.fab}
            small
            icon="arrow-left-bold-box"
            onPress={cambiarComponente}
          />
        ) : (
          <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={cambiarComponente}
          />
        )}
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  profileInfo: {
    justifyContent: "center",
  },
  profileLocation: {
    fontSize: 16,
    color: "#777",
  },
});
