import { connect } from 'react-redux'
import React, { Component } from 'react'
import { ScrollView, Image, View, TextInput, KeyboardAvoidingView } from 'react-native'
import { Images } from '../Themes'
import { Button, Text } from 'native-base'
import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/SignInStyle'

class SignInScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: null,
      password: null
    }

  }

  _handlePressSignInButton = () => {
    // this should be a redux action hooked up to a saga
    this.props.authRequest(this.state.username, this.state.password)
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#EFEFEF'}}>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={Images.clearLogo} style={styles.logo} />
        </View>
        <View style={{flex: 4}}>
          <KeyboardAvoidingView behaviour='padding' style={{flex: 1}}>
            <TextInput placeholder='Username' style={{margin: 24}} onChangeText={ username => this.setState({ username }) } />
            <TextInput placeholder='Password' style={{margin: 24, marginTop: 0}} onChangeText={ password => this.setState({ password }) } />
            <Button onPress={this._handlePressSignInButton} style={{ marginRight: 24, marginTop: 0, alignSelf: 'flex-end', backgroundColor: '#009688'}}>
              <Text style={{paddingHorizontal: 16}}>Sign In</Text>
            </Button>
          </KeyboardAvoidingView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authRequest: (username, password) => {dispatch(AuthActions.authRequest(username, password))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
