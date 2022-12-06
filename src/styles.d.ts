// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        colors: {
            shadow: string;
            purplePrimary: string;
            purpleSecondary: string;
            coralPrimary: string;
            greyPrimary: string;
        };
    }
}
