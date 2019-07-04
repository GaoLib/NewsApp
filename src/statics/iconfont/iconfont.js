import { createGlobalStyle } from 'styled-components'

export const GlobalIconStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1562230757897'); /* IE9 */
        src: url('./iconfont.eot?t=1562230757897#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('./iconfont.woff?t=1562230757897') format('woff'),
        url('./iconfont.ttf?t=1562230757897') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1562230757897#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;