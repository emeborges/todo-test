import { Global } from '@emotion/react'

// Add installed fonts here

const Fonts = () => (
    <Global
        styles={`
      /* latin */
      @font-face {
        font-family: 'Poppins-Regular';
        font-style: regular;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Poppins-Regular.ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Poppins-Bold';
        font-style: regular;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Poppins-Bold.ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Poppins-SemiBold';
        font-style: regular;
        font-weight: 600;
        font-display: swap;
        src: url('./fonts/Poppins-SemiBold.ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
    `}
    />
)

export default Fonts