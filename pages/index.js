import Layout from "../components/Layout";
import Banner from "../components/Banner";
import styles from '../styles/Home.module.css'
import AboutMe from "../components/AboutMe";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Container>
        <AboutMe />
      </Container>
    </Layout>
  )
}
