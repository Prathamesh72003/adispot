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
  Dimensions
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
const {width,height} = Dimensions.get('window');
const cartProduct = [
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Dorma Hammer 2 in 1',
    price: 6999,
    time: "12:15:00"
  },
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Lorem Ipsum',
    price: 2999,
    time: "12:15:00"
  },
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Lorem Ipsum',
    price: 1999,
    time: "12:15:00"
  },
];
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/homeBg.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.HeaderContainer}>
          <View style={styles.DrawerLogo}>
            <TouchableOpacity>
              <View style={styles.Drawer}>
                <FontAwesome5 name="bars" size={25} color={'#000'} />
              </View>
            </TouchableOpacity>
            <View style={styles.logo}>
              <Text style={styles.Adi}>
                Adi<Text style={styles.Spot}>Spot</Text>
              </Text>
            </View>
          </View>
          <View style={styles.Profile}>
            <FontAwesome5 name="filter" size={20} color={'#000'} />
          </View>
        </View>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>Welcome to</Text>
          <Text style={styles.TitleText2}>AdiSpot</Text>
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

        <View style={styles.categories}>
          <View style={styles.categoryTitle}>
            <Text style={styles.containerTitle}>Categoires</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.viewAll}>
              <Text style={styles.containerSubTitle}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoryContent}>
          <View style={styles.cards}>
            <ScrollView horizontal>
              <View style={styles.card}>
                <View style={styles.box}>
                  <FontAwesome5 name="bolt" size={30} color={'#fff'} />
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.oriText}>Electronics</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.box}>
                  <FontAwesome5 name="bolt" size={30} color={'#fff'} />
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.oriText}>Electronics</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.box}>
                  <FontAwesome5 name="bolt" size={30} color={'#fff'} />
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.oriText}>Electronics</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.box}>
                  <FontAwesome5 name="bolt" size={30} color={'#fff'} />
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.oriText}>Electronics</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.box}>
                  <FontAwesome5 name="bolt" size={30} color={'#fff'} />
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.oriText}>Electronics</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.categories}>
          <View style={styles.categoryTitle}>
            <Text style={styles.containerTitle}>Top Deals</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.viewAll}>
              <Text style={styles.containerSubTitle}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.topDeal}>
          <View style={styles.DealsCards}>
            <ScrollView horizontal>
              {cartProduct.map((items, index) => {
                return (
                  <TouchableOpacity key={index} onPress={()=> navigation.navigate('Details')}>
                    <View style={styles.Dealcard}>
                      <View style={styles.rightColumn}>
                        <View style={styles.DealName}>
                          <Text style={styles.DealNameText}>{items.name}</Text>
                        </View>
                        <View style={styles.DealPrice}>
                          <Text style={styles.DealPriceText}>
                            Rs. {items.price}
                          </Text>
                        </View>
                        <View style={styles.DealEnds}>
                          <Text style={styles.DealEndsText}>
                            Ends in {items.time}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.LeftColumn}>
                        <View style={styles.ImageContainer}>
                          <Image
                            source={{
                              uri: items.image,
                            }}
                            style={styles.Dealimage}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

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
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Spot: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Title: {
    marginTop: 30,
  },
  TitleText: {
    color: '#fff',
    fontSize: 22,
  },
  TitleText2: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 55,
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
  categories: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  containerSubTitle: {
    fontSize: 13,
    color: 'blue',
  },
  categoryContent: {
    marginTop: 20,
    // padding: 5,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  cards: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FCB040',
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 10,
  },
  box: {},
  boxText: {
    marginTop: 5,
  },
  oriText: {
    color: '#000',
  },
  topDeal: {
    marginTop: 25,
  },
  DealsCards: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  Dealcard: {
    backgroundColor: '#fff',
    width: width / 1.3,
    borderRadius: 10,
    height: 130,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // elevation: 1,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 40,
  },
  rightColumn: {
    padding: 15,
  },
  DealName: {
    marginTop: 5,
  },
  DealNameText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  DealPrice: {
    marginTop: 15,
  },
  DealPriceText: {
    fontSize: 15,
    color: '#000',
  },
  DealEnds: {
    marginTop: 15,
  },
  DealEndsText: {
    fontSize: 12,
    color: '#000',
    opacity: 0.7,
  },
  LeftColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  ImageContainer: {
    //   marginLeft: 10
  },
  Dealimage: {
    width: 70,
    height: 50,
  },
});
