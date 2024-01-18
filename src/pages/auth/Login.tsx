import Field from '@/widgets/Field'
import {useState, useEffect} from 'react'
import { UserOutlined } from '@ant-design/icons';
import api from '@/shared/api/ApiHelper';

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = () => {
    try {
      api.post("/auth/login", {
        email: email,
        password: password
      }).then(response => {
        localStorage.setItem("token", response.data.accessToken)
        localStorage.setItem("refreshtoken", response.data.refreshToken)
      }).catch(error => {
        console.log(error);
      })
    } catch (error) {
      console.log("catch", error);
    }
  }

  const fetchProduct = async() => {
    await api.post('/products').then(response => {
      console.log(response, "eeee");
    }).catch(err => console.log(err)) 
  }

  useEffect(() => {
    fetchProduct()
  }, [])


  return (
    <div>
      <h1 className="text-3xl font-bold underline text-[#c3c3c3]">
      Hello world!

    </h1>
    <Field
      type="email" 
      placeholder="Email" 
      prefix={<UserOutlined />}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="mb-2"
      />
      <Field
        type="password" 
        placeholder="Password" 
        prefix={<UserOutlined />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className='p-2 bg-[#c3c3c3] mt-2' onClick={handleSubmit}>Connexion</button>
    </div>
  )
}

export default Login