import React from 'react';

import List from './List';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imageList: [], url: '', title: ''}
  }

  handleClick = () => {
    const oldList = this.state.imageList;
    const newImage = {url: this.state.url, title: this.state.title};
    this.setState({imageList: [...oldList, newImage], url: '', title: ''})
  }

  render() {
    return <div>
      <div className='ui fluid action input'>
        <input type='text' placeholder='Enter URL' onChange={e => this.setState({url: e.target.value})} value={this.state.url}/>
      </div>  
      <div className='ui fluid action input'>
        <input type='text' placeholder='Title' onChange={e => this.setState({title: e.target.value})} value={this.state.title}/>
        <div className='ui button' onClick={this.handleClick}>New Post</div>
      </div>
      <List list={this.state.imageList}/>
    </div>
    }
  }
    
    export default App;
