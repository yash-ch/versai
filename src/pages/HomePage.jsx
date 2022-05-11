import Header from "../components/header";
import HomePageBanner from "../components/homePageBanner";
import documentTitle from "../documentTitle";
import "../css/mainPage.css"
import Footer from "../components/footer";
import UpcomingShows from "../components/upcomingShows";

export default function HomePage(){
    documentTitle("Versai")
    return(
      <div className={"main-page"}>
          <Header/>
          <HomePageBanner/>
          <UpcomingShows/>
          {/*<Footer/>*/}
      </div>
    );
}