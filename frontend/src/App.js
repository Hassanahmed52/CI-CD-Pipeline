import React, { useState } from 'react';
import CartView from './cartview'
import ShippingOptions from './shippingOptions'
import MsgYNModal from './msgYNModal';
import './App.css';

function App(props) {
  const [cartId, setCartId] = useState('777');
  const [showMsgYNModal, setMsgYNModal] = useState({ showMsgYNModal: false, message: "", methodOnClose: ()=>{} });
  const [shippingCost, setShippingCost] = useState(0);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleChangeValue = (value) => {
    setShippingCost(value);
  }

  const handlePurchaseConfirm = (decision) => {
    if (decision) {
      setPurchaseComplete(true);
      setTimeout(() => {
        setPurchaseComplete(false);
        setCartId('777');
        setShippingCost(0);
      }, 3000);
    }
    setMsgYNModal({ showMsgYNModal: false, message: "", methodOnClose: ()=>{} });
  }

  return (
    <>
      <div className="App">
        {/* Header */}
        <div className="app-header">
          <h1>🛍️ Premium Shopping Cart</h1>
          <p className="subtitle">Secure checkout experience</p>
        </div>

        {/* Success Message */}
        {purchaseComplete && (
          <div className="success-banner">
            <h2>✓ Purchase Completed Successfully!</h2>
            <p>Thank you for your order. Loading new cart...</p>
          </div>
        )}

        {!purchaseComplete && (
          <div className="checkout-container">
            {/* Cart Selector */}
            <div className="cart-selector-section">
              <h3>Select Your Cart</h3>
              <div className="cart-buttons">
                <button 
                  className={`cart-btn ${cartId === '777' ? 'active' : ''}`}
                  onClick={() => { setCartId('777'); setShippingCost(0); }}
                >
                  🍓 Cart #777 (Fresh Fruits)
                </button>
                <button 
                  className={`cart-btn ${cartId === '888' ? 'active' : ''}`}
                  onClick={() => { setCartId('888'); setShippingCost(0); }}
                >
                  🍪 Cart #888 (Bakery)
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="cart-items-section">
              <h3>📦 Order Details</h3>
              <CartView shippingCost={shippingCost} cartId={cartId} />
            </div>

            {/* Shipping & Summary */}
            <div className="shipping-summary-section">
              <h3>🚚 Shipping Options</h3>
              <ShippingOptions onChangeValue={handleChangeValue} />
              
              <div className="order-summary">
                <h4>Order Summary</h4>
                <p className="summary-note">Review your items and confirm to complete purchase</p>
              </div>
            </div>

            {/* Checkout Button */}
            <button 
              className="checkout-btn"
              onClick={() => setMsgYNModal({
                showMsgYNModal: true, 
                message: "Do you agree with the purchase agreement? This will complete your order.", 
                methodOnClose: handlePurchaseConfirm
              })}
            >
              🔒 Complete Purchase
            </button>
          </div>
        )}
      </div>
      <MsgYNModal
        style={{ width: '80%', maxHeight: 435 }}
        id="yesno-confirm"
        keepMounted
        message={showMsgYNModal.message}
        open={showMsgYNModal.showMsgYNModal}
        onClose={showMsgYNModal.methodOnClose}
      />
    </>
  );
}

export default App;
