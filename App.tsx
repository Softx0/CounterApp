import React from 'react'
import { SafeAreaView } from 'react-native';
import ContadorScreen from './src/screens/ContadorScreen';
import DesignScreen from './src/screens/DesignScreen';
import HolaMundoScreen from './src/screens/HolaMundoScreen';

const App = () => {



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*
      <HolaMundoScreen />
      <ContadorScreen /> 
      */}
      <DesignScreen />
    </SafeAreaView>
  )
}

export default App;
