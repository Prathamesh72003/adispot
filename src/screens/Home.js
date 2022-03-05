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
const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.HeaderContainer}>
          <View style={styles.DrawerLogo}>
            <View style={styles.Drawer}>
              <FontAwesome5 name="bars" size={25} color={'#000'} />
            </View>
            <View style={styles.logo}>
              <Text style={styles.Adi}>
                Adi<Text style={styles.Spot}>Spot</Text>
              </Text>
            </View>
          </View>
          <View style={styles.Profile}>
            <FontAwesome5 name="user" size={25} color={'#000'} />
          </View>
        </View>
        <View style={styles.IntroTitle}>
          <View style={styles.greetUser}>
            <Text style={styles.GreetText}>Hello, Prathamesh</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.TitleText}>Choose Your Products</Text>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by product name..."
            // value={search}
            // onChangeText={text => setSearch(text)}
            placeholderTextColor={'#878787'}
          />
        </View>
        <View style={styles.BoxElements}>
          <View style={styles.Box}>
            <Text style={styles.BoxText}>All</Text>
          </View>
          <View style={styles.Box}>
            <Text style={styles.BoxText}>Dorma</Text>
          </View>
          <View style={styles.Box}>
            <Text style={styles.BoxText}>Dorma</Text>
          </View>
          <View style={styles.Box}>
            <Text style={styles.BoxText}>Dorma</Text>
          </View>
          <View style={styles.Box}>
            <Text style={styles.BoxText}>Dorma</Text>
          </View>
        </View>
        <View style={styles.DiscImageContainer}>
          <Image
            source={require('../assets/discount.png')}
            style={styles.DiscImage}
          />
        </View>
        <View style={styles.RecommendedContainer}>
          <View style={styles.RecTitle}>
            <Text style={styles.RecText}>Recommended for you</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.cards}>
              <View style={styles.Dealcard}>
                <View style={styles.productImage}>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
                    }}
                    style={styles.PImage}
                  />
                </View>
                <View style={styles.ProductDetails}>
                  <Text style={styles.Name}>Lorem Ipsum</Text>
                  <Text style={styles.Price}>Rs. 200</Text>
                </View>
              </View>
              <View style={styles.Dealcard}>
                <View style={styles.productImage}>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/photos/cordless-yellow-power-drill-isolated-on-a-white-background-picture-id184294297?b=1&k=20&m=184294297&s=170667a&w=0&h=0vSkHk1oHhoVez2poCNRo5dtg7c7W4ACgLxF-PoYiW8=',
                    }}
                    style={styles.PImage}
                  />
                </View>
                <View style={styles.ProductDetails}>
                  <Text style={styles.Name}>Lorem Ipsum</Text>
                  <Text style={styles.Price}>Rs. 200</Text>
                </View>
              </View>
              <View style={styles.Dealcard}>
                <View style={styles.productImage}>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
                    }}
                    style={styles.PImage}
                  />
                </View>
                <View style={styles.ProductDetails}>
                  <Text style={styles.Name}>Lorem Ipsum</Text>
                  <Text style={styles.Price}>Rs. 200</Text>
                </View>
              </View>
              <View style={styles.Dealcard}>
                <View style={styles.productImage}>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
                    }}
                    style={styles.PImage}
                  />
                </View>
                <View style={styles.ProductDetails}>
                  <Text style={styles.Name}>Lorem Ipsum</Text>
                  <Text style={styles.Price}>Rs. 200</Text>
                </View>
              </View>
              <View style={styles.Dealcard}>
                <View style={styles.productImage}>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
                    }}
                    style={styles.PImage}
                  />
                </View>
                <View style={styles.ProductDetails}>
                  <Text style={styles.Name}>Lorem Ipsum</Text>
                  <Text style={styles.Price}>Rs. 200</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  HeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  Profile: {},
  IntroTitle: {
    marginTop: 30,
  },
  greetUser: {},
  GreetText: {
    color: '#000',
    fontSize: 15,
  },
  titleContainer: {
    marginTop: 10,
  },
  TitleText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  searchInput: {
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: '#000',
    fontWeight: '500',
    borderColor: 'grey',
    borderWidth: 1.5,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    elevation: 5,
  },
  BoxElements: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  Box: {
    backgroundColor: '#FCB040',
    width: 50,
    height: 30,
    padding: 6,
    borderRadius: 10,
    marginLeft: 5,
  },
  BoxText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  DiscImageContainer: {
    marginTop: 20,
    // alignItems: "center",
  },
  DiscImage: {
    width: width - 35,
    height: 150,
    borderRadius: 10,
  },
  RecommendedContainer: {
    marginTop: 20,
  },
  RecTitle: {},
  RecText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cards: {
    marginTop: 30,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  Dealcard: {
    backgroundColor: '#fff',
    width: (width - 40) / 3,
    borderRadius: 10,
    height: 140,
    display: 'flex',
    marginLeft: 15,
  },
  productImage: {},
  PImage: {
    width: 105,
    borderRadius: 10,
    height: 75,
  },
  ProductDetails: {
    marginTop: 20,
  },
  Name: {
    color: '#000',
    fontSize: 15,
  },
  Price: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
