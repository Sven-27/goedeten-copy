import axios, { AxiosResponse } from "axios";
import { IZipcode, IZipcodeCheck } from "models/Zipcode";
import { 
    ICookPaginatedRequest, 
    IDishPaginatedRequest, 
    IPaginatedList, 
    IPaginatedRequest, 
    IZipPaginatedRequest } from 'models/PaginatedList';
import { IAllergen } from "models/Allergen";
import { IDailyDish, IDishAvailability, IDishPlanning } from "models/DishAvailability";
import { IDish } from "models/Dish";
import { IIngredient } from 'models/Ingredient';
import { ICook, ICookPlanning } from "models/Cook";
import { IDishCategory } from "models/DishCategory";
import { ICuisine } from "models/Cuisine";
import { ILocation } from 'models/Location';
import { IUser, IUserFormValues } from "models/User";
import { store } from "contexts/admin/store";
import { ICustomer } from "models/Customer";
import { IVatCategory } from "models/VatCategory";
import { IOrderEasy, IRedirectResult } from "models/Purchase";
import { IOrder, IStatus } from "models/Order"

axios.defaults.baseURL = 'https://goed-eten-api.azurewebsites.net/';
//axios.defaults.baseURL = 'https://localhost:5001/';

// use cookies
axios.defaults.withCredentials = true

// const { commonStore } = useStore();

// Sleep and interceptor are used to test 'Loading' status on screens by setting a delay
const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

axios.interceptors.response.use(async response => {
    try {
        await sleep(0);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const imgConfig = {
    headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
    }
};

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}, conf?: any) => axios.post<T>(url, body, conf).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),    
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const zipCodes = {
    checkZip: (postalCode: string, houseNumber: string) => requests.get<IZipcodeCheck>(`/api/ZipCode/VerifyByZipcode?zipcode=${postalCode}&houseNumber=${houseNumber}`),
    list: () => requests.get<IZipcode[]>('/api/zipcode'),
    details: (id: number) => requests.get<IZipcode>(`/api/zipcode/${id}`),
    byZip: (zip: string) => requests.get<boolean>(`/api/zipcode/zip/${zip}`),
    getList: (request: IPaginatedRequest) => requests.post<IPaginatedList<IZipcode>>('/api/zipcode/getlist', request),
    getFilteredList: (request: IZipPaginatedRequest) => requests.post<IPaginatedList<IZipcode>>('/api/zipcode/getfilteredlist', request),
    create: (zipcode: IZipcode) => requests.post<IZipcode>('/api/zipcode', zipcode),
    update: (zipcode: IZipcode) => requests.put<boolean>(`/api/zipcode`, zipcode),
    delete: (id: number) => requests.del<boolean>(`/api/zipcode/${id}`)
}

const allergens = {
    list: () => requests.get<IAllergen[]>('/api/allergen'),
    details: (id: number) => requests.get<IAllergen>(`/api/allergen/${id}`),
    getList: (request: IPaginatedRequest) => requests.post<IPaginatedList<IAllergen>>('/api/allergen/getlist', request),
    create: (allergen: IAllergen) => requests.post<boolean>('/api/allergen', allergen),
    update: (allergen: IAllergen) => requests.put<boolean>(`/api/allergen`, allergen),
    delete: (id: number) => requests.del<boolean>(`/api/allergen/${id}`)
}

const ingredients = {
    list: () => requests.get<IIngredient[]>('/api/ingredient'),
    details: (id: number) => requests.get<IIngredient>(`/api/ingredient/${id}`),
    getList: (request: IPaginatedRequest) => requests.post<IPaginatedList<IIngredient>>('/api/ingredient/getlist', request),
    create: (ingredient: IIngredient) => requests.post<IIngredient>('/api/ingredient', ingredient),
    update: (ingredient: IIngredient) => requests.put<boolean>(`/api/ingredient`, ingredient),
    delete: (id: number) => requests.del<boolean>(`/api/ingredient/${id}`)
}

const dishAvailabilities = {
    getDishesList: (date: string, numDays: number) => requests.get<IDailyDish[]>(`/api/DishAvailability/period/${date}/${numDays}`),
    create: (value: IDishPlanning) => requests.post<boolean>('/api/dishavailability', value),
    update: (value: IDishAvailability) => requests.put<IDishAvailability>('/api/dishavailability', value),
    updatePlanning: (value: IDishPlanning) => requests.put<IDishPlanning>('/api/dishavailability', value),
    getPlanning:(date:string,cookId:number) => requests.get<IDishPlanning[]>(`/api/DishAvailability/date/${date}/${cookId}`),
    delete:(id: number) => requests.del<boolean>(`api/dishavailability/${id}`),
}
const cookAvailabilities = {
    getPlanning:(date:string) => requests.get<ICookPlanning[]>(`/api/CookAvailability/date/${date}`),
    create:(value: ICookPlanning) => requests.post<boolean>('api/cookavailability', value),
    delete:(id: number) => requests.del<boolean>(`api/cookavailability/${id}`),    
}

