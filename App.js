import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import tabBarIcon from './utils/tabBarIcon';
import FeedScreen from './screens/FeedScreen';
import NewPostScreen from './screens/NewPostScreen';
import SelectPhotoScreen from './screens/SelectPhotoScreen';

const navigator = createBottomTabNavigator(
  {
    History: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('archive'),
      },
    },
    Photo: {
      screen: SelectPhotoScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('add-circle'),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: navigator,
      navigationOptions: { title: 'car-oof 🚘' },
    },
    NewPost: NewPostScreen,
  },
  {
    cardStyle: { backgroundColor: 'white' },
  },
);

export default stackNavigator;
