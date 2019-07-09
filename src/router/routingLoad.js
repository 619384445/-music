import Loadable from 'react-loadable';
import Loading from "./loding"


const Home = Loadable({
    loader: () => import('../component/home'),
    loading: Loading
});
const Song = Loadable({
    loader: () => import('../component/song'),
    loading: Loading
});
const Recommend = Loadable({
    loader: () => import('../component/recommend'),
    loading: Loading
});
const Search = Loadable({
    loader: () => import('../component/search'),
    loading: Loading
});
const Rege = Loadable({
    loader: () => import('../component/rege'),
    loading: Loading
});
const Music = Loadable({
    loader: () => import('../component/music'),
    loading: Loading
});
export {
    Home,
    Recommend,
    Search,
    Rege,
    Song,
    Music
}