
import Link from 'next/link'

type LinkType ={
    name: string;
    url: string;
}

interface FooterProps {
    footerLinks: LinkType[];
}


const Footer: React.FC<FooterProps>=({
    footerLinks
})=>{
    return (
        <footer>
            <nav className='leading-4'>
            <ul>
                {footerLinks.map((link)=>(
                    <li className="p-2 text-sm" key={link.name}>
                        <Link href={link.url}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </nav>
        </footer>
    )
}

export default Footer;