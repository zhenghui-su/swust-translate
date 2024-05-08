// 引入导航
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// 引入其他屏幕
import HomeScreen from './views/Home';
import HistoryScreen from './views/History';
import LanguageScreen from './views/Language';

// 引入静态资源
import HomeIcon from './assets/icon1.png';
import HistoryIcon from './assets/icon2.png';
import SelHomeIcon from './assets/icon1Sel.png';
import SelHistoryIcon from './assets/icon2Sel.png';

import { Image } from 'react-native';

// 创建底部标签导航器
const BottomTab = createBottomTabNavigator();
// 创建顶部标签导航器
const TopTab = createMaterialTopTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				screenOptions={({ route }) => ({
					// 图标
					tabBarIcon: ({ focused }) => {
						let iconSource;
						if (route.name === '首页') {
							iconSource = focused ? SelHomeIcon : HomeIcon;
						} else if (route.name === '历史') {
							iconSource = focused ? SelHistoryIcon : HistoryIcon;
						}
						return (
							<Image source={iconSource} style={{ width: 30, height: 30 }} />
						);
					},
					// 底部选中字体颜色
					tabBarActiveTintColor: '#1c1b21',
					// 底部未选中字体颜色
					tabBarInactiveTintColor: '#bfbfbf',
					tabBarLabelStyle: {
						fontSize: 12,
						fontWeight: '900',
					},
					// 头部样式
					headerStyle: {
						backgroundColor: '#4b3c96',
						height: 50,
					},
					headerTintColor: '#fff',
				})}
			>
				<BottomTab.Screen name='首页'>
					{() => (
						<TopTab.Navigator>
							<TopTab.Screen name='翻译' component={HomeScreen} />
							<TopTab.Screen name='语言' component={LanguageScreen} />
						</TopTab.Navigator>
					)}
				</BottomTab.Screen>
				<BottomTab.Screen name='历史' component={HistoryScreen} />
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
