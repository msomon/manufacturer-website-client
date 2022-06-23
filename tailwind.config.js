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
          "primary": "#0FCFEC",
          "secondary": "#F000B8",
        
          "accent": "#DBFEFC",
                  
          "neutral": "#3D4451",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#F9EEFE",
          "success": "#570DF8",     
          "warning": "#FFF2F5",
                  
          "error": "#F87272",
          
        }
      },
      
    ],
   
  },
  
  plugins: [require("daisyui")],
}
