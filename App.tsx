import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import TabOneScreen from "./screens/TabOneScreen";
import { RecoilRoot } from "recoil"

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RecoilRoot>
          <TabOneScreen />
        </RecoilRoot>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
