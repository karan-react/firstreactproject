import React from 'react'
import Propsstracture from './Propsstracture';
import Propsdata from './Propsdata';



function Propsmap(){
    return(
        <React.Fragment>
            {Propsdata.map(records=>{
                return(
                    <div className='col-3'>
                        <Propsstracture imgpath={records.imgpath} imgname={records.imgname} imgalt={records.imgalt} cardtitle={records.cardtitle} cardtext={records.cardtext} cardbtn={records.cardbtn}/> 
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Propsmap;











//  function Propsmap(ncard) {
//   return (
    
// function ncard(val){
//     return(
//     <Propsstracture
//      imgpath={val.imgpath} 
//      imgname={val.imgname} 
//      imgalt={val.imgalt} 
//      cardtitle={val.cardtitle} 
//      cardtext={val.cardtext} 
//      cardbtn={val.cardbtn}
//      /> 
//     )
// }
    
//     )

    
//     {Propsdata.map(ncard)};
// }
