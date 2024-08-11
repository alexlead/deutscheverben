import { faListCheck, faRectangleList, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <>

      <Container >
        <Row>
          <Col><h1 className='mt-2 text-center'>DIE UNREGELMÄSSIGEN VERBEN</h1></Col>
        </Row>
        <Row>
          <Col><h2 className='mt-2 text-center'>НЕПРАВИЛЬНЫЕ ГЛАГОЛЫ</h2></Col>
        </Row>
        <Row>
          <Col className='mt-4 mb-4'>
            <h3>Добро пожаловать!</h3>
            <p>Этот сайт посвящен изучению немецких неправильных глаголов. Независимо от вашего уровня подготовки – будь то начальный, средний или продвинутый – у нас найдется что-то полезное для каждого.</p>
            <p>Здесь вы найдете:</p>
            <ul>
              <li>Полный список неправильных глаголов, организованные по уровням сложности и подготовки.
              </li>
              <li>Возможность создать собственный список в процессе подготовки.
              </li>
              <li>Интерактивные карточки, которые помогут вам запомнить и правильно использовать неправильные глаголы в речи.
              </li>
              <li>Тесты, которые позволят вам проверить свои знания и отследить прогресс в изучении языка.
              </li>
            </ul>
            <p>Начните свой путь к совершенному владению неправильными глаголами прямо сейчас!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              bg="primary"
              key="primary"
              text='white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title className="text-center"><Link to="/table" className='text-white'>Таблица глаголов</Link></Card.Title>
                <Card.Text className='display-1 text-center p-4'>
                  <Link to="/table" className='text-white'>
                    <FontAwesomeIcon icon={faTable} />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="secondary"
              key="secondary"
              text='white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title className="text-center"><Link to="/memo" className='text-white'>Мемо карты</Link></Card.Title>
                <Card.Text className='display-1 text-center p-4'>
                  <Link to="/memo" className='text-white'>
                    <FontAwesomeIcon icon={faRectangleList} />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="dark"
              key="dark"
              text='white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title className="text-center"><Link to="/test" className='text-white'>Тест</Link></Card.Title>
                <Card.Text className='display-1 text-center p-4'>
                  <Link to="/test" className='text-white'>
                    <FontAwesomeIcon icon={faListCheck} />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>

    </>
  );
};

export default HomePage;