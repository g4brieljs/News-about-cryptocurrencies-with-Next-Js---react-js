const Precio = (props) => {

    const {PRICE, CHANGE24HOUR, CHANGEHOUR, CHANGEDAY, CHANGEPCT24HOUR, CHANGEPCTDAY} = props.precio.DISPLAY.BTC.USD;

    return ( 
        <div className="card text-white bg-info mb-3">
            <div className="card-header">
                Precio del Bitcoin
            </div>
            <div className="card-body">
                <h4 className="card-title">Precio actual: {PRICE}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Última Hora: </span>{CHANGEHOUR}
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Hace 24 horas: </span>{CHANGE24HOUR} | {CHANGEPCT24HOUR}%
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Cambio del día: </span>{CHANGEDAY} | {CHANGEPCTDAY}%
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Precio;