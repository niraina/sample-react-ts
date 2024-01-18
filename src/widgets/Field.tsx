/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Input } from 'antd';

const Field: React.FC<any> = ({
  placeholder="",
  type="text",
  status="",
  prefix="",
  suffix="",
  value,
  onChange,
  className=""
}) => {
  return (
    <>
      <Input 
        prefix={prefix}
        suffix={suffix}
        placeholder={placeholder}
        status={status}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  )
}

export default Field