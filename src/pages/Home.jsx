import Categories from "../components/Categories"
import Collection from "../components/Collection"
import Featured from "../components/Featured"
import Hero from "../components/Hero"

export default function Home(){
    return(
        <>
        <Hero/>
        <Categories/>
        <Featured/>
        <Collection/>
        </>
    )
}