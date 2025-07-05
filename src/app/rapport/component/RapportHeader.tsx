import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ColorModeIconDropdown from '@/app/shared-theme/ColorModeIconDropdown';
import ShieldIcon from './ShieldIcon';

export function RapportHeader({ onLogout }: { onLogout?: () => void }) {
  return (
    <Paper
      elevation={1}
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        boxShadow: 1,
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 3 },
        mb: 3,
      }}
    >
      <Grid container alignItems="center" spacing={2} wrap="nowrap">
        <Grid item>
          <Box
            sx={{
              background: '#2563eb',
              borderRadius: 2,
              width: 64,
              height: 64,
              minWidth: 64,
              minHeight: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 1px 4px 0 rgba(37,99,235,0.10)',
            }}
          >
            <ShieldIcon width={40} height={40} />
          </Box>
        </Grid>
        <Grid item xs>
          <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>
            Skaderapport System
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Registrer og administrer skaderapporter
          </Typography>
        </Grid>
        <Grid item sx={{ ml: 'auto' }} justifyContent="flex-end" alignSelf="end">
          <Stack direction="row" spacing={2}>
            <button
                onClick={onLogout}
                style={{
                  background: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 16
                }}
            >
              Logg ut
            </button>
            <IconButton size="large" sx={{ p: 1 }}>
              <ColorModeIconDropdown />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
