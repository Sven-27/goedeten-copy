import Layout from "components/customer/layout/Layout";
// import DishInfo from "components/customer/dishinfo/DishInfo"
import { observer } from "mobx-react";
import { useRouter } from 'next/router'
import { useStore } from "contexts/customer/store";
import HomePage from "../home"
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DishInfo = dynamic(() => import('components/customer/dishinfo/DishInfo'), { ssr: false })

const DishInfoPage = () => {
  const { dishesStore } = useStore()
  const router = useRouter()
  const { id } = router.query
  const dishId = id ? id[0] : undefined;
  useEffect(() => {
    if (dishesStore.selectedDish === undefined ) {
          router.replace("/home")
    }
  }, [dishesStore.selectedDish])
  
  if (dishesStore.selectedDish === undefined) return (
      <HomePage/>
  );

  return (
      <Layout
        title="Goed Eten"
        description="Goed Eten: Gerechten"
        ogImage=""
        url=""
        showHeader={true}
        showFooter={ true }
      >    
        <DishInfo id={dishId!}/>
      </Layout>
  );
};

export default observer(DishInfoPage);