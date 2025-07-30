import { HTMLAttributes, HTMLInputTypeAttribute } from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

// Input component props
type InputProps<T extends FieldValues> = UseControllerProps<T> & {
  control: Control<T>;
  className?: HTMLAttributes<HTMLInputElement>["className"];
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

/**
 * Custom input component
 * @param props
 * @returns
 */
export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  // props destructuring
  const {
    className,
    name,
    control,
    disabled,
    defaultValue,
    rules,
    shouldUnregister,
    placeholder,
    type,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({
        field: { value, name, onChange, ...args },
        fieldState: { error },
      }) => (
        <div className="flex flex-col gap-1">
          <input
            {...args}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className} my-input ${
              error
                ? "border-red-400 outline-red-400"
                : "border-primary outline-primary"
            }`}
          />
          {error && (
            <span className="text-red-400 text-sm ps-3">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

// select input props
type SelectInputProps<T extends FieldValues> = UseControllerProps<T> & {
  control: Control<T>;
  className?: HTMLAttributes<HTMLSelectElement>["className"];
  placeholder?: string;
  options: { label: string; value: string }[];
};

/**
 * Custom select input
 * @param props
 * @returns
 */
export const SelectInput = <T extends FieldValues>(
  props: SelectInputProps<T>
) => {
  // props destructuring
  const {
    className,
    options,
    control,
    name,
    defaultValue,
    disabled,
    placeholder,
    rules,
    shouldUnregister,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-1">
          <select {...field} className={`${className} my-input`}>
            {placeholder && <option value="">{placeholder}</option>}
            {Array.isArray(options) &&
              options.map(({ label, value }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
          </select>
          {error && (
            <span className="text-red-400 text-sm ps-3">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};
