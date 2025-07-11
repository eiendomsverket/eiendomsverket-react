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



export interface MainGridProps {
  overviewTitle?: string;
  detailsTitle?: string;
  chartUserByCountryProps?: ChartUserByCountryProps;
  myTreeItems?: any[];
}

export default function MainGrid({
  overviewTitle,
  detailsTitle,
  chartUserByCountryProps,
  myTreeItems,
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
