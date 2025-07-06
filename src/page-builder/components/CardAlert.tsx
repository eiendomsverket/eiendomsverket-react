import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

export interface CardAlertProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function CardAlert({
  icon = <AutoAwesomeRoundedIcon fontSize="small" />, // default icon
  title,
  description,
  buttonText,
  onButtonClick,
}: CardAlertProps) {
  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0 }}>
      <CardContent>
        {icon}
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          {description}
        </Typography>
        <Button variant="contained" size="small" fullWidth onClick={onButtonClick}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
