import { Link } from 'react-router-dom';

const BoardList = () => {

    return(
        <div>
            <h2>게시판</h2>
            <ul>
                <li><Link to="/board/1">첫 번째 게시글</Link></li>
                <li><Link to="/board/2">두 번째 게시글</Link></li>
                <li><Link to="/board/3">세 번째 게시글</Link></li>
            </ul>
        </div>
    )
}
export default BoardList