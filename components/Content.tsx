// components/Content.js
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Usertable from './Usertable';
const Content = () => {
  return (
    <div className='flex flex-col items-start w-full p-8'>
      <h1 className='text-3xl mb-7'>Manage Employees</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 w-full'>
        <Card className='text-center w-full'>
          <CardHeader>
            <CardTitle>Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-bold'>100</p>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Contractors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-bold'>75</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Pending payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-bold'>25</p>
          </CardContent>
        </Card>
      </div>
      <div className='mt-8 w-full'>
       <Usertable/>
      </div>
    </div>
  );
};

export default Content;
