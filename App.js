import React, { Component } from "react";
import { Ionicons } from "react-native-vector-icons";
import { createBottomTabNavigator } from "react-navigation";
import ProjectsScreen from "./screens/ProjectsScreen";
import SearchScreen from "./screens/SearchScreen";
import SocialFeedScreen from "./screens/SocialFeedScreen";
import AccountScreen from "./screens/AccountScreen";
import LearningScreen from "./screens/LearningScreen";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // footer tabs with icons
    const Tabs = createBottomTabNavigator(
      {
        Learning: LearningScreen,
        Projects: ProjectsScreen,
        Social: SocialFeedScreen,
        Search: SearchScreen,
        Account: AccountScreen
      },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            const footerIconsMap = {
              Learning: "md-list",
              Projects: "md-bulb",
              Social: "logo-rss",
              Search: "md-search",
              Account: "md-person"
            };

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return (
              <Ionicons
                name={footerIconsMap[routeName]}
                size={25}
                color={tintColor}
              />
            );
          }
        }),
        tabBarOptions: {
          activeTintColor: "black",
          inactiveTintColor: "gray"
        }
      }
    );

    return <Tabs />;
  }
}
