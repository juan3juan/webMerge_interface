import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header (props) {
    return (
    <div className="headerDiv">
        <div class="page-header">
            <h3>{props.content}</h3>
        </div>
        <style jsx global>{`
            h3 {
                color: grey;
            }
        `}</style>
    </div>

    )
  
}

export default Header;