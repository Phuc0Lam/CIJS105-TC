import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";

const App = () => {
  
  return (
    <div className="app">
      <h1>Hello mọi người!</h1>
      <Card name = "Nguyễn Văn Tài" learningClass = "Code Intensive" slogan = "Trở thành master coding là ước mơ của tôi"/>
      <Card name = "Trịnh Mẫn nhi" learningClass = "Web Fullstack" slogan = "Học nữa, Học Mãi"/>
      <Card name = "Vũ Long Môn" learningClass = "Code For Everyone" slogan = "Quyết tâm thành thạo ReactJs"/>
      
    </div>
  )
}

export default App;
