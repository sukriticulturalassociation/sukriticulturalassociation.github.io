import bankOfBaroda from "../../assets/bank-of-baroda.png";
import dominosPizza from "../../assets/domino-s-pizza.jpg";
import godrejProperties from "../../assets/godrej_properties.jpg";
import hdfcBank from "../../assets/hdfc-bank.png";
import hindustanPetroleum from "../../assets/hindustan_petroleum.png";
import manipalHospitals from "../../assets/manipal_hospitals.png";
import orraFineJewellery from "../../assets/orra_fine_jewellery.png";
import promotionPoster from "../../assets/promotion_poster.jpeg";
import relianceTrends from "../../assets/reliance_trends.jpg";
import rplusNews from "../../assets/rplus_news.jpg";
import sencoGoldAndDiamond from "../../assets/senco_gold_and_diamond.jpg";
import sukritiPoster3d from "../../assets/sukriti_poster_3d_20260428.png";
import sukritiPosterOriginal from "../../assets/sukriti_posterOriginal_20260428.png";
import tvs from "../../assets/tvs.png";
import CarouselV2 from "../../components/carousel/CarouselV2";
import HorizontalScroll from "../../components/scroll/horizontal-scroll/HorizontalScroll";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="tagline">EST. WITH LOVE FOR CULTURE</p>

          <h1>
            Celebrating <span>Heritage</span>, <br />
            Nurturing <br />
            Community
          </h1>

          <p className="description">
            Sukriti Cultural Association is a vibrant community dedicated to
            preserving, celebrating, and sharing the richness of our cultural
            traditions through art, music, dance, and festivals.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Become a Member</button>
            <button className="secondary-btn">Explore Activities</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={promotionPoster} alt="Sukriti" />
          </div>
        </div>
      </section>
      <CarouselV2 images={[sukritiPoster3d, sukritiPosterOriginal]} />
      <HorizontalScroll title="Our Esteemed Partners">
        <img
          src={bankOfBaroda}
          alt="Bank of Baroda"
          style={{ minWidth: "200px", height: "120px" }}
        />
        <img
          src={dominosPizza}
          alt="Domino's Pizza"
          style={{ height: "120px" }}
        />
        <img
          src={godrejProperties}
          alt="Godrej Properties"
          style={{ minWidth: "200px", height: "120px" }}
        />
        <img src={hdfcBank} alt="HDFC Bank" style={{ height: "120px" }} />
        <img
          src={hindustanPetroleum}
          alt="Hindustan Petroleum"
          style={{ height: "120px" }}
        />
        <img
          src={manipalHospitals}
          alt="Manipal Hospitals"
          style={{ minWidth: "200px", height: "120px" }}
        />
        <img
          src={orraFineJewellery}
          alt="Orra Fine Jewellery"
          style={{ minWidth: "200px", height: "120px" }}
        />
        <img
          src={rplusNews}
          alt="RPlus News"
          style={{ minWidth: "200px", height: "120px" }}
        />
        <img
          src={relianceTrends}
          alt="Reliance Trends"
          style={{ minWidth: "200px", height: "120px" }}
        />
        <img
          src={sencoGoldAndDiamond}
          alt="Senco Gold and Diamond"
          style={{ minWidth: "200px", height: "120px" }}
        />
        <img
          src={tvs}
          alt="TVS"
          style={{ minWidth: "200px", height: "120px" }}
        />
      </HorizontalScroll>
    </div>
  );
}

export default Home;
