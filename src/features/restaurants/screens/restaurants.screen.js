import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { Search } from '../components/search.component'

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext)

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
}
