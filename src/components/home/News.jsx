import { useState } from "react";
import newsimg1 from '../../assets/news-1.jpg'
import newsimg2 from '../../assets/news-2.jpg'
import newsimg3 from '../../assets/news-3.jpg'
import newsimg4 from '../../assets/news-4.jpg'

const PlayIcon = () => (
  <div className="w-10 h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
    <svg className="w-4 h-4 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
);

const newsData = {
  featured: {
    type: "video",
    heading: "Article heading can i find spaces in the lorem?",
    image: newsimg1,
  },
  secondary: [
    {
      id: 1,
      type: "image",
      image: newsimg3,
      caption: "Lorem Ipsum Interpretation common Symbols and their meanings",
    },
    {
      id: 2,
      type: "video",
      image: newsimg4,
      caption: null,
    },
    {
      id: 3,
      type: "image",
      image: newsimg2,
    //   caption: "Lorem Ipsum Interpretation common Symbols and their meanings",
    },
  ],
};

export default function NewsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-center text-2xl font-extrabold text-blue-700 tracking-widest uppercase mb-8">
        News
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-4">

        {/* Featured Card - spans 2 cols, news-1 as full background */}
        <div className="col-span-2 relative group cursor-pointer h-72 overflow-hidden">
          {/* Background image - news-1 */}
          <img
            src={newsData.featured.image}
            alt="featured news"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Left half - dark blue transparent overlay with text */}
<div className="absolute inset-y-0 left-0 w-1/2 bg-[oklch(0.4_0.25_263.84/0.73)] flex flex-col justify-end p-5">
  <div className="absolute top-5 left-5">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-white text-lg font-semibold leading-snug">
              {newsData.featured.heading}
            </h3>
          </div>
        </div>

        {/* Right side portrait - news-4 (row-span-2) */}
        <div className="row-span-2 overflow-hidden">
          <img
            src={newsData.secondary[2].image}
            alt="person"
            className="w-full h-118 object-cover object-top"
          />
          <p>Lorem Ipsum Interpretation common Symbols and their meanings</p>
        </div>

        {/* Bottom left - news-2 */}
        <div className="col-span-1 cursor-pointer group">
          <div className="overflow-hidden h-36">
            <img
              src={newsData.secondary[0].image}
              alt="news 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="text-sm text-gray-700 mt-2 leading-snug">
            {newsData.secondary[0].caption}
          </p>
        </div>

        {/* Bottom middle - news-3 with play button */}
        <div className="col-span-1 cursor-pointer group relative">
          <div className="overflow-hidden h-32 relative">
            <img
              src={newsData.secondary[1].image}
              alt="news 3 video"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon />
            </div>
          </div>
        </div>

        {/* Bottom right - caption for news-4 portrait */}
        <div className="col-span-1">
          <p className="text-sm text-gray-700 mt-2 leading-snug">
            {newsData.secondary[2].caption}
          </p>
        </div>

      </div>
    </section>
  );
}