const dishes = {
    getFilteredList: (request: IDishPaginatedRequest) => requests.post<IPaginatedList<IDish>>('api/dish/getfilteredlist', request),
    list: () => requests.get<IDish[]>('/api/dish'),
    create: (dish: IDish) => requests.post<IDish>(`/api/dish/`, dish),
    update: (dish: IDish) => requests.put<boolean>(`/api/dish/`, dish),
    delete: (id: number) => requests.del<boolean>(`/api/dish/${id}`),
    details: (id: number) => requests.get<IDish>(`/api/dish/${id}`),
    setAllergens: (id: number, allergens: number[]) => requests.put<boolean>(`/api/dish/${id}/allergens`, allergens),
    setIngredients: (id: number, ingredients: number[]) => requests.put<boolean>(`/api/dish/${id}/ingredients`, ingredients),
    uploadImage: (image: FormData) => requests.post<string>(`/api/dish/image`, image, imgConfig),
    deleteImage: (imageName: string) => requests.del<void>(`/api/dish/image/${imageName}`),
}

const cuisines = {
    list: () => requests.get<ICuisine[]>('/api/cuisine'),
    details: (id: number) => requests.get<ICuisine>(`/api/cuisine/${id}`),
    create: (value: ICuisine) => requests.post<ICuisine>('/api/cuisine', value),
    update: (value: ICuisine) => requests.put<boolean>(`/api/cuisine`, value),
    delete: (id: number) => requests.del<boolean>(`/api/cuisine/${id}`)
}


const dishCategories = {
    list: () => requests.get<IDishCategory[]>(`/api/dishcategory/`),
    details: (id: number) => requests.get<IDishCategory>(`/api/dishcategory/${id}`),
    create: (data: IDishCategory) => requests.post<IDishCategory>('/api/dishcategory', data),
    update: (data: IDishCategory) => requests.put<boolean>(`/api/dishcategory`, data),
    delete: (id: number) => requests.del<boolean>(`/api/dishcategory/${id}`)
}

const locations = {
    list: () => requests.get<ILocation[]>(`/api/location/`),
    details: (id: number) => requests.get<ILocation>(`/api/location/${id}`),
    create: (data: ILocation) => requests.post<boolean>('/api/location', data),
    update: (data: ILocation) => requests.put<boolean>(`/api/location`, data),
    delete: (id: number) => requests.del<boolean>(`/api/location/${id}`)
}
const vatCategories = {
    list: () => requests.get<IVatCategory[]>(`/api/vatcategory/`),
    details: (id: number) => requests.get<IVatCategory>(`/api/vatcategory/${id}`),    
    update: (data: IVatCategory) => requests.put<boolean>(`/api/vatcategory`, data),    
}


const cooks = {
    list: () => requests.get<ICook[]>('/api/cook/'),
    getCook: (id: number) => requests.get<ICook>(`/api/cook/${id}`),
    getFilteredList: (request: ICookPaginatedRequest) => requests.post<IPaginatedList<ICook>>('api/cook/getfilteredlist', request),
    create: (data: ICook) => requests.post<ICook>(`/api/cook/`, data),
    update: (data: ICook) => requests.put<boolean>(`/api/cook/`, data),
    delete: (id: number) => requests.del<boolean>(`/api/cook/${id}`),
    details: (id: number) => requests.get<ICook>(`/api/cook/${id}`),
    uploadImage: (image: FormData) => requests.post<string>(`/api/cook/image`, image, imgConfig),
    deleteImage: (imageName: string) => requests.del<void>(`/api/cook/image/${imageName}`),
    
}

const users = {
    list:()=> requests.get<IUser[]>('/api/user/getall'),
    current: () => requests.get<IUser>('/api/user'),
    login: (user: IUserFormValues) => requests.post<IUser>('/api/user/login', user),
    resetPass:(id:number,user:IUser)=> requests.put<IUser>(`/api/user/resetpasswordafteractivation/${id}`,user),
    requestResetPass:(id:number)=> requests.get<boolean>(`/api/user/resetpassword/${id}`),    
    register: (user: IUser) => requests.post<IUser>('/api/user/register', user),
    delete: (id: number) => requests.del<boolean>(`/api/user/${id}`),  
    update: (id:number,data: IUser) => requests.put<boolean>(`/api/user/${id}`, data),  
}

const customers = {
    list:() => requests.get<ICustomer[]>('/api/customer'),
    update:(customer: ICustomer) => requests.put<boolean>(`/api/customer`, customer),
    delete:(id: number) => requests.del<boolean>(`/api/customer/${id}`),
    create:(customer:ICustomer) => requests.post<boolean>('/api/customer',customer)
}

const orders = {
    checkStatus: (id: number) => requests.get<IStatus>(`/api/order/status/${id}`),
    create:(order:IOrderEasy) => requests.post<IRedirectResult>('/api/order',order),
    utcTime:() => requests.get<string>('api/order/utctime'),
    list:() => requests.get<IOrder[]>('/api/order'),
    details: (id: number) => requests.get<IOrder>(`/api/order/${id}`),
    update: (order:IOrder) => requests.put<IOrder>(`/api/order/`, order)
}

const agent = {
    zipCodes,
    dishAvailabilities,
    cookAvailabilities,
    allergens,
    dishes,
    dishCategories,
    cooks,
    ingredients,
    cuisines,
    locations,
    users,
    customers,
    vatCategories,
    orders
}
export default agent
