import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { confirmPaymentAPI } from "../Service/allAPIs";

function PaymentSuccess() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        await confirmPaymentAPI(id);
        alert("Payment successful 🎉");
        navigate("/my-bookings");
      } catch (error) {
        console.log(error);
      }
    };

    confirmPayment();
  }, [id, navigate]);

  return <h2>Processing Payment...</h2>;
}

export default PaymentSuccess;
