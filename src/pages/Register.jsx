import React from "react";
import logo from "../static/img/logo.png";
import { Link } from "react-router-dom";
import { auth, db } from "../shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
  const email_ref = React.useRef(null);
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const signup = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      email_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);

    const user_doc = await addDoc(collection(db, "users"), {
      user_id: user.user.email,
      name: id_ref.current.value,
    });
    console.log(user_doc.id);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="w-[21.875rem]">
        <Link to="/">
          <img
            className="mx-auto mb-6"
            style={{ width: 175 }}
            src={logo}
            alt=""
          />
        </Link>

        <input
          ref={email_ref}
          className="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
          type="text"
          placeholder="이메일 주소"
        />
        {/* <input
            className="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="성명"
          /> */}
        <input
          ref={id_ref}
          className="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
          type="text"
          placeholder="사용자 아이디"
        />
        <input
          ref={pw_ref}
          className="bg-[#fafafa] mb-2.5 pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
          type="password"
          placeholder="비밀번호"
        />
        <button
          onClick={signup}
          className="bg-[#0095f6] py-1 text-white rounded-[5px]"
        >
          가입
        </button>
      </div>
    </div>
  );
};

export default Register;
