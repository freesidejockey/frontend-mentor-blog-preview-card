import Image from "next/image";

export default function Home() {
  return (
    <article className="place-content-center h-screen">
      <div className="border shadow-[8px_8px_black] max-w-sm mx-auto bg-white rounded-2xl">
        <div>
          <picture>
            <img
              src="/images/illustration-article.svg"
              alt="illustration"
              className="mb-4 mt-6 mx-auto rounded-2xl"
            />
          </picture>
        </div>
        <div className="rounded-sm w-1/4 px-2 ml-6 mb-3 bg-yellow">
          <p className="text-center font-extrabold text-xs py-1">Learning</p>
        </div>
        <p className="ml-6 pb-3 text-sm font-semibold">Published 21 Dec 2023</p>
        <p className="ml-6 pb-3 text-2xl font-extrabold hover:text-yellow">
          HTML & CSS foundations
        </p>
        <p className="ml-6 pb-6 font-semibold text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center ml-6 mb-6">
          <picture>
            <img
              src="/images/image-avatar.webp"
              alt="illustration"
              className="w-8 h-8 "
            />
          </picture>
          <p className="pl-3 font-extrabold">Greg Hooper</p>
        </div>
      </div>
      {/* </div> */}
      <div className="attribution mt-4">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </article>
  );
}
