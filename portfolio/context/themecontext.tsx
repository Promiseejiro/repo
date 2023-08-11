'use client'
 
import { createContext,useState } from 'react'
 
 interface ContextProps {
  theme: String;
 }
export const ThemeContext = createContext<ContextProps>({
  theme:'white'
})
 
export default function ThemeProvider({ children }:any) {
 const [theme,setTheme] =useState("white")
 
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}