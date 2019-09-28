import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import Head from 'next/head';

import { Container, Row, Col } from 'reactstrap';
import { ContainerHome, Banner } from './styles';

import Header from '~/components/Header';

import * as NavigationActions from '~/store/modules/navigation/actions';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NavigationActions.setPage('home'));
  }, [dispatch]);

  return (
    <ContainerHome>
      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <Banner src="./static/react_banner.png" alt="React" />

      <Container>
        <Row>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            .col-sm-12 .col-md-6 .offset-md-3
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>
      </Container>
    </ContainerHome>
  );
}
