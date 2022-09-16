import React from 'react';
import Master from './Layout/Master';

export default function Card(props) {
    let renderReduce = (product)=>{
        props.setCard((preState)=>preState.map((d)=>{
            if(d.title === product.title){
                var updateQty = d.qty - 1;
                return {...d,qty:updateQty}
            }
            return d;
        }));
    }
    let renderAdd = (product)=>{
        props.setCard((preState)=>preState.map((d)=>{
            if(d.title === product.title){
                var updateQty = d.qty + 1;
                return {...d,qty:updateQty}
            }
            return d;
        }));
    }
  return (
    <div>
      <Master {...props}>
            <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Total Qty</th>
                        <th>Total Price</th>
                        <th>Option</th>
                        </tr>
                     </thead>
                    <tbody>
                       {props.card.map((d)=>{
                          return(
                        <tr key={d.title}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={d.category.image} className="rounded-circle" alt="" style={{width: '45px', height: '45px'}} />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{d.title}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{d.category.name}</p>
                                </td>
                                <td>{d.price}</td>
                                <td>{d.qty}</td>
                                <td>{d.qty*d.price}</td>
                                <td>
                                    <button onClick={()=>renderAdd(d)} className="btn btn-danger me-3">+</button>
                                    <button onClick={()=>renderReduce(d)} className="btn btn-danger">-</button>
                                </td>
                        </tr>
                          )
                       })}
                    </tbody>
             </table>
      </Master>
    </div>
  )
}
