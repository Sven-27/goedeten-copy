import React, { useEffect, useRef, useState } from "react";

import { Button, Input } from "@material-ui/core";
import styles from "styles/admin/CookEdit.module.scss";
import CancelIcon from "@material-ui/icons/Cancel";
import PublishIcon from "@material-ui/icons/Publish";

import { observer } from "mobx-react";
import { useStore } from "contexts/admin/store";
import { useFormContext } from "react-hook-form";
const noimage = "assets/images/admin/noimageavailable2.png";

export default observer(function CookEditPicture() {
  const { cookStore } = useStore();
  const imageRef = useRef<HTMLImageElement>(null);
  const methods = useFormContext();

  useEffect(() => {
    if (cookStore.selected) {
      const objectURL = URL.createObjectURL(cookStore.selected);
      cookStore.setPicture(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [cookStore.selected]);

  useEffect(() => {
    cookStore.setPicture(cookStore.row.photo);
  }, [cookStore.editOpen]);

  const handlePictureInput = () => {
    if (imageRef.current !== null) {
      imageRef.current.click();
    }
  };
  const handlePictureChange = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      cookStore.setSelected(file);
    }
  };
  const handlePictureAbort = async () => {
    cookStore.setPicture(cookStore.persistentPicture);
    cookStore.setSelected(null);
  };

  return (
    <>
      <div>
        <img src={cookStore.picture} alt={cookStore.row.name} />
      </div>
      <div>
        <Input         
          //{...methods.register("photo")}
          inputRef={imageRef}
          type="file"
          style={{ display: "none" }}
          onChange={handlePictureChange}
        />
        <div className={styles.picbuttons}>
          <Button
            onClick={handlePictureInput}
            startIcon={<PublishIcon />}
            variant="contained"
            color="primary"
            size="small"
          >
            Upload afbeelding
          </Button>

          <Button
            onClick={handlePictureAbort}
            startIcon={<CancelIcon />}
            variant="contained"
            color="secondary"
            size="small"
          >
            Herstel afbeelding
          </Button>
        </div>
      </div>
    </>
  );
});
