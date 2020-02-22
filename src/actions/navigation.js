import {Navigation} from "react-native-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import constants from "../constants";
export const push = (componentId, Screen, screenProps, topBar) => {
  Promise.all([FontAwesome.getImageSource("chevron-left", 20)]).then(icons => {
    Navigation.push(componentId, {
      component: {
        name: Screen,
        passProps: screenProps,
        options: {
          topBar: {
            backButton: {
              icon: icons[0],
              color: constants.Colors.Black,
            },
            title: {
              component: {
                name: "topBar",
                alignment: "center",

                passProps: topBar.props,
              },
            },
            rightButtons: topBar.rightButtons,
          },
        },
      },
    });
  });
};
