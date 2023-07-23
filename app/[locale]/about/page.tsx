import { useTranslations } from "next-intl";


const About = () => {
    const t =  useTranslations('AboutUs');

    return (
        <div className="container flex flex-col flex-wrap items-center justify-between py-9 mx-auto max-w-7xl">
            <h1 className="text-5xl">{t('title')}</h1>
            <div className="flex items-center space-x-4">
                {t('description')}
                </div>
        </div>
    )
};

export default About;