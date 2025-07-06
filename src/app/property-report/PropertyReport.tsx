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
              <MainGrid/>
            </Stack>
          </Box>
        </Box>
      </AppTheme>
  );
}