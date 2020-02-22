import {Navigation} from 'react-native-navigation';
import Home from '../containers';
import Explore from '../containers/Explore';
import Products from '../containers/Products';
import Notifications from '../containers/Notifications';
import Header from '../components/common/Header';
import {Provider} from 'react-redux';

export const registerRoutes = store => {
  Navigation.registerComponentWithRedux('home', () => Home, Provider, store);
  Navigation.registerComponentWithRedux(
    'explore',
    () => Explore,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'products',
    () => Products,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'notifications',
    () => Notifications,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'topBar',
    () => Header,
    Provider,
    store,
  );
};

export const registerNavigationListener = () => {};
