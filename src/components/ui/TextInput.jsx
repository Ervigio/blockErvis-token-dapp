import { PropTypes } from "prop-types";


export default function TextInput({
  type = "text",
  onChange,
  value,
  placeholder,
  disabled,
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className="border border-gray-300 rounded-lg p-2 outline-none
      focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
      transition duration-300 ease-in-out disabled:cursor-not-allowed"
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
