import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import MenuButton from './MenuButton';

import Search from './Search';
import ColorModeIconDropdown from "@/app/shared-theme/ColorModeIconDropdown";
import Typography from '@mui/material/Typography';
import NavbarBreadcrumbs from "@/page-builder/components/NavbarBreadcrumbs";
import {BreadcrumbItem} from "@/page-builder/utils/types";

export interface HeaderProps {
  title?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function Header({
                                 title,
                                 breadcrumbs
                               }: HeaderProps) {
  return (
      <Stack
          direction="row"
          sx={{
            display: {xs: 'none', md: 'flex'},
            width: '100%',
            alignItems: {xs: 'flex-start', md: 'center'},
            justifyContent: 'space-between',
            maxWidth: {sm: '100%', md: '1700px'},
            pt: 1.5,
          }}
          spacing={2}
      >
        <Stack>
          {title && (
              <Typography variant="h6" sx={{mb: 0.5}}>
                {title}
              </Typography>
          )}
          <NavbarBreadcrumbs breadcrumbs={breadcrumbs}/>
        </Stack>
        <Stack direction="row" sx={{gap: 1}}>
          <Search/>
          <CustomDatePicker/>
          <MenuButton showBadge aria-label="Open notifications">
            <NotificationsRoundedIcon/>
          </MenuButton>
          <ColorModeIconDropdown/>
        </Stack>
      </Stack>
  );
}
