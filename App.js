import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from "./pages/Navigator"
import { StateProvider } from './StateProvider/StateProvider';
import reducer, { initialState } from './StateProvider/reducer';

//-------------------------------------All imports above

export default function App() {
  return (
    <>
        {/* Wraping everything in State Provider */}
        <StateProvider initialState={initialState}
           reducer={reducer}>
          <Navigator/>
        </StateProvider>
    <StatusBar backgroundColor="#009387" />
    </>
  );
}

