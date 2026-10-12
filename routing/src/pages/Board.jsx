import { useParams } from 'react-router-dom';

const Board = () => {
    const { id } = useParams();

    const boards = {
        1: {
            title: '첫 번째 게시글',
            content: '첫 번째 게시글 내용입니다.'
        },
        2: {
            title: '두 번째 게시글',
            content: '두 번째 게시글 내용입니다.'
        },
        3: {
            title: '세 번째 게시글',
            content: '세 번째 게시글 내용입니다.'
        }
    };

    const board = boards[id];

    if (!board) {
        return <h2>게시글을 찾을 수 없습니다.</h2>;
    }

    return (
        <div>
            <h3>{board.title}</h3>
            <p>게시글 번호: {id}</p>
            <p>{board.content}</p>
        </div>
    );
};

export default Board;