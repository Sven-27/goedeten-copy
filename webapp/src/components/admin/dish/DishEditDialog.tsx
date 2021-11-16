import React, { useEffect, useRef, useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Typography,
} from "@material-ui/core";
import { IDish } from "models/Dish";
import DishDetailTabs from "./DishDetailTabs";
import DishPrice from "./DishPrice";
import DishAllergensEdit from "./DishAllergensEdit";
//import DishCook from "./DishCook";
import { DishCategoryTile } from "./DishCategoryTileData";
import DishCategory from "./DishCategory";
import DishMaxQuantity from "./DishMaxQuantity";
import DishName from "./DishName";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import PublishIcon from "@material-ui/icons/Publish";
import { IAllergen } from "models/Allergen";
import { Cook, ICook } from "models/Cook";
import { IIngredient } from "models/Ingredient";
import agent from "adapters/agent";
import { ICuisine } from "models/Cuisine";
import DishNameShort from "./DishNameShort";
import { FormProvider, useForm } from "react-hook-form";
import styles from "styles/admin/Dish.module.scss";
import dynamic from "next/dynamic";
import { IVatCategory } from "models/VatCategory";
import DishVatCategory from "./DishVatCategory";
import Dish5PijlerTabs from "./Dish5PijlerTabs";

const DishCuisine = dynamic(() => import("./DishCuisine"), { ssr: false });
const DishCook = dynamic(() => import("./DishCook"), { ssr: false });
interface Props {
  open: boolean;
  workDish: IDish;
  handleClose: () => void;
  allIngredients: IIngredient[];
  categories: DishCategoryTile[];
  vatCategories: IVatCategory[];
  cuisines: ICuisine[];
}

