import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookList() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/book')
            .then(res => {
                console.log(res);
                res && res.data && setDatas(res.data);
            })                
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="container">
                <h2>독서를 합시다</h2>
                <table className="book_list">
                    <colgroup>
                        <col width="15%" />
                        <col width="*" />
                        <col width="15%" />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">책 제목</th>
                            <th scope="col">저자</th>
                            <th scope="col">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.length != 0 && datas.map(book => (
                                <tr>
                                    <td>{book.bookId}</td>
                                    <td className="title">
                                        <Link to={`/detail/${book.bookId}`}>{book.title}</Link>
                                    </td>
                                    <td>{book.author}</td>
                                    <td>{book.createdAt}</td>
                                </tr>

                            ))
                        }
                        {
                            datas.length === 0 && (
                                <tr>
                                    <td colspan="4">조회된 결과가 없습니다.</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
                <Link to="/book/write" className="btn">글쓰기</Link>
            </div>
        </>
    );
};


