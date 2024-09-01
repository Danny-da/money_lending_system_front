import { NavBar } from "@/modules/client/core/components";


interface Iprops {
    children: React.ReactNode
}

export default function Layout ( props: Iprops ) {
    const {children} = props
    return (
        <main> 
            <NavBar />
            {children}
            </main>
    );
}