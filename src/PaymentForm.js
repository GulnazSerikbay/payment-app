import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import visaLogo from './visa.png';


function PaymentForm() {
    const [paymentData, setPaymentData] = useState({
      pan: "",
      holder: "",
      expire: new Date().toISOString().slice(0, 10),
      cvv2: "",
    });
  
    const handleChange = (event) => {
      setPaymentData({ ...paymentData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:4000/create-payment", paymentData);
  
        if (response.data.status === 200) {
          // Redirect to the cheque page
          window.location.href = "/cheque";
        } else {
          console.error("Error occurred during payment processing");
        }
      } catch (error) {
        console.error("Error occurred during payment processing", error);
      }
    };
  
    return (
        <div className="container">
        <div className="payment-form-header">
          <div className="payment-total-container">
            <div className="payment-total">Сумма платежа: </div>
            <div className="blurred-text">$1000</div>
          </div>
          <div className="logo-container">
            <img className="logo" src={visaLogo} alt="Visa" />
         
          </div>
        </div>
          <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-col">
                <div className="form-group">
                <label className="form-label">Номер карты:</label>
                <input
                    type="text"
                    name="pan"
                    className="form-control"
                    value={paymentData.pan}
                    onChange={handleChange}
                />
                </div>
            </div>
                <div className="form-col">
                    <div className="form-group">
                        <label className="form-label">Срок действия карты:</label>
                        <input
                            type="date"
                            name="expire"
                            className="form-control"
                            value={paymentData.expire}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
                <div className="form-row">
                    <div className="form-col">
                        <div className="form-group">
                        <label className="form-label">Владелец карты (латинскими буквами):</label>
                        <input
                            type="text"
                            name="holder"
                            className="form-control"
                            value={paymentData.holder}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className="form-col">
                        <div className="form-group">
                        <label className="form-label">CVV2:</label>
                        <div className="row">
                            <div className="col-7">
                            <input
                                type="text"
                                name="cvv2"
                                className="form-control"
                                value={paymentData.cvv2}
                                onChange={handleChange}
                            />
                            </div>
                            <div className="col-5">
                            <span className="cvv-text">Что такое CVC4/CVV2 код?</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            <div className="form-group d-flex justify-content-center w-200">
                <button type="submit" className="btn btn-primary">
                    ОПЛАТИТЬ
                </button>
            </div>
          </form>
        </div>
    );
  }
  
  export default PaymentForm;
