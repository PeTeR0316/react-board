import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import '../css/join.css'

const Login = () => {
    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);

    const loginInfo = (e) => {
        let targetName = e.target.name;

        if(targetName === "id") {
            setId(e.target.value);
        } else if(targetName === "password") {
            setPassword(e.target.value);
        } 
    }

    const loginBtn = () => {
        if(id === null || id === '' || password === null || password === '') {
            alert("로그인 양식을 전부 입력해 주세요");
            return;
        }

        const joinData = {
            loginId : id,
            loginPassword : password,
        };

        axios.post('http://localhost:3001/api/login',joinData)
        .then((response) => {
            if(response.data[0].count > 0) {
                window.location.href = '/'; //작성 완료 후 게시글 페이지로 이동    
            } else {
                alert('아이디 또는 패스워드가 잘못되었습니다.');
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="login">
            <h1>로그인</h1>

            <ul>
                <li>
                    <span>아이디</span>
                    <input type="text" name="id" onChange={loginInfo} />
                </li>
                <li>
                    <span>비밀번호</span>
                    <input type="password" name="password" onChange={loginInfo} />
                </li>
            </ul>

            <button onClick={loginBtn} >로그인</button>
        </div>
    )
}

export default Login;