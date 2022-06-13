import React, { useState } from 'react';
import axios from 'axios';
import { Mobile, Tablet, PC } from '../MediaQuery';
import '../Signup.css';
const Signup = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [pwCheckInput, setPwCheckInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [birthInput, setBirthInput] = useState('');
  const [genderInput, setGenderInput] = useState('none');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  const onChangeId = (e) => {
    setIdInput(e.target.value);
  };

  const onChangePw = (e) => {
    setPwInput(e.target.value);
  };

  const onChangeCheckPw = (e) => {
    setPwCheckInput(e.target.value);
  };

  const onChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirthInput(e.target.value);
    console.log(birthInput);
  };

  const onChangeGender = (e) => {
    setGenderInput(e.target.value);
    console.log(genderInput);
  };

  const onChangeEmail = (e) => {
    setEmailInput(e.target.value);
    console.log(emailInput);
  };

  const onChangePhone = (e) => {
    setPhoneInput(e.target.value);
    console.log(phoneInput);
  };

  const onClickSignUp = () => {
    if (idInput === '') return alert('아이디를 작성해주세요');
    if (pwInput !== pwCheckInput) {
      return alert('비밀번호가 다릅니다. 다시 확인해 주세요.');
    }
    axios
      .post('/apis/signup', param)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const param = {
    id: idInput,
    password: pwInput,
    name: nameInput,
    birth: birthInput,
    gender: genderInput,
    email: emailInput,
    phone: phoneInput,
  };

  return (
    <>
      <PC>
        <div className="p_signup_container">
          <div className="p_signup_box">
            <div className="p_signup_title">
              <span>회원가입</span>
            </div>
            <div className="p_signup_infobox">
              <div className="p_input">
                <label>아이디</label>
                <span className="p_input_box">
                  <input type="text" className="p_input_conspire" value={idInput} onChange={onChangeId} />
                </span>
              </div>
              <div className="p_input">
                <label>비밀번호</label>
                <span className="p_input_box">
                  <input type="password" className="p_input_conspire" value={pwInput} onChange={onChangePw} />
                </span>
              </div>

              <div className="p_input">
                <label>비밀번호 확인</label>
                <span className="p_input_box">
                  <input type="password" className="p_input_conspire" value={pwCheckInput} onChange={onChangeCheckPw} />
                </span>
              </div>
              <div className="p_input">
                <label>이름</label>
                <span className="p_input_box">
                  <input type="text" className="p_input_conspire" value={nameInput} onChange={onChangeName} />
                </span>
              </div>
              <div className="p_input">
                <label>생년월일</label>
                <span className="p_input_box">
                  <input type="date" className="p_input_conspire" value={birthInput} onChange={onChangeBirth} />
                </span>
              </div>
              <div className="p_input">
                <label>성별</label>

                <div className="p_input_box">
                  <select className="p_input_conspire" value={genderInput} onChange={onChangeGender}>
                    <option value="none">성별</option>
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                  </select>
                </div>
              </div>
              <div className="p_input">
                <label>
                  이메일
                  <span className="p_input_box">
                    <input type="email" className="p_input_conspire" value={emailInput} onChange={onChangeEmail} />
                  </span>
                </label>
              </div>
              <div className="p_input">
                <label>전화번호</label>
                <span className="p_input_box">
                  <input type="tel" className="p_input_conspire" value={phoneInput} onChange={onChangePhone} />
                </span>
              </div>
              <div className="p_btn_area">
                <button type="button" className="p_custom_btn btn_primary" onClick={onClickSignUp}>
                  <span>가입하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PC>
      <Tablet>
        <div className="p_signup_container">
          <div className="p_signup_box">
            <div className="p_signup_title">
              <span>회원가입</span>
            </div>
            <div className="p_signup_infobox">
              <div className="p_input">
                <label>아이디</label>
                <span className="p_input_box">
                  <input type="text" className="p_input_conspire" value={idInput} onChange={onChangeId} />
                </span>
              </div>
              <div className="p_input">
                <label>비밀번호</label>
                <span className="p_input_box">
                  <input type="password" className="p_input_conspire" value={pwInput} onChange={onChangePw} />
                </span>
              </div>

              <div className="p_input">
                <label>비밀번호 확인</label>
                <span className="p_input_box">
                  <input type="password" className="p_input_conspire" value={pwCheckInput} onChange={onChangeCheckPw} />
                </span>
              </div>
              <div className="p_input">
                <label>이름</label>
                <span className="p_input_box">
                  <input type="text" className="p_input_conspire" value={nameInput} onChange={onChangeName} />
                </span>
              </div>
              <div className="p_input">
                <label>생년월일</label>
                <span className="p_input_box">
                  <input type="date" className="p_input_conspire" value={birthInput} onChange={onChangeBirth} />
                </span>
              </div>
              <div className="p_input">
                <label>성별</label>

                <div className="p_input_box">
                  <select className="p_input_conspire" value={genderInput} onChange={onChangeGender}>
                    <option value="none">성별</option>
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                  </select>
                </div>
              </div>
              <div className="p_input">
                <label>
                  이메일
                  <span className="p_input_box">
                    <input type="email" className="p_input_conspire" value={emailInput} onChange={onChangeEmail} />
                  </span>
                </label>
              </div>
              <div className="p_input">
                <label>전화번호</label>
                <span className="p_input_box">
                  <input type="tel" className="p_input_conspire" value={phoneInput} onChange={onChangePhone} />
                </span>
              </div>
              <div className="p_btn_area">
                <button type="button" className="p_custom_btn btn_primary" onClick={onClickSignUp}>
                  <span>가입하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="p_signup_container">
          <div className="p_signup_box">
            <div className="p_signup_title">
              <span>회원가입</span>
            </div>
            <div className="p_signup_infobox">
              <div className="p_input">
                <label>아이디</label>
                <span className="p_input_box">
                  <input type="text" className="p_input_conspire" value={idInput} onChange={onChangeId} />
                </span>
              </div>
              <div className="p_input">
                <label>비밀번호</label>
                <span className="p_input_box">
                  <input type="password" className="p_input_conspire" value={pwInput} onChange={onChangePw} />
                </span>
              </div>

              <div className="p_input">
                <label>비밀번호 확인</label>
                <span className="p_input_box">
                  <input type="password" className="p_input_conspire" value={pwCheckInput} onChange={onChangeCheckPw} />
                </span>
              </div>
              <div className="p_input">
                <label>이름</label>
                <span className="p_input_box">
                  <input type="text" className="p_input_conspire" value={nameInput} onChange={onChangeName} />
                </span>
              </div>
              <div className="p_input">
                <label>생년월일</label>
                <span className="p_input_box">
                  <input type="date" className="p_input_conspire" value={birthInput} onChange={onChangeBirth} />
                </span>
              </div>
              <div className="p_input">
                <label>성별</label>

                <div className="p_input_box">
                  <select className="p_input_conspire" value={genderInput} onChange={onChangeGender}>
                    <option value="none">성별</option>
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                  </select>
                </div>
              </div>
              <div className="p_input">
                <label>
                  이메일
                  <span className="p_input_box">
                    <input type="email" className="p_input_conspire" value={emailInput} onChange={onChangeEmail} />
                  </span>
                </label>
              </div>
              <div className="p_input">
                <label>전화번호</label>
                <span className="p_input_box">
                  <input type="tel" className="p_input_conspire" value={phoneInput} onChange={onChangePhone} />
                </span>
              </div>
              <div className="p_btn_area">
                <button type="button" className="p_custom_btn btn_primary" onClick={onClickSignUp}>
                  <span>가입하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Signup;
