import React from 'react';

const Input = (props: any) => {
  return (
    <>
      {props.type === 'textarea' ? (
        <textarea {...props} />
      ) : (
        <input {...props} />
      )}
    </>
  );
};

export default Input;
