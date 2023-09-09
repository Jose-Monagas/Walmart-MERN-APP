import styles from './CartItem.module.scss';

export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
return (
  <div className={styles.CartItem}>
    <img className={styles.image} src={cartItem.item.image} ></img>
    <div className="flex-ctr-ctr flex-col">
    {/* <span className="align-ctr">{lineItem.category.name}</span> */}
    <div className={styles.details}>
        <div className={styles.type}>{cartItem.item.type}</div>
        <div className={styles.name}>{cartItem.item.name}</div>
      </div>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty + 1)}
        >+</button>
      }
      <span>{cartItem.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty - 1)}
        >-</button>
      }
    </div>
    <div className={styles.extPrice}>${cartItem.extPrice.toFixed(2)}</div>
  </div>
);
}