import React from "react";
import "./styles/style.css";

import BannerImage from "../../assets/face-glitch.png";

/**
 * @components
 */
import Navbar from "../../components/Navbar";

/**
 * @packages
 */
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home__container">
      <Helmet>
        <title>The Boring School</title>
      </Helmet>
      <Navbar />

      {/**
       * @section => Landing
       * */}
      <div className="home__container__landing">
        <div className="home__container__landing__content">
          <div className="highlight">
            <p>Technological Integrations</p>
            <p>
              Made, <i>{"<Super Easy/>"}</i>.
            </p>
          </div>
          <form>
            <input placeholder="you@awesome.com" />
            <button>Subscribe</button>
          </form>
          <div className="input__label">
            *Keep updated with our latest new and updates!
          </div>
        </div>
        <img src={BannerImage} alt="Technological Glitch" />
      </div>

      {/**
       * @section => Mission Pipeline
       */}
      <div className="home__container__missionPipeline">
        <div className="title">
          <div>MISSION PIPELINE</div>
          <button>
            Contribute <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>

        <div className="items">
          <div className="items__blog">
            <div className="item_title">
              <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" alt="blog" /> <span>Blogs</span>
            </div>
            <div className="description">
              Our publication for blogs & articles is available on Medium, one of the great blogging platform.
            </div>
            <div className="link">
              <a href="https://blog.theboringschool.org" target="_blank" rel="noreferrer">
                blog.theboringschool.org
              </a>
              <a href="https://blog.theboringschool.org" target="_blank" rel="noreferrer">
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          <div className="items__podcast">
            <div className="item_title">
              <img src="https://images.unsplash.com/photo-1581547848545-a75a2634ba23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="podcast" /> <span>Podcasts</span>
            </div>
            <div className="description">
              We're live on Anchor, podcast platform by Spotify, we'll also be live on Google, Apple, Amazon Podcasts.
            </div>
            <div className="link">
              <a href="https://anchor.fm/theboringschool" target="_blank" rel="noreferrer">
                anchor.fm/theboringschool
              </a>
              <a href="https://anchor.fm/theboringschool" target="_blank" rel="noreferrer">
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          <div className="items__course">
            <div className="item_title">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt="course" /> <span>Courses</span>
            </div>
            <div className="description">
              We'll be introducing LMS to represent our professional technical courses prepared by group of professionals.
            </div>
            <div className="link">
              <button disabled>
                course.theboringschool.org
              </button>
              <button disabled>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
