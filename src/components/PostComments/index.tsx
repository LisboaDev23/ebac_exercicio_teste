import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    //função de add comentário que pede um evento do tipo FormEvent
    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        //previna a ação default
        event.preventDefault();
        //cada vez que essa função for chamada, instancia um novo comentário
        const newComment = new Comment(comments.length, tempComment);
        //limpe o valor do input
        setTempComment('');
        //adicione no array o novo comentário
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <ul className={styles['post-comments']} data-testid='comentarios-renderizados' >
                {comments.map(({ id, comment }) => (
                    <li className={styles['post-comment']} key={id}>
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea data-testid='input-comentario' value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} />
                <button data-testid='btn-add-comentario' type="submit" className={styles['post-comments-form-button']}>
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;