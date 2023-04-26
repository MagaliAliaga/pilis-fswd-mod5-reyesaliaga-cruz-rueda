import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { getItems } from './api';
import { EventosScreen } from "./src/screens/events/EventosScreen.jsx";

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
    
      <>
        

    <View>
      {mostrarEventos ? (<EventosScreen />) :
      (
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
      <Button
        title={mostrarEventos ? "Volver a inicio" : "Mostrar eventos"}
        onPress={cambiarComponente}
      />
    </View>

    </>
  );
};

export default ItemList;
