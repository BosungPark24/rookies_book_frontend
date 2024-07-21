import { useState } from "react";

export default function BookWrite() {
    const [title, setTitle] = useState(``);
    const [description, setDescription] = useState(``);

    const changeTitle = e => setTitle(e.target.value);
    const changeDescription = e => setDescription(e.target.value);

    return (
        <>
            <div className="container">
			<h2>도서 등록</h2>
			<form id="frm" method="post" action="/book/write" enctype="multipart/form-data">
				<table className="book_detail">
                    <tbody>
					<tr>
						<td>책 이름</td>
						<td><input type="text" id="title" name="title" onChange={changeTitle}/></td>
					</tr>
					<tr>
						<td>저자</td>
						<td><input type="text" id="author" name="author" /></td>
					</tr>
					<tr>
						<td>출판사</td>
						<td><input type="text" id="publisher" name="publisher" /></td>
					</tr>
					<tr>
						<td colspan="2"><textarea id="description" name="description" onChange={changeDescription}></textarea></td>
					</tr>
                    </tbody>
				</table>
				<input type="submit" id="submit" value="저장" className="btn"/>
			</form>
		</div>	
	

        </>
    );
};

