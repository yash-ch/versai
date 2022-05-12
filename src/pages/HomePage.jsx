import Header from "../components/header";
import HomePageBanner from "../components/homePageBanner";
import documentTitle from "../documentTitle";
import "../css/mainPage.css"
import UpcomingShows from "../components/upcomingShows";
import Reviews from "../components/reviews";
import Footer from "../components/footer";

export default function HomePage(){
    documentTitle("Versai")
    return(
      <div className={"main-page"}>
          <Header/>
          <HomePageBanner/>
          <UpcomingShows/>
          <Reviews/>
          <Footer/>
      </div>
    );
}