export default function DishEditDialog({
  open,
  handleClose,
  workDish,
  allIngredients,
  categories,
  vatCategories,
  cuisines,
}: Props) {
  const newCuisine: ICuisine = { id: 0, name: "" };
  const cuisineOptions: ICuisine[] = [newCuisine].concat(cuisines);

  const newCook: ICook = new Cook();
  const [cook, setCook] = useState<ICook>(newCook);
  const [cooks, setCooks] = useState<ICook[]>([]);
  const cookOptions: ICook[] = [newCook].concat(cooks);

  const [selectedDish, setSelectedDish] = useState(workDish);
  const [category, setCategory] = useState(selectedDish.dishCategoryId);
  const [vatCategory, setVatCategory] = useState(
    selectedDish.vatCategoryId ?? 2
  );
  const [openAllergens, setOpenAllergens] = useState(false);
  const [allergens, setAllergens] = useState<IAllergen[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<number>(
    workDish.cuisineId ?? 0
  );
  const imageRef = useRef<HTMLImageElement>(null);
  const [selected, setSelected] = useState<File | null>(null);
  const [picture, setPicture] = useState(selectedDish.photo);
  const [persistentPicture, setPersistentPicture] = useState(
    selectedDish.photo
  );
  const getCookList = async () => setCooks(await agent.cooks.list());
  const getCook = async (id: number) => {
    if (id !== 0) {
      setCook(await agent.cooks.getCook(id));
    } else {
      setCook(newCook);
    }
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      cookId: id,
    }));
  };
  const methods = useForm<IDish>({
    mode: "onChange",
    defaultValues: { name: "blabla", shortName: "blashortname" },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    setSelectedDish(workDish);
    setAllergens(workDish.allergens);
    setCategory(workDish.dishCategoryId);
    setPicture(workDish.photo);
    setPersistentPicture(workDish.photo);
    setSelectedCuisine(workDish.cuisineId);
    void getCook(workDish.cookId);
    void getCookList();
    reset(workDish);
  }, [reset, workDish]);

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      dishCategoryId: event.target.value,
    }));
    setValue("dishCategoryId", event.target.value);
  };

  const handleVatCategoryChange = (event: any) => {
    setVatCategory(event.target.value);
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      vatCategoryId: event.target.value,
    }));
    setValue("vatCategoryId", event.target.value);
  };

  const handleOpenAllergensEdit = () => {
    setOpenAllergens(true);
  };

  const handleCloseAllergensEdit = (value: IAllergen[]) => {
    setOpenAllergens(false);
    setValue("allergens", value);
  };

  const handleChangeCook = (value: ICook) => {
    void getCook(value.id);
    setValue("cookId", value.id);
    setValue("cookName", value.name);
  };

  const handleChangeForm = (event: any) => {
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      [event.target.id]: event.target.value,
    }));
    setValue(event.target.id, event.target.value);
  };

  const handleChangePrice = (value: string) => {
    const newValue = {
      ...selectedDish,
      priceLarge: parseFloat(value),
    };
    setSelectedDish(newValue);
    setValue("priceLarge", parseFloat(value));
  };

  const handleChangeQuantity = (value: string) => {
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      maxQuantity: parseInt(value),
    }));
    setValue("maxQuantity", parseInt(value));
  };

  const handleDescriptionChange = (value: string) => {
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      description: value,
    }));
    setValue("description", value);
  };

  const handleHeatingChange = (value: string) => {
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      heating: value,
    }));
    setValue("heating", value);
  };

  const handleIngredientChange = (value: IIngredient[]) => {
    setSelectedDish((selectedDish) => ({
      ...selectedDish,
      ingredients: value,
    }));
    setValue("ingredients", value);
  };

  const handlePictureInput = () => {
    if (imageRef.current !== null) {
      imageRef.current.click();
    }
  };

  const handlePictureChange = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      setSelected(file);
    }
  };

  useEffect(() => {
    if (selected) {
      const objectURL = URL.createObjectURL(selected);
      setPicture(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selected]);

  const handlePictureAbort = async () => {
    setPicture(persistentPicture);
    setSelected(null);
  };

  const handleChangeCuisine = (value: ICuisine) => {
    if (value.id) {
      setSelectedCuisine(value.id);
      setSelectedDish((selectedDish) => ({
        ...selectedDish,
        cuisineId: value.id,
      }));
      setValue("cuisineId", value.id);
      setValue("cuisineName", value.name);
    }
  };

  const handleCancel = () => {
    handlePictureAbort();
    handleClose();
  };

  const handleUpdateRequest = async (event: any) => {
    let formData: FormData = new FormData();
    let imgUrl: string = "";
    if (selected) {
      try {
        if (selectedDish.id !== 0) {
          try {
            const imageToDelete = persistentPicture.split("/").pop();
            if (imageToDelete) await agent.dishes.deleteImage(imageToDelete);
          } catch (e) {
            console.log(e);
          }
        }

        formData = new FormData();
        formData.append("imageFile", selected);
        imgUrl = await agent.dishes.uploadImage(formData);
        selectedDish.photo = imgUrl;
      } catch (e) {
        console.log(e);
      }
    }

    if (selectedDish.id === 0) {
      try {
        const result = await agent.dishes.create(selectedDish);
        selectedDish.id = result.id;
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await agent.dishes.update(selectedDish);
      } catch (e) {
        console.log(e);
      }
    }

    let saveAllergens: number[] = [];
    let saveIngredients: number[] = [];

    allergens.forEach((allergen) => {
      if (allergen.id != undefined) {
        saveAllergens.push(allergen.id);
      }
    });

    selectedDish.ingredients.forEach((ingredient) => {
      if (ingredient.id != undefined) {
        saveIngredients.push(ingredient.id);
      }
    });

    try {
      if (saveAllergens.length > 0) {
        await agent.dishes.setAllergens(selectedDish.id, saveAllergens);
      }
      if (saveIngredients.length > 0) {
        await agent.dishes.setIngredients(selectedDish.id, saveIngredients);
      }
    } catch (e) {
      console.log(e);
    }
    handleClose();
  };

  const onSubmitForm = async (data: IDish) => {
    //console.log("data form",data);
    handleUpdateRequest(data);
  };

  return (
    <div>
      <Dialog
        open={open}
        maxWidth={"xl"}
        fullWidth={true}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
          }
        }}
      >
        <DialogTitle id="dishedit-form-dialog-title">
          {selectedDish.id == 0
            ? " voeg nieuw gerecht toe"
            : " wijzig gerecht...."}
        </DialogTitle>
        <FormProvider {...methods}>
          <DialogContent>
            <form onSubmit={methods.handleSubmit(onSubmitForm)}>
              <div className={styles.container}>
                <div className={styles.submitbuttons}>
                  <Button
                    //onClick={handleUpdateRequest}
                    startIcon={<SaveIcon />}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Opslaan
                  </Button>

                  <Button
                    onClick={handleCancel}
                    startIcon={<CancelIcon />}
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    Annuleren
                  </Button>
                </div>

                <div className={styles.pic}>
                  <img src={picture} alt={selectedDish.name} />
                </div>
                <div className={styles.picbuttons}>
                  <Input
                    //{...register("photo")}
                    inputRef={imageRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handlePictureChange}
                  />

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

                <div className={styles.name}>
                  <DishName
                    dish={selectedDish}
                    handleChangeForm={handleChangeForm}
                  />
                </div>
                <div className={styles.nameshort}>
                  <DishNameShort
                    dish={selectedDish}
                    handleChangeForm={handleChangeForm}
                  />
                </div>
                <div className={styles.maxQ}>
                  <DishMaxQuantity
                    dish={selectedDish}
                    handleChangeQuantity={handleChangeQuantity}
                  />
                </div>
                <div className={styles.cuisine}>
                  <DishCuisine
                    cuisines={cuisineOptions}
                    selectedCuisine={cuisineOptions.find(
                      (cuisine) => cuisine.id === selectedCuisine
                    )}
                    handleChangeCuisine={handleChangeCuisine}
                  />
                </div>
                <div className={styles.category}>
                  <DishCategory
                    handleCategoryChange={handleCategoryChange}
                    categories={categories}
                    selectedCategory={category}
                  />
                </div>

                <div className={styles.cook}>
                  <DishCook
                    cook={cook}
                    cooks={cookOptions}
                    handleChangeCook={handleChangeCook}
                  />
                </div>

                <div className={styles.price}>
                  <DishPrice
                    dish={selectedDish}
                    handleChangePrice={handleChangePrice}
                  />
                </div>
                <div className={styles.vat}>
                  <DishVatCategory
                    handleCategoryChange={handleVatCategoryChange}
                    categories={vatCategories}
                    selectedCategory={vatCategory}
                  />
                </div>
                <div className={styles.tab}>
                  <DishDetailTabs
                    dish={selectedDish}
                    handleDescriptionChange={handleDescriptionChange}
                    handleHeatingChange={handleHeatingChange}
                    allIngredients={allIngredients}
                    ingredients={selectedDish.ingredients}
                    handleiIngredientChange={handleIngredientChange}
                  />
                </div>
                <div className={styles.allergens}>
                  <Typography gutterBottom>Allergenen:</Typography>
                  <Typography gutterBottom>
                    {allergens.map((item) => item.name).join(", ")}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenAllergensEdit}
                    size="small"
                  >
                    Allergenen wijzigen
                  </Button>
                  <DishAllergensEdit
                    allergens={allergens}
                    setAllergens={setAllergens}
                    dishId={selectedDish.id}
                    open={openAllergens}
                    onClose={handleCloseAllergensEdit}
                  />
                </div>
                <div className={styles.pillar}>
                  <Dish5PijlerTabs
                    dish={selectedDish}
                    handleChangeForm={handleChangeForm}
                  />
                </div>
              </div>
            </form>
          </DialogContent>
        </FormProvider>
      </Dialog>
    </div>
  );
}
