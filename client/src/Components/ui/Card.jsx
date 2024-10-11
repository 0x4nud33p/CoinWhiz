export const Card = ({ children, className, onClick }) => {
  return (
    <div
      className={`shadow-md rounded-lg p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={`flex items-center justify-between w-full ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <div className={`text-sm font-medium ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
};