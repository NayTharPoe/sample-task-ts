import React, { ReactElement } from 'react';
import MainLayout from '@/layouts/MainLayout';
import type { NextPageWithLayout } from './_app';

const DashboardPage : NextPageWithLayout = () => {
  return <p>I am Dashboard Page</p>;
};

DashboardPage.getLayout = function getLayout(page : ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default DashboardPage;
