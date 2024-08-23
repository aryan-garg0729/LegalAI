import './styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
