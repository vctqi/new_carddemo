import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import {
  CreditCard as CardIcon,
  AccountBalance as AccountIcon,
  People as CustomerIcon,
  Receipt as TransactionIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../utils/auth';

const DashboardPage = () => {
  const navigate = useNavigate();
  const userInfo = getUserInfo();

  const menuItems = [
    {
      title: 'Customers',
      description: 'View and manage customer information',
      icon: <CustomerIcon fontSize="large" color="primary" />,
      path: '/customers',
    },
    {
      title: 'Accounts',
      description: 'View and manage credit card accounts',
      icon: <AccountIcon fontSize="large" color="primary" />,
      path: '/accounts',
    },
    {
      title: 'Cards',
      description: 'View and manage credit cards',
      icon: <CardIcon fontSize="large" color="primary" />,
      path: '/cards',
    },
    {
      title: 'Transactions',
      description: 'View and record transactions',
      icon: <TransactionIcon fontSize="large" color="primary" />,
      path: '/transactions',
    },
  ];

  return (
    <Box>
      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {userInfo?.username}!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Select a module to get started with the CardDemo application.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 3 }}>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  fullWidth
                  onClick={() => navigate(item.path)}
                  variant="contained"
                >
                  Access
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardPage;