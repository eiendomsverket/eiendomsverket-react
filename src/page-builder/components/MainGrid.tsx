import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry, { ChartUserByCountryProps } from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard, { StatCardProps } from './StatCard';

const data: StatCardProps[] = [
  {
    title: 'Users',
    value: '14k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Conversions',
    value: '325',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'Event count',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export const myTreeItems = [
  {
    id: '1',
    label: 'Website',
    children: [
      { id: '1.1', label: 'Home', color: 'green' },
      { id: '1.2', label: 'Pricing', color: 'green' },
      { id: '1.3', label: 'About us', color: 'green' },
      {
        id: '1.4',
        label: 'Blog',
        children: [
          { id: '1.1.1', label: 'Announcements', color: 'blue' },
          { id: '1.1.2', label: 'April lookahead', color: 'blue' },
          { id: '1.1.3', label: "What's new", color: 'blue' },
          { id: '1.1.4', label: 'Meet the team', color: 'blue' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Store',
    children: [
      { id: '2.1', label: 'All products', color: 'green' },
      {
        id: '2.2',
        label: 'Categories',
        children: [
          { id: '2.2.1', label: 'Gadgets', color: 'blue' },
          { id: '2.2.2', label: 'Phones', color: 'blue' },
          { id: '2.2.3', label: 'Wearables', color: 'blue' },
        ],
      },
      { id: '2.3', label: 'Bestsellers', color: 'green' },
      { id: '2.4', label: 'Sales', color: 'green' },
    ],
  },
  { id: '4', label: 'Contact', color: 'blue' },
  { id: '5', label: 'Help', color: 'blue' },
];

export interface MainGridProps {
  overviewTitle?: string;
  detailsTitle?: string;
  // ...other props for cards, charts, etc. if needed
  chartUserByCountryProps?: ChartUserByCountryProps;
}

export default function MainGrid({
  overviewTitle = 'Overview',
  detailsTitle = 'Details',
  // ...other props
  chartUserByCountryProps,
}: MainGridProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {overviewTitle}
      </Typography>
      {/*<Grid*/}
      {/*  container*/}
      {/*  spacing={2}*/}
      {/*  columns={12}*/}
      {/*  sx={{ mb: (theme) => theme.spacing(2) }}*/}
      {/*>*/}
      {/*  {data.map((card, index) => (*/}
      {/*    <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>*/}
      {/*      <StatCard {...card} />*/}
      {/*    </Grid>*/}
      {/*  ))}*/}
      {/*  <Grid size={{ xs: 12, sm: 6, lg: 3 }}>*/}
      {/*    <HighlightedCard />*/}
      {/*  </Grid>*/}
      {/*  <Grid size={{ xs: 12, md: 6 }}>*/}
      {/*    <SessionsChart />*/}
      {/*  </Grid>*/}
      {/*  <Grid size={{ xs: 12, md: 6 }}>*/}
      {/*    <PageViewsBarChart />*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {detailsTitle}
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <CustomizedTreeView title="Min produktstruktur" items={myTreeItems} />
            <ChartUserByCountry {...chartUserByCountryProps} />
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
