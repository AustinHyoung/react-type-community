import { useEffect, useState } from 'react';
import { Mobile, Tablet, PC } from '../MediaQuery';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';
import axios from 'axios';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    if (localStorage.getItem('user_info') === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  const onClickLogout = () => {
    axios
      .post('/apis/logout')
      .then((response) => {
        console.log(response);

        localStorage.removeItem('user_info');
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PC>
        <div className="pc_container">
          <div className="p_wrapper">
            <div className="p_navbar">
              <ul className="p_nav_item">
                <li className="p_nav_left_list">
                  <NavLink to="/" className="p_nav_choose">
                    메인
                  </NavLink>
                </li>
              </ul>
              <div className="p_nav_right_parents">
                <ul className="p_nav_item">
                  <li className="p_nav_right_list">
                    <NavLink to="/qna" className="p_nav_choose">
                      Q & A
                    </NavLink>
                  </li>
                  <li className="p_nav_right_list">
                    <NavLink to="/community" className="p_nav_choose">
                      커뮤니티
                    </NavLink>
                  </li>
                  <li className="p_nav_right_list">
                    <NavLink to="/item3" className="p_nav_choose">
                      test
                    </NavLink>
                  </li>
                  {!isLogin && (
                    <li className="p_nav_right_list">
                      <Link to="/signup" className="p_nav_choose">
                        회원가입
                      </Link>
                    </li>
                  )}
                  {isLogin ? (
                    <li className="p_nav_right_list" onClick={onClickLogout}>
                      로그아웃
                    </li>
                  ) : (
                    <li className="p_nav_right_list">
                      <Link to="/login" className="p_nav_choose">
                        로그인
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </PC>

      <Tablet>
        <Sidebar />
        <div className={isOpen ? 'tablet_container_push' : 'tablet_container'}>
          <div className="t_wrapper">
            <div className="t_navbar">
              <ul className="t_nav_item">
                <li className="t_nav_list" onClick={() => toggleMenu()}>
                  Nav_btn
                </li>
                <li className="t_nav_list">TABLET</li>
                <li className="t_nav_list">Item 1</li>
              </ul>
            </div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </Tablet>

      <Mobile>
        <Sidebar />
        <div className={isOpen ? 'mobile_container_push' : 'mobile_container'}>
          <div className="m_wrapper">
            <div className="m_navbar">
              <ul className="m_nav_item">
                <li className="m_nav_list" onClick={() => toggleMenu()}>
                  메뉴
                </li>
                <li className="m_nav_list">MOBILE</li>
                <li className="m_nav_list">로그인</li>
              </ul>
            </div>
            <Outlet />
          </div>
          <Footer />
        </div>
        <Outlet />
      </Mobile>
    </>
  );
};

export default Nav;
