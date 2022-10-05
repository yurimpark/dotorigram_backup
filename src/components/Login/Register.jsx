import React from 'react';

const Register = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="휴대폰 번호 또는 이메일 주소" />
        <input type="text" placeholder="성명" />
        <input type="text" placeholder="사용자 이름" />
        <input type="password" placeholder="비밀번호" />
        <input type="submit" value="가입" />
      </form>
    </div>
  );
};

export default Register;
