"use client";
import * as React from 'react';
import AppTheme from '@/app/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {RapportHeader} from './component/RapportHeader';
import {RapportCard} from './component/RapportCard';
import { useRouter } from 'next/navigation';
import { removeSessionItem } from '@/app/utils/storage';

const exampleReports = [
  {
    id: 1,
    title: 'Rapport 1',
    status: 'Fullført',
    severity: 'Lav',
    description: 'Dette er en beskrivelse av rapport 1.',
    date: '2023-10-01',
    location: 'Oslo',
    reporter: 'Ola Nordmann',
    costEstimate: '1000 kr',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    ],
  },
  {
    id: 2,
    title: 'Rapport 2',
    status: 'Pågående',
    severity: 'Middels',
    description: 'Dette er en beskrivelse av rapport 2.',
    date: '2023-10-02',
    location: 'Bergen',
    reporter: 'Kari Nordmann',
    costEstimate: '2000 kr',
    images: [],
  },
  {
    id: 3,
    title: 'Rapport 3',
    status: 'Ikke startet',
    severity: 'Høy',
    description: 'Dette er en beskrivelse av rapport 3.',
    date: '2023-10-03',
    location: 'Stavanger',
    reporter: 'Per Hansen',
    costEstimate: '1500 kr',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    ],
  },
];

const severityColor = {
  Lav: 'success',
  Middels: 'warning',
  Høy: 'error',
} as const;

export default function Rapport(props: { disableCustomTheme?: boolean }) {
  const router = useRouter();
  const handleLogout = () => {
    removeSessionItem('access-token');
    router.push('/home-page');
  };
  return (
      <AppTheme {...props}>
        <CssBaseline enableColorScheme/>
        <Container maxWidth="md" disableGutters
                   sx={{minHeight: '100vh', bgcolor: 'background.default', p: 0, pt: 4}}>
          <Paper elevation={0} square sx={{bgcolor: 'background.default', minHeight: '100vh'}}>
            <Box sx={{px: {xs: 1, sm: 2, md: 3}, pb: 4}}>
              <RapportHeader onLogout={handleLogout}/>
              <Stack spacing={3}>
                {exampleReports.map((report) => (
                    <RapportCard key={report.id} report={report} severityColor={severityColor}/>
                ))}
              </Stack>
            </Box>
          </Paper>
        </Container>
      </AppTheme>
  );
}