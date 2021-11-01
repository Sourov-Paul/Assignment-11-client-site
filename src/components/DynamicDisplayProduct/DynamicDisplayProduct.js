import React from 'react';

const DynamicDisplayProduct = (props) => {
    const{_id,name,dres,img}=props.product;

    return (
        <div>
            <div className="col">
                <div className="card">
                <img  src={img} width="400px" className="card-img img-fluid all_images" alt="..."/>
<div className="card-body">
<h5 className="card-title">{name}</h5>
                   <p className="card-text">{dres}</p>
</div>
                </div>
            </div>
        </div>
    );
};

export default DynamicDisplayProduct;