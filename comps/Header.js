import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

// Constant poinitng to a arrow function which return the content of the component
const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>Home...</a></Link>
            <Link href="/about"><a style={linkStyle}>About</a></Link>
        </div>
    )
}
//header Component contetn return in a simple function 
function abc() {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/about"><a style={linkStyle}>About</a></Link>
        </div>
    )
}

// export by a simple fuunction insted of arrow function
//export default abc 
export default Header