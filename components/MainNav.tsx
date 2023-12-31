'use client';

import * as React from 'react';

import Link from 'next/link';

import { Dropdown } from 'antd';
import { useLocale, useTranslations } from 'next-intl';

import Icons from './Icons';
import { useEffect, useState } from 'react';

export interface NavItem {
  title: React.ReactNode;
  href: string;
}

export function MainNav() {
  const [state, setState] = useState(false)
  const locale = useLocale();
  const t = useTranslations();

  const NavItems: NavItem[] = [
    {
      title: t('Nav.home'),
      href: '/',
    },
    {
      title: t('Nav.about-us'),
      href: `/${locale}/about`,
    },
    {
      title: t('Nav.contact-us'),
      href: `/${locale}/contact`,
    },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target?.closest(".menu-btn")) setState(false);
    };
  }, [])

  return (
    <nav className={`md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between md:block">
          <a href="javascript:void(0)">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`flex-1 items-center mt-4 pb-4 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {
              NavItems.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 hover:text-gray-900">
                    <a href={item.href} className="block">
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
          {/* <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <a href="javascript:void(0)" className="block text-gray-700 hover:text-gray-900">
                  Log in
              </a>
              <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                  Sign in
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
              </a>
          </div> */}
        </div>
      </div>
    </nav>
  );


  // return (
  //   <div className="flex gap-6 md:gap-10">
  //     <div className="hidden items-center space-x-4 md:flex">
  //     <Link href="/">
  //       <div className="flex items-center space-x-2">
  //         <Icons.logo className="h-6 w-6" />
  //         <span className="hidden font-bold sm:inline-block">
  //           {t('Site.title')}
  //         </span>
  //       </div>
  //     </Link>

  //     {NavItems?.map(
  //       (item, index) =>
  //         item.href && (
  //           <Link
  //             key={index}
  //             href={item.href}
  //             className="flex items-center font-sans font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100"
  //           >
  //             {item.title}
  //           </Link>
  //         ),
  //     )}
  //     </div>

  //     <Dropdown
  //       menu={{
  //         items: NavItems?.map((item) => ({
  //           key: item.href,
  //           label: <Link href={item.href}>{item.title}</Link>,
  //         })),
  //       }}
  //     >
  //       <div className="btn md:hidden">
  //         <Icons.logo className="mr-2 h-4 w-4" />{' '}
  //         <span className="font-bold">Menu</span>
  //       </div>
  //     </Dropdown>
  //   </div>
  // );
}
