import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TextInput,
	Pressable,
	Dimensions,
} from 'react-native';
import translateFunc from '../api/translate';
import useTranslateStore from '../store/TranslateStore';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
	// 存储用户输入内容的状态
	const [content, setContent] = useState('');
	// 存储翻译结果
	const [result, setResult] = useState('');

	// 获取当前的语言
	const languages = useTranslateStore((state) => state.languages.lanList);
	const curIndex = useTranslateStore((state) => state.languages.curIndex);
	const currentLanguage = languages[curIndex].chs;
	const lang = languages[curIndex].lang;

	// 增加历史记录
	const addHistory = useTranslateStore((state) => state.addHistory);

	function pressHandle() {
		if (content) {
			// 进行翻译
			translateFunc(content, { from: 'auto', to: `${lang}` }).then((res) => {
				setResult(res);
				addHistory(content, res);
			});
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' backgroundColor={'#4b3c96'} />
			{/* 上面翻译成哪一国语言 */}
			<View style={styles.lan}>
				<Text style={styles.lanTxt}>
					翻译为
					<Text
						style={{
							color: '#1c1b21',
							fontWeight: '900',
						}}
					>
						{currentLanguage}
					</Text>
				</Text>
			</View>
			{/* 输入要翻译的文本 */}
			<TextInput
				multiline
				numberOfLines={10}
				placeholder='请输入你要翻译的文本'
				placeholderTextColor={'#c7c7c7'}
				style={styles.txtInput}
				textAlignVertical='top'
				value={content}
				onChangeText={(t) => setContent(t)}
			/>
			{/* 翻译按钮 */}
			<Pressable style={styles.btn} onPress={pressHandle}>
				<Text style={styles.btnTxt}>点击翻译</Text>
			</Pressable>
			{/* 显示译文区域 */}
			<View style={styles.resultContainer}>
				<Text style={styles.resultTitle}>译文: </Text>
				<Text>{result}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
	},
	lan: {
		width: 100,
		height: 30,
		paddingLeft: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	lanTxt: {
		fontSize: 14,
		color: '#888',
	},
	txtInput: {
		borderColor: 'grey',
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		padding: 10,
		flex: 0.7,
	},
	btn: {
		backgroundColor: '#1890ff',
		padding: 10,
		width: 100,
		marginLeft: width - 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnTxt: {
		color: '#ffffff',
	},
	resultContainer: {
		flex: 1,
		padding: 10,
	},
	resultTitle: {
		fontSize: 18,
		marginBottom: 10,
	},
});
