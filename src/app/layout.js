import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "Caduzada Veículos",
    description: "Sistema de gerenciamento de veículos",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Header />   
                {children}
                <Footer />
            </body>
        </html>
    );
}
