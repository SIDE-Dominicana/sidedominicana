import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ScrollMenu({ items }) {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const isExternal = (url) => /^https?:\/\//.test(url);

    return (
        <div className="relative w-full overflow-hidden">
            {/* <Carousel
                ssr={true}
                infinite={true}
                responsive={responsive}
                itemClass="p-0 m-0 flex justify-center "
                containerClass="py-4"
            > */}
                {items.map(({ label, path }, i) => {
                    const content = (
                        <button className="inline-block mx-2 px-4 py-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition">
                            {label}
                        </button>
                    );

                    return isExternal(path) ? (
                        <a
                            key={i}
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {content}
                        </a>
                    ) : (
                        <Link key={i} to={path}>
                            {content}
                        </Link>
                    );
                })}
            {/* </Carousel> */}
        </div>
    );
}
