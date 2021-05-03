import React, { useContext } from 'react'
import styled from 'styled-components/native'

import { List, Avatar } from 'react-native-paper'

import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`

const AvatorContainer = styled.View`
  align-items: center;
`

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <AvatorContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer>
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatorContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  )
}
