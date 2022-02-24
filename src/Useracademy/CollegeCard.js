import React from "react";

const MenuCard = ({ menuData }) => {
  
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, image,Place} = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      <h3>{Place}</h3>
                    </span>
                    <div className="card-read">Read More</div>
                  </div>
                <img src={image} alt="images" className="card-media" /> 

                  
                  
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