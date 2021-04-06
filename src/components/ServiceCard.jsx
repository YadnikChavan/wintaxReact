import React from 'react'
import { NavLink } from 'react-router-dom'

function ServiceCard(props) {
    return (
        <>
            <div className="col-lg-6 gy-4 col-10 mx-auto">
                <div className="card-hover mt-4 ">
                    <img src={props.imgsrc} 
                    width="400" height="400" 
                    className="card-img-top" 
                    alt={props.title}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">
                            Lorem ipsum, 
                            dolor sit amet consectetur adipisicing elit. 
                            Ab iure alias minus adipisci. Accusantium, eos! Mollitia eius vel eos eaque consequatur similique nobis molestias a, 
                            perferendis explicabo aperiam nulla quos?
                        </p>
                        <NavLink type="button" to="/callback" className="btn btn-outline-primary">Know More</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
