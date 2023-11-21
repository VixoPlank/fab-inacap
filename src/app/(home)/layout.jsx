

import Footer from "@components-home/Footer";
import Header from "@components-home/Header";

export default function DashboardLayout({ children }) {
  return (
    
    <section>
      
      <Header />
      {children}
      <Footer />
    </section>
  );
}
