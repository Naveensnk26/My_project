import React from 'react';

function Button({ content, translateClass, boxShadow }) {
  return (
    <div
      className={`rounded-[45px] font-semibold text-white p-4 sm:p-9 ${translateClass}`}
      style={{
        boxShadow: boxShadow, 
      }}
    >
      <p>{content}</p>
    </div>
  );
}

export default Button;
