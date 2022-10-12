import React, {useState} from 'react';
import logo from '../static/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useRef } from 'react';

const Register = () => {
  // const [id, setId] = useState('');
  // const [name, setName] = useState('');
  // //const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  
  const id_ref = useRef();
  const name_ref = useRef();
  const pw_ref = useRef();

  const navigate = useNavigate();

  const signup = async () => {

    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);

    const user_doc = await addDoc(collection(db, 'users'), {
      user_id: user.user.email,
      name: name_ref.current.value,
    });
    console.log(user_doc.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  }
  
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
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="휴대폰 번호 또는 이메일 주소"
            ref={id_ref}
          />
          <input
            className="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="성명"
            ref={name_ref}
          />
          {/* <input
            className="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="사용자 이름"
            onChange={(event) => setUsername(event.target.value)}
          /> */}
          <input
            className="bg-[#fafafa] mb-2.5 pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="password"
            placeholder="비밀번호"
            ref={pw_ref}
          />
          <input
            className="bg-[#fafafa] mb-2.5 pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="password"
            placeholder="비밀번호 확인"
            
          />
          <button
            className="bg-[#0095f6] py-1 text-white rounded-[5px]"
            type="submit"
            onClick={signup}
          >가입</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
