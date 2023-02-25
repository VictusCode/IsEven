import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/EasyToUse.svg").default,
    description: <>Use just one function to keep your code safe and fast</>,
  },
  {
    title: "Powered by TypeScript",
    Svg: require("@site/static/img/TypeScript.svg").default,
    description: <>Completely in typescript</>,
  },
  {
    title: "Tested",
    Svg: require("@site/static/img/Tested.svg").default,
    description: <>Fully covered with tests for any case</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <br />
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
