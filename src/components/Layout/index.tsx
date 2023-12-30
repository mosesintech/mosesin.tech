import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
