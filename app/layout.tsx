import '../styles/globals.css';
import Header from './header';

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <title>DG Visuals</title>
            </head>
            <body>
                <Header></Header>
                {children}</body>
        </html>
    );
}
