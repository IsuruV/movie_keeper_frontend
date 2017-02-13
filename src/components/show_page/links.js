import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {fetchLinks} from '../../actions/index';

class Links extends Component{
  constructor(props){
    super(props);
    this.state={easterEgg:"", modelIsOpen: false};
    this.handleKeys = this.handleKeys.bind(this);
  }
    openModel(ev){
      ev.preventDefault();
      this.setState({modelIsOpen:true});
    }
    closeModal(ev){
      ev.preventDefault();
      this.setState({modelIsOpen:false});
      this.setState({easterEgg: ""})
    }
    handleKeys(ev){
      this.setState({easterEgg: [...this.state.easterEgg, ev.key]})
      let easterEgg = this.state.easterEgg.slice();
      if (easterEgg.join("") == "open source"){
        this.setState({modelIsOpen:true})
      }
    }

    componentWillMount(){
      this.props.fetchLinks(this.props.title);
    }

    componentDidMount(){
      document.addEventListener("keydown", this.handleKeys);
    }
    componentWillUnMount(){
      document.removeEventListener("keydown",this.handleKeys);
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
    if (this.props.links){
    return(
      <Modal
        style={customStyles}
        isOpen={this.state.modelIsOpen}
          contentLabel="Modal">
          <div className="modal-show">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal.bind(this)} >&times;</button>
                <div className="w3-center"><h3>Watch Links</h3></div>
              </div>
            <div className="list-group">
              {
                this.props.links.map((link)=>
              <a href={link} className="list-group-item w3-center" target="_blank">{link}</a>

            )}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal.bind(this)}>Close</button>
            </div>
          </div>
        </Modal>
    )
  }else{
    return <div> </div>
  }
  }
}

function mapStateToProps(state){
  return {links: state.movies.links}
}

export default connect(mapStateToProps,{fetchLinks})(Links);
