import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { ReactElement } from 'react'

const TaskListPage = () => {
  return <div>Task List page</div>;
};

export default TaskListPage;

TaskListPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
