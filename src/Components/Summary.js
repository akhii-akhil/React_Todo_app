import React, { useEffect, useState } from "react";

function Summary({ val }) {
  const [filter, setFilter] = useState(val)
  const handleDelete = (ids) => {
    const filt = filter.filter(item => item.id!=ids)
    setFilter(filt)
  }
  const el=filter.map((v,i) => (
    <div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src={process.env.PUBLIC_URL + "/imag.jpeg"} alt="Card image cap"/>
  <div class="card-body">
        <h5 class="card-title">{ v.title}</h5>
        <p class="card-text">{v.desc} </p>
            <button class="btn btn-dark" onClick={()=>handleDelete(v.id)}>delete</button>
        <a href="#" className="btn btn-dark new">{v.startTime.$H} :{v.startTime.$m } :{v.startTime.$s}  {v.endTime.$H}:{v.endTime.$m }:{v.endTime.$s} </a>
  </div>
</div>   
  ))
  return (
    <>
      <div id="cont">
        
        {
          el  
        }       
      </div>
    </>
  );
}
export default Summary;
