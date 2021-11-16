import Layout from "components/customer/layout/Layout";
//import CooksProfile from "components/customer/cookinfo/CooksProfile"
import { observer } from "mobx-react";
import { useRouter } from 'next/router'
import HomePage from "../home"
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useStore } from "contexts/customer/store";


const CooksProfile = dynamic(() => import('components/customer/cookinfo/CooksProfile'), { ssr: false })

const CookInfoPage = () => {
  const { cooksStore } = useStore()
    const router = useRouter()
    const {id} = router.query
    const cookId = id ? id[0] : undefined

    useEffect(() => {
      if (cooksStore.selectedCook === undefined ) {
            router.replace("/home")
      }
    }, [cooksStore.selectedCook])
    
    if (cooksStore.selectedCook === undefined) return (
        <HomePage/>
    );

  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Koks"
      ogImage=""
      url=""
      showHeader={true}
      showFooter={ true }
      >
      <CooksProfile cookId={cookId!}/>
    </Layout>

  );
};

export default observer(CookInfoPage);