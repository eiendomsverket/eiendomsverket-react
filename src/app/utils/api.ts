import axios from 'axios';
import {ENDPOINTS} from '../api/endpoints';
import type {Company, User} from './types';

export async function loginUser(email: string, password: string) {

  console.log('Logging in with:', email);

  return axios.post(ENDPOINTS.LOGIN, {email, password});
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


export async function createCompanyWithAddress(company: Company) {


}

export async function checkCompanyExists(organization_number: string | number) {
  const res = await axios.get(`${ENDPOINTS.company}/exists/${organization_number}`);
  return res.data;
}

export async function checkUserExists(email: string) {
  const res = await axios.get(`${ENDPOINTS.user}/exists/${email}`);
  return res.data;
}

export async function createUser(user: User) {
  console.log('Creating user with data:', user);
  const res = await axios.post(`${ENDPOINTS.user}/add/user`, {
    ...user,
  });
  return res.data;
}
