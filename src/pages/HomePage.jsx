import Header from "../components/header";
import HomePageBanner from "../components/homePageBanner";
import documentTitle from "../documentTitle";
import "../css/mainPage.css"
import Footer from "../components/footer";

export default function HomePage(){
    documentTitle("Versai")
    return(
      <div className={"main-page"}>
          <Header/>
          <HomePageBanner/>
          <Footer/>
      </div>
    );
}