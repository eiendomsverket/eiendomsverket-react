// Central types for company, address, and user

export type Address = {
  street_line_1: string;
  street_line_2?: string;
  zip_code: string;
  city: string;
  country_code: string;
  kommune?: string;
};

export type CompanyType = 'TAKST' | 'MEGLER' | 'FORSIKRING' | 'BANK';

export type Company = {
  name: string;
  organization_number: number;
  type: CompanyType;
  office_address: Address;
  verified?: boolean;
};

export type UserRole =
  | 'PRIVATPERSON'
  | 'TAKSTMANN'
  | 'MEGLER'
  | 'ADMINISTRASJONSMEDARBEIDER'
  | 'PROSJEKTLEDER'
  | 'RÅDGIVER'
  | 'LEDER';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRole;
  company?: number;
};

