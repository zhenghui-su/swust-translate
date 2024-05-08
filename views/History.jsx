import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const historyArr = [
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },

	{ txt: '这是一个测试', res: 'this is a test' },
	{ txt: '这是一个测试', res: 'this is a test' },
];

export default function HistoryScreen() {
	return (
		<View style={styles.container}>
			{/* 上面标题部分 */}
			<View style={styles.header}>
				<Text style={styles.fon16}>翻译历史</Text>
				<Pressable style={styles.clearBtn}>
					<Text>清楚历史记录</Text>
					<AntDesign name='closecircleo' size={14} color={'black'} />
				</Pressable>
			</View>
			{/* 下面所有的翻译记录 */}
			<ScrollView>
				{historyArr.map((item, index) => {
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
