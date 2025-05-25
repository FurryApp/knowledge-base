import Image from 'next/image';
import { Navbar as NavbarComponent } from 'nextra-theme-docs';

export default function Navbar() {
  return (
    <NavbarComponent
      chatLink="https://barq.app/discord"
      projectLink="https://github.com/FurryApp/knowledge-base"
      logo={
        <>
          <Image
            src="/images/logo/barq.svg"
            alt="BARQ!"
            width={20}
            height={20}
            priority
            style={{ width: '20px', height: '20px' }}
          />
          <span style={{ marginLeft: '.4em', fontWeight: 800 }}>BARQ! Knowledge Base</span>
        </>
      }
    />
  );
}
