import 'bootstrap/dist/css/bootstrap.min.css';
import './css/editMapping.css'

function Mapping(){
    return (
    <div class="mappings">
        <div class="page-header header">
            <div><h3>Edit WebMerge Mapping</h3></div>
            <div>
                <button type="button" class="btn btn-info">Save</button>
                <button type="button" class="btn">Cancel</button>
            </div>
        </div>
        <div class="mappingDetail">
            <table class="table-borderless">
                <tr>
                    <th><h5>Mapping Detail</h5></th>
                    <th></th>
                </tr>
                <tr>
                    <td>Mapping Name</td>
                    <td>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."  style={{width:'240px'}}/>
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>
                        <textarea style={{width:'240px'}}></textarea>
                    </td>
                </tr>
                <tr> 
                    <td>CRM Module</td>
                    <td>
                        <select class="browser-default custom-select">
                        <option selected>select the Mapping module</option>
                        <option value="1">2018 - h1b - v3</option>
                        <option value="2">2018 - h1b - v3</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>WebMerge Resource Type</td>
                    <td>
                        <label style={{marginRight: 2 + 'em'}}><input type = "radio" value = "document" name = "resType" />Document</label>
                        <label><input type = "radio" value = "route" name = "resType" />Route</label>
                    </td>
                </tr>
                <tr>
                    <td>Select a WebMerge Resource</td>
                    <td>
                    <select class="browser-default custom-select">
                    <option selected>2018 - h1b - v3</option>
                    <option value="1">2019 - h1b - v3</option>
                    <option value="2">2018 - h1b - v3</option>
                    </select>
                    </td>
                </tr>
            </table>
        </div>
        <div class="options">   
            <h5>Options</h5>
            <label class="container">
            <input type="checkbox" />
            Make this mapping visible to everyone.
            </label>
            <label class="container">
            <input type="checkbox" />
            Save merged document as an attachment.
            </label>
        </div>
        <div class="fieldMapping">   
            <h5>Field Mapping</h5>
            <table class="table-borderless">    
                <tr>
                    <td><p>G-28-P2-L6-CompanyName</p></td>
                    <td>
                        <select class="browser-default custom-select">
                        <option selected>select the Mapping field</option>
                        <option value="1">Company Name</option>
                        <option value="2">Email</option>
                        </select>
                    </td>
                </tr>
            </table>

        </div>
    </div>
    )
}

export default Mapping;