import {Heading} from "@/app/(home)/_components/heading";
import {Heros} from "@/app/(home)/_components/heros";
import {Footer} from "@/app/(home)/_components/footer";

const HomePage = () => {
    return (
        <div className="h-screen">
            <div className="min-h-full flex flex-col">
                <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-10 flex-1 px-6 pb-10">
                    <Heading/>
                    <Heros/>
                </div>
            </div>

            <Footer/>
        </div>

    );
}

export default HomePage;