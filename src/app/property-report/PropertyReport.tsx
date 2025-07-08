import {alpha, Box, CssBaseline, Stack} from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";
import SideMenu from "@/page-builder/components/SideMenu";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations
} from "@/app/dashboard/theme/customizations";
import AppNavbar from "@/page-builder/components/AppNavbar";
import Header from "@/page-builder/components/Header";
import MainGrid from "@/page-builder/components/MainGrid";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {mainListItems, secondaryListItems} from "@/page-builder/components/MenuContent";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

const propertyReportHeaderConfig = {
  title: "Eiendomsrapport",
  breadcrumbs: [
    {label: "Home", path: "/"},
    {label: "Property Report", path: "/property-report", active: false},
  ],
};

const optionsMenuItems = [
  {label: 'Profile'},
  {label: 'My account'},
  {dividerBefore: true, label: 'Add another account'},
  {label: 'Settings'},
  {dividerBefore: true, label: 'Logout', icon: <LogoutRoundedIcon/>},
];

const cardAlertProps = {
  title: "Plan about to expire",
  description: "Enjoy 10% off when renewing your plan today.",
  buttonText: "Get the discount",
  icon: <LogoutRoundedIcon fontSize="small"/>,
};

const userProfile = {
  name: 'Riley Carter',
  email: 'riley@email.com',
  avatarSrc: '/static/images/avatar/7.jpg',
  optionsMenuItems,
};

const statCards = [
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

const highlightedCardProps = {
  title: 'Explore your data',
  description: 'Uncover performance and visitor insights with our data wizardry.',
  buttonText: 'Get insights',
};

const sessionsChartProps = {
  title: 'Sessions',
  value: '12.4k',
  chipLabel: '+12%',
  chipColor: 'success',
  caption: 'Sessions for the last 30 days',
  chartData: [
    300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 1800, 3300,
    3600, 3900, 4200, 4500, 3900, 4800, 5100, 5400, 4800, 5700, 6000,
    6300, 6600, 6900, 7200, 7500, 7800, 8100,
  ],
  chartLabels: [
    'Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8',
    'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15',
    'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 22',
    'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29',
    'Jan 30',
  ],
};

const pageViewsBarChartProps = {
  title: 'Page views and downloads',
  value: '1.3M',
  chipLabel: '-8%',
  chipColor: 'error',
  caption: 'Page views and downloads for the last 6 months',
  xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  series: [
    {
      id: 'page-views',
      label: 'Page views',
      data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
      stack: 'A',
    },
    {
      id: 'downloads',
      label: 'Downloads',
      data: [1234, 1872, 999, 2125, 1357, 1789, 1998],
      stack: 'A',
    },
  ],
};

const customizedDataGridProps = {};
const customizedTreeViewProps = {};
const chartUserByCountryProps = {
  title: 'Users by country',
  data: [
    {label: 'India', value: 50},
    {label: 'USA', value: 35},
    {label: 'Brazil', value: 10},
    {label: 'Other', value: 5},
  ],
  colors: [
    'hsl(220, 20%, 65%)',
    'hsl(220, 20%, 42%)',
    'hsl(220, 20%, 35%)',
    'hsl(220, 20%, 25%)',
  ],
  height: 260,
  width: 260,
};

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
const copyrightProps = {};

export default function propertyReport(props: { disableCustomTheme?: boolean }) {
  return (
      <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme/>
        <Box sx={{display: 'flex'}}>
          <SideMenu
              name={userProfile.name}
              email={userProfile.email}
              avatarSrc={userProfile.avatarSrc}
              optionsMenuItems={userProfile.optionsMenuItems}
              mainListItems={mainListItems}
              secondaryListItems={secondaryListItems}
              cardAlertProps={cardAlertProps}
          />
          <AppNavbar title={propertyReportHeaderConfig.title}/>
          <Box
              component="main"
              sx={(theme) => ({
                flexGrow: 1,
                backgroundColor: theme.vars
                    ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                    : alpha(theme.palette.background.default, 1),
                overflow: 'auto',
              })}
          >
            <Stack
                spacing={2}
                sx={{
                  alignItems: 'center',
                  mx: 3,
                  pb: 5,
                  mt: {xs: 8, md: 0},
                }}
            >
              <Header breadcrumbs={propertyReportHeaderConfig.breadcrumbs}/>
              <MainGrid
                  overviewTitle="Property Overview"
                  detailsTitle="Property Details"
                  statCards={statCards}
                  highlightedCardProps={highlightedCardProps}
                  sessionsChartProps={sessionsChartProps}
                  pageViewsBarChartProps={pageViewsBarChartProps}
                  customizedDataGridProps={customizedDataGridProps}
                  customizedTreeViewProps={customizedTreeViewProps}
                  chartUserByCountryProps={chartUserByCountryProps}
                  copyrightProps={copyrightProps}
                  myTreeItems={myTreeItems}
              />
            </Stack>
          </Box>
        </Box>
      </AppTheme>
  );
}