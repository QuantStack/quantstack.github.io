import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import SplitSection from "../components/layout/SplitSection";
import Banner from "../components/layout/Banner";
import LinkToContact from "../components/LinkToContact";
import styles from "./projects.module.css";

import JupyterLogoUrl from "@site/static/img/projects/Jupyter.png";
import MambaLogoUrl from "@site/static/img/projects/Mamba.png";
import CondaForgeLogoUrl from "@site/static/img/projects/conda_forge.png";
import ApacheArrowLogoUrl from "@site/static/img/projects/apache_arrow.png";
import XtensorLogoUrl from "@site/static/img/projects/xtensor.png";
import RobostackLogoUrl from "@site/static/img/projects/robostack.png";

function ProjectsContent() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <Section pageTop bg="yellow">
        <h1>Working in the open.</h1>
        <p className={styles.header_text}>
          From interactive environments to package managers to data formats — our tools reach
          millions of researchers, engineers, and students across every scientific discipline.
          We build in the open so that anyone can build on what we create.
        </p>
      </Section>

      <SectionSeparator variant={1} />

      {/* ── Jupyter ───────────────────────────────────────────────────────── */}
      <SplitSection
        bg="white"
        ratio="60/40"
        image={
          <div className={`${styles.project_picture} ${styles.project_picture_jupyter}`}>
            <img src={JupyterLogoUrl} alt="Jupyter logo" className={styles.project_logo} />
          </div>
        }
      >
        <div className={styles.project_title}>Jupyter</div>
        <div className={styles.project_description}>
          <p>QuantStack is one of the main organizations behind the Jupyter project. We co-founded JupyterLab and JupyterLite — the browser-native Jupyter that runs without a server — and drive major features including real-time collaboration, the visual debugger, and AI integration.</p>
          <p>We also maintain Voilà, xeus, JupyterGIS, and JupyterCAD. JupyterLab reaches over 10 million users worldwide; JupyterLite serves hundreds of thousands of students on minimal infrastructure.</p>
        </div>
      </SplitSection>

      {/* ── Mamba ─────────────────────────────────────────────────────────── */}
      <SplitSection
        bg="white"
        ratio="60/40"
        reverse
        image={
          <div className={`${styles.project_picture} ${styles.project_picture_mamba}`}>
            <img src={MambaLogoUrl} alt="Mamba logo" className={styles.project_logo} />
          </div>
        }
      >
        <div className={styles.project_title}>Mamba</div>
        <div className={styles.project_description}>
          <p>We created Mamba, the fast, reliable drop-in replacement for the conda package manager. Mamba delivers dramatically faster dependency solving, better error messages, and full compatibility with the conda ecosystem.</p>
          <p>Mamba now serves 5 million downloads per month and is the package manager of choice for a large part of the scientific Python community.</p>
        </div>
      </SplitSection>

      {/* ── Conda-forge ───────────────────────────────────────────────────── */}
      <SplitSection
        bg="white"
        ratio="60/40"
        image={
          <div className={`${styles.project_picture} ${styles.project_picture_condaforge}`}>
            <img src={CondaForgeLogoUrl} alt="conda-forge logo" className={styles.project_logo} />
          </div>
        }
      >
        <div className={styles.project_title}>Conda-forge & emscripten-forge</div>
        <div className={styles.project_description}>
          <p>We are one of the key organizations supporting conda-forge, the community-led collection of recipes and build infrastructure for the conda/mamba package manager. Conda-forge delivers over 1 billion package downloads per month and is the reference source for the scientific computing ecosystem.</p>
          <p>We also built emscripten-forge, the package forge that brings the full multilingual scientific computing stack to WebAssembly — the backbone of JupyterLite and notebook.link.</p>
        </div>
      </SplitSection>

      {/* ── Apache Arrow & Parquet ────────────────────────────────────────── */}
      <SplitSection
        bg="white"
        ratio="60/40"
        reverse
        image={
          <div className={`${styles.project_picture} ${styles.project_picture_arrow}`}>
            <img src={ApacheArrowLogoUrl} alt="Apache Arrow logo" className={styles.project_logo} />
          </div>
        }
      >
        <div className={styles.project_title}>Apache Arrow & Parquet</div>
        <div className={styles.project_description}>
          <p>QuantStack is home to principal maintainers of Apache Arrow's C++ core — the in-memory columnar format that underpins most of the modern data ecosystem, from pandas to Spark to DuckDB.</p>
          <p>We also maintain Apache Parquet, the dominant columnar storage format for analytics workloads, and provide commercial support and custom development across the Arrow ecosystem.</p>
        </div>
      </SplitSection>

      {/* ── Xtensor & Xsimd ──────────────────────────────────────────────── */}
      <SplitSection
        bg="white"
        ratio="60/40"
        image={
          <div className={`${styles.project_picture} ${styles.project_picture_xtensor}`}>
            <img src={XtensorLogoUrl} alt="xtensor logo" className={styles.project_logo} />
          </div>
        }
      >
        <div className={styles.project_title}>xtensor & xsimd</div>
        <div className={styles.project_description}>
          <p>We authored xtensor, a multi-dimensional array library for C++ with a NumPy-style API supporting lazy broadcasting, universal functions, and language bindings for Python, R, and Julia.</p>
          <p>We also created xsimd, a unified API for SIMD operations that has seen wide adoption: Apache Arrow, Firefox, Krita, and Pythran all depend on it for high-performance computing.</p>
        </div>
      </SplitSection>

      {/* ── Robotics ──────────────────────────────────────────────────────── */}
      <SplitSection
        bg="white"
        ratio="60/40"
        reverse
        image={
          <div className={`${styles.project_picture} ${styles.project_picture_robotics}`}>
            <img src={RobostackLogoUrl} alt="RoboStack logo" className={styles.project_logo} />
          </div>
        }
      >
        <div className={styles.project_title}>Robotics</div>
        <div className={styles.project_description}>
          <p>We created RoboStack, the first multi-platform distribution of ROS as conda packages, enabling robotics development on Linux, macOS, and Windows without system dependencies.</p>
          <p>We maintain jupyter-ros, a JupyterLab-based development environment integrating ROS with the Jupyter ecosystem.</p>
        </div>
      </SplitSection>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <Banner
        bg="dark"
        title="Work with the people who maintain it."
        cta={<LinkToContact label="GET IN TOUCH" />}
      >
        Support retainer, funded development, or a custom engineering engagement —
        you work directly with the upstream maintainers of the tools your stack depends on.
      </Banner>
    </>
  );
}

export default function ProjectsPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <ProjectsContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
