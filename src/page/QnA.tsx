import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Mobile, Tablet, PC } from '../MediaQuery';
import { qnaBoardType } from 'types';

const QnA = () => {
  const [boardData, setBoardData] = useState<qnaBoardType[]>([]);

  useEffect(() => {
    axios
      .post('/apis/qnaPagingBoard')
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
        <Link to={`/qna/detail/${boardList.QNA_NO}`}>
          {boardList.QNA_TITLE}
        </Link>
      </td>
      <td className="p_table_right">{boardList.QNA_WRITER}</td>
    </tr>
  ));
  return (
    <>
      <PC>
        <div className="p_main_board">
          <div className="p_main_board_qa">
            <div className="p_board_title">
              <span>Q & A</span>
            </div>
            <div className="p_main_con">
              <table>
                <tbody>{boardDataArr}</tbody>
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
        </div>
      </Mobile>
    </>
  );
};

export default QnA;
