export const Button = ({ variant, size, className, children }) => {
    return (
      <button
        className={`bg-gray-800 text-white py-2 px-4 rounded ${className}`}
        style={{
          fontSize: size === 'icon' ? '1rem' : 'inherit',
        }}
      >
        {children}
      </button>
    );
  };
  