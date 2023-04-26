import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    onLogin();
  };

  return (
    <View>
      <Text>Correo electrónico</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Contraseña</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} />

      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
