import React from 'react';

const Themebtn = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id="check-5"
        className="peer absolute z-10 w-[24px] h-[24px] top-[3px] left-[3px] bg-gradient-to-br from-[#68007a] to-[#a564af] shadow-[0_4px_5px_rgba(0,0,0,0.3)] appearance-none rounded-full transition-all duration-350 ease-in-out checked:left-[36px]"
      />
      <label
        htmlFor="check-5"
        className="block w-[60px] h-[30px] bg-[#68007a] rounded-full overflow-hidden cursor-pointer relative transition-all duration-350 ease-in-out peer-checked:bg-transparent"
      >
        <span className="absolute left-[4px] top-[15px] text-[#a564af] font-serif text-[18px] leading-none transition-all duration-350 ease-in-out peer-checked:left-[40px] peer-checked:top-[12px] peer-checked:rotate-y-360 peer-checked:transform">
          
        </span>
        <span className="absolute left-[6px] top-[19px] text-[#a564af] font-serif text-[6px] leading-none transition-all duration-350 ease-in-out peer-checked:left-[42px] peer-checked:top-[16px] peer-checked:transform peer-checked:rotate-y-360">
          
        </span>
      </label>
    </div>
  );
};

export default Themebtn;
