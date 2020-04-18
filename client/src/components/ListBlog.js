import React from 'react';

const ListBlog = ({blogs}) => {
    return (
        <ul>
            {
                blogs && blogs.length > 0 ?
                (
                    blogs.map(blog => {
                        return (
                            <li key={blog._id}>{blog.markdown}</li>
                        )
                    })
                ) : (
                    <li>no blogs left</li>
                )
            }
        </ul>
    )
}

export default ListBlog;