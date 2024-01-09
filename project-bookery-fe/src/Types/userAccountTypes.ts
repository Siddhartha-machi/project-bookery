export type editableTypoProps = {
  label: string;
  value: string;
  valueType: "text" | "number" | "email";
  enableEditing: boolean;
  action: (newValue: string) => void;
};
