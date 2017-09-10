import { StackNavigator } from 'react-navigation'
import SignInScreen from '../Containers/SignInScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SignInScreen: { screen: SignInScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SignInScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
