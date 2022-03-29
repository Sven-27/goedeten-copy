import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "theme";
import { AppProps } from 'next/app'
import "styles/globals.scss";
import { useStore } from "contexts/customer/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const { cartStore } = useStore();
  
  // sync store clock to serverclock
  if (typeof window !== "undefined"){
    // console.log(cartStore.NLTime);
    cartStore.syncTime();
  }

  return (
    // <StoreContext.Provider value = {useStore()}>
    <>        
      <ToastContainer />
      <Head>
        <title>Goed Eten</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta 
          name="google-site-verification" 
          content="nMFfebAOpzbtMrANf2ZhMfzJ61d8_WTeDQS3fbMglvw" 
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline /> 
        <Component {...pageProps} />
      </ThemeProvider>
    </>
    // </StoreContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
