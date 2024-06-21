import { useState, useCallback } from "react";

interface IProps<T> {
  initialFormValue: T;
  onSubmit: () => Promise<void>;
}

type TFormStatus = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
};

const initialFormStatus = {
  isError: false,
  isLoading: false,
  isSuccess: false,
};

const useForm = <T>({ initialFormValue, onSubmit }: IProps<T>) => {
  const [formData, setFormData] = useState(initialFormValue);
  const [formStatus, setFormStatus] = useState<TFormStatus>(initialFormStatus);

  const handleSubmit = async () => {
    setFormStatus({
      isError: false,
      isLoading: true,
      isSuccess: false,
    });
    try {
      await onSubmit();

      setFormStatus({
        isError: false,
        isLoading: false,
        isSuccess: true,
      });
    } catch (error) {
      setFormStatus({
        isError: true,
        isLoading: false,
        isSuccess: false,
      });

      console.error(`While submitting form: ${error}`);
    } finally {
      setFormStatus(initialFormStatus);
      setFormData(initialFormValue);
    }
  };

  return { formData, formStatus, handleSubmit };
};

export default useForm;
