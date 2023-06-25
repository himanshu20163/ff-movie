import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table-t.css';

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [gettitle,setgettitle]  = useState('');
  const [title,settitle]  = useState('');

  const getinput = (e)=>{
    setgettitle(e.target.value);
    console.log(gettitle);
  }

  useEffect(() => {
    fetchPosts();
  }, [page,gettitle]);
  
  const get_data = (ele)=>{
    
    settitle(ele); 
    fetchPosts();
  }

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?query=${gettitle}&tags=story&page=${page}`
      );
      const newPosts = response.data.hits.map(post => ({
        title: post.title,
        url: post.url,
        created_at: post.created_at,
        author: post.author
      }));
      setPosts( [...newPosts]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);  
  };

  const handlePrevPage = () => {
    //setPage(prevPage => Math.max(0, prevPage - 1));
    setPage(page-1);
  };
  const currentPage = page + 1;

  return (
    <div>
        <input type="text" onChange={getinput} placeholder='enter your title'></input>
        <button onClick={()=>get_data(gettitle)} className='input-btn'>Submit</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Created At</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((ele, index) => (
            <tr key={index}>
              <td>{ele.title}</td>
              <td>{ele.url}</td>
              <td>{ele.created_at}</td>
              <td>{ele.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={page === 0} onClick={handlePrevPage} className="btn-page">
          Previous Page
        </button>
        <span>Page no. {currentPage}</span>
        <button onClick={handleNextPage} className="btn-page">Next Page</button>
      </div>
    </div>
  );
};

export default PostTable;
