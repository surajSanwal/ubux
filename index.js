import {Navigation} from 'react-native-navigation';
import App from './src';
import {registerRoutes} from './src/routes';
import {root} from './src/config';
import configureStore from './src/store';

Navigation.registerComponent(`WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  configureStore().then(store => {
    registerRoutes(store);
    root();
  });
});
