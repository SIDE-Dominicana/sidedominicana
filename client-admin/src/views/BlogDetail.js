import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import blogData from "data/blog.json";

export default function BlogDetail() {
    const { slug } = useParams();
    const article = blogData.find((p) => p.slug === slug);

    // Related articles: others that are not the current one
    const relatedArticles = blogData.filter((p) => p.slug !== slug).slice(0, 3);

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    if (!article) {
        return (
            <>
                <Navbar transparent />
                <main className="min-h-screen pt-24 px-6 text-center">
                    <h1 className="text-2xl text-red-500 font-bold">Artículo no encontrado</h1>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar transparent />

            {/* BANNER (intacto) */}
            <section className="relative pt-24 pb-28 flex flex-col items-center justify-center min-h-[50vh]">
                <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
                    <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
                </div>
                <div className="container relative z-10 mt-10 text-center text-white space-y-4 px-4"></div>
            </section>

            {/* HEADER DEL ARTÍCULO */}
            <section className="bg-white">
                <div className="max-w-3xl mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{article.summary}</p>
                    <p className="text-sm text-gray-500 italic">
                        Publicado por SIDE | {article.date ?? "Fecha no disponible"}
                    </p>
                </div>
                <hr className="border-gray-200 mb-12 w-2/3 mx-auto" />
            </section>

            {/* CONTENIDO PRINCIPAL */}
            <section className="bg-white pb-20">
                <div className="max-w-3xl mx-auto px-6">
                    {/* <article className="prose prose-lg prose-blue max-w-none text-gray-800 mx-auto text-center">
                            {article.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                            ))}
                        </article> */}
                    <div
                        className="prose prose-lg prose-blue max-w-none text-gray-800 mx-auto text-center"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    ></div>

                    <div className="mt-16 text-left">
                        <Link
                            to="/"
                            className="inline-block bg-blueGray-800 hover:bg-blueGray-900 text-white py-2 px-6 rounded-md transition duration-150"
                        >
                            ← Volver al inicio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ARTÍCULOS RELACIONADOS */}
            {relatedArticles.length > 0 && (
                <section className="bg-blueGray-100 py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800">Artículos Relacionados</h2>
                            <p className="mt-2 text-gray-600">Sigue explorando ideas y estrategias útiles para tu negocio.</p>
                        </div>

                        <div className="flex flex-wrap justify-center -m-4">
                            {relatedArticles.map((post, idx) => (
                                <div key={idx} className="p-4 md:w-1/3">
                                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-block text-white bg-blueGray-800 hover:bg-blueGray-900 py-2 px-4 rounded"
                                        >
                                            Leer más
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </>
    );
}
