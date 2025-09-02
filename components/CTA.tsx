import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section"> 
      <div className="cta-badge">
        Start Learning Your Way.
      </div>
      <h2 className="text-3xl font-bold">
        Build a Personalize Learning Companion
      </h2>
      <p className="">Pick a name,Subject,voice & personality - and start learning through voice converations that feels natural and fun.</p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232}/>
      <Button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>
            Built a new companion  
          </p>
        </Link>
        
      </Button>
    </section>
  
  )
}

export default CTA