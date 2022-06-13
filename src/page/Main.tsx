import { Mobile, Tablet, PC } from '../MediaQuery';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Main.css';
import axios from 'axios';
import { qnaBoardType } from 'types';

const Main = () => {
  const [boardData, setBoardData] = useState<qnaBoardType[]>([]);

  useEffect(() => {
    axios
      .post('/apis/qnaboard')
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('boardData ::: ');
  console.log(boardData);

  const boardDataArr = boardData.map((boardList, index) => (
    <tr key={index}>
      <td>
        <Link to={`/qna/detail/${boardList.qna_no}`}>{boardList.qna_title}</Link>
      </td>
      <td className="p_table_right">{boardList.qna_writer}</td>
    </tr>
  ));

  return (
    <>
      <PC>
        <div className="p_main_board">
          <div className="p_main_board_qa">
            <div className="p_board_title">
              <span>Q & A</span>
              <Link to="/qna">더 보기</Link>
            </div>
            <div className="p_main_con">
              <table>
                <tbody>{boardDataArr}</tbody>
              </table>
            </div>
          </div>
          <div className="p_main_board_community">
            <div className="p_board_title">
              <span>커뮤니티</span>
              <Link to="/community">더 보기</Link>
            </div>
            <div className="p_main_con">
              <table>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td className="p_table_right">$100</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PC>
      <Tablet>
        <div className="p_main_board">
          <div className="p_main_board_qa">
            <div className="p_board_title">
              <span>Q & A</span>
              <Link to="/qna">더 보기</Link>
            </div>
            <div className="p_main_con">
              <table>
                <tbody>{boardDataArr}</tbody>
              </table>
            </div>
          </div>
          <div className="p_main_board_community">
            <div className="p_board_title">
              <span>커뮤니티</span>
              <Link to="/community">더 보기</Link>
            </div>
            <div className="p_main_con">
              <table>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td className="p_table_right">$100</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="p_main_board">
          <div className="p_main_board_qa">
            <div className="p_board_title">
              <span>Q & A</span>
              <Link to="/qna">더 보기</Link>
            </div>
            <div className="p_main_con">
              <table>
                <tbody>{boardDataArr}</tbody>
              </table>
            </div>
          </div>
          <div className="p_main_board_community">
            <div className="p_board_title">
              <span>커뮤니티</span>
              <Link to="/community">더 보기</Link>
            </div>
            <div className="p_main_con">
              <table>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td className="p_table_right">$100</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td className="p_table_right">$180</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Main;
