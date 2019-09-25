import React, {Component} from 'react'
import {
  Row,
  Col
} from 'reactstrap';

class TestInstruction extends Component {
  onRefresh = this.onRefresh.bind(this);

  componentDidMount(){
    const { history } = this.props;
    window.addEventListener("beforeunload", this.onRefresh)
  }

  onRefresh(){
    const { history } = this.props;
    console.log('----->');
    history.push('/');
  }

  render() {
    return (
      <Row>
        <Col md={{ size: 8, offset: 2 }} className='border shadow rounded p-2'>
          <div className='h4 text-center py-2 border rounded'>
            Test Instructions
          </div>
          <div className='px-4'>
            <ul>
              <li>
                This is a {} minutes test consisting 195 questions distributed in 4 sections (as listed on lett hand side) witn English as its base language.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    )
  }
}

export default TestInstruction;