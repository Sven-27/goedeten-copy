import { makeAutoObservable, runInAction } from "mobx";
import agent from "adapters/agent";
import { ICook, Cook } from "models/Cook";
import { ICookPaginatedRequest, IPaginatedList } from "models/PaginatedList";
import { ThreeSixtyOutlined } from "@material-ui/icons";

export default class CookStore {
  defaultData: IPaginatedList<ICook> = {
    currentPage: 1,
    from: 1,
    to: 1,
    pageSize: 10,
    totalCount: 1,
    totalPages: 1,
    hasPreviousPage: false,
    hasNextPage: false,
    items: [],
  };
  defaultRow: ICook = new Cook();

  page: number = 1;
  pageSize: number = 15;
  sortField: string = "name";
  sortOrder: string = "Asc";
  nameFilter: string = "";
  locationFilter: string = "";
  activeFilter: boolean | null = null;

  private _row: ICook = this.defaultRow;
  private _data: IPaginatedList<ICook> = this.defaultData;

  Request: ICookPaginatedRequest = {
    pageNumber: this.page,
    pageSize: this.pageSize,
    sortField: this.sortField,
    sortOrder: this.sortOrder,
    nameFilter: this.nameFilter,
    locationFilter: this.locationFilter,
    activeFilter: this.activeFilter,
  };

  loading: boolean = true;
  editOpen: boolean = false;
  selected: File | null = null;
  picture: string = this.row.photo;
  persistentPicture: string = this.row.photo;

  get row() {
    return this._row;
  }

  set row(value: ICook) {
    this._row = value;
  }

  get cooksRegistry() {
    return this._data;
  }

  constructor() {
    makeAutoObservable(this);
 //   this.loadData();
  }

  loadData = async () => {
    try {
      var res = await agent.cooks.getFilteredList(this.Request);
      this.setData(res);
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  getDetailsInfo = async (id: number) => {
    try {
      var res = await agent.cooks.details(id);
      this.setRow(res);
    } catch (e) {
      console.log(e);
    }
  };

  private setLoadingInitial = (state: boolean) => {
    this.loading = state;
  };

  private setData = (value: IPaginatedList<ICook>) => {
    this._data = value;
  };

  setRow = (value: ICook) => {
    this.row = value;
    this.setPicture(this.row.photo);
    this.setPersistentPicture(this.row.photo);
  };
  private setEditOpen = (state: boolean) => {
    this.editOpen = state;
  };

  private setLocationFilter = (value: string) => {
    this.locationFilter = value;
    this.Request.locationFilter = value;
    this.loadData();
  };
  private setNameFilter = (value: string) => {
    this.nameFilter = value;
    this.Request.nameFilter = value;
    this.loadData();
  };
  setSelected = (value: File | null) => {
    this.selected = value;
  };

  setPicture = (value: string) => {
    this.picture = value;
  };

  setPersistentPicture = (value: string) => {
    this.persistentPicture = value;
  };

  handleChangePage = (event: any, newPage: number) => {
    this.page = newPage + 1;
    this.Request.pageNumber = newPage + 1;
    this.loadData();
  };

  handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.page = 1;
    this.pageSize = parseInt(event.target.value, 0);
    this.Request.pageSize = parseInt(event.target.value, 0);
    this.Request.pageNumber = 1;
    this.loadData();
  };

  handleDelete = async (data: ICook) => {
    const conf = confirm("Do you want to delete " + data.name + "?");
    if (conf) {
      this.setLoadingInitial(true);
      try {
        if (data.id) {
          void (await agent.cooks.delete(data.id));
          const dataImage = data.photo.split("/").pop();
          if (dataImage) {
            void (await agent.cooks.deleteImage(dataImage));
          }

          this.setLoadingInitial(false);
        }
      } catch (e) {
        console.log(e);
        this.setLoadingInitial(false);
      }
      this.loadData();
      this.setRow(this.defaultRow);
    }
  };

  handleClearAll = () => {
    this.setLoadingInitial(true);
    this.setLocationFilter("");
    this.setNameFilter("");
    this.Request.activeFilter = null;
    this.activeFilter = null;
    this.setLoadingInitial(false);
    this.loadData();
  };

  handleChangeActiveFilter = (st: string) => {
    let result: boolean | null = null;
    switch (st) {
      case "true":
        result = true;
        break;
      case "false":
        result = false;
        break;
      default:
        break;
    }
    this.Request.activeFilter = result;
    this.activeFilter = result;
    this.loadData();
  };

  handleChangeSortField = (value: string) => {
    this.sortField = value;
    this.Request.sortField = value;
    this.loadData();
  };

  handleChangeNameFilter = (value: string) => {
    this.setNameFilter(value);
    this.loadData();
  };

  handleChangeLocationFilter = (value: string) => {
    this.setLocationFilter(value);
    this.loadData();
  };
  handleOpenEditModal = () => {
    this.setEditOpen(true);
  };
  handleCloseEditModal = () => {
    this.loadData();
    this.setEditOpen(false);
  };

  handleUpdate = (row: ICook) => {
    this.getDetailsInfo(row.id);
    this.setEditOpen(true);
    this.loadData();
  };

  handleAddNew = () => {
    this.setRow(this.defaultRow);
    this.setPicture(this.row.photo);    
    this.setEditOpen(true);
  };

  handleUpdateRequest = async (event: any) => {
    let formData: FormData = new FormData();
    let imgUrl: string = "";
    if (this.selected) {
      try {
        if (this.row.id !== 0) {
          try {
            const imageToDelete = this.persistentPicture.split("/").pop();         
            if (imageToDelete) await agent.cooks.deleteImage(imageToDelete);
          } catch (e) {
            console.log(e);
          }
        }

        formData = new FormData();
        formData.append("imageFile", this.selected);
        imgUrl = await agent.cooks.uploadImage(formData);
        runInAction(()=>
        this.row.photo = imgUrl
        );  

      } catch (e) {
        console.log(e);
      }
    }

    if (this.row.id === 0) {
      try {
        const result = await agent.cooks.create(this.row);
        runInAction(()=>
        this.row.id = result.id
        )
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await agent.cooks.update(this.row);
      } catch (e) {
        console.log(e);
      }
    }
    this.handleCloseEditModal();
  };

  handleCancel = () => {
    this.setPicture("");
    this.setSelected(null);
    this.handleCloseEditModal();
  };

  handleChangeFormCheckBox = (event: any) => {
    this.row = { ...this.row, [event.target.id]: event.target.checked };
  };

  handleChangeFormInput = (event: any, value: string) => {
    this.row = { ...this.row, [event.target.id]: value };
  };

  handleLocationName = (value: any) => {
    this.row = { ...this.row, locationName: value };
  };
}
