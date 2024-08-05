export interface ICConfirmProps {
  title: string;
  content?: string;
  onProceed?: () => Promise<any> | void;
  onCancel?: () => void;
}
