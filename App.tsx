import React from 'react'
import { SafeAreaView } from 'react-native';
import ContadorScreen from './src/screens/ContadorScreen';
import DesignScreen from './src/screens/DesignScreen';
import DimensionesScreen from './src/screens/DimensionesScreen';
import FlexBoxDirectionScreen from './src/screens/FlexBoxDirectionScreen';
import FlexBoxJustifyContentScreen from './src/screens/FlexBoxJustifyContentScreen';
import FlexboxScreen from './src/screens/FlexboxScreen';
import HolaMundoScreen from './src/screens/HolaMundoScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*
      <HolaMundoScreen />
      <ContadorScreen /> 
      */}
      {/* <DesignScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexboxScreen /> */}
      {/* <FlexBoxDirectionScreen /> */}
      <FlexBoxJustifyContentScreen />
    </SafeAreaView>
  )
}

export default App;
