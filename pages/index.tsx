import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
export default function Index() {
  return (
    <MainLayout title={'Home page'}>
      <h1>Hello next js</h1>
      <Link href={'/about'}><a>About</a></Link>
      <br/>
      <Link href={'/posts'}><a>Posts</a></Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, officia? Need more contest !!</p>
      <span>Diana piskkaaa</span>
    </MainLayout>
  )
}