import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of Technology',
        date: 'July 20, 2024',
        excerpt: 'Explore the latest trends in technology and how they are shaping the future...',
        link: '/blog/the-future-of-technology'
    },
    {
        id: 2,
        title: 'Healthy Living Tips',
        date: 'August 1, 2024',
        excerpt: 'Discover practical tips for maintaining a healthy lifestyle...',
        link: '/blog/healthy-living-tips'
    },
    {
        id: 3,
        title: 'Traveling on a Budget',
        date: 'August 10, 2024',
        excerpt: 'Learn how to travel the world without breaking the bank...',
        link: '/blog/traveling-on-a-budget'
    }
];

function Blog() {
    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <h1 className='py-5'>Blogs</h1>
                <section className='my-4'>
                    {blogPosts.map(post => (
                        <div key={post.id} className='my-4'>
                            <h2>{post.title}</h2>
                            <p><small>{post.date}</small></p>
                            <p>{post.excerpt}</p>
                            <a href={post.link} className='btn btn-primary'>Read More</a>
                        </div>
                    ))}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
