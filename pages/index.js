import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div style={{background:`url("/images/bgNew.jpg")`}}>
      <Main/>
    </div>
  )
}
