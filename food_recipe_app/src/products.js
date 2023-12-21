import React from 'react'

const  Products =({data}) => {
  return (
    <div>
       <div className="row">
        {data.map(item => 
        <div className="col-md-4"> 
           <div class="card" style={{"width":"20rem"}}>
           <img 
           class="card-img-top" src={item.recipe.image} alt="Card image cap"/>
           <div class="card-body">
            <center>
                <h4 class="card-title">{item.recipe.label}</h4>
                <p class="card-text">
                    Total Amount Of Calories :{Math.round(item.recipe.calories)}</p>
                <a href="#" class="btn btn-primary">Buy</a>
            </center>
           </div>
        </div>
       </div>
       )}
    <div>
    Products
    </div>
    </div>
    </div>
    )
        }
        
 export default Products
