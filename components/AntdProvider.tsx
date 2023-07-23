'use client';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import React, {useState} from 'react';

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
    const [cache] = useState(() => createCache());

    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    ));

    if (typeof window !== 'undefined') return <>{children}</>;

    return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdProvider;
