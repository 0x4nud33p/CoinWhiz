// components/ui/chart.js

export const ChartContainer = ({ children, config }) => {
    // Example chart container
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        {children}
      </div>
    );
  };
  
  export const ChartTooltipContent = ({ hideLabel }) => {
    // Example chart tooltip content
    return (
      <div className="bg-white border border-gray-200 p-2 rounded-lg">
        {hideLabel ? null : <div className="font-semibold">Tooltip Label</div>}
        <div>Tooltip Content</div>
      </div>
    );
  };
  
  export const ChartTooltip = ({ cursor, content }) => {
    // Example chart tooltip
    return (
      <div className={`bg-gray-100 p-2 rounded-lg ${cursor ? 'cursor-pointer' : ''}`}>
        {content}
      </div>
    );
  };
  