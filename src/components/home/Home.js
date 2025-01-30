import Counter from "../counter/Counter";
import FetchApi from "../pages/FetchApi";
import SearchUser from "../pages/SearchUser";

function Home(){
    return(
        <div>
            <h1>Welcome to News App</h1>
            <Counter/>
            <FetchApi/>
            <SearchUser/>
        </div>
    );
}
export default Home;