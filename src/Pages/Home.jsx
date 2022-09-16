import axios from "axios";
import React,{useEffect,useState} from "react";
import Master from "./Layout/Master";
import Loader from "../Component/Loader";

export default function Home (props){
  let [loader,setLoader] = useState(true);
  let [product,setProduct] = useState([]);
  useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=5').then((res)=>{
      // console.log(res.data);
      setProduct(res.data);
      setLoader(false);
    });

  },[]);

  let renderCard = (product)=>{
    // alert(product.category.name);
    let findProduct = props.card.find(d=>{
        return d.title === product.title
    })
    // console.log(findProduct);
    if(findProduct){
      findProduct.qty += 1;
    }else{
      product.qty = 1;
      props.setCard([...props.card,product]);
    }
  }

    return(
        <Master {...props}>
          {/* card={props.card} setCard={props.setCard} */}
          {loader && <Loader/>}
          {!loader && (
              <div className="container-fluid pr-5 pl-5 mt-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    {/* Loop  */}

                    {product.map((d)=>{
                       return(
                        <div  key={d.category.name} className="col-lg-3 col-md-3 col-12 m-5">
                        <div className="card rounded">
                          <img src={d.category.image} alt="" />
                          <div className="card-body bg-white">
                            <h4>{d.category.name}</h4>
                            <div>
                              Price:
                              <span className="badge badge-warning">{d.price}</span>
                              <button onClick={()=>renderCard(d)} className="btn btn-danger float-end">
                                <i className="fas fa-shopping-cart" />
                              </button>
                            </div>
                          </div>
                        </div>
                         </div>
                       )
                    })}
                  </div>
                </div>
              </div>
              </div>
          )}
        </Master>
    )
}