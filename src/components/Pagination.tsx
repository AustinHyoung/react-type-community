import { useState } from 'react';
import styled from 'styled-components';

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
        <QnaLi
          onClick={() => {
            setPage(1);
            setBlockNum(0);
            setCurrPage(1);
          }}
        >
          처음
        </QnaLi>
        <QnaLi
          onClick={() => {
            prevPage();
          }}
        >
          &lt;&lt;
        </QnaLi>
        {pageNumberSlice.map((pageNum) => (
          <QnaLi key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </QnaLi>
        ))}
        <QnaLi
          onClick={() => {
            nextPage();
          }}
        >
          &gt;&gt;
        </QnaLi>
        <QnaLi
          onClick={() => {
            setPage(Math.ceil(total / limit));
            setBlockNum(Math.ceil(Math.ceil(total / limit) / 5));
            setCurrPage(Math.ceil(total / limit));
          }}
        >
          끝
        </QnaLi>
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
