import en_US from "antd/locale/en_US";
import hy_AM from "antd/locale/hy_AM";


export const langs = {
    en: {
        name: 'English',
        flag: '🇺🇸',
        locale: 'en',
        antd: en_US,
    },
    hy: {
        name: 'Հայերեն',
        flag: '🇦🇲',
        locale: 'hy',
        antd: hy_AM,
    },
};

export type ILang = keyof typeof langs;

export const defaultLocale: ILang = 'hy';