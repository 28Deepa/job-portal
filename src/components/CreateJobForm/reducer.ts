export interface IFieldState {
  value: string;
  isTouched: boolean;
  error: string;
}

export interface IFormState {
  jobTitle: IFieldState;
  jobDescription: IFieldState;
  company: IFieldState;
  ratePerHour: IFieldState;
  tags: IFieldState;
  phoneNumber: IFieldState;
  email: IFieldState;
}

export const initialState: IFormState = {
  jobTitle: { value: "", isTouched: false, error: "" },
  jobDescription: { value: "", isTouched: false, error: "" },
  company: { value: "", isTouched: false, error: "" },
  ratePerHour: { value: "", isTouched: false, error: "" },
  tags: { value: "", isTouched: false, error: "" },
  phoneNumber: { value: "", isTouched: false, error: "" },
  email: { value: "", isTouched: false, error: "" },
};

export type Action =
  | { type: "SET_VALUE"; field: keyof IFormState; value: string }
  | { type: "SET_TOUCHED"; field: keyof IFormState }
  | { type: "SET_ERROR"; field: keyof IFormState; error: string }
  | { type: "RESET"; payload: IFormState };

export const formReducer = (
  formState: IFormState,
  action: Action
): IFormState => {
  switch (action.type) {
    case "SET_VALUE": {
      const { field: fieldName, value: fieldValue } = action;
      const newState: IFormState = { ...formState };
      newState[fieldName].value = fieldValue;
      newState[fieldName].isTouched = true;
      return newState;
    }
    case "SET_TOUCHED": {
      const { field: fieldName } = action;
      const newState: IFormState = { ...formState };
      newState[fieldName] = { ...formState[fieldName], isTouched: true };
      return newState;
    }
    case "SET_ERROR": {
      const { field: fieldName, error: errorMsg } = action;
      const newState: IFormState = { ...formState };
      newState[fieldName] = { ...formState[fieldName], error: errorMsg };
      return newState;
    }
    case "RESET":
      return { ...initialState };
    default:
      return formState;
  }
};

export const tagsOptions = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "development", label: "Development" },
];

export const validateField = (
  field: keyof IFormState,
  value: string
): string => {
  switch (field) {
    case "email":
      return /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address";
    case "phoneNumber":
      return /^\d+$/.test(value) ? "" : "Phone number must be digits only";
    case "ratePerHour":
      return /^\d+(\.\d{1,2})?$/.test(value) ? "" : "Invalid rate per hour";
    default:
      return value.trim() ? "" : "This field is required";
  }
};
