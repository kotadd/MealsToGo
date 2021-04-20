import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato'
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { LocationContextProvider } from './src/services/location/location.context'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'

import { Navigation } from './src/infrastructure/navigation'

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
