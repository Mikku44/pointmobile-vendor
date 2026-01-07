import { Outlet } from "react-router";
import FloatingButton from "~/components/FloatingButton";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";



export default function layout() {
    return (
        <main>
            <Navbar />
            <Outlet />
            <FloatingButton />
            <Footer />
        </main>
    )
}
