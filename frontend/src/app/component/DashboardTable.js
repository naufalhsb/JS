// components/DashboardTable.js

import React from 'react';
import Table from '@mui/material';
import TableBody from '@mui/material';
import TableCell from '@mui/material';
import TableContainer from '@mui/material';
import TableHead from '@mui/material';
import TableRow from '@mui/material';
import Paper from '@mui/material';


const DashboardTable = ({ stocks }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell>{stock.id}</TableCell>
              <TableCell>{stock.name}</TableCell>
              <TableCell>{stock.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
