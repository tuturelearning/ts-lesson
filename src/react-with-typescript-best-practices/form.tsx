import React from 'react';

const MyInput = () => {
  const [value, setValue] = React.useState('');

  // the Evnet type is a "ChangeEvent"
  // we pass in "HTMLInputElement" to the inpu
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return <input value={value} onChange={onChange} />;
};
