import { primaryYellow, white } from './colors';

const statusBarConfig = {
    transparentStatusBar: {
        barStyle: 'dark-content',
        translucent: true,
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    yellowStatusBar: { barStyle: 'light-content', backgroundColor: primaryYellow },
    whiteStatusBar: { barStyle: 'dark-content', backgroundColor: white }
} as const;

export default statusBarConfig;
