import Field from '@/widgets/Field'
import {useState} from 'react'
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
  const [text, setText] = useState<string>('')
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-[#c3c3c3]">
      Hello world!

    </h1>
    <Field
      type="password" 
      placeholder="Text...." 
      prefix={<UserOutlined />}
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Login