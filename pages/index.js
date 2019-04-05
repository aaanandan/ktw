import Link from 'next/link';
import Layout from '../comps/MyLayout'
import fetch from 'isomorphic-unfetch'

const PostLink = ({ post }) => (
    <li>
        {/* use $ sign if the JS attribute is inside string. like ${props.title}  */}
        {/* use single ` if we have attribute reference inside string. 
    like  href={`/post?title=${props.title}`}*/}
        <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.name}</a>
        </Link>
        <style jsx>{`
         li {
            list-style: none;
            margin: 5px 0;
          }
    
          a {
            text-decoration: none;
            color: blue;
            font-family: 'Arial';
          }
    
          a:hover {
            opacity: 0.6;
          }
        `}
        </style>
    </li>
)

const Index = (props) => {
    return (
        <Layout>

            <div>
                <p>Hello Next.js</p>
                <ul>
                    {props.shows.map(show => (
                        <li key={show.key}>
                            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                    <Link href="/about"><button title="About Page" >About us</button></Link>
                </ul>
            </div>
            <style jsx>{`
                h1, a{
                    font-family:'Arial';
                }
                ul{
                    padding:0;
                }
                li{
                    list-style:none;
                    margin:5px 0;
                }
                a{
                    text-decoration:none;
                    color:blue;
                }
                a:hover{
                    opacity:0.6
                }
            `}</style>
        </Layout>
    )
}

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=Reality')
    const data = await res.json()
    console.log(`Show fetched data :${data.length}`);
    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index