import React from "react";
import Pay from "./Pay";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    {/* <p>{price}</p> */}
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <br />
                    <br />
                    {/* <div className="card-read">Read</div> */}
                  </div>
                  <hr className="break" />
                  <br />
                  <img src={image} alt="images" className="card-media" />
                  <div className="card-number pre">{price}</div>
                  <button className="card-tag subtle" onClick={ () =>Pay} >Order Now</button>


                  {/* <span className="card-tag  subtle">Order Now</span> */}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;



// import React from 'react'

// const MenuCard = ({menuData}) => {
//     //console.log(menuData);
//   return (
//     <>
//     {menuData.map((currElem)=>{
//         return(
//             <>
//             <div className="card-container">
//               <div className="card">
//                 <div className="card-body">
//                   <span className="card-number card-circle subtle">1</span>
//                   <span className="card-author subtle">Breakfast</span>
//                   <h2 className="card-title">Maggi</h2>
//                   <span className="card-description subtle">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi ex amet velit incidunt vero adipisci iure, laudantium quae vel expedita. Sit, a ab aliquid repudiandae repellendus quam animi odit?
//                   </span>
//                   <div className="card-read">Read</div>
//                 </div>
//                 <img src="" alt="" className="card-media" />
//                 <span className="card-tag subtle">Order Now</span>
//               </div>
//             </div>
//             </>
//         )
//     })}
    
//     </>
//   );
// };

// export default MenuCard