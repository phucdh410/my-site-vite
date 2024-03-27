import { Dayjs } from 'dayjs';
import { CustomContentProps } from 'notistack';

export interface ICNoti extends CustomContentProps {
  time: Dayjs;
}
