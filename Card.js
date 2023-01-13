import React from 'react'

function Card(props) {
  return (
  
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
 <li className={props.data.UsersEnabler? "":"text-muted"}><span className="fa-li"><i className={props.data.UsersEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Plan==="Free"  ?props.data.Users :<b>{props.data.Users}</b> }</li>
   <li className={props.data.storageEnabler ? "":"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler ?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage} Storage</li>
<li className={props.data.publicProjectEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.publicProjectEnabler ?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicProject}</li>
<li className={props.data.communityAccessEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.communityAccessEnabler ?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityAccess}</li>
 <li className={props.data.privateProjectEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.privateProjectEnabler ?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateProject}</li>
 <li className={props.data.phoneSupportEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.phoneSupportEnabler ?"fas fa-check":"fas fa-times"}></i></span>{props.data.phoneSupport}</li>
<li className={props.data.subDomainEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.subDomainEnabler ?"fas fa-check":"fas fa-times"}></i></span>{props.data.plan==="Pro" ?<><b>Unlimited </b>{props.data.subDomain}</>:props.data.subDomain}</li>
<li className={props.data.reportsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.reportsEnabler ?"fas fa-check":"fas fa-times"}></i></span> {props.data.reports} </li> </ul>
            <div className="d-grid">
              <a href="Javascript void" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default Card