import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import NavData from './component/Navbar/NavData'
import Buttons from './component/contentButtons/Buttons'
import Mail from './component/MailDetails/Mail'
import { MailData } from './component/MailsData'


function App() {
 
  const [dataMailDetails , setdataMailDetails] = useState(MailData);

//  function to filter by cateogry
const filterByCategory=(cat)=>{
if(cat === "الكل")
{
  setdataMailDetails(MailData)
}
else
{
  const newData = MailData.filter((item)=> item.category===cat)
  setdataMailDetails(newData)
}

}
// get all category
const allSpecificCategory = ["الكل",... new Set(MailData.map((item)=>item.category))]

//  filter by search
const filterBySearch=(word)=>{
  if(word !== "")
  {
    const newData = MailData.filter((item)=> item.mail === word)
    setdataMailDetails(newData)
  }
}
  return (
    <div>
        <NavData filterBySearch={filterBySearch}/>
        <Buttons filterByCategory={filterByCategory} allSpecificCategory={allSpecificCategory} />
        <Mail dataMailDetails={dataMailDetails}/>
    </div>
  )
}

export default App