// Central types for company, address, and user

export type AccessTokenResponse = {
  access_token: string;
};

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
  type: CompanyType;
  organizationNumber: number;
  officeAddress: Address;
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


export type ReportUser = {
  id: number;
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  role: string;
  password: string;
  company: string;
  created: string;
};

export type ReportCompany = {
  id: number;
  name: string;
  organizationNumber: number;
  type: string;
  officeAddress: {
    id: number;
    streetLine1: string;
    streetLine2: string;
    zipCode: string;
    city: string;
  };
  joined: string;
  users: ReportUser[];
  verified: boolean;
};

export type Report = {
  id: number;
  takstCompany: ReportCompany;
  ordered: string;
  lastUpdated: string;
  completed: boolean;
  responsibleTakstUser: ReportUser;
  orderedByUser: ReportUser;
};

export type Reports = Report[];