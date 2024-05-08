import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useTranslateStore from '../store/TranslateStore';

export default function LanguageScreen() {
	// 获取语言列表
	const languages = useTranslateStore((state) => state.languages.lanList);
	// 获取当前选中的语言
	const curIndex = useTranslateStore((state) => state.languages.curIndex);
	// 获取改变语言
	const changeLanguage = useTranslateStore((state) => state.changeLanguage);

	const pressHandle = (index) => {
		changeLanguage(index);
	};

	return (
		<ScrollView>
			{languages.map((item, index) => {
				return (
					<Pressable key={index} onPress={() => pressHandle(index)}>
						{index === curIndex ? (
							<View style={[styles.lanItem, styles.selected]}>
								<Text style={styles.lanTitle}>{item.chs}</Text>
								<AntDesign name='check' size={20} color='#555' />
							</View>
						) : (
							<View style={styles.lanItem}>
								<Text style={styles.lanTitle}>{item.chs}</Text>
							</View>
						)}
					</Pressable>
				);
			})}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	lanItem: {
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: '#aaa',
		paddingLeft: 10,
	},
	selected: {
		paddingRight: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	lanTitle: {
		lineHeight: 50,
		color: '#555',
	},
});
