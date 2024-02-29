import { PropTypes } from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

export default function Button({
  type = "button",
  onClick,
  disabled,
  children,
  isLoading,
}) {
  return (
    <button
      type={type}
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-75 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        {isLoading && <LoadingSpinner className="h-5 w-5" />}
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
