import React,{useState} from 'react'
import GenderCheckbox from './GenderCheckbox'
import { uniqueNamesGenerator, adjectives, names} from 'unique-names-generator';

const Signup = () => {
    const [username, setUsername] = useState('');

    const generateUsername = () => {
        event.preventDefault();
        const randomUsername = uniqueNamesGenerator({
            dictionaries: [adjectives, names], 
            length: 2, 
            separator: ' ', 
            style: 'lowerCase' 
        });
        setUsername(randomUsername);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> Chatgroup</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Username</span>
                        </label>
                        <input type='text' placeholder='Generate username' className='w-full input input-bordered h-10' value={username} disabled/>
                        <button className='btn btn-block btn-neutral btn-xs mt-1 bg-gray-500' onClick={generateUsername}>Generate Username</button>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' />
                    </div>

                    <GenderCheckbox />

                    <div>
                        <button className='btn btn-block btn-neutral btn-sm mt-1 bg-gray-500'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup