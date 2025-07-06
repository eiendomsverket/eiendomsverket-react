import * as React from 'react';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, {breadcrumbsClasses} from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import Link from '@mui/material/Link';
import {BreadcrumbItem} from "@/page-builder/utils/types";

const StyledBreadcrumbs = styled(Breadcrumbs)(({theme}) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));


interface NavbarBreadcrumbs {
  breadcrumbs: BreadcrumbItem[];
}

export default function NavbarBreadcrumbs({breadcrumbs}: NavbarBreadcrumbs) {
  return (
      <StyledBreadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextRoundedIcon fontSize="small"/>}
      >
        {breadcrumbs.map((item, idx) => {
          const isActive = item.active ?? idx === breadcrumbs.length - 1;
          if (item.path && !isActive) {
            return (
              <Link
                key={item.label}
                href={item.path}
                underline="hover"
                color="inherit"
                sx={{ cursor: 'pointer' }}
              >
                {item.label}
              </Link>
            );
          }
          return (
              <Typography
                  key={item.label}
                  variant="body1"
                  sx={isActive ? {color: 'text.primary', fontWeight: 600} : undefined}
              >
                {item.label}
              </Typography>
          );
        })}
      </StyledBreadcrumbs>
  );
}