import { useSelector, useDispatch } from "react-redux";
import { clearOrders } from "../features/orders/ordersSlice";
import { useSettings } from "../context/SettingsContext";
import Button from "../components/ui/Button";

const OrdersPage = () => {
  const orders = useSelector((state) => state.orders.items);
  const dispatch = useDispatch();
  const { state } = useSettings();

  return (
    <main className="page">
      <h1>{state.language === "fa" ? "سفارش‌های من" : "My Orders"}</h1>

      {orders.length === 0 ? (
        <p className="no-results">
          {state.language === "fa"
            ? "هیچ سفارشی ثبت نشده است"
            : "No orders found"}
        </p>
      ) : (
        <>
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <h3>
                  {state.language === "fa" ? "شماره سفارش" : "Order ID"}:{" "}
                  {order.id}
                </h3>

                <p>
                  {state.language === "fa" ? "تاریخ" : "Date"}: {order.date}
                </p>

                <p>
                  {state.language === "fa" ? "نام مشتری" : "Customer"}:{" "}
                  {order.customer.name}
                </p>

                <p>
                  {state.language === "fa" ? "تعداد محصولات" : "Total Items"}:{" "}
                  {order.totalQuantity}
                </p>

                <p>
                  {state.language === "fa" ? "قیمت کل" : "Total Price"}: $
                  {order.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <Button onClick={() => dispatch(clearOrders())}>
            {state.language === "fa" ? "پاک کردن سفارش‌ها" : "Clear Orders"}
          </Button>
        </>
      )}
    </main>
  );
};

export default OrdersPage;