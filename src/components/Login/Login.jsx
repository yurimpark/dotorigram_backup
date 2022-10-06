import React from 'react';
import logo from '../../static/img/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div class="flex flex-col h-screen justify-center items-center">
      <div class="w-[21.875rem] py-2.5 border-[1px] border-slate-300">
        <Link to="/">
          <img class="mx-auto mb-6" style={{ width: 175 }} src={logo} alt="" />
        </Link>
        <form class="flex flex-col mb-2.5">
          <input
            class="w-[16.875rem] bg-[#fafafa] h-9 mb-[5px] mx-auto pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 outline-none rounded-[5px]"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            class="w-[16.875rem] bg-[#fafafa] h-9 mb-2.5 mx-auto pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 outline-slate-50 rounded-[5px]"
            type="password"
            placeholder="비밀번호"
          />
          <input
            class="w-[16.875rem] mx-auto bg-[#0095f6] text-white h-4.5 rounded-[5px]"
            type="submit"
            id="logins"
            value="로그인"
          />
        </form>
        <span class="block text-center">
          계정이 없으신가요?
          <Link class="text-[#0095f6]" to="/register">
            가입하기
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
