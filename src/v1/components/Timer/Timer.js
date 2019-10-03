import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';

class Timer extends Component {
  onTimerEnds = this.onTimerEnds.bind(this);
  toggleModal = this.toggleModal.bind(this);
  state = {
    modalShow: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { testId } = this.props;
    const { testId: ntestId } = nextProps;
    const { modalShow } = this.state;
    const { modalShow: nmodalShow } = nextState;
    if (modalShow !== nmodalShow) return true;
    if (testId !== ntestId) return true;
    return false
  }

  onTimerEnds() {
    // this.setState({
    //   modalShow: true
    // })
  }

  toggleModal() {
    const { modalShow } = this.state;
    this.setState({
      modalShow: !modalShow
    })
  }

  timedOutModal() {
    const { modalShow } = this.state;
    const { testId } = this.props;
    return (
      <Modal isOpen={modalShow} className={this.props.className}>
        <ModalBody className='text-center'>
          <div className='h5 p-4 text-danger'>Timer Expired!!</div>
          <Link className='btn btn-secondary my-2 border-0' to={`/tests/${testId}/result`}>Submit Test</Link>
        </ModalBody>
      </Modal>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Countdown date={Date.now() + 10000} onComplete={this.onTimerEnds} />
        {this.timedOutModal()}
      </React.Fragment>
    )
  }
}

export default Timer;