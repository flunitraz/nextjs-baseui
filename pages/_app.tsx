import type { AppProps } from 'next/app'
import React from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from "../styles/styletron"
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StyletronProvider value={styletron}>
            <BaseProvider theme={LightTheme}>
                <Component {...pageProps} />
            </BaseProvider>
        </StyletronProvider>
    )

        ;
}