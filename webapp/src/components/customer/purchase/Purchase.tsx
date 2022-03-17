import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CartItem } from "models/Cart";
import styles from "styles/customer/purchase/Purchase.module.scss";
import { useStore } from "contexts/customer/store";
import { observer } from "mobx-react";
import dynamic from "next/dynamic";
import agent from "adapters/agent";
const OrderList = dynamic(() => import("./OrderList"), { ssr: false });

export default observer(function Purchase() {
  const { cartStore } = useStore();
  const [Cart, setCart] = useState<CartItem[]>([]);
  const [time, setTime] = useState(new Date());
  const router = useRouter();
  let total = cartStore.cartPrice;

  useEffect(() => {
    setCart(cartStore.cartRegistry);
    total = cartStore.cartPrice;
  }, [cartStore.cartRegistry]);

  return (
    <div className={styles.purchase}>
      <section className={styles.header}>
        <h1>Mijn bewuste maaltijd</h1>
      </section>
      <section className={styles.specifics}>
        voor 11.00 besteld = tussen 17.00 - 19.00 in huis
      </section>
      <section className={styles.receipt}>
        {cartStore.cartGroupedByDate.length == 0 ? (
          <p style={{ color: "#c32924", margin: "0.5rem", position: "sticky" }}>
            Er is nog geen bestelling geplaatst
          </p>
        ) : (
          <OrderList />
        )}
      </section>

      <section className={styles.buttonCenter}>
        <button
          className={
            total != 0
              ? `${styles.greenButton} `
              : `${styles.greenButton} ${styles.greenButtonDisabled}`
          }
          disabled={total == 0}
          onClick={() => {
            cartStore.getLocalStorage();
            router.push("/deliverydetails");
          }}
        >
          <span className={styles.totalText}>BETALEN</span>
          <span>€ {total.toFixed(2)}</span>
        </button>
        <button className={styles.generalButton} onClick={() => router.back()}>
          TERUG
        </button>
      </section>
    </div>
  );
});
