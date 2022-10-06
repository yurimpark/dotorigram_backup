import React from 'react';

const Register = () => {
  return (
    <div class="flex flex-col h-screen justify-center items-center">
      <div class="w-[21.875rem]">
        <form class="flex flex-col">
          <input
            class="bg-[#fafafa] pt-3.5 pr-0 py-0.5 px-2"
            type="text"
            placeholder="휴대폰 번호 또는 이메일 주소"
          />
          <input
            class="bg-[#fafafa] pt-3.5 pr-0 py-0.5 px-2"
            type="text"
            placeholder="성명"
          />
          <input
            class="bg-[#fafafa] pt-3.5 pr-0 py-0.5 px-2"
            type="text"
            placeholder="사용자 이름"
          />
          <input
            class="bg-[#fafafa] pt-3.5 pr-0 py-0.5 px-2"
            type="password"
            placeholder="비밀번호"
          />
          <input class="bg-[#0095f6] text-white" type="submit" value="가입" />
        </form>
      </div>
    </div>
  );
};

export default Register;
