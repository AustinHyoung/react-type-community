import { Mobile, Tablet } from '../MediaQuery';

const Sidebar = () => {
  return (
    <>
      <Tablet>
        <div>
          <ul className="t_show_menu">
            <li className="t_column_list">로그인</li>
            <li className="t_column_list">회원가입</li>
            <li className="t_column_list">List 3</li>
            <li className="t_column_list">List 4</li>
            <li className="t_column_list">List 5</li>
            <li className="t_column_list">List 5</li>
            <li className="t_column_list">List 5</li>
          </ul>
        </div>
      </Tablet>
      <Mobile>
        <div>
          <ul className="m_show_menu">
            <li className="m_column_list">LIst 1</li>
            <li className="m_column_list">List 2</li>
            <li className="m_column_list">List 3</li>
            <li className="m_column_list">List 4</li>
            <li className="m_column_list">List 5</li>
            <li className="m_column_list">List 6</li>
            <li className="m_column_list">List 7</li>
            <li className="m_column_list">List 8</li>
            <li className="m_column_list">List 9</li>
            <li className="m_column_list">List 10</li>
          </ul>
        </div>
      </Mobile>
    </>
  );
};

export default Sidebar;
