//안씀
import { useState } from 'react';
import styled from 'styled-components';
import '../pagination.css';
const Pagination = ({
  total,
  limit,
  page,
  setPage,
}: number | any): JSX.Element => {
  const [blockNum, setBlockNum] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const startPage = blockNum * 5;
  const endPage = 5 + startPage;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }
  const pageNumberSlice = pageNumbers.slice(startPage, endPage);

  const prevPage = () => {
    if (blockNum <= 0) {
      alert('더 이상 못감');
      return;
    } else if (1 <= blockNum) {
      setBlockNum((n) => n - 1);
      setCurrPage((n) => n - 5);
    }
  };

  const nextPage = () => {
    if (blockNum + 1 >= Math.ceil(Math.ceil(total / limit)) / 5) {
      alert('더 이상 못감');
      return;
    } else if (blockNum < Math.ceil(Math.ceil(total / limit)) / 5) {
      setBlockNum((n) => n + 1);
      setCurrPage((n) => n + 5);
    }
  };

  return (
    <QnaPaging>
      <QnaUl>
        <li
          className="p_paging_list"
          onClick={() => {
            setPage(1);
            setBlockNum(0);
            setCurrPage(1);
          }}
        >
          처음
        </li>
        <li
          className="p_paging_list"
          onClick={() => {
            prevPage();
          }}
        >
          &lt;&lt;
        </li>
        {pageNumberSlice.map((pageNum) => (
          <li
            className="p_paging_list"
            key={pageNum}
            onClick={() => {
              setPage(pageNum);
            }}
          >
            {pageNum}
          </li>
        ))}
        <li
          className="p_paging_list"
          onClick={() => {
            nextPage();
          }}
        >
          &gt;&gt;
        </li>
        <li
          className="p_paging_list"
          onClick={() => {
            setPage(Math.ceil(total / limit));
            setBlockNum(Math.ceil(Math.ceil(total / limit) / 5));
            setCurrPage(Math.ceil(total / limit));
          }}
        >
          끝
        </li>
      </QnaUl>
    </QnaPaging>
  );
};

const QnaPaging = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
`;

const QnaUl = styled.ul`
  list-style: none;
`;
const QnaLi = styled.li`
  float: left;
  cursor: pointer;
  margin: 0 0.5rem 0 0.5rem;
  padding: 1rem;
`;

export default Pagination;
