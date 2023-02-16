import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Header from "../components/Header";
import styles from '../styles/Home.module.css'
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Header />
      <Container>
        <AboutMe />
        <Skills />
        <Projects />
      </Container>
    </Layout>
  )
}
