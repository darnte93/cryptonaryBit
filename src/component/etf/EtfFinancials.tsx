import EtfImg1 from "../../assets/etfImg2.png";
import "./etf.css";

const EtfFinancials = () => {
  return (
    <article>
      {/* Etf Financial Top Nav section */}
      <section className="about-etf__nav">
        <h1>Bitb</h1>
        <h2>Bitwise Bitcoin Etf</h2>
        <div>
          <p>About</p>
          <p>Financials</p>
          <p>News</p>
        </div>
      </section>

      {/* Etf Financial Main Container section */}
      <section className="about-etf__container">
        <img src={EtfImg1} alt="" />
        <div className="about-etf__container-content">
          <h1>$36.62</h1>
          <h2>~₦55,479.30</h2>
          <div>
            <span className="about-etf__up">up</span> 3.07% ($1.09)
            <span className="about-etf__day">Today</span>
          </div>
          <p className="about-etf__market">Market Closed</p>
        </div>
      </section>

      {/* Etf Financial Section */}
      <section className="about-etf__chart"></section>
    </article>
  );
};

export default EtfFinancials;
