import "../../styles/main.scss";

export const Footer = () => {
  const PrometheusURL = "https://prometheus.org.ua/";

  return (
    <footer>
      <p className="partner">
        "Made in{" "}
        <a
          className="partner-link"
          target="_blank"
          rel="noreferrer"
          href={PrometheusURL}
        >
          Prometheus.
        </a>
      </p>
      <p className="owner">&copy; Oleksandr Kulkov, 2023"</p>
    </footer>
  );
};
