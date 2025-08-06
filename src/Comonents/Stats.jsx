import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Stats = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setStartCount(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="stats" className="stats-main">
        <div className="container">
      <div >
        <h2>We Help To GrowYour Business</h2>
        <span >
          Boost creativity and teamwork with smart design tools built to scale your ideas and streamline your workflow.
        </span>
      </div>

      <div className="stats-flex">
        <div className="stat-col" >
          <h3>{startCount && <CountUp end={142} duration={2} />}</h3>
          <p>New Features</p>
        </div>
        <div className="stat-col" >
          <h3>{startCount && <CountUp end={28} duration={2} suffix="k" />}</h3>
          <p>App Download</p>
        </div>
        <div className="stat-col" >
          <h3>{startCount && <CountUp end={53} duration={2} suffix="M" />}</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-col" >
          <h3>{startCount && <CountUp end={90} duration={2} suffix="%" />}</h3>
          <p>Positive Rate</p>
        </div>
      </div>

      </div>
    </section>
  );
};

export default Stats;
