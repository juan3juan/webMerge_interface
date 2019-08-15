import Header from '../components/Header'
import './css/authorize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Index () {
    return (
     <div>
         
         <Header content="WebMerge Settings"/>
         <div className="wrapper fadeInDown">
            <div id="formContent">
           
                <div className="fadeIn first">
                </div>

                <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="Api key" />
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="Api Secret" />
                <input type="submit" class="fadeIn fourth" value="Authorize" />
                </form>
      
                <div id="formFooter">
                <a class="underlineHover" href="#">Don't have a WebMerge account?Sign up here</a>
                </div>
            </div>
        </div>
     </div>
    )
  
}

  export default Index;