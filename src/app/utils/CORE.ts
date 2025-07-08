export const CORE_API_BASE_URL = 'http://localhost:5010/core/api';

export const API_BASE_URL = 'http://localhost:5020/tilstandsrapport/api';


export const CORE = {
  // login endpoint
  LOGIN: `${CORE_API_BASE_URL}/login`,
  //compony endpoints
  company: `${CORE_API_BASE_URL}/company`,
  // user endpoints
  user: `${CORE_API_BASE_URL}/user`,
  };

export const REPORT = {
  // report endpoints
  ALL: `${API_BASE_URL}/report/all`
}

