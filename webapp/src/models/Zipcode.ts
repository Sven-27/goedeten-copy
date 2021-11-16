export interface IZipcode {
  id: number
  zip: string
  locationName: string
  active: boolean
}

export interface IZipcodeCheck {
    status: string;
    streetName: string,
    houseNumber: string,
    postalCode: string,
    city: string,
    areaCode?: string,
}
