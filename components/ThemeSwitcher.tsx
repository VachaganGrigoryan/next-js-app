'use client';

import React from 'react';

import { Dropdown } from "antd"
import { useTheme } from "next-themes";
import Icons from "./Icons";
import { useTranslations } from "next-intl";


export const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme();
    const t = useTranslations('Theme');

    const handleThemeChange = ({ key }: {key: string}) => {
        setTheme(key);
    };

    const items = [
        {
            key: 'light',
            label: (
                <div className="flex items-center">
                    <Icons.SunMedium className="mr-2 h-5 w-5 text-orange-500"/>
                    <span className="ml-2">{t('light')}</span>
                </div>
            ),
        },
        {
            key: 'dark',
            label: (
                <div className="flex items-center">
                    <Icons.Moon className="mr-2 h-5 w-5 text-blue-500"/>
                    <span className="ml-2">{t('dark')}</span>
                </div>
            ),
        },
    ];


    return (
        <Dropdown
            menu={{
                items,
                selectable: true,
                selectedKeys: [theme ?? 'dark'],
                onClick: handleThemeChange,
            }}
        >
            <button className="btn">
                <Icons.SunMedium className="rotate-0 scale-100 text-orange-500 transition-all dark:-rotate-90 dark:scale-0" />
                <Icons.Moon className="absolute rotate-90 scale-0 text-blue-500 transition-all dark:rotate-0 dark:scale-100" />
            </button>
        </Dropdown>
    );
}