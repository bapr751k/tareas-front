import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }


    return (
        <>
            <section className='heading'>
                <h4><FaUser /> Registrar Usuario</h4>
                <p>Por favor crea un usuario</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className='form-control'
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Por favor escribe tu nombre'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Por favor escribe tu email'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Por favor escribe tu password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className='form-control'
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Por favor confirma tu  password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>
                            crear
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register

