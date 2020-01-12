import {Navigation} from 'react-native-navigation';
import App from './src';
import {registerRoutes} from './src/routes';
import {root} from './src/config';

Navigation.registerComponent(`WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  registerRoutes();
  root();
});
