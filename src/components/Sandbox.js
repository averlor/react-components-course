import React, { Fragment } from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

class Sandbox extends React.Component {
    
    state = {
        switchOn: true
    }

    handleSwitchOn = () => {
        this.setState({switchOn: true})
    }

    handleSwitchOf = () => {
        this.setState({switchOn: false})
    }

    render() {

        const { switchOn } = this.state;

        return (
            <Fragment>
                <h2><span>1. Text  and onClick function:</span></h2>
                <Button onClick={()=> {console.log('!!!')}} >Button Text</Button>
        
                <h2><span>2. Disabled button:</span></h2>
                <Button onClick={()=> {console.log('!!!')}} disabled>Button Disabled</Button>
        
                <h2><span>3. Actived button:</span></h2>
                <ButtonGroup>
                    <Button onClick={this.handleSwitchOn} active={switchOn}>Button No - Active</Button>
                    <Button onClick={this.handleSwitchOff} active={!switchOn}>Button Active</Button>
                </ButtonGroup>
        
                <h2><span>4. Data-attributes</span></h2>
                <ButtonGroup>
                    <Button onClick={()=> {console.log('!!!')}} data-color="blue">Data Attributes</Button>
                    <Button onClick={()=> {console.log('!!!')}} type="submit">Type</Button>
                </ButtonGroup>
        
                <h2><span>5. Link:</span></h2>
                <ButtonGroup vertical>
                    <Button onClick={()=> {console.log('!!!')}} href='#'>Link</Button>
                    <Button onClick={()=> {console.log('!!!')}} href='#' disabled>Link</Button>
                </ButtonGroup>
        
            </Fragment>
        )
    }

}

export default Sandbox