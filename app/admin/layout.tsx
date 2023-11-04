import {Footer} from "@/app/(public)/_components/footer";
import {AdminNavbar} from "@/app/admin/_components/admin_navbar";

const homeLayout = ({children}: { children: React.ReactNode}) => {
    return (
        <div className="h-full">
            <AdminNavbar/>
            <main className="h-full pt-20 pl-10 pr-10">
                {children}
            </main>
            <Footer/>
        </div>
    );
}
export default homeLayout;