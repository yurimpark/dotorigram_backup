import React from 'react';
import logo from '../../static/img/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div class="flex flex-col h-screen justify-center items-center">
      <div class="w-[21.875rem]">
        <Link to="/">
          <img class="mx-auto mb-6" style={{ width: 175 }} src={logo} alt="" />
        </Link>
        <form class="flex flex-col">
          <input
            class="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="휴대폰 번호 또는 이메일 주소"
          />
          <input
            class="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="성명"
          />
          <input
            class="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="사용자 이름"
          />
          <input
            class="bg-[#fafafa] mb-2.5 pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="password"
            placeholder="비밀번호"
          />
          <input
            class="bg-[#0095f6] py-1 text-white rounded-[5px]"
            type="submit"
            value="가입"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
