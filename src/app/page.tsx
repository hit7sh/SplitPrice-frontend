import Image from 'next/image'
import AppBar from '../components/AppBar'
import Card from '@/components/Card'
import Friends from '@/components/Friends'

export default function Home() {
  return (
    <>
    <AppBar></AppBar>
    <div className='py-16 bg-slate-900'>
      <Friends />

    </div>
    </>
  )
}
