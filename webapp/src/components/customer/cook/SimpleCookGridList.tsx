import React, { useEffect } from "react";
import Link from "next/link";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import styles from "styles/customer/cooks/SimpleCooks.module.scss";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";
import { ICook } from "models/Cook";

const SimpleCookGridList = () => {
  const { cooksStore } = useStore();

  useEffect(() => {
    cooksStore.loadCooks();
  }, []);
  return (
    <div className={styles.simpleCookGridList}>
      <ImageList rowHeight="auto" className={styles.simpleCookGridList__grid}>
        {cooksStore.cooksRegistry.length &&
          cooksStore.cooksRegistry.map((tile: ICook) => (
            <Link key={tile.id} href={`/cook/${tile.id}`}>
              <ImageListItem
                key={tile.id}
                className={styles.simpleCookGridList__tile}
              >
                <a onClick={() => (cooksStore.selectedCook = tile)}>
                  <img src={tile.photo} alt={tile.name} />
                </a>
                <img src={tile.photo} alt={tile.name} />
                <ImageListItemBar
                  position="bottom"
                  title={tile.name}
                  className={styles.simpleCookGridListTileBar}
                />
              </ImageListItem>
            </Link>
          ))}
      </ImageList>
    </div>
  );
};

export default observer(SimpleCookGridList);
