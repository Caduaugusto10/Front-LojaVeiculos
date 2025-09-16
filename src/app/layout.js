import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
