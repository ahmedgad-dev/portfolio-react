export const svgOpacity = {
    hidden:{
        opacity: 0
    },
    visible: {
        opacity:1,
        transition: {
            duration: 1
        }
      }
    }
   

export const pathVariants = {
    hidden:{opacity: 0,
    pathLength: 0},
    visible: 
    {opacity: 1,
    pathLength: 1
    },
    transition:{
        duration:2,
        ease: 'ease-in-out'
    }
}