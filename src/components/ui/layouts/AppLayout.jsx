import { Header, Footer } from "../../../components";

import PropTypes from "prop-types";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[85vh]">{children}</main>
      <Footer />
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
