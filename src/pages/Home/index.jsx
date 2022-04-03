import React from "react";
import "./styles/style.css";

// import BannerImage from "../../assets/face-glitch.png";

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
        <img src="https://ik.imagekit.io/theboringschool/The_Boring_School_-_UI/face-glitch_m3yi_DYvC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648473817908" alt="Technological Glitch" />
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
              <img src="https://ik.imagekit.io/theboringschool/The_Boring_School_-_UI/blog_9JVl-T6ah.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473994054/pr-true" alt="the boring school blog" /> <span>TBS Blogs</span>
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
              <img src="https://ik.imagekit.io/theboringschool/The_Boring_School_-_UI/podcast_jOPhvQvgE.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473994508/pr-true" alt="The Boring School Podcast" /> <span>TBS Podcasts</span>
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
              <img src="https://ik.imagekit.io/theboringschool/The_Boring_School_-_UI/course_MUanskljb.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473994575/pr-true" alt="The Boring School Course" /> <span>TBS Courses</span>
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
