import React from 'react'
import ServiceCard from './ServiceCard'
import ImgList from "../components/ImgList"

function Services() {
    return (
        <>
            <div className="my-2">
                <h2 className="text-center">Our Services</h2>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                ImgList.map((val,ind) => {
                                    return <ServiceCard
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
