import Header from "./Header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

// Object taking in a parameter called props and appending inside  {props.children}
const Layout = props => (
    <div style={layoutStyle}> {/* inside JSX use {} to acces JS variable like this {layoutStyle} */}
        <Header />
        {props.children}
    </div>
)
export default Layout