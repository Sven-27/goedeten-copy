import React, { useState } from "react";
import styles from "styles/customer/Payment.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { useStore } from "contexts/customer/store";
import { CartItem } from "models/Cart";
import { observer } from "mobx-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useStateSafe } from "data/useStateSafe"; //custom hook
import agent from "adapters/agent";
import moment from "moment-timezone";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Logos } from "data/logos";
import { IOrderEasy, OrderEasy } from "models/Purchase";

const imageIdeal = "/assets/images/logos/ideal-qr-logo.svg";
const { tomaatTextTaglineDonkerGroen } = Logos;

type IEmailForm = {
  email: string;
  agree: boolean;
};

export default observer(function Payment() {
  const router = useRouter();
  const { cartStore } = useStore();
  let total = cartStore.cartPrice;
  let days = cartStore.cartGroupedByDate;
  const [buttonState, setButtonState] = useStateSafe<boolean>(false);
  const [order, setOrder] = useState<IOrderEasy>(new OrderEasy());
  const [input, setInput] = useState<string>("");
  const [succeed, setSucceed] = useState<any | string>("");
  const [progress, setProgress] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  const registerEmail = async (data: string) => {
    // const res: AxiosResponse = await axios.post<boolean>(`${API}api/customer`, {
    // const abortController = new AbortController()
    // const signal = abortController.signal
    const res = await agent.customers.create({
      id: 0,
      email: data,
      zipcode: input,
      isDeliveryRange: false,
      date: moment().tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    });
    return res;
  };

  // const {
  //  register,
  //  handleSubmit,
  //  formState: { errors },
  // } = useForm<IZipcodeForm>({
  //  mode: "onChange",
  // });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2, isValid },
  } = useForm<IEmailForm>({
    mode: "onChange",
  });

  const onSubmitEmail = (data: IEmailForm) => {
    registerEmail(data.email)
      .then((result) => btnHandler(result))
      .catch(() => {
        setSucceed(
          <span className={`${styles.error} ${styles.registered}`}>
            Er is iets fout gegaan. Ongeldig e-mail adres?
          </span>
        );
        setTimeout(() => setSucceed(""), 4000);
      });
  };

  const paymentHandler = async () => {    
    const cartDetails = cartStore.cartRegistry;
    
    // adding delivery details in order object
    if (cartDetails.length != 0) {
      let order1 = Object.assign(order, cartStore.deliveryDetails);
      // adding cart(from cart) and other info in order object
      order1 = {
        ...order1,
        cart: cartDetails,
        orderDate: new Date().toISOString(),
        totalAmount: total,
      };
      //watching at the object IOrderEasy
      console.log("ORDER", order1);
      ///Api call
      const res = await agent.orders.create(order1);
      //watching at the resultat = object IOrder
      console.log(res);
      router.replace(res.url);
    }
  };

  //console.log('result', result)
  const btnHandler = (result: boolean) => {
    setButtonState(false);
    if (result) {
      setSucceed(
        <span className={`${styles.success} ${styles.registered}`}>
          Je email is geregistreerd.
        </span>
      );
    } else {
      setSucceed(
        <span className={`${styles.error} ${styles.registered}`}>
          Deze combinatie van e-mail en postcode is al geregistreerd.
        </span>
      );
    }
    setTimeout(() => setSucceed(""), 4000);
  };

  return (
    <div className={styles.payment}>
      <div className={styles.container}>
        <div className={styles.gelogo}>
          <Image
            className={styles.gelogo}
            src={tomaatTextTaglineDonkerGroen}
            alt="Goedeten-logo"
            width="250"
            height="80"
          />
        </div>
        <div className={styles.blocks}>
          <div className={styles.costsBlock}>
            <div className={styles.Ideal}>
              <Image src={imageIdeal} alt="Ideal-logo" width="75" height="75" />
              <h2>IDEAL</h2>
            </div>
            <div className={styles.costs}>
              <div>
                <h3>Maaltijdkosten</h3>
                <h3>€ {(total - days.length * 2.5).toFixed(2)}</h3>
              </div>
              <div>
                <h3>Bezorgkosten</h3>
                <h3>€ {(days.length * 2.5).toFixed(2)}</h3>
              </div>
              <div>
                <h2>Totaalkosten</h2>
                <h2>€ {total.toFixed(2)}</h2>
              </div>
            </div>
          </div>
          <div className={styles.tekstBlock}>
            <p>
              Door verder te gaan, aanvaard je onze{" "}
              <a href="./terms" target="_blank">
                ALGEMENE VOORWAARDEN
              </a>{" "}
              en bevestig je dat je ons{" "}
              <a href="./privacy" target="_blank">
                PRIVACYBELEID
              </a>{" "}
              hebt gelezen en begrepen.
            </p>
            <p>
              We gebruiken jouw data om je een persoonlijke ervaring aan te
              bieden en om onze services beter te begrijpen en te verbeteren.
              Voor meer informatie, klik{" "}
              <a href="./privacy#cookies" target="_blank">
                hier
              </a>
              .
            </p>
            <p className={styles.checkbox}>
              Vink dit aan als je aanbiedingen en nieuwsberichten van GoedEten
              wilt ontvangen. Je kunt dit altijd wijzigen en we zullen deze
              gegevens nooit aan derde partijen verstrekken.
              <label htmlFor="agree">
                <input
                  id="agree"
                  type="checkbox"
                  // disabled={buttonState}
                  checked={buttonState ? !checked : checked}
                  onClick={() => setButtonState(true)}
                  {...register2("agree", {
                    required: "This is required",
                  })}
                />
              </label>
            </p>

            {progress && (
              <div className={styles.loadCircle}>
                <CircularProgress />
              </div>
            )}
            <section className={styles.email}>
              {buttonState && (
                <form
                  autoComplete="off"
                  onSubmit={handleSubmit2(onSubmitEmail)}
                  className={styles.emailForm}
                >
                  <div className={styles.email__label}>
                    <label htmlFor="email">
                      {!checked && (
                        <div className={styles.closeIcon}>
                          <CloseIcon
                            className={styles.close}
                            onClick={() => setButtonState(false)}
                          />
                        </div>
                      )}
                      <input
                        type="email"
                        {...register2("email", {
                          required: "Voer email in",
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Voer een geldig email adres in",
                          },
                        })}
                        placeholder="naam@voorbeeld.com"
                        className={styles.inputEmail}
                      />
                    </label>

                    {errors2.email && (
                      <p className={styles.error}>{errors2.email.message}</p>
                    )}
                    <button
                      className={styles.calendarButton}
                      type="submit"
                      // disabled={!isValid}
                    >
                      REGISTREER
                    </button>
                  </div>
                </form>
              )}
              {succeed}
            </section>

            <button className={styles.generalButton} onClick={paymentHandler}>
              VERDER MET BETALEN
            </button>
          </div>
        </div>
        <button className={styles.generalButton} onClick={() => router.back()}>
          TERUG
        </button>
      </div>
    </div>
  );
});
