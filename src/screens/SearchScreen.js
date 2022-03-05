import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const category = [
  {
    id: 1,
    name: 'Dorma Drill Machine',
    price: "200",
    image:
      'https://media.istockphoto.com/photos/pasta-on-supermarket-shelves-picture-id1299861504?b=1&k=20&m=1299861504&s=170667a&w=0&h=3UHsvWsc77Nh0SZIi6iigN82qYKBSfO0eJ_Of1KqXCA=',
  },
  {
    id: 1,
    name: 'Dorma Drill Machine',
    price: "200",
    image:
      'https://media.istockphoto.com/photos/pasta-on-supermarket-shelves-picture-id1299861504?b=1&k=20&m=1299861504&s=170667a&w=0&h=3UHsvWsc77Nh0SZIi6iigN82qYKBSfO0eJ_Of1KqXCA=',
  },
  {
    id: 1,
    name: 'Dorma Drill Machine',
    price: "200",
    image:
      'https://media.istockphoto.com/photos/pasta-on-supermarket-shelves-picture-id1299861504?b=1&k=20&m=1299861504&s=170667a&w=0&h=3UHsvWsc77Nh0SZIi6iigN82qYKBSfO0eJ_Of1KqXCA=',
  },
  {
    id: 1,
    name: 'Dorma Drill Machine',
    price: "200",
    image:
      'https://media.istockphoto.com/photos/pasta-on-supermarket-shelves-picture-id1299861504?b=1&k=20&m=1299861504&s=170667a&w=0&h=3UHsvWsc77Nh0SZIi6iigN82qYKBSfO0eJ_Of1KqXCA=',
  },
  {
    id: 1,
    name: 'Dorma Drill Machine',
    price: "200",
    image:
      'https://media.istockphoto.com/photos/pasta-on-supermarket-shelves-picture-id1299861504?b=1&k=20&m=1299861504&s=170667a&w=0&h=3UHsvWsc77Nh0SZIi6iigN82qYKBSfO0eJ_Of1KqXCA=',
  },
  {
    id: 1,
    name: 'Dorma Drill Machine',
    price: "200",
    image:
      'https://media.istockphoto.com/photos/pasta-on-supermarket-shelves-picture-id1299861504?b=1&k=20&m=1299861504&s=170667a&w=0&h=3UHsvWsc77Nh0SZIi6iigN82qYKBSfO0eJ_Of1KqXCA=',
  },
  {
    id: 1,
    name: 'Dorma Drill Machine',
    price: "200",
    image:
      'https://media.istockphoto.com/photos/pasta-on-supermarket-shelves-picture-id1299861504?b=1&k=20&m=1299861504&s=170667a&w=0&h=3UHsvWsc77Nh0SZIi6iigN82qYKBSfO0eJ_Of1KqXCA=',
  },
  
  
];
const SearchScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
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
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              // placeholder="Search by product name..."
              value={'Dorma drill machine'}
              // onChangeText={text => setSearch(text)}
              placeholderTextColor={'#878787'}
            />
            <TouchableOpacity style={styles.filterSearch}>
              <FontAwesome5 name="filter" size={15} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Heading}>
          <Text style={styles.foundText}>Found 32 items</Text>
        </View>
        <ScrollView>
          <View style={styles.cards}>
            {category.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  onPress={() => navigation.navigate('Products')}>
                  <View style={styles.Featuredcard}>
                    <View style={styles.FeaturedimageContainer}>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        style={styles.FeaturedImage}
                      />
                    </View>
                    <View style={styles.FeaturedTextContainer}>
                      <Text style={styles.featureText}>{item.name}</Text>
                      <Text style={styles.featureText}>Rs. {item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FAF3E8',
    padding: 20,
    // alignItems: 'center',
  },
  main: {
    display: 'flex',
    // alignItems: 'center',
  },
  HeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 5
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
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FAF3E8',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  searchInput: {
    flexGrow: 1,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: '#000',
    fontWeight: '500',
    borderColor: 'grey',
    borderWidth: 1.5,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  filterSearch: {
    display: 'flex',
    backgroundColor: 'lightgrey',
    padding: 10,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  Heading: {
    marginTop: 20,
  },
  foundText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  Featuredcard: {
    height: 200,
    width: 150,
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
    // backgroundColor: "grey"
  },
  FeaturedimageContainer: {},
  FeaturedImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  FeaturedTextContainer: {
    marginTop: 10,
  },
  featureText: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
});
