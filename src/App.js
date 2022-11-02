import './App.css';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import { useState, useEffect } from 'react';

const App = () =>{

  const [searchField, setSearchField] = useState('') // [value, setValue] here only one value can be intialised and set. 
  const [monsters, setMonsters] = useState([]);
  const [filterMonster,setFilterMoster] = useState(monsters);

  console.log(searchField);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=> setMonsters(users));

  },[]);

  useEffect(()=>{
    const NewfilterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);});

      setFilterMoster(NewfilterMonster);

      console.log("use effect filter");

  },[monsters,searchField]);

  
  const onSearchChange = (event)=> {
    const searchFieldText = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldText);
  }

  

  return(
    <div className="App">
      <h1 className="app-title">Monsters Rolodex </h1>

      <SearchBox onSearchChangeHandeler={onSearchChange} placeholder='search Monster' className='monster-search-box'/>
      <CardList monsters={filterMonster}/>
    </div>
  )
}
// class App extends Component {
 
//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField : ''
//     };
//     console.log("1- Contructor");
//   }

//   componentDidMount(){
//     console.log("3-componentDidMount");
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((users)=>
//       this.setState(
//         () => {
//           return {monsters:users}
//         },
//         () => {console.log(this.state)}
//       )
//     );
//   }

//   


//   render(){
//     console.log("2-render");

//     const {monsters , searchField} = this.state;
//     const {onSearchChange} = this; 


//     
//     console.log(filterMonster);

//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Rolodex </h1>
//       <SearchBox onSearchChangeHandeler={onSearchChange} placeholder='search Monster' className='monster-search-box'/>
//       <CardList monsters={filterMonster}/>
//       </div>
//     );
//   }
// }

export default App;
