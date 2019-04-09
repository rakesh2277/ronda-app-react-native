import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import bottomShop from './bottomShop';
import giftCard from '../tabs/giftCard';
import shop from '../tabs/shop';
import rrNotes from '../tabs/rrNotes';
import more from '../tabs/more';

export default footerNav = createAppContainer(createBottomTabNavigator({
  bottomTabShop: bottomShop,
  giftCard: giftCard,
  shop: shop,
  rrNotes: rrNotes,
  more: more,
}, {
    tabBarOptions: {
      style: {
        bottom: 0,
        top: 3,
        right: 0,
        left: 0,
        height: 65,
        alignItems: 'center',
      }
    }
  }));

