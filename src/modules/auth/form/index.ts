import { Resolver } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ILoginParams } from '@/types/auth';

export const defaultValues: ILoginParams = {
  username: '',
  password: '',
};

export const resolver: Resolver<ILoginParams> = yupResolver(
  object({
    username: string().required(),
    password: string().required(),
  }),
);
