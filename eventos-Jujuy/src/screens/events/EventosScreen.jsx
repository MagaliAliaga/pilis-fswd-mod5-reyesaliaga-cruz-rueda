import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios'; // importa la librería axios

export const EventosScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [eventos, setEventos] = useState([]); // estado para almacenar los eventos

  useEffect(() => {
    // realiza la petición GET al montar el componente
    axios.get('https://64491a8ee7eb3378ca3f6ad2.mockapi.io/API/v1/events')
      .then(response => {
        setEventos(response.data); // actualiza el estado con los datos obtenidos
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // asegura que la petición se realice solo una vez al montar el componente

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      {/* Muestra la lista de eventos */}
      {eventos.map(evento => (
        <View key={evento.id}>
          <Text>{evento.nombre}</Text>
          <Text>{evento.lugar}</Text>
          <Text>{evento.fecha}</Text>
          <Text>{evento.ubicacion}</Text>
        </View>
      ))}
      
      {/* Agrega el formulario para registrar nuevos eventos */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Nombre'
          />
        )}
        name='nombre'
        defaultValue=''
      />
      {errors.nombre && <Text>Este campo es requerido.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Lugar'
          />
        )}
        name='lugar'
        defaultValue=''
      />
      {errors.lugar && <Text>Este campo es requerido.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Fecha'
          />
        )}
        name='fecha'
        defaultValue=''
      />
      {errors.fecha && <Text>Este campo es requerido.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Ubicacion'
          />
        )}
        name='ubicacion'
        defaultValue=''
      />
      {errors.ubicacion && <Text>Este campo es requerido.</Text>}
      <Button title='Registrar' onPress={handleSubmit(onSubmit)} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '200%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10
  }
})
