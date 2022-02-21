import {extendTheme} from 'native-base';

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light',
    fontConfig: {
        Roboto: {
            100: {
                normal: 'Roboto-Thin',
                italic: 'Roboto-ThinItalic',
            },
            200: {
                normal: 'Roboto-Light',
                italic: 'Roboto-LightItalic',
            },
            300: {
                normal: 'Roboto-Light',
                italic: 'Roboto-LightItalic',
            },
            400: {
                normal: 'Roboto-Regular',
                italic: 'Roboto-Italic',
            },
            500: {
                normal: 'Roboto-Medium',
            },
            600: {
                normal: 'Roboto-Medium',
                italic: 'Roboto-MediumItalic',
            },
            // Add more variants
            700: {
                normal: 'Roboto-Bold',
            },
            800: {
                normal: 'Roboto-Bold',
                italic: 'Roboto-BoldItalic',
            },
            900: {
                normal: 'Roboto-Bold',
                italic: 'Roboto-BoldItalic',
            },
        },
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
        mono: 'Roboto',
    },
};
export const customTheme = extendTheme(config);
