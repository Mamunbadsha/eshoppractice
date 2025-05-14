import React from 'react'

const Button = ({text,bg="#FF624c",fontName="Montserrat",fontWeight="bold",size="xl",color="white",paddingY="4",paddingx="10", redious="10"}) => {
  return (
    <button className={`bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color} py-${paddingY} px-${paddingx} rounded-[${redious}px]`}>{text}</button>
  )
}

export default Button