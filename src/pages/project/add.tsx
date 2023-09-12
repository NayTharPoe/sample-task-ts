import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import { Button } from '@mui/material';
import { error } from 'console';

type FormValues = {
  projectName: string;
  language: string;
  description: string;
  startDate: string | null;
  endDate: string | null;
};

const AddNewProjectPage: NextPageWithLayout = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      projectName: '',
      language: '',
      description: '',
      startDate: null,
      endDate: null,
    },
  });

  const { register, handleSubmit, formState, control, setValue, setError, clearErrors } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    if (!data.startDate) {
      setError('startDate', { type: 'manual', message: 'Start Date is required' });
    } else {
      clearErrors('startDate');
    }

    if (!data.endDate) {
      setError('endDate', { type: 'manual', message: 'End Date is required' });
    } else {
      clearErrors('endDate');
    }

    if (Object.keys(errors).length === 0) {
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <TextField
          label="Project Name"
          {...register('projectName', { required: 'Project Name is required' })}
          error={!!errors.projectName}
          helperText={errors.projectName?.message}
        />
        <TextField
          label="Language"
          {...register('language', { required: 'Language is required' })}
          error={!!errors.language}
          helperText={errors.language?.message}
        />
        <TextField label="Description" {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Controller
          name="startDate"
          control={control}
          render={({ field }) => (
            <>
              <DatePicker
                label="Start Date"
                value={field.value}
                onChange={(newValue) =>
                  field.onChange(newValue)
                }
              />
              {errors.startDate && (
                <span style={{ color: 'red' }}>{errors.startDate.message}</span>
              )}
            </>
          )}
        />
        <Controller
          name="endDate"
          control={control}
          render={({ field }) => (
            <>
              <DatePicker
                label="End Date"
                value={field.value}
                onChange={(newValue) =>
                  field.onChange(newValue)
                }
              />
              {errors.endDate && (
                <span style={{ color: 'red' }}>{errors.endDate.message}</span>
              )}
            </>
          )}
        />
        <Button type="submit">Create</Button>
        <Button>Cancel</Button>
      </Stack>
    </form>
  );
};

AddNewProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default AddNewProjectPage;
