import OrderListItem from '../OrderListItem/OrderListItem';
import styles from './OrderList.module.scss';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
const orderItems = orders.map(o =>
  <OrderListItem
    order={o}
    isSelected={o === activeOrder}
    handleSelectOrder={handleSelectOrder}
    key={o._id}
  />
);

return (
  <main className={styles.OrderList}>
    {orderItems.length ?
      orderItems
      :
      <span className={styles.noOrders}>No Previous Orders</span>
    }
  </main>
);
}