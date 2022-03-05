import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TextInput, Button} from 'react-native-paper';

const {width, height} = Dimensions.get('window');
const cartProduct = [
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Lorem Ipsum',
    price: 6999,
  },
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Lorem Ipsum',
    price: 2999,
  },
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Lorem Ipsum',
    price: 1999,
  },
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Lorem Ipsum',
    price: 1999,
  },
  {
    image:
      'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
    name: 'Lorem Ipsum',
    price: 1999,
  },
];
const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.HeaderContainer}>
          <View style={styles.DrawerLogo}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.Drawer}>
                <FontAwesome5 name="arrow-left" size={25} color={'#000'} />
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.Profile}>
            <FontAwesome5 name="filter" size={20} color={'#000'} />
          </View> */}
        </View>
        <View style={styles.ProfileIcon}>
          <FontAwesome5 name="shopping-cart" size={60} color={'#fff'} />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.ProductPrice}>
          <View style={styles.productContainer}>
            <View style={styles.ImageContainer}>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/photos/hammer-picture-id183759696?b=1&k=20&m=183759696&s=170667a&w=0&h=kJuMYhgwWtb2xfxLa_SpceRVzrc9t7PZoiupFJPNGCY=',
                }}
                style={styles.ProductImage}
              />
            </View>
            <View style={styles.ProductDetails}>
              <Text style={styles.ProductDetailsName}>Lorem Ipsum</Text>
              {/* <View style={styles.quantity}>
                <View style={styles.sub}>
                  <Text style={styles.subText}>-</Text>
                </View>
                <View style={styles.number}>
                  <Text tyle={{color: "#000"}}>0</Text>
                </View>
                <View style={styles.plus}>
                  <Text tyle={styles.plusText}>=</Text>
                </View>
              </View> */}
            </View>
          </View>
          <View style={styles.PriceContainer}>
            <Text style={styles.PriceText}>
              Rs. <Text style={styles.actualPrice}>6999</Text>
            </Text>
          </View>
        </View>
        <View style={styles.CartHeart}>
          <View style={styles.button}>
            <Button
              style={styles.SubmitBtn}
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Add to cart
            </Button>
          </View>
          <View style={styles.heart}>
            <FontAwesome5 name="heart" size={25} color={'#FCB040'} />
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.lowerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Cart</Text>
          </View>
          <View style={styles.products}>
            {cartProduct.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('Details')}>
                  <View style={styles.product}>
                    <View style={styles.imageDetail}>
                      <View style={styles.CartproductImage}>
                        <Image
                          source={{
                            uri: item.image,
                          }}
                          style={styles.CatrImage}
                        />
                      </View>
                      <View style={styles.CartproductDetails}>
                        <View style={styles.detailName}>
                          <Text style={styles.nameText}>{item.name}</Text>
                        </View>
                        <View style={styles.detailPrice}>
                          <Text style={styles.Rs}>
                            Rs.{' '}
                            <Text style={styles.actualPrc}>{item.price}</Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.quantityContainer}>
                      <Text style={styles.quantityText}>x1</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.Total}>
            <View style={styles.totalPrice}>
              <Text style={styles.totalPriceText}>Rs. 11999</Text>
            </View>
            <View style={styles.totalBtn}>
              <TouchableOpacity>
                <View style={styles.btn}>
                  <Text style={styles.buyNow}>Buy now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#3B3A38',
  },
  upperContainer: {
    display: 'flex',
    height: height / 3,
    backgroundColor: '#FCB040',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20
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
  ProfileIcon: {
    marginBottom: 20,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 35
  },
  middleContainer: {
    backgroundColor: '#fff',
    marginTop: -50,
    // marginBottom: 20,
    borderRadius: 40,
    padding: 35,
    elevation: 10,
  },
  ProductPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ImageContainer: {},
  ProductImage: {
    width: 50,
    height: 30,
  },
  ProductDetails: {
    marginLeft: 20,
  },
  ProductDetailsName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  PriceContainer: {},
  PriceText: {
    color: '#000',
  },
  actualPrice: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  CartHeart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    marginLeft: 10,
  },
  SubmitBtn: {
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#FCB040',
    padding: 5,
  },
  heart: {
    marginRight: 10,
  },
  lowerContainer: {
    padding: 20,
  },
  titleContainer: {
    marginTop: 10,
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  products: {
    marginTop: 20,
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CartproductImage: {},
  CatrImage: {
    borderRadius: 10,
    width: 75,
    height: 60,
  },
  CartproductDetails: {
    marginLeft: 15,
  },
  detailName: {
    marginBottom: 5,
  },
  nameText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  detailPrice: {},
  Rs: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  actualPrc: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityContainer: {},
  quantityText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Total: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    borderColor: '#FCB040',
    borderWidth: 1,
    width: '42%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 5,
    left: '65%',
    marginTop: 10,
    marginBottom: 5,
  },
  totalPrice: {
    padding: 5,
  },
  totalPriceText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  totalBtn: {
    padding: 5,
    backgroundColor: '#FCB040',
    borderRadius: 10,
    marginLeft: 5,
  },
  btn: {
    // padding: 2
  },
  buyNow: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
