import {Navigation} from "react-native-navigation";

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import constants from "../constants";

export const root = () => {
  Promise.all([
    Entypo.getImageSource("home", 20),
    FontAwesome.getImageSource("search", 20),
    Ionicons.getImageSource("ios-notifications", 20),
    MaterialIcons.getImageSource("chat", 20),
    FontAwesome.getImageSource("chevron-left", 20),
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        // bottomTabs: {
        //   children: [
        //     {
        stack: {
          children: [
            {
              component: {
                name: "home",
                passProps: {
                  text: "This is tab 1",
                },
                options: {
                  topBar: {
                    backButton: {
                      icon: icons[4],
                      color: constants.Colors.Black,
                    },
                    title: {
                      component: {
                        name: "topBar",
                        alignment: "center",

                        passProps: {
                          title: "Stores",
                          leftIcon: "store",
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
          options: {
            // bottomTab: {
            //   text: 'Home',
            //   icon: icons[0],
            //   testID: 'FIRST_TAB_BAR_BUTTON',
            //   ...bottomTab,
            // },
          },
        },
        //   },
        //   {
        //     component: {
        //       name: 'explore',
        //       passProps: {
        //         text: 'This is tab 2',
        //       },
        //       options: {
        //         bottomTab: {
        //           text: 'Explore',
        //           icon: icons[1],
        //           testID: 'SECOND_TAB_BAR_BUTTON',
        //           ...bottomTab,
        //         },
        //       },
        //     },
        //   },
        //   {
        //     component: {
        //       name: 'notifications',
        //       passProps: {
        //         text: 'This is tab 2',
        //       },
        //       options: {
        //         bottomTab: {
        //           text: 'Notifications',
        //           icon: icons[2],
        //           testID: 'SECOND_TAB_BAR_BUTTON',
        //           ...bottomTab,
        //         },
        //       },
        //     },
        //   },
        //   {
        //     component: {
        //       name: 'messages',
        //       passProps: {
        //         text: 'This is tab 2',
        //       },
        //       options: {
        //         bottomTab: {
        //           text: 'Messages',
        //           icon: icons[3],
        //           ...bottomTab,
        //         },
        //       },
        //     },
        //   },
        // ],
        // },
      },
    });
  });
};
