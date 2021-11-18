import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import '../css/join.css'

const Join = (props) => {
    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);

    const joinInfo = (e) => {
        let targetName = e.target.name;

        if(targetName === "id") {
            setId(e.target.value);
        } else if(targetName === "password") {
            setPassword(e.target.value);
        } else {
            setName(e.target.value);
        }
    }

    const joinBtn = () => {
        if(id === null || id === '' || password === null || password === '' || name === null || name === '') {
            alert("회원가입 양식을 전부 입력해 주세요");
            return;
        }

        const joinData = {
            inId : id,
            inPassword : password,
            inName : name,
        };

        axios.post('http://localhost:3001/api/join',joinData)
        .then(() => {
            alert('회원가입 성공');
            window.location.href = '/'; //작성 완료 후 게시글 페이지로 이동
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="Join">
            <h1>회원가입</h1>
            <form className="joinForm">
                <ul>
                    <li>
                        <span>ID</span>
                        <input type="text" name="id" onChange={joinInfo} />
                    </li>
                    <li>
                        <span>PASSWORD</span>
                        <input type="password" name="password" onChange={joinInfo} />
                    </li>
                    <li>
                        <span>NAME</span>
                        <input type="text" name="name" onChange={joinInfo} />
                    </li>
                </ul>

                <button onClick={joinBtn}>가입하기</button>
            </form>
        </div>
    )
}

export default Join;