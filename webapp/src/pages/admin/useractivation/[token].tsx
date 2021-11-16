import Layout from "components/admin/layout/Layout";
import UserActivationForm from "components/admin/user/UserActivationForm";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter()
  const { token } = router.query
  return (    
      <UserActivationForm />         
  );
};

export default Home;
