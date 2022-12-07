import Head from "next/head";
import style from "../styles/pages/index.module.scss";

function Landing() {
    return (
        <div id={style.landing} className="page">
            <Head>
                <title>Barangay SanJose</title>
            </Head>
            {/* <aside id={style.landing_side_contents} >
                <div className={style.landing_side_contents_container} >

                </div>
            </aside> */}
            <span className="pageTitle">Home</span>
            <section id={style.welcome}>
                <span>Welcome to the Official Barangay SanJose Website</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dicta cupiditate non rem excepturi, quas deserunt explicabo dolor consectetur, voluptatum quod eos suscipit nesciunt facere? Natus harum in dolorem voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at enim praesentium aspernatur, dolor sint necessitatibus incidunt fugit error laboriosam ipsam autem unde magnam deleniti ducimus veritatis nemo. Dolorum, nemo?</p>
            </section>
            {/* <section id={style.history}>
                <span>Our History</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio itaque iste cupiditate dolorum excepturi quo illo, molestiae commodi. Dicta possimus in molestias unde voluptatibus necessitatibus harum, maxime quidem iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae, ea sunt tempore, explicabo dolor, adipisci praesentium nobis rerum at optio consectetur fugit nam! Minus aliquam voluptatum dolor nostrum! Alias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, mollitia iste autem inventore accusantium eum reiciendis minima pariatur distinctio eaque? Sed fugit iusto assumenda ipsam nostrum. Laudantium earum id velit.</p>
            </section> */}
            <div className={style.vaccine}>
                <img src="1643313931563.jpg"/>
            </div>
            <div className={style.mapouter}>
                <span>Where are we?</span>
                <div className={style.gmap_canvas}>
                    <iframe className={style.gmap_iframe} width="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tuy Batangas&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <a href="https://formatjson.org/word-counter">Word Counter</a>
                </div>
            </div>
        </div>
    );
}

export default Landing;