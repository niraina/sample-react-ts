import Field from '@/widgets/Field'
import {useState} from 'react'
import { UserOutlined, MailOutlined } from '@ant-design/icons';

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className='max-w-[600px] mx-auto'>
      <h1 className="text-3xl font-bold text-center mb-4">
        Login page
      </h1>
      <Field
        type="email" 
        placeholder="Adresse email" 
        prefix={<MailOutlined />}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        label="Adresse email"
        name="email"
        />
        <Field
        type="password" 
        placeholder="Text...." 
        prefix={<UserOutlined />}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        label="Password"
        name="password"
        />
    </div>
  )
}

export default Login