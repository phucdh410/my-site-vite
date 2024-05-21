import { useSelector as useReduxSelector } from 'react-redux';

import { IRootState } from '@/redux';

export const useSelector = useReduxSelector.withTypes<IRootState>();
