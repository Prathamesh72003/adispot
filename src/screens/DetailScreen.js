import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <ImageBackground
          source={require('../assets/minibg.png')}
          style={styles.bgImage}
          resizeMode="cover">
          <View style={styles.HeaderContainer}>
            <View style={styles.DrawerLogo}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <View style={styles.Drawer}>
                  <FontAwesome5 name="arrow-left" size={25} color={'#000'} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.Profile}>
              <FontAwesome5 name="star" size={20} color={'#000'} />
            </View>
          </View>
          <View style={styles.ProductImage}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/photos/combination-locks-on-a-row-of-red-high-school-lockers-picture-id92244911?b=1&k=20&m=92244911&s=170667a&w=0&h=Ont5Z8O49NqGAXVbw1IRZ78nh5D6OtWU_cUfnV0wpFE=',
              }}
              style={styles.PImage}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.NamePrice}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Digital Locks</Text>
          </View>
          <View style={styles.PriceContainer}>
            <Text style={styles.rs}>
              Rs. <Text style={styles.price}>2999</Text>
            </Text>
          </View>
        </View>
        <View style={styles.QuickOverview}>
          <Text style={styles.QuickTitle}>QUICK OVERVIEW</Text>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Text>
          <View style={styles.ratings}>
            <View style={styles.star}>
              <FontAwesome5 name="star" size={20} color={'#FCB040'} />
            </View>
            <View style={styles.NumRating}>
              <Text style={styles.numText}>
                4.2 | <Text style={styles.numPeople}>325 reviews</Text>{' '}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Elements}>
          <ScrollView horizontal>
            <View style={[styles.element, {marginLeft: 0}]}>
              <Text style={styles.elementText}>Features</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.elementText}>FAQ's</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.elementText}>Care</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.elementText}>Terms</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.elementText}>Terms</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.elementText}>Terms</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.elementText}>Terms</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.Info}>
          <View style={styles.detailss}>
            <View style={styles.detail1}>
              <Text style={styles.prInfo}>Product type: </Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.moreInfo}>Door Closed</Text>
            </View>
          </View>
          <View style={styles.detailss}>
            <View style={styles.detail1}>
              <Text style={styles.prInfo}>Model number: </Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.moreInfo}>T123R</Text>
            </View>
          </View>
          <View style={styles.detailss}>
            <View style={styles.detail1}>
              <Text style={styles.prInfo}>Finish: </Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.moreInfo}>Small</Text>
            </View>
          </View>
          <View style={styles.detailss}>
            <View style={styles.detail1}>
              <Text style={styles.prInfo}>Unit: </Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.moreInfo}>Premium</Text>
            </View>
          </View>
          <View style={styles.detailss}>
            <View style={styles.detail1}>
              <Text style={styles.prInfo}>Max width: </Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.moreInfo}>120mm</Text>
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <Button
            style={styles.SubmitBtn}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Buy
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFFAF3',
  },
  upperContainer: {
    display: 'flex',
    height: height / 3,
    backgroundColor: '#FCB040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  DrawerLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Drawer: {},
  logo: {
    marginLeft: 20,
  },
  Adi: {
    color: '#FCB040',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Spot: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  bgImage: {
    width: width,
    height: height / 3,
  },
  ProductImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  PImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  lowerContainer: {
    padding: 20,
    // backgroundColor: "red"
  },
  NamePrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {},
  name: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  PriceContainer: {},
  rs: {
    color: '#000',
    fontSize: 15,
  },
  price: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
  QuickOverview: {
    marginTop: 25,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  QuickTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 10,
    color: '#000',
    fontSize: 15,
    // fontWeight: 'bold',
    opacity: 0.7,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
  star: {},
  NumRating: {
    marginLeft: 15,
  },
  numText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  numPeople: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Elements: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  element: {
    marginLeft: 18,
    marginBottom: 20,
  },
  elementText: {
    fontSize: 15,
    color: '#000',
  },
  Info: {},
  detailss: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  detail1: {
    alignItems: 'center',
  },
  detail2: {
    alignItems: 'center',
    // width:
  },
  prInfo: {
    color: '#000',
    fontSize: 15,
    // marginTop: 20,
  },
  moreInfo: {
    color: '#000',
    fontSize: 15,
    marginLeft: 10,
  },
  btn: {
    position: 'absolute',
    bottom: 60,
    left: width / 3,
  },
  SubmitBtn: {
    backgroundColor: '#4377FE',
    width: 120,
    padding: 5,
    borderRadius: 20,
  },
});
