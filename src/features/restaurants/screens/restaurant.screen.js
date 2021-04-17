import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

import { SafeArea } from '../../../components/utility/safe-area.component'

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const SearchContainer = styled.View`
  padding: 16px;
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext)
  console.log(restaurantContext)
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
}
