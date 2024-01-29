import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';
import themeConfig from '../theme.config';

const defaultState = {
  isDarkMode: false,
  mainLayout: '',
  theme: 'light',
  locale: 'en',
  pageTitle: '',
  languageList: [
    { code: 'zh', name: 'Chinese' },
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesian' }
  ],
  semidark: false,
};

const initialState = {
  theme: localStorage.getItem('theme') || themeConfig.theme,
  locale: localStorage.getItem('i18nextLng') || themeConfig.locale,
  isDarkMode: false,
  semidark: localStorage.getItem('semidark') || themeConfig.semidark,
  languageList: [
    { code: 'zh', name: 'Chinese' },
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesian' }
  ],
};

const themeConfigSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    toggleTheme(state, { payload }) {
      payload = payload || state.theme; // light | dark | system
      localStorage.setItem('theme', payload);
      state.theme = payload;
      if (payload === 'light') {
        state.isDarkMode = false;
      } else if (payload === 'dark') {
        state.isDarkMode = true;
      } else if (payload === 'system') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          state.isDarkMode = true;
        } else {
          state.isDarkMode = false;
        }
      }

      if (state.isDarkMode) {
        document.querySelector('body')?.classList.add('dark');
      } else {
        document.querySelector('body')?.classList.remove('dark');
      }
    },
    toggleRTL(state, { payload }) {
      payload = payload || state.rtlClass; // rtl, ltr
      localStorage.setItem('rtlClass', payload);
      state.rtlClass = payload;
      document.querySelector('html')?.setAttribute('dir', state.rtlClass || 'ltr');
    },
    toggleAnimation(state, { payload }) {
      payload = payload || state.animation; // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
      payload = payload?.trim();
      localStorage.setItem('animation', payload);
      state.animation = payload;
    },
    toggleSemidark(state, { payload }) {
      payload = payload === true || payload === 'true' ? true : false;
      localStorage.setItem('semidark', payload);
      state.semidark = payload;
    },
    toggleLocale(state, { payload }) {
      payload = payload || state.locale;
      i18next.changeLanguage(payload);
      state.locale = payload;
    },
    setPageTitle(state, { payload }) {
      document.title = `${payload} | SolaPad`;
    },
  },
});

export const { toggleTheme, toggleRTL, toggleAnimation, toggleSemidark, toggleLocale, setPageTitle } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;