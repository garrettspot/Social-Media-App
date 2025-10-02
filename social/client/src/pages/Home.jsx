import React from 'react';
import '../styles/home.css';
import Navbar from '../components/Navbar';

const StoriesSection = () => (
  <div className="stories-section">
    <div className="stories-container">
      {/* Placeholder for stories */}
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="story-item">
          <div className="story-avatar">
            <img src={`https://via.placeholder.com/60`} alt="user" />
          </div>
          <span className="story-username">User {item}</span>
        </div>
      ))}
    </div>
  </div>
);

const PostFeed = () => (
  <div className="post-feed">
    {[1, 2, 3].map((post) => (
      <div key={post} className="post-card">
        <div className="post-header">
          <img src="https://via.placeholder.com/40" alt="user" className="post-avatar" />
          <span className="post-username">User {post}</span>
        </div>
        <div className="post-image">
          <img src={`https://via.placeholder.com/600x400`} alt="post" />
        </div>
        <div className="post-actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
        <div className="post-likes">1,234 likes</div>
        <div className="post-caption">
          <span className="caption-username">User {post}</span>
          <span className="caption-text">This is a sample post caption</span>
        </div>
      </div>
    ))}
  </div>
);

const MessagesSection = () => (
  <div className="messages-section">
    <h3>Messages</h3>
    <div className="messages-list">
      {[1, 2, 3, 4, 5].map((chat) => (
        <div key={chat} className="chat-item">
          <img src={`https://via.placeholder.com/40`} alt="user" className="chat-avatar" />
          <div className="chat-info">
            <span className="chat-username">User {chat}</span>
            <span className="chat-preview">Latest message...</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="main-content">
          <StoriesSection />
          <PostFeed />
        </div>
        <MessagesSection />
      </div>
    </>
  );
}
