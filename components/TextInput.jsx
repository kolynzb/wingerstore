import { useField, ErrorMessage } from "formik";
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-start justify-center flex-col mb-3">
      <label
        className="text-xl capitalize mb-1  font-light"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`border h-10 w-80 rounded-md ${
          meta.error && "border-accent border-2"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="text-accent" />
    </div>
  );
};

export default TextInput;
