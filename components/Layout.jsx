import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preload" href="/fonts/Thunder/Thunder-BoldHC.ttf" as="font" crossorigin="anonymous" />
                <link rel="preload" href="/fonts/Thunder/Thunder-HC.ttf" as="font" crossorigin="anonymous" />
                <link rel="preload" href="/fonts/Thunder/Thunder-LightHC.ttf" as="font" crossorigin="anonymous" />
                <link rel="preload" href="/fonts/Thunder/Thunder-SemiBoldHC.ttf" as="font" crossorigin="anonymous" />
                <link rel="preload" href="/fonts/Thunder/Thunder-ThinHC.ttf" as="font" crossorigin="anonymous" />
            </Head>
            {children}
            <Footer />
        </>
    )
}

export default Layout;