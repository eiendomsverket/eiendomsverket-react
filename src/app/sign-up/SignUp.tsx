import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {styled} from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import {FacebookIcon, GoogleIcon} from './components/CustomIcons';
import Radio from '@mui/material/Radio';
import {
  checkCompanyExists,
  checkUserExists,
  createCompanyWithAddress,
  createUser,
  fetchBrregOrgData
} from '../utils/api';
import type {Address, Company, User} from '../utils/types';
import MenuItem from '@mui/material/MenuItem';
import {RadioGroup} from "@mui/material";

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [companyError, setCompanyError] = React.useState(false);
  const [companyErrorMessage, setCompanyErrorMessage] = React.useState('');
  const [role, setRole] = React.useState('megler');
  const [orgForm, setOrgForm] = React.useState('MEGLER');
  const [orgNumberError, setOrgNumberError] = React.useState(false);
  const [orgNumberErrorMessage, setOrgNumberErrorMessage] = React.useState('');
  const [orgData, setOrgData] = React.useState<any>(null);

  const fetchOrgData = async (orgNumber: string) => {
    const data = await fetchBrregOrgData(orgNumber);
    if (!data) return;
    setOrgData(data);

    const companyInput = document.getElementById('company') as HTMLInputElement;
    if (companyInput && data.navn) companyInput.value = data.navn;
    const addressInput = document.getElementById('address') as HTMLInputElement;
    if (addressInput && data.forretningsadresse && data.forretningsadresse.adresse) {
      addressInput.value = data.forretningsadresse.adresse.join(', ');
    }

    const zipInput = document.getElementById('zip_code') as HTMLInputElement;
    if (zipInput && data.forretningsadresse && data.forretningsadresse.postnummer) {
      zipInput.value = data.forretningsadresse.postnummer;
    }
    const cityInput = document.getElementById('city') as HTMLInputElement;
    if (cityInput && data.forretningsadresse && data.forretningsadresse.poststed) {
      cityInput.value = data.forretningsadresse.poststed;
    }
    const kommuneInput = document.getElementById('kommune') as HTMLInputElement;
    if (kommuneInput && data.forretningsadresse && data.forretningsadresse.kommune) {
      kommuneInput.value = data.forretningsadresse.kommune;
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const company = document.getElementById('company') as HTMLInputElement;
    const orgNumber = document.getElementById('orgNumber') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }
    if (!company.value || company.value.length < 1) {
      setCompanyError(true);
      setCompanyErrorMessage('Company is required.');
      isValid = false;
    } else {
      setCompanyError(false);
      setCompanyErrorMessage('');
    }
    if (!orgNumber.value || orgNumber.value.length < 1) {
      setOrgNumberError(true);
      setOrgNumberErrorMessage('Organization number is required.');
      isValid = false;
    } else {
      setOrgNumberError(false);
      setOrgNumberErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const companyOrgNumber = data.get('orgNumber');
    const userEmail = data.get('email');
    const firstname = data.get('fornavn') as string;
    const surname = data.get('etternavn') as string;
    const email = userEmail as string;
    const phone_number = data.get('mobilNummer') as string;
    const password = data.get('password') as string;
    const userRole = role.toUpperCase() as User['role'];
    const company = companyOrgNumber;

    if (nameError || emailError || passwordError) {
      return;
    }
    const companyExists = await checkCompanyExists(companyOrgNumber as string);

    if (companyExists) {


      const userExists = await checkUserExists(userEmail as string);
      if (userExists) {
        alert('Bruker med denne e-posten finnes allerede.');
        return;
      }

      const user: User = {
        firstname,
        surname,
        email,
        phone_number,
        password,
        role: userRole,
        company,
      };

      await createUser(user);
      alert('Bruker opprettet og knyttet til eksisterende selskap!');
      return;
    } else {
      // const address: Address = {
      //   street_line_1: (data.get('address') as string) || '',
      //   zip_code: (data.get('zip_code') as string) || '',
      //   city: (data.get('city') as string) || '',
      //   country_code: 'NO',
      //   kommune: (data.get('kommune') as string) || '',
      // };
      // const company: Company = {
      //   name: (data.get('company') as string) || '',
      //   organization_number: Number(companyOrgNumber),
      //   type: 'MEGLER', // You may want to map this dynamically
      //   office_address: address,
      // };


      // const createdCompany = await createCompanyWithAddress(company);

      const user: User = {
        firstName: data.get('fornavn') as string,
        lastName: data.get("etternavn") as string,
        email: userEmail as string,
        phoneNumber: data.get('mobilNummer') as string,
        password: data.get('password') as string,
        role: role.toUpperCase() as User['role'],
        company: companyOrgNumber,
      };
      await createUser(user);
      alert('Selskap og bruker opprettet!');
    };
    }



  return (
      <AppTheme {...props}>
        <CssBaseline enableColorScheme/>
        <ColorModeSelect sx={{position: 'fixed', top: '1rem', right: '1rem'}}/>
        <SignUpContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <Typography
                component="h1"
                variant="h4"
                sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
            >
              Sign up
            </Typography>

            <Box sx={{maxHeight: 500, overflowY: 'auto', width: '100%', px:3, py: 2}}>
              <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{display: 'flex', flexDirection: 'column', gap: 2}}
              >
                <FormControl>
                  <FormLabel htmlFor="fornavn">Fornavn</FormLabel>
                  <TextField
                      autoComplete="fornavn"
                      name="fornavn"
                      required
                      fullWidth
                      id="fornavn"
                      placeholder="Jon Snow"
                      error={nameError}
                      helperText={nameErrorMessage}
                      color={nameError ? 'error' : 'primary'}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="etternavn">Etternavn</FormLabel>
                  <TextField
                      autoComplete="etternavn"
                      name="etternavn"
                      required
                      fullWidth
                      id="etternavn"
                      placeholder="Jon Snow"
                      error={nameError}
                      helperText={nameErrorMessage}
                      color={nameError ? 'error' : 'primary'}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextField
                      required
                      fullWidth
                      id="email"
                      placeholder="your@email.com"
                      name="email"
                      autoComplete="email"
                      variant="outlined"
                      error={emailError}
                      helperText={emailErrorMessage}
                      color={passwordError ? 'error' : 'primary'}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <TextField
                      required
                      fullWidth
                      name="password"
                      placeholder="••••••"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      variant="outlined"
                      error={passwordError}
                      helperText={passwordErrorMessage}
                      color={passwordError ? 'error' : 'primary'}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="mobilNummer">Mobil nummer</FormLabel>
                  <TextField
                      required
                      fullWidth
                      name="mobilNummer"
                      placeholder="mobil nummer"
                      type="mobilNummer"
                      id="mobilNummer"
                      autoComplete="mobil nummer"
                      variant="outlined"
                      error={passwordError}
                      helperText={passwordErrorMessage}
                      color={passwordError ? 'error' : 'primary'}
                  />
                </FormControl>

                <FormControl>

                  <FormLabel id="orgform-label">Organisasjonsform</FormLabel>
                  <RadioGroup
                      row
                      aria-labelledby="orgform-label"
                      name="orgform"
                      id="orgform"
                      value={orgForm}
                      onChange={e => setOrgForm(e.target.value)}
                  >
                    <FormControlLabel value="MEGLER" control={<Radio />} label="Megler" />
                    <FormControlLabel value="TAKST" control={<Radio />} label="Takst" />
                    <FormControlLabel value="FORSIKRING" control={<Radio />} label="Forsikring" />
                    <FormControlLabel value="BANK" control={<Radio />} label="Bank" />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel id="role-label">Rolle i organisasjonen</FormLabel>
                  <RadioGroup
                      row
                      aria-labelledby="role-label"
                      name="role"
                      id="role"
                      value={role}
                      onChange={e => setRole(e.target.value)}
                  >
                    <FormControlLabel value="megler" control={<Radio />} label="Megler" />
                    <FormControlLabel value="takstmann" control={<Radio />} label="Takstmann" />
                    <FormControlLabel value="privatperson" control={<Radio />} label="Privatperson" />
                    <FormControlLabel value="administrasjonsmedarbeider" control={<Radio />} label="Administrasjonsmedarbeider" />
                    <FormControlLabel value="prosjektleder" control={<Radio />} label="Prosjektleder" />
                    <FormControlLabel value="radgiver" control={<Radio />} label="Rådgiver" />
                    <FormControlLabel value="leder" control={<Radio />} label="Leder" />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="orgNumber">Organisasjonsnummer</FormLabel>
                  <TextField
                      autoComplete="org-number"
                      name="orgNumber"
                      required
                      fullWidth
                      id="orgNumber"
                      placeholder="123456789"
                      error={orgNumberError}
                      helperText={orgNumberErrorMessage}
                      color={orgNumberError ? 'error' : 'primary'}
                      onBlur={e => {
                        const orgNumber = e.target.value;
                        if (orgNumber.length === 9) {
                          fetchOrgData(orgNumber);
                        }
                      }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="company">Selskap</FormLabel>
                  <TextField
                      autoComplete="organization"
                      name="company"
                      required
                      fullWidth
                      id="company"
                      placeholder="Selskap AS"
                      error={companyError}
                      helperText={companyErrorMessage}
                      color={companyError ? 'error' : 'primary'}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <TextField
                      autoComplete="address"
                      name="address"
                      fullWidth
                      id="address"
                      placeholder="123 Main St"
                      disabled
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="zip_code">Postnummer (Zip Code)</FormLabel>
                  <TextField
                      autoComplete="postal-code"
                      name="zip_code"
                      fullWidth
                      id="zip_code"
                      placeholder="12345"
                      disabled
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="city">Poststed (City)</FormLabel>
                  <TextField
                      autoComplete="address-level2"
                      name="city"
                      fullWidth
                      id="city"
                      placeholder="Oslo"
                      disabled
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="kommune">Kommune (Municipality)</FormLabel>
                  <TextField
                      autoComplete="address-level1"
                      name="kommune"
                      fullWidth
                      id="kommune"
                      placeholder="Oslo"
                      disabled
                  />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                    label="I want to receive updates via email."
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={validateInputs}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
            {/* Scrollable form wrapper end */}
            <Divider>
              <Typography sx={{color: 'text.secondary'}}>or</Typography>
            </Divider>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
              <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => alert('Sign up with Google')}
                  startIcon={<GoogleIcon/>}
              >
                Sign up with Google
              </Button>
              <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => alert('Sign up with Facebook')}
                  startIcon={<FacebookIcon/>}
              >
                Sign up with Facebook
              </Button>
              <Typography sx={{textAlign: 'center'}}>
                Already have an account?{' '}
                <Link
                    href="/material-ui/getting-started/templates/sign-in/"
                    variant="body2"
                    sx={{alignSelf: 'center'}}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Card>
        </SignUpContainer>
      </AppTheme>
  );
}
