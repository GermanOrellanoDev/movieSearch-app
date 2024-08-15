import "../Layout/Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <div className="footer">
        <p className="footer-p">
          App desarrollada por goDev - © 2024 - Todos los derechos reservados
        </p>
        <a href="http://">
          <img className="logo-footer" src="Logo.png" alt="" />
        </a>
      </div>
    </div>
  );
};
