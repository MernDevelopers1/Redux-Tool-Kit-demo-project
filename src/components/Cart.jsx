import { useDispatch,useSelector } from 'react-redux';
import CartSlice from '../data/cartSlice';
import productList from '../data/productList.json'
import '../styles/cart.scss'

const Cart = () => {
  const {cartProductItems} = useSelector((state)=> state.cart);
  const cartdata = productList.products.filter((product)=> cartProductItems.includes(product.id));
  const {removeFromCart , clearAllItems} = CartSlice.actions;
  const dispatch = useDispatch();
  return (
    
    <div className="cart">
    {cartProductItems.length>0? 
      <div className="cart-product">
        <h3 className="header">Items in cart</h3>
        {cartdata.map((product) => (
          <div key={product.id} className="row">
            <img className="item-image" src={product.imageUrl} alt="product" />

            <div className="item-info">
              <h4>{product.name}</h4>
              <p className="text-truncate">{product.detail}</p>
              <button className="btn btn-primary" onClick={()=> dispatch(removeFromCart(product.id))}>
                <i className="bi bi-trash-fill" /> Remove Item
              </button>
            </div>
          </div>
        ))}

        <footer className="text-center">
          <button className="btn btn-primary" onClick={()=> dispatch( clearAllItems())}>CHECKOUT</button>
        </footer>
      </div>
      
          :
      <div className="text-center empty-cart">
        <i className="bi bi-cart3" />
        <p>Your cart is empty.</p>
        <p>You have not added any item to your cart.</p>
      </div>
    }
    </div>
  )
}

export default Cart
