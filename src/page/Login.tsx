import React, { useState } from 'react';
import axios from 'axios';
import '../Login.css';
import { Link } from 'react-router-dom';
import { Mobile, Tablet, PC } from '../MediaQuery';

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdInput(e.target.value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwInput(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post('/apis/login', param)
      .then((response) => {
        console.log(response);
        console.log(response.data.session.ID);
        localStorage.setItem('user_info', response.data.session.ID);
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const param = {
    id: idInput,
    pw: pwInput,
  };

  return (
    <>
      <PC>
        <div className="p_login_container">
          <div className="p_login_box">
            <div className="p_login_title">
              <span>로그인</span>
            </div>
            <div className="p_login_infobox">
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
              <div className="p_not_login_box">
                <button className="p_not_login_btn">
                  <span>
                    <Link to="/password">비밀번호 찾기</Link>
                  </span>
                </button>
                <button className="p_not_login_btn">
                  <span>
                    <Link to="/signup">회원가입</Link>
                  </span>
                </button>
              </div>
              <div className="p_btn_area">
                <button type="button" className="p_custom_btn btn_primary" onClick={onClickLogin}>
                  <span>로그인 하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PC>
      <Tablet>
        <div className="p_login_container">
          <div className="p_login_box">
            <div className="p_login_title">
              <span>로그인</span>
            </div>
            <div className="p_login_infobox">
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
              <div className="p_not_login_box">
                <button className="p_not_login_btn">
                  <span>
                    <Link to="/password">비밀번호 찾기</Link>
                  </span>
                </button>
                <button className="p_not_login_btn">
                  <span>
                    <Link to="/signup">회원가입</Link>
                  </span>
                </button>
              </div>
              <div className="p_btn_area">
                <button type="button" className="p_custom_btn btn_primary" onClick={onClickLogin}>
                  <span>로그인 하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="p_login_container">
          <div className="p_login_box">
            <div className="p_login_title">
              <span>로그인</span>
            </div>
            <div className="p_login_infobox">
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
              <div className="p_not_login_box">
                <button className="p_not_login_btn">
                  <span>
                    <Link to="/password">비밀번호 찾기</Link>
                  </span>
                </button>
                <button className="p_not_login_btn">
                  <span>
                    <Link to="/signup">회원가입</Link>
                  </span>
                </button>
              </div>
              <div className="p_btn_area">
                <button type="button" className="p_custom_btn btn_primary" onClick={onClickLogin}>
                  <span>로그인 하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Login;
