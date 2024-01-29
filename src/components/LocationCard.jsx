import './styles/LocationCard.css'
const LocationCard = ({location}) => {
  return (
    <article className=" location__article">
        <h2 className="location__title">{location?.name}</h2>
        <ul className="location__ul">
            <li className="location__ul__li"><span className="location__type">Type:</span><span className="location__value">{location?.type}</span></li>
            <li className="location__ul__li"><span className="location__dimension">Dimension:</span><span className="location__value">{location?.dimension}</span></li>
            <li className="location__ul__li"><span className="location__population">Population:</span><span className="location__value">{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationCard