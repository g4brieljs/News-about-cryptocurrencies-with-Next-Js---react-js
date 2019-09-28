import MasterPage from '../components/MasterPage';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';

import axios from 'axios';


const Index = (props) => (
    <MasterPage>
        {/* Todo lo que este acá dentro es el {props.children} de MasterPage */}
        <div className="row">
            <div className="col-12">
                <Precio 
                    precio={props.precios}
                />
            </div>

            <div className="col-md-12">
                <h2>Noticias sobre el Bitcoin</h2>
                <Noticias
                    noticias={props.noticias}
                />
            </div>
        </div>
    </MasterPage>
)

Index.getInitialProps = async () => {
    try{
        const precio = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=f1edaeb4aa907915e6d2d70b828b1c4a12430b53e8c060cf649e6851fc90bd59')
        const noticia = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-28&sortBy=publishedAt&apiKey=6ec23f683b1e44178d29f1971708960b');
        
        return {
            precios : precio.data,
            noticias : noticia.data
        }
    }catch(e){
        console.log(e);
    }
};

export default Index;