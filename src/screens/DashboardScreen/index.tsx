import React, {Fragment} from 'react';
import {View, TouchableOpacity} from 'react-native';
import StatusBar from '../../common/components/StatusBar';
import {defaultProps} from '../../common/types';
import {Header, Icon, Avatar} from 'react-native-elements';
import DashboardItem from './DashboardItem';
import {colors} from '../../common/styles';
import {styles} from './styles';

const DashboardScreen = (props: defaultProps) => {
  const {navigation} = props;

  const HeaderView = () => (
    <Header
      backgroundColor={colors.background}
      leftComponent={
        <TouchableOpacity onPress={() => navigation?.toggleDrawer()}>
          <Icon
            name="menu"
            size={24}
            color={colors.text}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      }
      rightComponent={
        <View style={styles.headerRight}>
          <View>
            <Avatar
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
              size="medium"
            />
          </View>
        </View>
      }
      centerComponent={{text: 'Dashboard', style: styles.heading}}
    />
  );

  return (
    <Fragment>
      <StatusBar />
      <HeaderView />
      <DashboardItem />
    </Fragment>
  );
};

export default DashboardScreen;
