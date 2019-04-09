/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Splash from './screens/splash';
import CustomHeader from './component/customHeader';
import footerNav from './component/tabs/tabBar';
import HomePage from './screens/home';
import Entertain from './screens/entertaining';
import EntertainCategories from './screens/entertainCategories';
import Travel from './screens/travel';
import Interview from './screens/interview';
import Food from './screens/food';
import FeaturedItem from './screens/featuredItem';
import AddOnShopCategoriesPage from './screens/addOnShopCategories';
import categoryItem from './screens/categoryItem';
import shop1 from './screens/shop1';
import ShopCheckOutScreen from './screens/shopCheckoutScreen';
import checkoutCongratulation from './screens/checkoutCongratulation';
import search from './screens/search';
import CategoryMovie from './screens/categorymovie';
import CategoryFood from './screens/categoryfood';

const App = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        title: '',
        header: null
      },
    },
    CustomHeader: {
      screen: CustomHeader
    },
    footerNav: {
      screen: footerNav,

      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    Entertain: {
      screen: Entertain,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    EntertainCategories: {
      screen: EntertainCategories,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    CategoryFood: {
      screen: CategoryFood,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    CategoryMovie: {
      screen: CategoryMovie,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    Travel: {
      screen: Travel,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    Interview: {
      screen: Interview,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    Food: {
      screen: Food,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    FeaturedItem: {
      screen: FeaturedItem,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    AddOnShop: {
      screen: AddOnShopCategoriesPage,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    categoryItem: {
      screen: categoryItem,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    shop1: {
      screen: shop1,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    ShopCheckOutScreen: {
      screen: ShopCheckOutScreen,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    checkoutCongratulation: {
      screen: checkoutCongratulation,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    search: {
      screen: search
    },
  },
);
export default createAppContainer(App);

