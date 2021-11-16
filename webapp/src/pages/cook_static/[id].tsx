import Layout from "components/customer/layout/Layout";
// import CookProfileStatic from "components/customer/cookProfileStatic/CookProfileStatic"
import { observer } from "mobx-react";
import { useRouter } from 'next/router'
import { useStore } from "contexts/customer/store";
import dynamic from 'next/dynamic'

const CookProfileStatic = dynamic(()=> import("components/customer/cookProfileStatic/CookProfileStatic"), { ssr: false })

const CookProfileStaticPage = () => {
    const { cooksStore } = useStore()
    const router = useRouter()
    const {id} = router.query
    const cookId = id ? id[0] : undefined
  return (
    cookId === undefined ? null :
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Koks"
      ogImage=""
      url=""
      showHeader={false}
      showFooter={ true }
      >
      <CookProfileStatic cookId={cookId}/>
    </Layout>

  );
};

export default observer(CookProfileStaticPage);