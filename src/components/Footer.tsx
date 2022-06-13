import { Mobile, Tablet, PC } from '../MediaQuery';

const Footer = () => {
  return (
    <>
      <PC>
        <footer className="p_footer">
          <nav>
            <a href="https://www.naver.com">네이버</a>|<a href="https://google.com">구글</a>
          </nav>
          <p>
            <span>test1 : test test</span>
            <br />
            <span>test2 : test@test.com</span>
            <br />
          </p>
          Footer
        </footer>
      </PC>
      <Tablet>
        <footer className="t_footer">
          <nav>
            <a href="https://www.naver.com">네이버</a>|<a href="https://google.com">구글</a>
          </nav>
          <p>
            <span>test1 : test test</span>
            <br />
            <span>test2 : test@test.com</span>
            <br />
          </p>
          Footer
        </footer>
      </Tablet>
      <Mobile>
        <footer className="m_footer">
          <p>
            <span>test1 : test test</span>
            <br />
            <span>test2 : test@test.com</span>
            <br />
          </p>
          Footer
        </footer>
      </Mobile>
    </>
  );
};

export default Footer;
