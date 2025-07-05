import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';

export function RapportCard({ report, severityColor }) {
  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, bgcolor: 'background.paper' }}>
      <Stack direction="column" spacing={2} alignItems="flex-start">
        <Stack direction="row" alignItems="center" spacing={1} mb={1} sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" fontWeight={600} color="text.primary">
            {report.title}
          </Typography>
          <Chip label={report.status} size="small" color={report.status === 'Fullført' ? 'success' : 'info'} />
          <Chip label={report.severity} size="small" color={severityColor[report.severity]} />
        </Stack>
        {report.images.length > 0 && (
          <Stack direction="row" spacing={1} mt={1} mb={1} sx={{ flexWrap: 'wrap' }}>
            {report.images.map((img, idx) => (
              <Box key={idx} sx={{ width: 72, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', background: '#f3f4f6', borderRadius: 1 }}>
                <img
                  src={img}
                  alt={report.title}
                  loading="lazy"
                  style={{ borderRadius: 6, objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
                />
              </Box>
            ))}
          </Stack>
        )}
        <Typography variant="body2" color="text.secondary" mb={1}>
          {report.description}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" divider={<Divider orientation="vertical" flexItem />}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <CalendarMonthIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">{report.date}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <PlaceIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">{report.location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <PersonIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">{report.reporter}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <PaidIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">{report.costEstimate}</Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
}

