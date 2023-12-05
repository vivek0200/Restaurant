import React, {useState} from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from './Navbar';
import Adv from './Adv';

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData,setMenuData]= useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return;
    }


    const updatedList =Menu.filter((currElem)=>{
      return currElem.category===category;
    });

    setMenuData(updatedList);
  };
  
  return (
    <>
    <Adv />
    <Navbar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData} />
    
    </>
  )
}

export default Resturant
