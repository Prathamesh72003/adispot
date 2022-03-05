import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView>
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
            <FontAwesome5 name="user" size={80} color={'#fff'} />
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.components}>
            <View style={styles.card}>
              <FontAwesome5 name="file-alt" size={30} color={'#FCB040'} />
              <Text style={styles.componentText}>My Orders</Text>
            </View>
            <View style={styles.card}>
              <FontAwesome5 name="heart" size={30} color={'#FCB040'} />
              <Text style={styles.componentText}>Wishlist</Text>
            </View>
            <View style={styles.card}>
              <FontAwesome5 name="bell" size={30} color={'#FCB040'} />
              <Text style={styles.componentText}>Notifications</Text>
            </View>
          </View>
        </View>
        <View style={styles.LowerContainer}>
          <View style={styles.TabList}>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <View style={styles.Icon}>
                  <FontAwesome5 name="rupee-sign" size={25} color={'#FCB040'} />
                </View>
                <View style={styles.ListTextContainer}>
                  <Text style={styles.ListText}>My Money</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <View style={styles.Icon}>
                  <FontAwesome5 name="user" size={25} color={'#FCB040'} />
                </View>
                <View style={styles.ListTextContainer}>
                  <Text style={styles.ListText}>My Account</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <View style={styles.Icon}>
                  <FontAwesome5
                    name="map-marker-alt"
                    size={25}
                    color={'#FCB040'}
                  />
                </View>
                <View style={styles.ListTextContainer}>
                  <Text style={styles.ListText}>My Location</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <View style={styles.Icon}>
                  <FontAwesome5
                    name="comment-alt"
                    size={25}
                    color={'#FCB040'}
                  />
                </View>
                <View style={styles.ListTextContainer}>
                  <Text style={styles.ListText}>Chat with AdiSpot</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <View style={styles.Icon}>
                  <FontAwesome5
                    name="shopping-bag"
                    size={25}
                    color={'#FCB040'}
                  />
                </View>
                <View style={styles.ListTextContainer}>
                  <Text style={styles.ListText}>Business Plan</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  upperContainer: {
    display: 'flex',
    height: height / 3,
    backgroundColor: '#FCB040',
    // alignItems: 'center',
    // justifyContent: 'center',
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
  ProfileIcon: {
    marginBottom: 20,
    display: 'flex',
    // justifyContent: "center",
    alignItems: 'center',
    marginTop: 20,
  },
  middleContainer: {
    backgroundColor: '#fff',
    marginTop: -50,
    // marginBottom: 20,
    borderRadius: 40,
    padding: 35,
    elevation: 10,
  },
  components: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  LowerContainer: {
    padding: 40,
    // backgroundColor: '#F3F3F3',
  },
  TabList: {},
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  Icon: {},
  ListTextContainer: {
    marginLeft: 20,
  },
  ListText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
