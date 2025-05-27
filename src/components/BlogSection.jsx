import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    { 
      author: 'By Admin', 
      category: 'Chicken', 
      title: 'Benefits Of Health And Safety Measures', 
      link: 'Read More 7' 
    },
    { 
      author: 'By Admin', 
      category: 'Noodles', 
      title: 'Quick Cravings Unraveling Fast Food Delights', 
      link: 'Read More 7' 
    },
    { 
      author: 'By Admin', 
      category: 'Noodles', 
      title: 'Fast Food Frenzy A Taste Of Convenience', 
      link: 'Read More 7' 
    }
  ];

  return (
    <section className="blog-section">
      <h2>Our Latest Foods News</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <p className="meta">{post.author} | {post.category}</p>
            <h3>{post.title}</h3>
            <a href="#read-more">{post.link}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;