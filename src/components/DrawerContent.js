import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {AuthContext} from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  //   const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                size={60}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>User07</Title>
                <Caption style={styles.caption}>
                  <FontAwesome5
                    style={{marginRight: 0}}
                    name="coins"
                    size={18}
                    color={'#fff'}
                  />{' '}
                  Coins: 20
                </Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="home"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Home</Text>}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="user-circle"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Profile</Text>}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="cart-plus"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Cart</Text>}
              onPress={() => {
                props.navigation.navigate('Cart');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="credit-card"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Payment</Text>}
              onPress={() => {
                props.navigation.navigate('Payment');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="ticket-alt"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Coupons</Text>}
              onPress={() => {
                props.navigation.navigate('Coupon');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="phone-alt"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Support</Text>}
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="info-circle"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>About Us</Text>}
              onPress={() => {
                props.navigation.navigate('About Us');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="comment-alt"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>FAQ</Text>}
              onPress={() => {
                props.navigation.navigate('FAQ');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="share-alt"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Share App</Text>}
              onPress={() => {
                props.navigation.navigate('Share App');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{marginRight: 0}}
                  name="paste"
                  size={18}
                  color={'#FD274A'}
                />
              )}
              label={() => <Text style={styles.lableText}>Privacy Policy</Text>}
              onPress={() => {
                props.navigation.navigate('Terms and Conditions');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={'#FD274A'} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            props.navigation.navigate('Login');
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    // borderBottomWidth: 2,
    // borderBottomColor: '#FD274A',
    backgroundColor: '#FD274A',
    marginTop: -5,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 3,
    fontWeight: 'bold',
    color: '#fff',
  },
  caption: {
    fontSize: 16,
    // lineHeight: 14,
    color: '#fff',
  },
  lableText: {
    fontSize: 18,
    color: '#FD274A',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 5,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
