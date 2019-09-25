import MasterPage from '../components/MasterPage';
import axios from 'axios';


const Index = (props) => (
    <MasterPage>
        {/* Todo lo que este acá dentro es el {props.children} de MasterPage */}
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                {console.log(props)}
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre el Bitcoin</h2>
            </div>

            <div className="col-md-4">
                <h2>Proximos eventos del Bitcoin</h2>
            </div>
        </div>
    </MasterPage>
)

Index.getInitialProps = async () => {
    const precio = await axios.get('https://api.coinmarketcap.com/v2/ticker/1/')
    return precio.data
};

export default Index;