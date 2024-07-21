import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,   useParams } from "react-router-dom";

export default function BookDetail() {
    const [book, setBook] = useState({});

    const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publisher, setPublisher] = useState('');
    const [description, setDescription] = useState('');
	const [updatedAt, setUpdatedAt] = useState('');

    const { bookId } = useParams();

    const navigate = useNavigate();
        
    const listButtonClick = e => { 
        e.preventDefault();
        navigate('/');  // 또는 navigate('/list') 또는 navigate(-1)
    };
    const updateButtonClick = e => { 
        e.preventDefault();

        axios
            .put(`http://localhost:8080/api/book/${bookId}`, {title, description, author, publisher})
            .then(res => {
                res && res.status === 200 && navigate('/')
            })
            .catch(err => console.log(err));
    };
    const deleteButtonClick = e => { 
        e.preventDefault();

        axios
            .delete(`http://localhost:8080/api/book/${bookId}`)
            .then(res => {
                res && res.status === 200 && navigate('/')
            })
            .catch(err => console.log(err));        
    };


    useEffect(()=>{
        axios 
            .get(`http://localhost:8080/api/book/${bookId}`)
            .then(res=>{
                if (res && res.data){ 
				setBook(res.data);
                setTitle(res.data.title);
                setDescription(res.data.description);
				setAuthor(res.data.author);
				setPublisher(res.data.publisher);
				setUpdatedAt(res.data.updatedAt);
				}

            })
            .catch(err=>console.log(err));
    }, [bookId]);
    return (
        <>
        <div className="container">
			<h2>도서 상세 내용</h2>
			<form id="frm" method="post">
				<input type="hidden" id="bookId" name="bookId" />
			
				<table className="book_detail">
					<colgroup>
					 	<col width="15%" />
					 	<col width="*"   />
					 	<col width="15%" />
					 	<col width="35%" />
					</colgroup>
                    <tbody>
					<tr>
						<th scope="row">글 번호</th>
						<td>{book.bookId}</td>	
						<th scope="row">저자</th>
						<td><input type="text" id="author" name="author" value={author} onChange={e => setAuthor(e.target.value)}/></td>
					
					</tr>
					<tr>
						<th scope="row">출판사</th>
						<td><input type="text" id="publisher" name="publisher" value={publisher} onChange={e => setPublisher(e.target.value)}/></td>
						<th scope="row">수정일</th>
						<td> <input id="updatedAt" name="updatedAt" value={updatedAt}/> </td>
					</tr>
					<tr>
						<th scope="row">책 제목</th>
						<td colspan="3"><input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/></td>
					</tr>
					<tr>
						<td colspan="4"><textarea id="description" name="description" value={description} onChange={e => setDescription(e.target.value)}></textarea></td>
					</tr>
                    </tbody>
				</table>
				
			</form>
			
			<input type="button" id="list" className="btn" value="목록으로" onClick={listButtonClick} />
			<input type="button" id="update" className="btn" value="수정하기" onClick={updateButtonClick}/>
			<input type="button" id="delete" className="btn" value="삭제하기" onClick={deleteButtonClick}/>
            {/*
			<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
			<script>
				$(function() {
					$('#list').on('click', function() {
						location.href = '/book';
					});
					$('#update').on('click', function() {
						$('#method').val('PUT');
						let frm = $('#frm')[0];
						frm.action = '/book/' + $('#bookId').val();
						frm.submit();
					});
					$('#delete').on('click', function() {
						$('#method').val('DELETE');
						let frm = $('#frm')[0];
						frm.action = '/book/' + $('#bookId').val();
						frm.submit();
					});
				});
			</script>
            */}
		</div>	
        </>
    );
};
