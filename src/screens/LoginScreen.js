import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width,height} = Dimensions.get('window');
const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/loginBg.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.LoginCard}>
          <View style={styles.titleContainer}>
            <Text style={styles.LoginText}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.emailInput}
                activeUnderlineColor="#FCB040"
                // label="Email"
                placeholder="Email"
                value={text}
                onChangeText={text => setText(text)}
              />
            </View>
            <View style={styles.passwordConatiner}>
              <TextInput
                style={styles.passwordInput}
                activeUnderlineColor="#FCB040"
                // label="Password"
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={text => setPassword(text)}
                right={<TextInput.Icon name="eye" />}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.SubmitBtn}
              mode="contained"
              onPress={() => navigation.navigate('HomeScreen')}>
              Login
            </Button>
          </View>
        </View>
        <View style={styles.OtherLogin}>
          <View style={styles.otherTitle}>
            <Text style={styles.otherTitleText}>Login with</Text>
          </View>
          <View style={styles.IconsContainer}>
            <View style={styles.Icon}>
              <TouchableOpacity>
                <FontAwesome5
                  style={styles.icon}
                  name="twitter"
                  size={25}
                  color={'#FCB040'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.Icon}>
              <TouchableOpacity>
                <FontAwesome5
                  style={styles.icon}
                  name="facebook"
                  size={25}
                  color={'#FCB040'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.Icon}>
              <TouchableOpacity>
                <FontAwesome5
                  style={styles.icon}
                  name="google"
                  size={25}
                  color={'#FCB040'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: "flex",
    justifyContent: "center",
    padding: 30,
  },
  LoginCard: {
    marginTop: 80,
    padding: 20,
    borderColor: '#FCB040',
    borderWidth: 1,
    borderRadius: 10,
  },
  titleContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  LoginText: {
    color: '#FCB040',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 10,
  },
  emailContainer: {
    marginBottom: 20,
  },
  emailInput: {
    backgroundColor: '#fff',
  },
  passwordConatiner: {
    marginBottom: 20,
  },
  passwordInput: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  SubmitBtn: {
    backgroundColor: '#FCB040',
    width: 120,
    borderRadius: 20,
  },
  OtherLogin: {
    marginTop: 20,
    display: 'flex',
  },
  otherTitle: {},
  otherTitleText: {
    color: '#000',
    textAlign: 'center',
    opacity: 0.5,
    fontSize: 15,
  },
  IconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: width/2,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  Icon: {
    // width: "50%"
  },
  icon: {},
});
