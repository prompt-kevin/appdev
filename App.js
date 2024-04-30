import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, Animated, ImageBackground, StyleSheet, Image, View, TextInput, Button, Text } from 'react-native';

export default function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 3000, 
        useNativeDriver: true
      }
    ).start(() => {
      setTimeout(() => setShowLoginForm(true), 1000); 
    });
  }, [fadeAnim]);

  const image = require('./assets/bg2.png');

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={image} style={styles.image}>
        {showLoginForm ? (
          <LoginForm />
        ) : (
          <Animated.Image
            style={[styles.mainLogo, { opacity: fadeAnim }]}
            source={require('./assets/logo.png')}
          />
        )}
      </ImageBackground>
    </View>
  );
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', username);
    console.log('Password:', password);
    
  };

  return (
    <View style={styles.container2}>
        <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={handleLogin}
          color="purple" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainLogo: {
    zIndex: 1,
    width: 'auto',
    height: 500,
    aspectRatio: 1,
  },
  image: {
    zIndex: -1,
    resizeMode: 'cover',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', 
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    color:"white",
    textAlign:"left",
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#f9f9f9"
  },
  buttonContainer: {
    width: '100%', 
    marginTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,

  },
  logo: {
    width: 300,
    height: 300,
  },
});
