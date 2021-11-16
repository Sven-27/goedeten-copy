
export interface IPaginatedRequest {
  pageNumber: number;
  sortField: string;
  sortOrder: string;
  pageSize: number;
}

export interface IZipPaginatedRequest extends IPaginatedRequest {
  zipFilter:string;
  cityFilter:string;
  streetFilter:string;
  activeFilter: boolean | null;
}
export interface ICookPaginatedRequest extends IPaginatedRequest {
  nameFilter:string;
  locationFilter:string;  
  activeFilter: boolean | null;
}

export interface IDishPaginatedRequest extends IPaginatedRequest {
  categoryFilter: string;
  nameFilter:string;
  cuisineFilter:string;
  cookFilter:string;

}

export interface IPaginatedList<T> {
  currentPage: number;
  from: number;
  to: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  items: T[];
}

