import Announcement from "../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tags></Tags>
            <Announcement></Announcement>
            <Posts></Posts>
        </div>
    );
};

export default Home;