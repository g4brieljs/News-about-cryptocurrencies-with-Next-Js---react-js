

const Noticia = (props) => {
    const bitcoin = "http://dianecapri.com/wp-content/uploads/2015/03/Bitcoin.jpg";
    const{urlToImage, url, title, description, source} = props.noticia;

    let imagen;
    if(urlToImage !== ''){
        imagen = <img src={urlToImage} alt={title} className="card-img-top" />
    }else{
        imagen = <img src={bitcoin} alt="default image" className="card-img-top" />
    }

    return ( 
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-primary d-block">Leer noticia</a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;