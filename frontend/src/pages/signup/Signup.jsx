import React,{useState} from 'react'
import GenderCheckbox from './GenderCheckbox'
import { uniqueNamesGenerator, adjectives, names} from 'unique-names-generator';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const {loading, signup} = useSignup();  

    const handleGenderChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const generateUsername = () => {
        event.preventDefault();
        const randomUsername = uniqueNamesGenerator({
            dictionaries: [adjectives, names], 
            length: 2, 
            separator: ' ', 
            style: 'lowerCase' 
        });
        setInputs({...inputs, username: randomUsername})
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        await signup(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> Chatgroup</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10' value={inputs.fullname} onChange={(e) => setInputs({...inputs, fullname: e.target.value})}/>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Username</span>
                        </label>
                        <input type='text' placeholder='Generate username' className='w-full input input-bordered h-10' value={inputs.username} disabled/>
                        <button className='btn btn-block btn-neutral btn-xs mt-1 bg-gray-500' onClick={generateUsername}>Generate Username</button>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                    </div>

                    <GenderCheckbox selectedGender={inputs.gender} handleGenderChange={handleGenderChange}/>

                    <Link to='/login' className='text-sm text-gray-500 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-neutral btn-sm mt-1 bg-gray-500' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup