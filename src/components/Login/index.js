import React from 'react';

import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import styled from 'styled-components';
import btnstyle from './btn.module.css'
import './custom_ant.css'

const LoginStyled = styled.div`
  background-color: #0068A6;
  color: white;
  height: 100vh;
`;
const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <LoginStyled>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center', fontSize: '50px', color: 'white' }} level={3}>
            Chat App
          </Title>
          <Button className={btnstyle.loginBtn+ ' ' + btnstyle.loginBtngoogle + ' ant-btn-custom'  }
            style={{ width: '100%' , fontSize: '18px' }}

            onClick={() => handleLogin(googleProvider)}
          >
            Đăng nhập bằng Google
          </Button>
          <Button className={btnstyle.loginBtn+ ' ' + btnstyle.loginBtnfacebook + ' ant-btn-custom'}
            style={{ width: '100%' , fontSize: '18px' }}
            onClick={() => handleLogin(fbProvider)}
          >
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
      </LoginStyled>
    </div>
  );
}
