import axios from 'axios';
import {CORE, REPORT} from './CORE';
import type {Company, User} from './types';
import {getSessionItem} from "@/app/utils/storage";

export async function loginUser(email: string, password: string) {

  console.log('Logging in with:', email);

  return axios.post(CORE.LOGIN, {email, password});
}

export async function fetchBrregOrgData(orgNumber: string) {
  try {
    const res = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${orgNumber}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}


export async function checkCompanyExists(organization_number: string | number) {
  const res = await axios.get(`${CORE.company}/exists/${organization_number}`);
  return res.data;
}

export async function checkUserExists(email: string) {
  const res = await axios.get(`${CORE.user}/exists/${email}`);
  return res.data;
}

export async function createUser(user: User) {
  console.log('Creating user with data:', user);
  const res = await axios.post(`${CORE.user}/add/user`, {
    ...user,
  });
  return res.data;
}

export async function createCompany(payload: Company) {
  const response = await fetch(CORE.company, {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  console.log(response)

  if (!response.ok) {
    throw new Error('Failed to create company');
  }
  return response.json();
}

export async function fetchAllReports() {
  const tokenObject = getSessionItem('access-token');

  console.log('Fetching all reports with token object: ', tokenObject.access_token);
  const res = await axios.get(REPORT.ALL, {
    headers: {
      'accept': '*/*',
      'Authorization': `Bearer ${tokenObject.access_token}`,
    },
  });
  console.log('Fetched reports:', res);
  return res.data;
}