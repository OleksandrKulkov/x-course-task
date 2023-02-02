import "../../containers/app.css";

export const Footer = () => {
  const PrometheusURL = "https://prometheus.org.ua/";

  return (
    <footer className="footer">
      <p className="footer-name">
        "Powered by{" "}
        <a
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          href={PrometheusURL}
        >
          Prometheus.
        </a>
      </p>
      <p className="footer-name2">&copy; Oleksandr Kulkov, 2023"</p>
    </footer>
  );
};
