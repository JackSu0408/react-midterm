const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  options = [],
  required = true,
}) => {
  const inputBaseClasses =
    "w-full pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition";

  const checkboxBaseClasses =
    "form-checkbox h-4 w-4 text-blue-700 border-gray-300 focus:ring-blue-700";

  if (type === "checkbox") {
    return (
      <label className="flex items-center space-x-2 cursor-pointer text-sm">
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
          className={checkboxBaseClasses}
          required={required}
        />
        <span className="text-gray-700">{label}</span>
      </label>
    );
  }

  if (type === "select") {
    return (
      <div>
        <label className="label w-full text-left mb-1 ">
          <span className="label-text text-sm ">{label}</span>
        </label>
        <div className="relative">
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={inputBaseClasses}
            required={required}
          >
            <option value="" disabled>
              Select one
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          )}
        </div>
      </div>
    );
  }

  // Default input
  return (
    <div>
      <label className="label w-full text-left mb-1">
        <span className="label-text text-sm">{label}</span>
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputBaseClasses}
          required={required}
        />
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
        )}
      </div>
    </div>
  );
};

export default FormInput;
