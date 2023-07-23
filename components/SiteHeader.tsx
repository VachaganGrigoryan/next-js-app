import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Icons from "./Icons";
import { MainNav } from "./MainNav";


export const SiteHeader = () => (
    <header className="sticky top-0 z-40 w-full border-b dorber-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
        <div className="container flex flex-col flex-wrap justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <MainNav />
            <div className="flex flex-1 items-center justify-center space-x-4 md:justify-end">
                <nav className="flex items-center space-x-1">
                    <Link href="https://github.com/Fireflies-tech" target="_blank" rel="noreferrer" className="btn">
                        <Icons.Github className="h-5 w-5" />
                    </Link>
                    <LocaleSwitcher/>
                    <ThemeSwitcher />
                </nav>
            </div>
        </div>
    </header>
)