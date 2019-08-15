import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import './css/authorized.css'

function Authorized () {
    return (
        <>
            <Header content="WebMerge Settings" />
            <div class="revoke">
                <p>You are successfully connected to WebMerge.
                    <button type="button" class="btn btn-danger">Revoke</button>
                </p>             
            </div>
            <div class="explore">
                <p>Explore WebMerge Extension</p>
                <div class="mapping">
                    <p>
                        <a class="underlineHover" href="#">WebMerge Mappings</a>
                        -Create / Manage field mappings for CRM Module
                    </p>
                    <p>
                        <a class="underlineHover" href="#">WebMerge Documents</a>
                        Access WebMerge Documents
                    </p>
                </div>
            </div>
            <div class="Setup explore">
                <p>Setup Guides</p>
                <div className="Guide mapping">              
                    <a class="underlineHover" href="#">WebMerge Documentation</a>                    
                </div>
            </div>

        </>
    )
}

export default Authorized;