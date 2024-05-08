import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const languages = ['英语', '法语', '德语', '日语'];

export default function LanguageScreen() {
	return (
		<ScrollView>
			{languages.map((item, index) => {
				return (
					<Pressable key={index}>
						{index === 0 ? (
							<View style={[styles.lanItem, styles.selected]}>
								<Text style={styles.lanTitle}>{item}</Text>
								<AntDesign name='check' size={20} color='#555' />
							</View>
						) : (
							<View style={styles.lanItem}>
								<Text style={styles.lanTitle}>{item}</Text>
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
