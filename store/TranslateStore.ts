import { create } from 'zustand';
import defaultState from './state';

type Language = {
	chs: string;
	lang: string;
	index: number;
};

type Translation = {
	txt: string;
	res: string;
};

type TranslateState = {
	lanList: Language[];
	curIndex: number;
	history: Translation[];
};

type TranslateStore = {
	languages: TranslateState;
	changeLanguage: (language: number) => void;
	addHistory: (txt: string, res: string) => void;
	clearHistory: () => void;
};

const useTranslateStore = create<TranslateStore>((set) => ({
	languages: defaultState,
	// 选择语言
	changeLanguage: (language) =>
		set((state) => ({
			...state,
			languages: {
				...state.languages,
				curIndex: language,
			},
		})),
	// 添加历史记录
	addHistory: (txt: string, res: string) => {
		set((state) => ({
			...state,
			languages: {
				...state.languages,
				history: [
					{
						txt,
						res,
					},
					...state.languages.history, // 将新记录添加到数组的前面
				],
			},
		}));
	},
	// 清空历史记录
	clearHistory: () => {
		set((state) => ({
			languages: {
				...state.languages,
				history: [],
			},
		}));
	},
}));

export default useTranslateStore;
