import {Navigation} from 'react-native-navigation';
import Home from '../containers';
import Explore from '../containers/Explore';
import Messages from '../containers/Messages';
import Notifications from '../containers/Notifications';

export const registerRoutes = () => {
  Navigation.registerComponent('home', () => Home);
  Navigation.registerComponent('explore', () => Explore);
  Navigation.registerComponent('messages', () => Messages);
  Navigation.registerComponent('notifications', () => Notifications);
};

export const registerNavigationListener = () => {};
