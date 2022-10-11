import React from 'react';
import logo from '../../static/img/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <div className='w-[21.875rem]'>
        <Link to='/'>
          <img className='mx-auto mb-6' style={{ width: 175 }} src={logo} alt='' />
        </Link>
        <form className='flex flex-col'>
          <input className='bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]' type='text' placeholder='휴대폰 번호 또는 이메일 주소' />
          <input className='bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]' type='text' placeholder='성명' />
          <input className='bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]' type='text' placeholder='사용자 이름' />
          <input className='bg-[#fafafa] mb-2.5 pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]' type='password' placeholder='비밀번호' />
          <input className='bg-[#0095f6] py-1 text-white rounded-[5px]' type='submit' value='가입' />
        </form>
      </div>
    </div>
  );
};

export default Register;
