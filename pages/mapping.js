import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mapping.css'

function Mapping(){
    return (
    <div class="mappings">
        <div class="page-header header">
            <div><h3>WebMerge Mappings</h3></div>
            <div><button type="button" class="btn btn-info">New WebMerge Mapping</button></div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>MAPPING NAME</th>
                <th>CRM MODULE</th>
                <th>WEBMERGE RESOURCE</th>
                <th>ACTIVE</th>
                <th>ACTIONS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>July</td>
                <td>Cases</td>
                <td>H1B</td>
                <td>july@example.com</td>
                <td>july@example.com</td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Mapping;