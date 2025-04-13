import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import './Organize_fol.css'




const Organize_fol = () => {


    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        eventName: "Constitution Day",
        organizeAmount: "",
    });
    
    const [paymentMode, setPaymentMode] = useState(false);
    const [upiId, setUpiId] = useState("");
    const [paymentMessage, setPaymentMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        setPaymentMode(true); // Show payment mode when clicked
    };
    
    const handleUpiChange = (e) => {
        setUpiId(e.target.value);
    };

    const handlePayment = () => {
        if (upiId) {
            const upiDeepLink = `upi://pay?pa=${upiId}&pn=${formData.fullName}&am=${formData.organizeAmount}&cu=INR&tn=Event Payment`;
            setPaymentMessage(`Payment request sent to ${upiId} for ₹${formData.organizeAmount}`);

            // Redirect to UPI app
            window.location.href = upiDeepLink;


            // Simulate payment completion after redirection
            setTimeout(() => {
                navigate("/payment"); // Navigate to success page
            }, 5000); // Adjust timeout as needed
        } else {
          setPaymentMessage("Please enter a valid UPI ID.");
        }
    };


  return (
    <div className="organize_fol">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name</label>
                    <select
                      id="eventName"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      required
                    >
                        <option value="Constitution Day">Foundation Day</option>
                        <option value="Constitution Day">Constitution Day</option>
                        <option value="26 January">26 January</option>
                        <option value="Bhim Jayanti">Bhim Jayanti</option>
                        <option value="Independence Day">Independence Day</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="organizeAmount">Organize Amount</label>
                    <input
                      type="number"
                      id="organizeAmount"
                      name="organizeAmount"
                      value={formData.organizeAmount}
                      onChange={handleChange}
                      required
                    />
                </div>
                <button type="submit" className="submit-button">Generate Payment Mode</button>
            </form>
        </div>
        {paymentMode && (
            <div className="payment">
                <div className="payment-section">
                    <h3>Scan QR Code or Enter UPI ID</h3>
                    <QRCodeCanvas
                        className="barcode"
                        value={`upi://pay?pa=aakashrajgic@oksbi&pn=EventPayment&am=${formData.organizeAmount}`}
                        size={200}
                    />
                    <div className="upi-section">
                        {/* <label htmlFor="upiId">Enter UPI ID</label> */}
                        <input
                          type="text"
                          id="upiId"
                          placeholder="Enter your UPI ID"
                          value={upiId}
                          onChange={handleUpiChange}
                        />
                        <button onClick={handlePayment} 
                            className="payment-button">Pay using UPI</button>
                    </div>
                    {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
                </div>
            </div>
        )}
    </div>
  )
}

export default Organize_fol