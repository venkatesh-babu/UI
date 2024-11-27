"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const IngredientsComponent = dynamic(
  () => import("../IngredientsComponent/page"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HeroComponent = dynamic(() => import("../HeroComponent/page"), {
  loading: () => <p>Loading...</p>,
});
const HeaderComponent = dynamic(() => import("../HeaderComponent/page"), {
  loading: () => <p>Loading...</p>,
});

const FooterComponent = dynamic(() => import("../FooterComponent/page"), {
  loading: () => <p>Loading...</p>,
});

const BlogComponent = dynamic(() => import("../BlogComponent/page"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  // Define the reveal function
  const reveal = () => {
    let reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', reveal);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []); // Empty dependency array ensures it runs once on mount
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <IngredientsComponent />
      <BlogComponent />
      <FooterComponent />
    </div>
  );
}

