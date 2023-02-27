import React from 'react'

const Propsstracture = (props) => {
  
  return (
    <React.Fragment>
      <div className="card">
        <img src={props.imgpath} className={props.imgname} alt={props.imgalt} />
        <div className="card-body">
          <h5 className="card-title">{props.cardtitle}</h5>
          <p className="card-text">{props.cardtext}</p>
          <a href="#" className="btn btn-primary">{props.cardbtn}</a>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Propsstracture;

