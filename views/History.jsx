import {
	Alert,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useTranslateStore from '../store/TranslateStore';

export default function HistoryScreen() {
	const history = useTranslateStore((state) => state.languages.history);
	// 清除历史记录
	const clearHistory = useTranslateStore((state) => state.clearHistory);

	const pressHandle = () => {
		Alert.alert('通知', '是否清除所有历史记录', [
			{
				text: '取消',
				onPress: () => {},
				style: 'cancel',
			},
			{
				text: '确定',
				onPress: () => clearHistory(),
			},
		]);
	};

	return (
		<View style={styles.container}>
			{/* 上面标题部分 */}
			<View style={styles.header}>
				<Text style={styles.fon16}>翻译历史</Text>
				<Pressable style={styles.clearBtn} onPress={pressHandle}>
					<Text>清除历史记录</Text>
					<AntDesign name='closecircleo' size={14} color={'black'} />
				</Pressable>
			</View>
			{/* 下面所有的翻译记录 */}
			<ScrollView>
				{history.map((item, index) => {
					return (
						<View key={index} style={styles.item}>
							<View>
								<Text style={[styles.txt, styles.fon16]}>{item.txt}</Text>
							</View>
							<View>
								<Text>{item.res}</Text>
							</View>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	clearBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 120,
	},
	item: {
		marginTop: 15,
	},
	txt: {
		color: '#888',
		marginBottom: 5,
	},
	fon16: {
		fontSize: 16,
	},
});
