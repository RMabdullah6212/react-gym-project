import { Check } from "lucide-react";
import React from "react";
import { Link } from 'react-router-dom';

const Pricing = () => {
    const Pricing = [
        {
            imgUrl: "/pricing.jpg",
            title: "QUATERLY",
            price: 15000,
            length: 3,
        },
        {
            imgUrl: "/pricing.jpg",
            title: "HALF YEAR",
            price: 27000,
            length: 6,
        },
        {
            imgUrl: "/pricing.jpg",
            title: "YEARLY",
            price: 50000,
            length: 12,
        },
    ]
    return (
        <section className="pricing">
            <h1>Elite Edge Fitness Plans</h1>
           <div className="wrapper">

                {
                    Pricing.map(Element=>{
                        return (
                            <div className="card" key={Element.title}>
                                <img src={Element.imgUrl} alt={Element.title} />
                                <div className="title">
                                    <h1>{Element.title}</h1>
                                    <h1>Package</h1>
                                    <h3>RS {Element.price}</h3>
                                    <p>For {Element.length} Months</p>
                                </div>
                                <div className="description">
                                    <p>
                                        <Check/> Equipment
                                    </p>
                                    <p>
                                        <Check/> Free Training
                                    </p>
                                    <p>
                                        <Check/> RestRooms
                                    </p>
                                    <p>
                                        <Check/> Open 24/7
                                    </p>
                                    <p>
                                        <Check/> Skilled trainers
                                    </p>
                                    <Link to="/">Join now</Link>

                                    
                                </div>
                            </div>
                        )
                    }

                    )
                }

           </div>

        </section >
    )
}

export default Pricing;