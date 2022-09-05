import React from "react";

function Layout({ className, children }) {
  return (
    <>
      <article className={className}>{children}</article>
    </>
  );
}

export default Layout;
