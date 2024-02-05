/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './views/**/*.ejs',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage : {
        'herobg' : 'url(/images/herobg1.png)',
        'testibg' : 'url(/images/hero.png)'
      },
      fontFamily: {
        poppinsregular: ['Poppins-Regular', 'sans'],
        poppinsmedium: ['Poppins-Medium', 'sans'],
        poppinslight: ['Poppins-Light', 'sans'],
        poppinsthin: ['Poppins-Thin', 'sans'],
        poppinsbold: ['Poppins-Bold', 'sans'],
        poppinssemibold: ['Poppins-SemiBold', 'sans'],
      }
    },
  },
  plugins: [],
}

