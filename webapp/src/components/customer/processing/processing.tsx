import styles from "styles/customer/Processing.module.scss";
import agent from "adapters/agent";
import { useStateSafe } from "data/useStateSafe";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Logos } from "data/logos";

function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Processing = () => {
  const [count, setCount] = useStateSafe<number>(1);
  const router = useRouter();
  const { tomaatTextTaglineDonkerGroen } = Logos;
 
  useInterval(async () => {
    const order_id = router.query.order_id?.toString();   
    
    const id: number = (order_id != undefined && order_id.includes('O'))
      ? parseInt(order_id?.split('O')[1]) : 0
      const orderStatus= router.query.status?.toString();    
    if (orderStatus == "CANCELLED"){          
       window.location.href = "/canceled";
    }
    //console.log("checking if polling works",id);
    setCount(count + 1);
    console.log("count:", count)
    try {
      const res = await agent.orders.checkStatus(id);
      console.log("checking result", res.status);
      if (count === 10 || res.status === 1) {
        window.location.href = "/canceled";
      } else if (res.status === 2) {
        window.location.href = "/canceled";
      } else if (res.status === 3) {
        window.location.href = "/succes";
      }
    } catch (error) {
      console.log(error);
    }
  }, 4000);

  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <img src={tomaatTextTaglineDonkerGroen} />
      </div>
      <div className={styles.content}>
        <h1>Je opdracht wordt verwerkt!</h1><span><br></br>Een moment geduld graag.</span>
      </div>
      <div className={styles.cirkel}>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Processing;
