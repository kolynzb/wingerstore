import ProductCardSmall from "../components/productCards/ProductCardSmall";
import Link from "next/link";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <div className="">
      <h1 className="">Cart</h1>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="">
          <div className="">
            <CartItems cartItems={cartItems} />
          </div>
          <div className="">
            <CartTotalCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

const CartTotalCard = () => (
  <div className="">
    <h4 className="">Cart totals</h4>
    <div className="">
      <h3 className="">SubTotal</h3>
      <span className="subtotal">UGX134,492</span>
    </div>
    <div className="line"></div>
    <h3 className="">Shipping</h3>
    <div className="radioBTns">
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="around kla" />
        Around Kampala: <span className="price">UGX14,000</span>
      </div>
      <br />
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="local pickup" />
        Local Pickup: <span className="price">UGX3,000</span>
      </div>
      <br />
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="around kla" />
        Up Country(UG): <span className="price">UGX30,000</span>
      </div>
      <br />
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="around kla" />
        International: <span className="price">UGX100,000</span>
      </div>
      <br />
    </div>
    <p className="">Shipping options will be updated during checkout.</p>
    <div className="line "></div>
    <div className="">
      <h3 className="">Total </h3>
      <span className="total">UGX148,492</span>
    </div>
    <div className="line "></div>
    <button className="">Proceed to Checkout</button>
    <style jsx>{`
      .line {
        background-color: #828282;
        height: 1px;
        width: 100%;
      }
      .line2 {
        margin-bottom: 20px;
      }
      .total {
        font-weight: 600;
      }
      .subtotal {
        color: #8d8d8d;
        font-weight: 400;
      }
      .price {
        font-size: 16px;
        font-weight: 300;
        margin-left: 20px;
      }
    `}</style>
  </div>
);
const CartItems = ({ cartItems }) => {
  return (
    <div className="">
      <Link href="/shop" passHref>
        <div className="">
          <div className="">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
            </svg>
          </div>
          <p>Continue Shopping</p>
        </div>
      </Link>
      <div className="line"></div>
      <div className="">
        {cartItems.map((itemm) =>
          itemm.map((item) => (
            <ProductCardSmall
              productName={item.productName}
              price={item.price}
              key={item.id}
              id={item.id}
              number={item.quantity}
              previewImage={item?.previewImage}
            />
          ))
        )}
      </div>
      <style jsx>{`
        .line {
          background-color: #828282;
          height: 1px;
          width: 90%;
        }
      `}</style>
    </div>
  );
};

const EmptyCart = () => (
  <div>
    <div className="line"></div>
    <p className="empty">No products added to Cart</p>
    <div className="line"></div>

    <style jsx>{`
      .line {
        background-color: #828282;
        height: 1px;
        width: 100%;
      }
      .empty {
        margin: 40px 0;
        color: black;
      }
    `}</style>
  </div>
);
