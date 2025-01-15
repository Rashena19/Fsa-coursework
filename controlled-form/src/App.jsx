import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    username: "",
  });

  useEffect(() => {
    console.log(formData);

  }, [formData])

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleSubmit() {

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Password: <input type="text" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <input type="text" name="Submit" />
        </form>
      </div>
    </>
  )}

export default App
