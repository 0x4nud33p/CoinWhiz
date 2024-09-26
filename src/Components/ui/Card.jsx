export const Card = ({ children, className }) => {
  return (
    <div className={` shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
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
