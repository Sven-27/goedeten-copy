
import React, {useEffect} from 'react'
import {useState} from 'react'
import {
  Button,
} from "@material-ui/core";
import DishCategoryDialog from "./DishCategoryDialog";
import tileData, {DishCategoryTile} from "./DishCategoryTileData";
import {IDishPaginatedRequest, IPaginatedList} from "models/PaginatedList";
import {Grid, Paper} from "@material-ui/core";
import DishTable from "./DishTable";
import DishEditDialog from "./DishEditDialog"
import AddIcon from '@material-ui/icons/Add';
import agent from "adapters/agent";
import {Dish, IDish} from "models/Dish";
import { IIngredient } from 'models/Ingredient';
import DishSearchComponent from './DishSearchComponent';
import {ICuisine} from "models/Cuisine";
import { IVatCategory } from 'models/VatCategory';



export default function DishDashboard() {
  const noimage = '/assets/images/admin/noimageavailable2.png';
  const [openCategories, setOpenCategories] = useState(false);
  const defaultData: IPaginatedList<IDish> = {
    currentPage: 1,
    from: 1,
    to: 1,
    pageSize: 10,
    totalCount: 1,
    totalPages: 1,
    hasPreviousPage: false,
    hasNextPage: false,
    items: []
  }

  const defaultRow: IDish =  new Dish();
  
  const [editOpen, setEditOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(tileData[0]);
  const [categories, setCategories] = useState(tileData)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(15)
  const [row, setRow] = useState<IDish>(defaultRow)
  const [sortField, setSortField] = useState("name")
  const [sortOrder, setSortOrder] = useState("Asc")
  const [data, setData] = useState(defaultData)
  const [loading, setLoading] = useState(false)
  const[nameFilter, setNameFilter] = useState("")
  const[cuisineFilter, setCuisineFilter] = useState("")
  const[cookFilter, setCookFilter] = useState("")
  const [allIngredients, setAllIngredients] = useState<IIngredient[]>([])
  const [vatCategories, setVatCategories] = useState<IVatCategory[]>([])  
  const getAllIngredientsList = async () => setAllIngredients(await agent.ingredients.list());
  const getVatCategoriesList = async () => setVatCategories(await agent.vatCategories.list());
  const [cuisines, setCuisines] = useState<ICuisine[]>([])
  const getCuisineList = async () => setCuisines(await agent.cuisines.list())

  const Request: IDishPaginatedRequest = {
    pageNumber: page,
    pageSize: pageSize,
    sortField: sortField,
    sortOrder: sortOrder,
    categoryFilter: selectedCategory.filter,
    nameFilter: nameFilter,
    cuisineFilter:cuisineFilter,
    cookFilter:cookFilter
  }
  
  React.useEffect(() =>{
    void getAllIngredientsList()
    void getCuisineList()
    void getVatCategoriesList()
  },[])

  async function getDishes(){
    setLoading(true)
    try {
      setData(await agent.dishes.getFilteredList(Request))
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }
 
  async function GetDishInfo(id:number){
    try {
      setRow(await agent.dishes.details(id))
    } catch (e) {
      console.log(e)
    }
  }
  
  async function getCategories(){
    try {

      const result = await agent.dishCategories.list();
      let res = result.map(tile => ({
          id: tile.id,
          title: tile.name,
          filter: tile.name,
        }))     
      setCategories([tileData[0]].concat(res))
    } catch (e) {
      console.log(e) 
    }
  }

  useEffect(() => {
    void getDishes()
    void getCategories()
  }, [page, pageSize, selectedCategory,sortField,nameFilter, cookFilter,cuisineFilter])

  const handleOpenCategoryModal = () => {
    setOpenCategories(true);
  };

  const handleCloseCategoryModal = (selection: DishCategoryTile) => {
    setOpenCategories(false);
    setSelectedCategory(selection);
  };

 
  const handleCloseEditModal = () => {
    getDishes();
    setEditOpen(false);
  }
  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage + 1)
  }
  // const handleChangePage = (params: GridPageChangeParams) => {
  //   setPage(params.page + 1)
  // }
  
  const handleDelete = async (dish: IDish) => {
    const conf = confirm("Do you want to delete "+ dish.name +"?")
    if (conf) {
      setLoading(true)
      try {
        void await agent.dishes.delete(dish.id)
        if (dish.id){
          const dishImage = dish.photo.split("/").pop();
          if(dishImage) {
            void await agent.dishes.deleteImage(dishImage)
          }          
        }
      } catch (e) {
        setLoading(false)
        console.log(e)
      }
      await getDishes()
      setRow(defaultRow)
    }
  }
  
  const handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1)
    setPageSize(parseInt(event.target.value, 0))
  }
  
  const handleRowSelect = (row:IDish) => {
    setRow(row)
    
  }
  
  const handleUpdate = (row: IDish) => {
    void GetDishInfo(row.id);
    setEditOpen(true);
  }
  
  function handleChangeSortField( sortFieldValue:string){
    setSortField(sortFieldValue)
  }

  function handleChangeNameFilter( value:string){
    setNameFilter(value)
  }

  function handleChangeCuisineFilter( value:string){
    setCuisineFilter(value)
  }

  function handleChangeCookFilter( value:string){
    setCookFilter(value)
  }

  function handleClearAll(){
    setLoading(true)
    setNameFilter("")
    setCuisineFilter("")
    setCookFilter("")
    setLoading(false)
  }

  function handleAddNew(){
    setRow(defaultRow)
    setEditOpen(true);
  }

  return(
    <Grid container spacing={1}>
      <DishEditDialog
        open={editOpen}
        handleClose={handleCloseEditModal}
        workDish={row}
        allIngredients = {allIngredients}
        vatCategories = {vatCategories}
        categories = {categories.slice(1)}
        cuisines = {cuisines}
      />
      <Grid item xs={12}>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            backgroundColor: "beige",
            height: "auto",
            width: "100%",
            justifyContent:"space-between"}}
        >
         <Button variant="contained" size="small" color="default" onClick={handleAddNew} startIcon={<AddIcon />} >
           Nieuw toevoegen
         </Button>
         <Button variant="contained" size="large" color="default" onClick={handleOpenCategoryModal}>
           {selectedCategory.title}
         </Button>
         
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper
          elevation={3}
          style={{
          display: "flex",
          backgroundColor: "beige",
          height: "auto",
          width: "100%"}}
        >
          <DishCategoryDialog
            selectedCategory={selectedCategory}
            categories={categories}
            open={openCategories} 
            onClose={handleCloseCategoryModal} /> 
          <DishSearchComponent
            sortField={sortField}
            handleChangeSortField= {handleChangeSortField} 
            nameFilter = {nameFilter}
            cookFilter = {cookFilter}           
            cuisineFilter = {cuisineFilter}           
            handleChangeNameFilter= {handleChangeNameFilter}           
            handleChangeCookFilter = {handleChangeCookFilter}
            handleChangeCuisineFilter={handleChangeCuisineFilter}           
            handleClearAll = {handleClearAll}
          />
        </Paper>
      </Grid> 
      <Grid item xs={12}>
        <Paper
          elevation={3}
          style={{
          display: "flex",
          backgroundColor: "beige",
          height: "auto",
          width: "100%"}}
        >
          <DishTable
            data={data}
            page={page}
            rowsPerPage={pageSize}
            handleChangePage={handleChangePage}
            handleDelete={handleDelete}
            handleChangePageSize={handleChangePageSize}
            handleRowSelect={handleRowSelect}
            handleUpdate = {handleUpdate}
          />
        </Paper>
      </Grid>
    </Grid>
  )
} 
