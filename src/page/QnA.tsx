import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Mobile, Tablet, PC } from '../MediaQuery';
import { qnaBoardType } from 'types';
import Pagin from 'react-js-pagination';
import '../pagin.css';

const QnA = () => {
  const [boardData, setBoardData] = useState<qnaBoardType[]>([]);
  //paging

  const [limit, setLimit] = useState(25);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const resData = async () => {
      const response = await axios.post('/apis/qnaPagingBoard');
      setBoardData(response.data);
    };
    resData();
  }, []);

  const currentQnaList = boardData
    .slice(offset, offset + limit)
    .map((boardList, index) => (
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
                <tbody>{currentQnaList}</tbody>
              </table>
            </div>
            <Pagin
              activePage={page}
              itemsCountPerPage={limit}
              totalItemsCount={boardData.length}
              pageRangeDisplayed={5}
              prevPageText="<"
              nextPageText=">"
              onChange={handlePageChange}
            />
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
                <tbody>{currentQnaList}</tbody>
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
                <tbody>{currentQnaList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default QnA;
