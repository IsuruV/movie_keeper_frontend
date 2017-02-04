import React, {Component} from 'react';
import Modal from 'react-modal';
import ROOT_URL from '../../actions/index';

class Links extends Component{
  constructor(props){
    super(props);
    this.state={easterEgg:"", modelIsOpen: false, links: null};
    this.handleKeys = this.handleKeys.bind(this);
  }
    openModel(ev){
      ev.preventDefault();
      this.setState({modelIsOpen:true});
    }
    closeModal(ev){
      ev.preventDefault();
      this.setState({modelIsOpen:false});
    }
    handleKeys(ev){
      this.setState({easterEgg: [...this.state.easterEgg, ev.key]})
      let easterEgg = this.state.easterEgg.slice();
      if (easterEgg.join("") == "open source"){
        this.setState({modelIsOpen:true})
      }
    }

    componentDidMount(){
      document.addEventListener("keydown", this.handleKeys);
    }
    componentWillUnMount(){
      document.removeEventListener("keydown",this.handleKeys);
      this.setState({links: null})
    }

  render(){
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return(
      <Modal
        style={customStyles}
        isOpen={this.state.modelIsOpen}
          contentLabel="Modal">
          <div className="modal-show">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal.bind(this)} >&times;</button>
              </div>
            <div className="list-group">
              <a href="#" className="list-group-item w3-center">First item</a>
              <a href="#" className="list-group-item w3-center">Second item</a>
              <a href="#" className="list-group-item w3-center">Third item</a>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal.bind(this)}>Close</button>
            </div>
          </div>
        </Modal>
    )
  }
}

export default Links;
