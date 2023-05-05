import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { SearchScreen } from "./src/screens/SearchScreen";
import { HeroDetailScreen } from "./src/screens/HeroDetailScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  HeroDetail: HeroDetailScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Busca Marvel Teste Front-End'
  }
});

export default createAppContainer(navigator);