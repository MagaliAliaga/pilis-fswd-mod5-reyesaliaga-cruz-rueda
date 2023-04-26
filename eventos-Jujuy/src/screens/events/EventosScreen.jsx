import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export const EventosScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <View style={styles.container}>
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
  )
}

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
