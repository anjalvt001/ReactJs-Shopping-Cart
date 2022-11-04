import React, { useState } from "react";
import {phonesData} from "./Product_data";
import { Card, Button } from "react-bootstrap";

const Product = () => {
    const [items , setItems] =  useState(phonesData)
    const decQty = (id) => {
        const newitem = items.map((item) => 
            item.id === id && item.Qty > 1 ? {...item,Qty : item.Qty - 1}: item
        );

        setItems(newitem)
    }
    const incQty = (id) => {
        const newitem = items.map((item) => 
            item.id === id ? {...item,Qty : item.Qty + 1}: item
        );

        setItems(newitem)
    }
    
  return (
    <div>
      <h1 className="bg-info text-white p-2">Products</h1>
      {
        items.map((item) => (
            <div className="d-inline-flex pb-2" key={item.id}>
            <Card className="shadow p-3 m-2 bg-body rounded" style={{ width: "15rem", }}>
        <Card.Img className="p-2 "style={{height: "14rem"}}variant="top" src= {require(`./assets/${item.image}.jpg`)} />
        <Card.Body>
          <Card.Title className="text-primary">{item.model}</Card.Title>
          <Card.Text>
          {item.desc}
          </Card.Text>
          <Card.Text>Price : ₹ {item.price}</Card.Text>
          <div  className="m-2">
            <Card.Text>Qty
                <Button onClick={() => decQty(item.id)} className="m-1" style={{ width: "2.4rem", }}>-</Button>{item.Qty}
                <Button onClick={() => incQty(item.id)} className="m-1" style={{ width: "2.4rem", }}>+</Button>
                
            </Card.Text>
          </div>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      </div>
        ))
      }
      
    </div>
  );
};

export default Product;
