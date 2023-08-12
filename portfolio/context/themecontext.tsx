'use client'
 
import { createContext,useState } from 'react'
import { Context } from 'vm';
 
 interface ContextProps {
  theme: String;
  changeTheme:(currentTheme:string)=>void;

 }
export const ThemeContext = createContext<ContextProps>({
  theme:'brown',
   changeTheme :()=>{
  }
})
 
export default function ThemeProvider({ children }:any) {
 const [theme,setTheme] =useState<String>("brown")

const changeTheme=(currentTheme:String)=>{
setTheme(currentTheme)
}
 
  return <ThemeContext.Provider value={{ theme ,changeTheme}}>{children}</ThemeContext.Provider>
}