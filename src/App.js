import React, { Component } from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './App.css';
import Users from './Users.js';

// Contoh 1
// import Timer from './timer.js';
// import Listnum from './list.js';


// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       phoneNum : '',
//       item : []
//     }
//   }

//   simpanData = (event) => {
//     event.preventDefault()
//     this.setState({
//       item : [...this.state.item,this.state.phoneNum],
//       phoneNum : ''
//     })
//   }

//   setVal = (event) => {
//     this.setState({
//       phoneNum : event.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Timer start="0"/>
//           <form onSubmit={this.simpanData}>
//             <input value={this.state.phoneNum} onChange={this.setVal} />
//             <button>Simpan</button>
//           </form>
//           <Listnum item={this.state.item}/>
//         </header>
//       </div>
//     );
//   }
// }

// Contoh 2
// class App extends Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       items : [],
//       isLoading : true
//     }
//   }

//   // get data from api
//   componentDidMount(){
//     fetch("http://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => this.setState({ items:data, isLoading : false }) )
//   }


//   render(){

//     const { items,isLoading } = this.state

//     return (
//       <Container className="p-3">
//         <Jumbotron>
//           <h2 style={{'text-align':'center'}}>Contoh ambil data dari API</h2>
//           {isLoading ? <h5>Loading data ...</h5> : <ul>{items.map((items,index) => <li key={index}> {items.name} </li> )}</ul> }
//         </Jumbotron>
//       </Container>
//     )

//   }
// }

// Contoh 3

