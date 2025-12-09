import { Outlet } from "react-router";
import FloatingButton from "~/components/FloatingButton";
import Navbar from "~/components/Navbar";



export default function layout() {
    return (
        <main>
            <Navbar />
            <Outlet />
            <FloatingButton />
        </main>
    )
}
