import React from 'react';
import Link from "next/link";
import tileData from './DashboardTileData';
import styles from 'styles/admin/Dashboard.module.scss'
 
interface CustomCardProps {
  link: string;
  image: string;
  title: string;
  id?:number;
}

const CustomCard = ({link,image,title,id}:CustomCardProps) => {
  return (
    <div className={styles.grid_container}>
    <div className={styles.card}>
    <Link href={link}>
      <a>
        <img className={styles.plaatje} src={image}></img>
        <div className={styles.title}>{title}</div>
      </a>
    </Link>
    </div>
    </div>
  )
};

export const DashboardTile = React.memo(function DashboardTile() {
  return (
    <>
      <div className={styles.cardarea}>
        {tileData.map((tile)=>
            <CustomCard 
            key = {tile.id}         
            link={tile.link}
            id={tile.id}
            title={tile.title}
            image={tile.image}
          />
        )}
      </div>

      
    </>
  );
});
export default DashboardTile