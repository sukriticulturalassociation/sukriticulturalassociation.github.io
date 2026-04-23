import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/navbar-top/Navbar";
import HorizontalScroll from "../../components/scroll/horizontal-scroll/HorizontalScroll";
import "./Home.css";
import bankOfBaroda from "../../assets/bank-of-baroda.png";
import dominosPizza from "../../assets/domino-s-pizza.jpg";
import godrejProperties from "../../assets/godrej_properties.jpg";
import hdfcBank from "../../assets/hdfc-bank.png";
import hindustanPetroleum from "../../assets/hindustan_petroleum.png";
import manipalHospitals from "../../assets/manipal_hospitals.png";
import orraFineJewellery from "../../assets/orra_fine_jewellery.png";
import relianceTrends from "../../assets/reliance_trends.jpg";
import rplusNews from "../../assets/rplus_news.jpg";
import sencoGoldAndDiamond from "../../assets/senco_gold_and_diamond.jpg";
import tvs from "../../assets/tvs.png";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Carousel />
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
