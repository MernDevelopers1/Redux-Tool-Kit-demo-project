import { useDispatch,useSelector } from 'react-redux';
import { fetchAllProducts } from '../data/productSlice';
import CartSlice from '../data/cartSlice';
import '../styles/home.scss'
import { useEffect } from 'react';

const Home = () => {
  const {cart,products} = useSelector((state) => state);
  const {addToCart, removeFromCart} = CartSlice.actions;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllProducts(`http://localhost:3000/products`))
  },[dispatch])
  return (
    <div className="container product-catalogue">
      <div className="row">
        {products.data.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  {!cart.cartProductItems.includes(product.id) && (<button className="btn btn-primary" onClick={()=>dispatch(addToCart(product.id))}>Add to cart</button>)}
                  {cart.cartProductItems.includes(product.id) && (<button className="btn btn-primary" onClick={()=>dispatch(removeFromCart(product.id))}>Remove From Cart</button>)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
