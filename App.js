import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import * as firebase from 'firebase'

import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato'
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald'

import { theme } from './src/infrastructure/theme'
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'

import { Navigation } from './src/infrastructure/navigation'

const firebaseConfig = {
  apiKey: 'AIzaSyBoao9aa5nmkjOcvPiVPP3zqb9De2fr_hc',
  authDomain: 'mealstogo-14e74.firebaseapp.com',
  projectId: 'mealstogo-14e74',
  storageBucket: 'mealstogo-14e74.appspot.com',
  messagingSenderId: '741192391033',
  appId: '1:741192391033:web:7aa3b33b3ca50563bcb7a8',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
