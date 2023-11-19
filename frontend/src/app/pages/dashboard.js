// pages/dashboard.js

import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import DashboardTable from '../components/DashboardTable';

const fetchStocks = async () => {
  const { data } = await axios.get('/api/stocks');
  return data;
};

const Dashboard = () => {
  const { data: stocks, isLoading } = useQuery('stocks', fetchStocks);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Stock Dashboard
      </Typography>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DashboardTable stocks={stocks} />
      )}
    </Container>
  );
};

export default Dashboard;
