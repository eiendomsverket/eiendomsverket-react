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

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function propertyReport(props: { disableCustomTheme?: boolean }) {
  return (
      <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme/>
        <Box sx={{display: 'flex'}}>
          <SideMenu/>
          <AppNavbar title="Dashb"/>
          {/* Main content */}
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
              <Header/>
              <MainGrid/>
            </Stack>
          </Box>
        </Box>
      </AppTheme>
  );
}