import CompanionCards from '@/components/CompanionCards'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import NavBar from '@/components/NavBar'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      
      <h1>Popular Companions </h1>
      <section className="home-section">
          <CompanionCards
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"  
            subject="science"
            duration={45}
            color="#E5D0FF"
          />
          <CompanionCards
            id="456"
            name="Countsy the Number Wizard"
            topic="Derivatives & Integrals"  
            subject="Maths"
            duration={30}
            color="#ffda6e"
          />
          <CompanionCards
            id="789"
            name="Verba the Vocablory Builder"
            topic="English Literature"  
            subject="Language"
            duration={30}
            color="#BDE7FF"
          />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed session"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page