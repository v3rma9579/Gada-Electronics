import React from 'react'
import { PRODUCTS } from "../../products"
import '../shop/shop.css'

export const Shop = () => {
    return (
        <div className="container my-4">
            <div className="row">
                {
                    PRODUCTS.map((product) => {
                        return (
                            <>
                                <div key={product.id} className="col-lg-4 col-md-5 my-4 text-center">
                                    <div className="card">
                                        <img
                                            src={product.imgSrc}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <button className="btn btn-warning mx-4">
                                            ₹ {product.price} 
                                            </button>
                                            <button className="btn btn-success"
                                            >Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </div>
    )
}
