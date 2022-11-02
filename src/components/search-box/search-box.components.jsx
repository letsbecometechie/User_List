import './search-box.style.css';

const SearchBox = ({className, placeholder, onSearchChangeHandeler}) => {
        return(
            <div>
            <input 
                className={`search-box ${className}`}
                type='search' 
                placeholder={placeholder} 
                onChange={onSearchChangeHandeler}
            />
            </div>)
}

export default SearchBox; 