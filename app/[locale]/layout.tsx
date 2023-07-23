import { SiteHeader } from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FaqsSection from "@/components/FAQs";
import ThemeProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl"
import { getTranslator } from "next-intl/server";
import clsx from 'clsx';
import { Inter } from "next/font/google";
import { notFound } from 'next/navigation';
import React from "react";

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

async function getMessages(locale: string) {
    try {
        return (await import(`../../locale/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({
    children,
    params: { locale },
}: Props) {
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
            <head />
            <body className={clsx(inter.className, 'flex h-full flex-col')}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider locale={locale}>
                        <SiteHeader />         
                        <main className="w-full">{children}</main>
                        <FaqsSection />
                        <SiteFooter />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export async function generateMetadata({ params: {locale} }: Props): Promise<Metadata> {
    const t = await getTranslator(locale, 'Site');

    return {
        title: t('title'),
        description: t('description'),
        icons: {
            icon: './../favicon.ico',
        },
        openGraph: {
            locale,
            type: 'website',
        }
    };
}