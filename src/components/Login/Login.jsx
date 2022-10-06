import React from 'react';
import logo from '../../static/img/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div class="flex flex-col h-screen justify-center items-center">
      <div class="w-[21.875rem]">
        <Link to="/">
          <img style={{ width: 175 }} src={logo} alt="" />
        </Link>
        <form class="flex flex-col">
          <input
            class="w-[16.875rem] bg-[#fafafa] h-9 pt-3.5 pr-0 py-0.5 px-2 border-[#ddd] outline-none"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            class="w-[16.875rem] bg-[#fafafa] h-9 pt-3.5 pr-0 py-0.5 px-2 border-[#ddd] outline-slate-50"
            type="password"
            placeholder="비밀번호"
          />
          <input
            class="w-[15.625rem] bg-[#0095f6] text-white h-4.5"
            type="submit"
            id="logins"
            value="로그인"
          />
        </form>
        <span>
          계정이 없으신가요?{' '}
          <Link class="text-[#0095f6]" to="/register">
            가입하기
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
