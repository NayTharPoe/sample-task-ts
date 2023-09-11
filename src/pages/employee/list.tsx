import React from 'react'
import { ReactElement } from 'react';
import MainLayout from '@/layouts/MainLayout';
import type { NextPageWithLayout } from '../_app'

const EmployeeList: NextPageWithLayout = () => {
  return (
    <div>
      Employee list page
    </div>
  )
}

EmployeeList.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default EmployeeList
