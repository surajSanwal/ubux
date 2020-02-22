import {Navigation} from "react-native-navigation";
import {registerRoutes} from "./src/routes";
import {root} from "./src/config";
import configureStore from "./src/store";

Navigation.events().registerAppLaunchedListener(() => {
  configureStore().then(store => {
    registerRoutes(store);
    root();
  });
});
