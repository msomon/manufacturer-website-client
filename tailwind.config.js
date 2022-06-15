module.exports = {
  content: ["./src/**/*.{html,js}"],
 
  theme :{
    screens: {
      sm: '350px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },

  daisyui: {
    
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      },
      
    ],
   
  },
  
  plugins: [require("daisyui")],
}
