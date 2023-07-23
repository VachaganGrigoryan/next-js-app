'use client';

import { PropsWithChildren, useEffect, useState } from "react";

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import { ConfigProvider, theme } from "antd";
import { defaultLocale, langs } from "@/locale";
import AntdProvider from "./AntdProvider";


export type ProviderProps = PropsWithChildren<{
    locale: string;
}>;

export default function ThemeProvider(props: ProviderProps) {
    const {theme: nowTheme} = useTheme();

    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      // use your loading page
      return <div className="hidden">{props.children}</div>;
    }

    return (
        <NextThemeProvider

            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            <ConfigProvider
                locale={(langs as any)[(props.locale as any)] ?? defaultLocale}
                theme={{
                    algorithm: nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
                }}
            >
                <AntdProvider>{props.children}</AntdProvider>
            </ConfigProvider>
        </NextThemeProvider>
    )
}