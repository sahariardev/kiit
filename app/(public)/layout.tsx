import {Navbar} from "@/app/(public)/_components/navbar";
import {Footer} from "@/app/(public)/_components/footer";

const homeLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <Navbar/>
            <main className="h-full pt-20 pl-10 pr-10">
                {children}
            </main>
            <Footer/>
        </div>
    );
}
export default homeLayout;