import {Heading} from "@/app/(public)/_components/heading";
import {Heros} from "@/app/(public)/_components/heros";
import {Footer} from "@/app/(public)/_components/footer";

const HomePage = () => {
    return (
        <div className="h-screen">
            <div className="min-h-full flex flex-col">
                <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-10 flex-1 px-6 pb-10">
                    <Heading/>
                    <Heros/>
                </div>
            </div>
        </div>

    );
}

export default HomePage;