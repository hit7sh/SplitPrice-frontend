import React from 'react'
import Card from './Card'

const Friends = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <Card username='hitesh'  balance={100}/>
        <Card username={'Eleanor'} balance={-78.6411}/>
        <Card username='Edwin' balance={54.2373}/>
        <Card username='Stuard' balance={0}/>
      </div>
  )
}

export default Friends