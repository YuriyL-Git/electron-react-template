import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../common/types/redux/root-state-type';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