function Home(){

  return (
      <div>
        <h2>Halaman Home</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu efficitur eros. Mauris lacinia mollis felis, in interdum lacus hendrerit ac. Nunc id augue tincidunt felis aliquam congue at non ex. Integer a mi justo. Fusce tempor pellentesque nisl eu ultrices. Donec eu velit quis lorem euismod egestas sit amet et libero. Nullam quis vulputate eros, ut fermentum magna. Vestibulum consectetur vitae nulla non consequat. Phasellus laoreet leo id risus pellentesque vestibulum. Maecenas iaculis tortor turpis, eget sagittis urna lobortis in. Praesent non ipsum imperdiet, elementum lectus semper, rutrum velit. Sed dignissim felis a elementum euismod.</p>
        <p>Pellentesque pharetra neque dui, ac molestie est blandit vel. Aliquam sit amet vestibulum diam, non dignissim dolor. Fusce sed orci nibh. Vivamus neque tortor, rutrum eu purus sit amet, tristique faucibus dui. Integer pellentesque malesuada pulvinar. Sed lobortis scelerisque leo et pharetra. Vestibulum placerat ligula lobortis orci egestas pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla a nunc libero. Nunc lobortis eros ac felis ullamcorper pretium.</p>
        <p>Vivamus quis eleifend nisi, eu sagittis nunc. Nam vel diam commodo, tempor justo nec, imperdiet massa. Aliquam erat volutpat. Vivamus vitae magna dignissim, semper justo eget, pharetra arcu. Sed faucibus magna sem. Curabitur eu ipsum ut eros condimentum luctus. Cras accumsan, lorem at condimentum convallis, augue lacus ultricies elit, ut sagittis sapien nulla in purus. Quisque in neque quis metus tempor posuere. Vestibulum sit amet gravida lacus, non sollicitudin velit.</p>
        <p>Ut hendrerit vel enim sed elementum. Aenean mauris metus, cursus ut sem non, volutpat laoreet nunc. Aenean maximus porta mauris, non bibendum purus feugiat a. Nunc congue lectus vel ex ornare, vitae finibus eros faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id diam lectus. Ut ornare lacus eros, vel tincidunt lorem semper in. Donec sit amet nibh lacinia, sagittis diam ut, vehicula purus. Nunc ut bibendum turpis. Praesent condimentum eget dui sed luctus. Sed porta ornare posuere.</p>
        <p>Morbi euismod orci orci, sit amet venenatis purus hendrerit vitae. Praesent justo turpis, scelerisque sed tincidunt sit amet, tincidunt non orci. Praesent vitae dolor dictum, pharetra lectus vitae, consequat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt euismod sodales. Maecenas turpis neque, sagittis quis pharetra quis, commodo at lectus. Duis in nibh gravida, sodales enim nec, rhoncus quam. Fusce iaculis odio eget pharetra auctor. Ut cursus in velit quis fringilla.</p>
        <p>Nunc facilisis, justo interdum vestibulum luctus, velit nulla ultrices nibh, in pretium magna augue a dolor. Vivamus et vehicula urna, a dapibus nulla. Mauris mattis, diam id luctus tempus, leo neque congue ipsum, eget auctor nisl nulla id augue. Pellentesque congue libero quis fermentum rutrum. Donec dapibus ullamcorper ante, sed fermentum justo efficitur vitae. Aliquam a elementum odio. Suspendisse vulputate nisi ac maximus viverra. Maecenas id imperdiet massa. Morbi nec leo aliquet, consequat massa at, ultricies magna. Aenean ultrices pulvinar lorem, et consectetur lorem porttitor non. Curabitur facilisis blandit purus non ultricies. Nunc ac elit diam. Suspendisse vel cursus enim.</p>
        <p>Nunc nisi lacus, rhoncus nec tempus non, imperdiet et metus. Cras in malesuada libero. Ut scelerisque porta nisl, eu molestie tellus tempus eu. Donec rutrum turpis a eleifend vestibulum. Morbi eu faucibus dolor. Maecenas hendrerit faucibus nulla, vel luctus lectus aliquam sed. Nullam sit amet enim et orci efficitur porta. Donec hendrerit vel velit at ultricies. Sed lacinia, arcu nec ornare sagittis, erat justo blandit massa, blandit tincidunt dui eros et massa. Praesent suscipit congue nibh, eu consectetur mi consequat in.</p>
        <p>Maecenas non est et elit bibendum lacinia. Etiam euismod facilisis tortor, ac hendrerit neque fringilla vitae. Pellentesque imperdiet odio sit amet feugiat malesuada. Donec scelerisque lacus neque, a mollis mauris tempor sed. Curabitur id nisl ut felis posuere cursus sit amet vel nisl. Integer consectetur metus id vehicula hendrerit. Pellentesque tincidunt risus nec efficitur facilisis. Donec vehicula arcu leo, sed luctus mi facilisis et. Praesent porttitor suscipit nisi non aliquam. Nullam tristique nisl semper ligula efficitur, sed faucibus orci dictum. Nulla eu faucibus velit. Etiam laoreet orci non velit bibendum, eget feugiat tortor sagittis. Aliquam erat volutpat. Etiam eu nulla nec nisl placerat dapibus at ut tortor. Sed vitae purus nec libero porta euismod.</p>
        <p>Fusce tempor vestibulum dignissim. Integer eget justo leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis neque enim, non gravida dui vehicula ut. Aenean dapibus lectus vel aliquet finibus. Sed neque leo, efficitur vel porttitor non, volutpat eu mi. Nullam cursus ante luctus malesuada dictum. Nam sed lacus porttitor, ornare nisi gravida, elementum urna. Duis fringilla augue vitae sapien facilisis, gravida tincidunt ipsum posuere. Ut volutpat tempus placerat.</p>
        <p>Mauris ultrices justo a dui vestibulum, at pharetra augue fringilla. Nunc egestas arcu elementum mi vulputate congue. Donec sollicitudin ut nulla sed egestas. Pellentesque pharetra vel est convallis rhoncus. Nam placerat leo quis lacinia mattis. Aenean consequat placerat sapien vitae semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec consectetur nisl non mi aliquam, a efficitur ligula congue. Fusce tincidunt ipsum eros, non venenatis enim ultricies viverra. Aenean malesuada, libero sed eleifend tempus, nibh nibh blandit augue, a porttitor metus neque eu arcu. Mauris pulvinar pharetra scelerisque. Vestibulum hendrerit facilisis dui, eget rhoncus dolor sagittis elementum. Nam ac sem id augue pretium viverra eget at ex. Nunc vel dui nunc.</p>
      </div>
  )
}

function DetailView({ match }){
  return (
        <div>
          <h2>Halo {match.params.name.replace('-',' ')}</h2>
          <br/>
          <center><Button variant="primary" as={Link} to="/users">Back</Button></center>
        </div>
    )
}

function NoMatch(){
  return (
      <div>
        <h2>404, Halaman tidak ditemukan</h2>
        <br/>
        <center><Button variant="primary" as={Link} to="/users">Back</Button></center>
      </div>
    )
}

class App extends Component{

  render(){
  
    return(
      <BrowserRouter>
        <header>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">React Js</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
            </Nav>
          </Navbar>
        </header>
        <Container className="p-3">
          <Jumbotron>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/users" exact component={Users}></Route> 
              <Route path="/user/:name" exact component={DetailView}></Route> 
              <Route component={NoMatch}></Route> 
            </Switch>
          </Jumbotron>
        </Container>
        <footer className="footer-copyright text-center py-3 myfooter">
          &copy; {new Date().getFullYear()} Copyright: Dhimas Herlambang <br/> Api by jsonplaceholder.typicode.com
        </footer>
      </BrowserRouter>
    )

  }
}

export default App;
