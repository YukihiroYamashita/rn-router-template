import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../pages/Home';

const AppStack = createDrawerNavigator({
  Home
});

export default createAppContainer(AppStack);