import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList167252Navigator from '../features/NotificationList167252/navigator';
import Settings167251Navigator from '../features/Settings167251/navigator';
import Settings167243Navigator from '../features/Settings167243/navigator';
import UserProfile167241Navigator from '../features/UserProfile167241/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList167252: { screen: NotificationList167252Navigator },
Settings167251: { screen: Settings167251Navigator },
Settings167243: { screen: Settings167243Navigator },
UserProfile167241: { screen: UserProfile167241Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
